"use client";

import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Image paths
const dataSourcesImg = "/HomePageImages/dataSourcesIndexImage.png";
const kiarvaImg = "/HomePageImages/kiarvaIndexImage.png";

export default function HomePage(): ReactElement {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full space-y-16 pb-12">
        {/* Main Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
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
                      Data sources
                    </CardTitle>
                    <div className="flex flex-col space-y-3 h-36">
                      <Button asChild variant="secondary">
                        <Link href="/data-sources/quality-registries">
                          Quality registries
                        </Link>
                      </Button>
                      <Button asChild variant="secondary">
                        <Link href="/data-sources/swedish-research-projects">
                          Swedish research projects
                        </Link>
                      </Button>
                      <Button asChild variant="secondary">
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
          <Link href="kiarva" className="block group">
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
                        KIARVA <Badge variant="accent">Demo</Badge>
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
        </div>
      </div>
    </div>
  );
}
