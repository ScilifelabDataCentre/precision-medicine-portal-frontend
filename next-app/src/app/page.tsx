"use client";

import { ReactElement } from "react";
import { TrackPageViewIfEnabled } from "../util/cookiesHandling";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Image paths
const dataSourcesImg = "/HomePageImages/dataSourcesIndexImage.png";
const kiarvaImg = "/HomePageImages/kiarvaIndexImage.png";
const ragnarImg = "/HomePageImages/ragnarIndexImage.png";

export default function HomePage(): ReactElement {
  TrackPageViewIfEnabled();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full space-y-16 pb-12">
        {/* Main Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {/* Data Sources Card */}
          <Link href="accessclinicaldata" className="block">
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-[32rem]">
                  <Image
                    src={dataSourcesImg}
                    alt="Data Sources"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                      <CardTitle className="text-white mb-2 text-3xl">
                        Data for PM research
                      </CardTitle>
                      <div className="flex flex-col space-y-3 h-36">
                        <Button asChild variant="secondary">
                          <Link href="registries">Quality registries</Link>
                        </Button>
                        <Button asChild variant="secondary">
                          <Link href="swedishresearchprojects">
                            Swedish research projects
                          </Link>
                        </Button>
                        <Button asChild variant="secondary">
                          <Link href="datasources">Other data sources</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* KIARVA Card */}
          <Link href="kiarva" className="block">
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-[32rem]">
                  <Image
                    src={kiarvaImg}
                    alt="KIARVA"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                      <CardTitle className="text-white mb-2 text-3xl">
                        KIARVA
                      </CardTitle>
                      <p className="text-white text-sm h-36">
                        We are excited to introduce the light version of our new
                        research tool, designed to provide an early glimpse into
                        the DSN&apos;s first dashboard. The Karolinska
                        Institutet Adaptive Immune Receptor Gene Variant Atlas
                        (KIARVA) hosts germline-encoded IG heavy chain (IGH)
                        alleles identified in 2485 individuals from the 1000
                        Genomes Project (1KGP) collection, in total 479 IGHV, 10
                        IGHJ and 40 IGHD alleles.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* RAGnar Card */}
          <Link href="ragnar" className="block">
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-[32rem]">
                  <Image
                    src={ragnarImg}
                    alt="RAGnar"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                      <CardTitle className="text-white mb-2 text-3xl">
                        RAGnar{" "}
                        <span className="px-2 py-0.5 text-sm text-black rounded-full bg-accent">
                          Beta coming soon
                        </span>
                      </CardTitle>
                      <p className="text-white text-sm h-36">
                        A retrieval-augmented generation (RAG) AI tool for
                        precision medicine, initially drawing on PubMed papers
                        to answer questions with referenced sources.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
