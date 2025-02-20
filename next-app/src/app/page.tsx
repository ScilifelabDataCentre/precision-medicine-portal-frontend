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
const ragnarImg = "/HomePageImages/kiarvaIndexImage.png";

// Colors for styling consistency
const primaryColor = "#4F5D75"; // Dark text color
const cardBackgroundColor = "#FFFFFF"; // White card background
const betaBadgeColor = "#D3E4A3"; // Light green for "Beta coming soon" badge

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
                      <p className="text-white h-36">
                        KI Adaptive Immune Receptor Gene Variant Atlas
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
                    objectFit="cover"
                    className="opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="absolute inset-x-0 bottom-0 p-6 h-full flex flex-col justify-end">
                      <CardTitle className="text-white mb-2 text-3xl">
                        RAGnar
                      </CardTitle>
                      <p className="text-white h-36">TBD </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Additional Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
          {/* How to Access Clinical Data */}
          <Link
            href="accessclinicaldata"
            className="block rounded-xl shadow-lg cursor-pointer p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <h1 className="text-lg font-bold" style={{ color: primaryColor }}>
              How to Access Clinical Data
            </h1>
            <p className="text-sm text-gray-700">
              An overview of accessing clinical data in Sweden, including
              patient and medical records, and quality registers.
            </p>
          </Link>

          {/* RAGnar Card with "Beta coming soon" Badge */}
          <div
            className="relative block rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            {/* Beta coming soon Badge */}
            <span
              className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium text-gray-900 rounded-full shadow-sm"
              style={{ backgroundColor: betaBadgeColor }}
            >
              Beta coming soon
            </span>
            <h1 className="text-lg font-bold" style={{ color: primaryColor }}>
              Introducing RAGnar
            </h1>
            <p className="text-sm text-gray-700">
              A retrieval-augmented generation (RAG) AI tool for precision
              medicine, initially drawing on PubMed papers to answer questions
              with referenced sources.
            </p>
          </div>
        </div>

        {/* News Section */}
        <div className="px-4 md:px-0">
          <h1
            className="text-xl font-bold text-center mb-4"
            style={{ color: primaryColor }}
          >
            What&apos;s new?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* News Item 1 */}
            <div
              className="block rounded-xl shadow-lg p-5 transition hover:shadow-xl"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              <p className="text-xs text-gray-500">2024-10-03</p>
              <h2
                className="text-md font-semibold mt-2"
                style={{ color: primaryColor }}
              >
                KIARVA
              </h2>
              <div className="border-t border-gray-300 my-2"></div>
              <p className="text-sm mt-1">
                An adaptive immune receptor gene variant atlas hosting IG heavy
                chain alleles from 2,485 individuals, in collaboration with
                Gunilla Karlsson Hedestam&apos;s research group at Karolinska
                Institutet.
              </p>
            </div>

            {/* News Item 2 */}
            <div
              className="block rounded-xl shadow-lg p-5 transition hover:shadow-xl"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              <p className="text-xs text-gray-500">2024-09-20</p>
              <h2
                className="text-md font-semibold mt-2"
                style={{ color: primaryColor }}
              >
                New resource!
              </h2>
              <div className="border-t border-gray-300 my-2"></div>
              <p className="text-sm mt-1">
                Explore Swedish quality registers, filterable by organisation,
                category, or keywords. These registers support continuous
                healthcare improvement and serve as key resources for
                development and research.
              </p>
            </div>

            {/* News Item 3 */}
            <div
              className="block rounded-xl shadow-lg p-5 transition hover:shadow-xl"
              style={{ backgroundColor: cardBackgroundColor }}
            >
              <p className="text-xs text-gray-500">2024-09-20</p>
              <h2
                className="text-md font-semibold mt-2"
                style={{ color: primaryColor }}
              >
                Precision Medicine Portal soft launch
              </h2>
              <div className="border-t border-gray-300 my-2"></div>
              <p className="text-sm mt-1">
                Developed by the Data Science Node in Precision Medicine and
                Diagnostics and operated by the SciLifeLab Data Centre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
