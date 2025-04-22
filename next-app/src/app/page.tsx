"use client";

import { ReactElement } from "react";
import { TrackPageViewIfEnabled } from "../util/cookiesHandling";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Image paths
const dataSourcesImg = "/HomePageImages/dataSourcesIndexImage.png";
const kiarvaImg = "/HomePageImages/kiarvaIndexImage.png";
const ragnarImg = "/HomePageImages/ragnarIndexImage.png";

export default function HomePage(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full space-y-16 pb-12">
        {/* Main Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {/* Data Sources Card */}
          <Card className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-[32rem]">
                <Image
                  src={dataSourcesImg}
                  alt="Data Sources"
                  fill
                  className="object-cover opacity-65 transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                    <CardTitle className="text-white mb-2 text-2xl group-hover:text-3xl transition-all duration-300">
                      Data for PM research
                    </CardTitle>
                    <div className="flex flex-col space-y-3 h-36">
                      <Button
                        asChild
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link href="/data-sources/quality-registries">
                          Quality registries
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link href="/data-sources/swedish-research-projects">
                          Swedish research projects
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Link href="/data-sources/others">
                          Other data sources
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* KIARVA Card */}
          <Link
            href="kiarva"
            className="block group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-[32rem]">
                  <Image
                    src={kiarvaImg}
                    alt="KIARVA"
                    fill
                    className="object-cover opacity-65 transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                      <CardTitle className="text-white mb-2 text-2xl group-hover:text-3xl transition-all duration-300">
                        KIARVA
                      </CardTitle>
                      <p className="text-white h-36">
                        The Karolinska Institutet Adaptive Immune Receptor Gene
                        Variant Atlas (KIARVA) hosts germline-encoded IG heavy
                        chain (IGH) alleles identified in 2485 individuals, in
                        total 479 IGHV, 10 IGHJ and 40 IGHD alleles.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* RAGnar Card */}
          <div className="block group">
            <Card className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-[32rem]">
                  <Image
                    src={ragnarImg}
                    alt="RAGnar"
                    fill
                    className="object-contain object-top opacity-65 transition-opacity duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                      <CardTitle className="text-white mb-2 text-2xl group-hover:text-3xl transition-all duration-300">
                        RAGnar{" "}
                        <span className="px-2 py-0.5 text-sm text-black rounded-full bg-accent">
                          Beta coming soon
                        </span>
                      </CardTitle>
                      <p className="text-white h-36">
                        RAGnar is a retrieval-augmented generation AI tool built
                        to answer questions in the precision medicine field.
                        Initially, it uses PubMed papers as a source of
                        knowledge and references any paper it bases its answers
                        on.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
