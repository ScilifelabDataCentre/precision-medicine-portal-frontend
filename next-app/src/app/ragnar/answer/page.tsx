"use client";

import { ReactElement } from "react";
import { BODY_CLASSES } from "@/constants";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import { ILink } from "@/interfaces/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const RAGnarLogo = "/images/RAGnar.svg";

export default function RAGAnswerPage(): ReactElement {
  TrackPageViewIfEnabled();

  const breadcrumbs: { [id: string]: ILink } = {
    l1: { text: "Home", classes: "", link: "/" },
    l2: { text: "RAGnar", classes: "", link: "" },
  };

  return (
    <div>
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
        </header>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input placeholder="Ask another question" className="w-full" />
          </div>
          <Button className="w-full md:w-auto">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle className="mb-5">Question asked comes here</AlertTitle>
          <AlertDescription>Reply to be streamed in here.</AlertDescription>
        </Alert>

        <h1 className="text-xl font-semibold">Sources</h1>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Artile Title comes here
              </CardTitle>
              <CardDescription>
                Authors, Journal, Year comes here
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Artile Title comes here
              </CardTitle>
              <CardDescription>
                Authors, Journal, Year comes here
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Artile Title comes here
              </CardTitle>
              <CardDescription>
                Authors, Journal, Year comes here
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Artile Title comes here
              </CardTitle>
              <CardDescription>
                Authors, Journal, Year comes here
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
