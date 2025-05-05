"use client";

import { ReactElement } from "react";
import Link from "next/link";

import ContactFormComponent from "@/components/ContactFormComponent";

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
        <Alert className="bg-muted text-muted-foreground">
          <MailX className="h-4 w-4" />
          <AlertDescription>
            The contact page is currently under reconstruction, and the contact
            form below has been disabled. In the meantime, please reach out to
            the Data Science Node in Precision Medicine and Diagnostics at{" "}
            <a
              href="mailto:precisionmedicine@scilifelab.se"
              className="text-primary hover:text-black underline"
            >
              precisionmedicine@scilifelab.se
            </a>
            .
          </AlertDescription>
        </Alert>
        <Title level={1}>Contact</Title>
        <p>
          Please fill out this form if you need to contact us at the Swedish
          Precision Medicine Portal. Provide your contact information and we
          should get back to you within a weeks time. For information about how
          we handle your personal data, please see our{" "}
          <Link
            href="/privacy"
            className="text-primary hover:text-black underline"
          >
            privacy policy
          </Link>
          .
        </p>
        <ContactFormComponent />
      </div>
    </div>
  );
}
