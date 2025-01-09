"use client";

import { ILink } from "@/interfaces/types";
import { LINK_CLASSES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import clsx from "clsx";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const links: { [id: string]: ILink } = {
    l3: {
      text: "Access clinical data",
      classes: LINK_CLASSES,
      link: "/accessclinicaldata",
    },
    l4: {
      text: "KIARVA dashboard",
      classes: LINK_CLASSES,
      link: "/kiarva",
    },
    l5: { text: "Contact", classes: LINK_CLASSES, link: "/contact" },
    l6: { text: "About us", classes: LINK_CLASSES, link: "/about/product" },
  };

  const dropdownLinks = [
    { text: "Quality registries", link: "/registries" },
    { text: "Swedish research projects", link: "/swedishresearchprojects" },
    { text: "Other data sources", link: "/datasources" },
  ];

  return (
    <div className="bg-gradient-to-b from-secondary to-primary">
      <div className="text-white 2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 px-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img
                className="h-auto w-[600px]"
                src={"/SciLifeLab logo/Precisionmedicineportal_logo_white.png"}
                alt="SciLifeLab Logo"
              />
            </Link>
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:block mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 text-lg">
              <li className="relative">
                <button
                  className="flex items-center text-white focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Data sources
                  <svg
                    className="ml-1 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white text-black py-1 rounded-lg shadow-lg z-10">
                    {dropdownLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          className="block px-3 py-1 text-sm hover:bg-gray-200 rounded"
                          href={link.link}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {Object.keys(links).map((key) => (
                <li key={key}>
                  <Link
                    className={clsx(
                      links[key].classes,
                      "block",
                      pathname === links[key].link && "underline"
                    )}
                    href={links[key].link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {links[key].text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
