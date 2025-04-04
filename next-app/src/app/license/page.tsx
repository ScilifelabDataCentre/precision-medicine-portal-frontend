"use client";

import { ReactElement } from "react";

import { LastUpdated } from "@/components/common/last-updated";

import Title from "@/components/common/title";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AboutPage(): ReactElement {
  

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/license">License</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-y-4">
        <Title level={1}>License</Title>
        <Title level={2} className="mt-4">
          Website content
        </Title>

        <p>
          Unless specified otherwise, the content (text and images) of this
          website is licensed{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            Creative Commons Attribution 4.0 International License
          </a>
          . This is a human-readable summary of (and not a substitute for){" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/legalcode"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            the license
          </a>
          .
        </p>

        <Title level={3}>You are free to:</Title>
        <ul className="list-disc pl-4">
          <li>
            <strong>Share</strong> — copy and redistribute the material in any
            medium or format
          </li>
          <li>
            <strong>Adapt</strong> — remix, transform, and build upon the
            material for any purpose, even commercially.
          </li>
        </ul>
        <p>
          The licensor cannot revoke these freedoms as long as you follow the
          license terms.
        </p>

        <Title level={3}>Under the following terms:</Title>
        <ul className="list-disc pl-4">
          <li>
            <strong>Attribution</strong> — You must give appropriate credit,
            provide a link to the license, and indicate if changes were made.
            You may do so in any reasonable manner, but not in any way that
            suggests the licensor endorses you or your use.
          </li>
          <li>
            <strong>No additional restrictions</strong> — You may not apply
            legal terms or technological measures that legally restrict others
            from doing anything the license permits.
          </li>
        </ul>

        <Title level={3}>Notices:</Title>
        <p>
          You do not have to comply with the license for elements of the
          material in the public domain or where your use is permitted by an
          applicable exception or limitation.
        </p>
        <p>
          No warranties are given. The license may not give you all of the
          permissions necessary for your intended use. For example, other rights
          such as publicity, privacy, or moral rights may limit how you use the
          material.
        </p>

        <Title level={2} className="mt-4">
          Software
        </Title>
        <p>
          Except where otherwise noted, any software in this repository are made
          available under the{" "}
          <a
            href="https://opensource.org/"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            OSI
          </a>
          -approved{" "}
          <a
            href="https://opensource.org/licenses/mit-license.html"
            target="_blank"
            className="text-primary hover:text-black underline"
          >
            MIT license
          </a>
          .
        </p>

        <Title level={3}>For the rest of the code</Title>
        <p>Copyright (c) 2025 SciLifeLab Data Centre</p>

        <Title level={3}>The MIT License (MIT)</Title>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          &quot;Software&quot;), to deal in the Software without restriction,
          including without limitation the rights to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the Software,
          and to permit persons to whom the Software is furnished to do so,
          subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY
          KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>

        <LastUpdated date="30-01-2025" />
      </div>
    </div>
  );
}
