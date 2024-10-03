"use client";

import { ReactElement } from "react";
import { BODY_CLASSES } from "@/constants";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import { ILink } from "@/interfaces/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

let RAGnarLogo = "/images/RAGnar.svg";

export default function RAGPage(): ReactElement {
  TrackPageViewIfEnabled();

  var breadcrumbs: { [id: string]: ILink } = {
    l1: { text: "Home", classes: "", link: "/" },
    l2: { text: "RAGnar", classes: "", link: "" },
  };

  return (
    <div>
      <div className={BODY_CLASSES}>
        <div className="text-sm breadcrumbs">
          <ul>
            {Object.keys(breadcrumbs).map((key) => (
              <li>
                {breadcrumbs[key].link ? (
                  <Link href={breadcrumbs[key].link}>
                    {breadcrumbs[key].text}
                  </Link>
                ) : (
                  <>{breadcrumbs[key].text}</>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          <header className="text-center space-y-4">
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=640"
                alt="RAGnar Logo and Name"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xl">
              Get answers to your precision medicine questions with our
              AI-powered search engine.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input placeholder="Ask a question" className="w-full" />
            </div>
            <Button className="w-full md:w-auto">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col space-y-4">
            <Card>
              <CardContent className="p-6 text-sm">
                <p>
                  Question: This is a placeholder for a question. Real questions
                  would include a full question incl. question mark.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-sm">
                <p>
                  Question: This is a placeholder for a question. Real questions
                  would include a full question incl. question mark.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-sm">
                <p>
                  Question: This is a placeholder for a question. Real questions
                  would include a full question incl. question mark.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-sm">
                <p>
                  Question: This is a placeholder for a question. Real questions
                  would include a full question incl. question mark.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
