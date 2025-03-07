"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Title from "@/components/common/title";
import { LastUpdated } from "@/components/common/last-updated";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Define the type for a single project
type Project = {
  name: string;
  link: string;
  description: string;
  SND?: string; // Optional SND field
  tags: {
    disease?: string[];
    participants: string[];
    contextual: string[];
  };
};

// Tag colours
const TAG_COLOURS: { [key: string]: string } = {
  participants: "bg-[#82AEB2] text-black",
  contextual: "bg-[#E9F2D1] text-black",
  snd: "bg-[#649ED2] text-black", // Custom SND button colour
};

export default function SwedishResearchProjectsPage() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProjectData() {
    try {
      const data = await import(
        "@/assets/Sorted_Swedish_Research_Projects.json"
      );
      setProjectData(data.Projects as Project[]); // Explicitly cast data to the correct type
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching project data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjectData();
  }, []);

  if (isLoading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/data-sources">Data sources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/data-sources/swedish-research-projects">
              Swedish research projects
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Title */}
      <Title level={1} className="mb-12">
        Swedish Research Projects
      </Title>

      {/* Introductory Section */}
      <div className="prose prose-lg text-gray-700 text-justify mx-auto mb-12">
        <p className="mb-4">
          This page highlights selected research projects tied to biobanks,
          showcasing their significant role in advancing scientific research and
          medical innovation. These projects, conducted by academic
          institutions, healthcare providers, and industry collaborators in
          Sweden, address key scientific questions, drive technological
          development, and improve healthcare outcomes.
        </p>
        <p>
          The information on this page is based on the brochure{" "}
          <a
            href="https://biobanksverige.se/wp-content/uploads/2022/11/digital-broschyr-15-svenska-forskningsprojekt-version-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            &quot;15 Swedish Research Projects&quot;
          </a>{" "}
          published by Biobank Sweden. See the brochure for a more comprehensive
          overview of the projects.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text-sm lg:text-base">
          To access data, researchers may need to obtain ethical approval,
          submit data requests, and set up data management agreements.
        </span>
      </div>

      {/* Projects */}
      <div className="space-y-6 pt-12">
        {projectData.map((project, index) => (
          <Card
            key={index}
            className="bg-muted border border-neutral rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="bg-muted p-4">
              <CardTitle className="text-lg font-medium text-primary hover:underline">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-card p-4">
              <p className="text-muted-foreground mb-4">
                {project.description || "Description not provided."}
              </p>
              <div className="flex flex-col gap-3">
                {/* SND Button */}
                {project.SND && (
                  <a
                    href={project.SND}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full text-black ${TAG_COLOURS.snd} hover:opacity-90 self-start transition-opacity duration-100`}
                  >
                    SND Metadata
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20.092"
                      className="flex-shrink-0"
                    >
                      <path d="m12 0 2.561 2.537-6.975 6.976 2.828 2.828 6.988-6.988L20 7.927 19.998 0H12z" />
                      <path d="M9 4.092v-2H0v18h18v-9h-2v7H2v-14h7z" />
                    </svg>
                  </a>
                )}
                {/* Other Tags */}
                <div className="flex flex-wrap gap-2">
                  {Object.entries(project.tags).map(
                    ([category, tags]) =>
                      category !== "disease" &&
                      tags?.map((tag, i) => (
                        <span
                          key={`${category}-${i}`}
                          className={`px-3 py-1 rounded-full text-sm ${TAG_COLOURS[category]}`}
                        >
                          {tag}
                        </span>
                      ))
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Last Updated */}
      <LastUpdated date="12-12-2024" />
    </div>
  );
}
