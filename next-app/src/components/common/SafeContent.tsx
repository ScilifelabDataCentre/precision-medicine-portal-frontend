import React, { ReactNode } from "react";
import {
  sanitizeText,
  sanitizeURL,
  createSafeImageSrc,
  sanitizeHTML,
  SecurityConfig,
  DEFAULT_SECURITY_CONFIG,
} from "@/lib/security-utils";

interface SafeContentProps {
  children?: ReactNode;
  className?: string;
  config?: SecurityConfig;
}

interface SafeTextProps extends SafeContentProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
}

interface SafeUrlProps extends SafeContentProps {
  url: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

interface SafeImageProps extends SafeContentProps {
  src: string;
  alt: string;
  basePath?: string;
  fallbackImage?: string;
  width?: number;
  height?: number;
}

interface SafeHTMLProps extends SafeContentProps {
  html: string;
  allowedTags?: string[];
  allowedAttr?: string[];
}

/**
 * SafeText component for rendering sanitized text content
 */
export function SafeText({
  text,
  as: Component = "span",
  config = DEFAULT_SECURITY_CONFIG,
  className,
  ...props
}: SafeTextProps) {
  const sanitizedText = sanitizeText(text, config);

  return (
    <Component className={className} {...props}>
      {sanitizedText}
    </Component>
  );
}

/**
 * SafeUrl component for rendering sanitized links
 */
export function SafeUrl({
  url,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  config = DEFAULT_SECURITY_CONFIG,
  className,
  ...props
}: SafeUrlProps) {
  const sanitizedUrl = sanitizeURL(url, config);

  return (
    <a
      href={sanitizedUrl}
      target={target}
      rel={rel}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * SafeImage component for rendering sanitized images
 */
export function SafeImage({
  src,
  alt,
  basePath = "/img/datasources/",
  fallbackImage = "/img/datasources/na-sign-icon.png",
  config = DEFAULT_SECURITY_CONFIG,
  className,
  width,
  height,
  ...props
}: SafeImageProps) {
  const safeSrc = createSafeImageSrc(src, basePath, fallbackImage, config);
  const sanitizedAlt = sanitizeText(alt, config);

  return (
    <img
      src={safeSrc}
      alt={sanitizedAlt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}

/**
 * SafeHTML component for rendering sanitized HTML content
 */
export function SafeHTML({
  html,
  allowedTags = [],
  allowedAttr = [],
  className,
  ...props
}: SafeHTMLProps) {
  const sanitizedHTML = sanitizeHTML(html, allowedTags, allowedAttr);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      {...props}
    />
  );
}

/**
 * SafeContent wrapper component that provides context for security configuration
 */
export function SafeContent({
  children,
  className,
  ...props
}: SafeContentProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

// Export all components as a namespace
export const Safe = {
  Text: SafeText,
  Url: SafeUrl,
  Image: SafeImage,
  HTML: SafeHTML,
  Content: SafeContent,
};
