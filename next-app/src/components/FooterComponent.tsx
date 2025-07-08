"use client";

import type { ReactElement } from "react";
import type { ILink } from "@/interfaces/types";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

// URL validation function to prevent DOM XSS
// This ensures only valid HTTP/HTTPS URLs are accepted
const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    // Only allow https and http protocols to prevent javascript: and other dangerous protocols
    return urlObj.protocol === "https:" || urlObj.protocol === "http:";
  } catch {
    return false;
  }
};

// Safe URL construction function
const createSafeUrl = (baseUrl: string, path?: string | null): string => {
  if (!path) return baseUrl;

  // If path already contains protocol, validate it
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return isValidUrl(path) ? path : baseUrl;
  }

  // Otherwise, construct URL safely
  const fullUrl = `https://${path}`;
  return isValidUrl(fullUrl) ? fullUrl : baseUrl;
};

export default function Footer(): ReactElement {
  const linksCol1: { [id: string]: ILink } = {
    l1: {
      text: "Access clinical data",
      link: "/data-sources",
    },
    l2: {
      text: "Quality registries",
      link: "/data-sources/quality-registries",
    },
    l3: {
      text: "Swedish research projects",
      link: "/data-sources/swedish-research-projects",
    },
    l4: {
      text: "Other data sources",
      link: "/data-sources/others",
    },
  };

  const linksCol2: { [id: string]: ILink } = {
    l5: { text: "KIARVA", link: "/kiarva" },
  };

  const linksCol3: { [id: string]: ILink } = {
    l6: {
      text: "DSN-PMD projects",
      link: "/about/dsnpmd-projects",
    },
    l7: { text: "Team", link: "/about/team" },
    l8: {
      text: "FAQ",
      link: "/about/faq",
    },
    l9: { text: "Partners", link: "/about/partners" },
  };

  const linksCol4: { [id: string]: ILink } = {
    l10: { text: "Contact", link: "/contact" },
    l11: { text: "Privacy policy", link: "/privacy" },
    l12: {
      text: "Citation and license",
      link: "/citation-and-license",
    },
  };

  // get frontend and backend image versions; uncomment backend when backend is ready
  const [frontendImage, setFrontendImage] = useState<string | null>(null);
  // const [backendImage, setBackendImage] = useState<string | null>(null);

  // uncomment backend when backend is ready
  useEffect(() => {
    fetch("/meta/version")
      .then((res) => res.json())
      .then((data) => {
        setFrontendImage(data.frontendImage);
        // setBackendImage(data.backendImage);
      });
  }, []);

  const frontendImageHref = createSafeUrl("https://", frontendImage);

  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-7 gap-8">
          {/* First column - Partner logos */}
          <div className="flex gap-6 items-center col-span-1 lg:col-span-2">
            <div className="w-20 lg:w-auto">
              <Image
                src="/Partner logo/KI_digital_logotyp_negativ_vert.png"
                alt="Karolinska Institutet logo"
                width={110}
                height={131}
              />
            </div>
            <div className="w-16 lg:w-auto">
              <Image
                src="/Partner logo/SciLifeLab_symbol_NEG.png"
                alt="SciLifeLab Logo"
                width={70}
                height={66}
              />
            </div>
            <div className="w-20 lg:w-auto">
              <Image
                src="/Partner logo/KAW Logotype Medium 1.png"
                alt="Knut and Alice Wallenberg Foundation logo"
                width={151}
                height={87}
              />
            </div>
          </div>

          {/* Second column - Social */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/scilifelab_dc"
                className="hover:text-white/80 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 512 462.799"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path
                    fillRule="nonzero"
                    d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                  />
                </svg>
              </a>
              <a
                href="https://bsky.app/profile/scilifelab.se"
                className="hover:text-white/80 transition-colors"
                aria-label="Bluesky"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  width="24"
                  height="24"
                  viewBox="0 0 511.999 452.266"
                  fill="currentColor"
                >
                  <path
                    fillRule="nonzero"
                    d="M110.985 30.442c58.695 44.217 121.837 133.856 145.013 181.961 23.176-48.105 86.322-137.744 145.016-181.961 42.361-31.897 110.985-56.584 110.985 21.96 0 15.681-8.962 131.776-14.223 150.628-18.272 65.516-84.873 82.228-144.112 72.116 103.55 17.68 129.889 76.238 73 134.8-108.04 111.223-155.288-27.905-167.385-63.554-3.489-10.262-2.991-10.498-6.561 0-12.098 35.649-59.342 174.777-167.382 63.554-56.89-58.562-30.551-117.12 72.999-134.8-59.239 10.112-125.84-6.6-144.112-72.116C8.962 184.178 0 68.083 0 52.402c0-78.544 68.633-53.857 110.985-21.96z"
                  />
                </svg>
              </a>
              <a
                href="https://se.linkedin.com/company/scilifelab-data-centre"
                className="hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Third column - Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold mb-4">Data sources</h3>
            <nav className="flex flex-col space-y-4">
              {Object.keys(linksCol1).map((key) => (
                <Link
                  className="text-sm text-white/80 hover:text-white transition-colors"
                  href={linksCol1[key].link}
                  key={key}
                >
                  {linksCol1[key].text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Fourth column - Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold mb-4">Dashboards</h3>
            <nav className="flex flex-col space-y-4">
              {Object.keys(linksCol2).map((key) => (
                <Link
                  className="text-sm text-white/80 hover:text-white transition-colors"
                  href={linksCol2[key].link}
                  key={key}
                >
                  {linksCol2[key].text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Fifth column - Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold mb-4">About us</h3>
            <nav className="flex flex-col space-y-4">
              {Object.keys(linksCol3).map((key) => (
                <Link
                  className="text-sm text-white/80 hover:text-white transition-colors"
                  href={linksCol3[key].link}
                  key={key}
                >
                  {linksCol3[key].text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sixth column - Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold mb-4">More</h3>
            <nav className="flex flex-col space-y-4">
              {Object.keys(linksCol4).map((key) => (
                <Link
                  className="text-sm text-white/80 hover:text-white transition-colors"
                  href={linksCol4[key].link}
                  key={key}
                >
                  {linksCol4[key].text}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* GitHub links */}
        <div className="text-sm text-white/70 md:text-left">
          <p className="leading-loose">
            Built by the Data Science Node in Precision Medicine and
            Diagnostics. The source code is available on{" "}
            <a
              href="https://github.com/ScilifelabDataCentre/precision-medicine-portal-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              Github{" "}
            </a>
            (Version v
            {frontendImageHref !== "https://" ? (
              <a
                href={frontendImageHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/80 hover:text-white underline underline-offset-4 transition-colors"
              >
                {frontendImage?.split(":")[1] || "n/a"}
              </a>
            ) : (
              <span className="font-medium text-white/80">
                {frontendImage?.split(":")[1] || "n/a"}
              </span>
            )}
            {/*{" "}
            and backend version v
            <a
              href={createSafeUrl("https://", backendImage)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              {backendImage?.split(":")[1] || "n/a"}
            </a>*/}
            ).
          </p>
        </div>
      </div>
    </div>
  );
}
