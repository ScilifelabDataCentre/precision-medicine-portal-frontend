"use client";

import { ReactElement } from "react";
import Link from "next/link";

import Title from "@/components/common/title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MailX } from "lucide-react";

export default function ContactPage(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-y-4">
        <Title level={1}>Contact</Title>
        <p>
          We welcome questions and suggestions regarding the Precision Medicine
          Portal and Data Science Node in Precision Medicine and Diagnostics.
          Moreover, if you have inquiries about data management or data sharing,{" "}
          <Link
            href="/about/team"
            className="text-primary hover:text-black underline"
          >
            our team
          </Link>{" "}
          is happy to assist — or at least direct you to the right place.
        </p>
        <Alert className="bg-muted text-muted-foreground">
          <MailX className="h-4 w-4" />
          <AlertDescription>
            For all inquiries, please email us at{" "}
            <a
              href="mailto:precisionmedicine@scilifelab.se"
              className="text-primary font-semibold underline hover:text-black"
            >
              precisionmedicine@scilifelab.se
            </a>
            . We aim to respond within a few business days.
          </AlertDescription>
        </Alert>
        <p>
          We are also committed to handling your information responsibly. Please
          refer to our{" "}
          <Link
            href="/privacy"
            className="text-primary hover:text-black underline"
          >
            privacy policy
          </Link>{" "}
          to learn how we process your personal data.
        </p>
      </div>
    </div>
  );
}
