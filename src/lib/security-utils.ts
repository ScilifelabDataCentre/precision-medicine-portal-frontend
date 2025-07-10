import createDOMPurify from "isomorphic-dompurify";
import validator from "validator";

export interface SecurityConfig {
  maxTextLength?: number;
  maxFilenameLength?: number;
  allowedProtocols?: string[];
  allowedFilenameChars?: RegExp;
}

export const DEFAULT_SECURITY_CONFIG: SecurityConfig = {
  maxTextLength: 1000,
  maxFilenameLength: 50,
  allowedProtocols: ["http", "https"],
  allowedFilenameChars: /[^a-zA-Z0-9_-]/g,
};

// Lazy, SSR-safe DOMPurify getter
function getDOMPurify() {
  if (typeof window !== "undefined") {
    // Client-side
    return createDOMPurify(window);
  } else {
    // Server-side (JSDOM fallback)
    return createDOMPurify(undefined);
  }
}

/**
 * Sanitizes URLs to prevent DOMXSS and protocol-based attacks
 */
export function sanitizeURL(
  url: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): string {
  if (!url || typeof url !== "string" || url.trim().length === 0) {
    return "#";
  }
  if (
    !validator.isURL(url, {
      protocols: config.allowedProtocols,
      require_protocol: true,
      allow_underscores: true,
    })
  ) {
    return "#";
  }
  try {
    const urlObj = new URL(url);
    if (urlObj.protocol !== "https:" && urlObj.protocol !== "http:") {
      return "#";
    }
  } catch {
    return "#";
  }
  return getDOMPurify().sanitize(url, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

/**
 * Creates safe image source paths to prevent directory traversal attacks
 */
export function createSafeImageSrc(
  thumbnail: string,
  basePath: string = "/img/datasources/",
  fallbackImage: string = "/img/datasources/na-sign-icon.png",
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): string {
  if (
    !thumbnail ||
    typeof thumbnail !== "string" ||
    thumbnail.trim().length === 0
  ) {
    return fallbackImage;
  }
  const filename = thumbnail.split("/").pop()?.split(".")[0] || "na-sign-icon";
  const sanitizedFilename = filename.replace(
    config.allowedFilenameChars ||
      DEFAULT_SECURITY_CONFIG.allowedFilenameChars!,
    ""
  );
  if (
    !sanitizedFilename ||
    sanitizedFilename.length >
      (config.maxFilenameLength ||
        DEFAULT_SECURITY_CONFIG.maxFilenameLength!) ||
    sanitizedFilename.length < 1
  ) {
    return fallbackImage;
  }
  if (
    sanitizedFilename.includes("..") ||
    sanitizedFilename.includes("/") ||
    sanitizedFilename.includes("\\")
  ) {
    return fallbackImage;
  }
  return `${basePath}${sanitizedFilename}.png`;
}

/**
 * Sanitizes text content to prevent XSS attacks
 */
export function sanitizeText(
  text: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): string {
  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return "";
  }
  const maxLength =
    config.maxTextLength || DEFAULT_SECURITY_CONFIG.maxTextLength!;
  if (text.length > maxLength) {
    return getDOMPurify().sanitize(text.substring(0, maxLength), {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
  }
  return getDOMPurify().sanitize(text, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

/**
 * Validates and sanitizes HTML content with configurable allowed tags and attributes
 */
export function sanitizeHTML(
  html: string,
  allowedTags: string[] = [],
  allowedAttr: string[] = []
): string {
  if (!html || typeof html !== "string") {
    return "";
  }
  return getDOMPurify().sanitize(html, {
    ALLOWED_TAGS: allowedTags,
    ALLOWED_ATTR: allowedAttr,
  });
}

/**
 * Creates a safe URL by combining base URL and path with validation
 */
export function createSafeUrl(
  baseUrl: string,
  path?: string | null,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): string {
  if (!baseUrl || typeof baseUrl !== "string") {
    return "#";
  }
  if (!path) {
    return sanitizeURL(baseUrl, config);
  }
  const combinedUrl = baseUrl + path;
  return sanitizeURL(combinedUrl, config);
}

/**
 * Validates if a string is a safe URL
 */
export function isValidUrl(
  url: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): boolean {
  if (!url || typeof url !== "string") {
    return false;
  }
  try {
    const urlObj = new URL(url);
    return (
      (urlObj.protocol === "https:" || urlObj.protocol === "http:") &&
      validator.isURL(url, {
        protocols: config.allowedProtocols,
        require_protocol: true,
        allow_underscores: true,
      })
    );
  } catch {
    return false;
  }
}

/**
 * Sanitizes object properties recursively for safe rendering
 */
export function sanitizeObject(
  obj: unknown,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): unknown {
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (typeof obj === "string") {
    return sanitizeText(obj, config);
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item, config));
  }
  if (typeof obj === "object") {
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObject(value, config);
    }
    return sanitized;
  }
  return obj;
}

export function useSanitizedValue(
  value: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): string {
  return sanitizeText(value, config);
}

export function useSanitizedUrl(
  url: string,
  config: SecurityConfig = DEFAULT_SECURITY_CONFIG
): string {
  return sanitizeURL(url, config);
}
