"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Title from "./common/title";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AboutPage(): ReactElement {
  const currentRoute = usePathname();

  const paths = {
    Product: "/about/product",
    FAQ: "/about/faq",
    Team: "/about/team",
    Partners: "/about/partners",
  };

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About us</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Title level={1}>About us</Title>
      <div role="tablist" className="tabs tabs-lifted py-4">
        {Object.keys(paths).map((key) => (
          <Link
            key={key}
            href={paths[key as keyof typeof paths]}
            role="tab"
            className={`tab ${
              currentRoute == paths[key as keyof typeof paths]
                ? "tab-active text-white !bg-info"
                : "bg-white shadow"
            }`}
          >
            {key}
          </Link>
        ))}
      </div>
    </div>
  );
}
