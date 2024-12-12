"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Title from "@/components/common/title";
import { LastUpdated } from "@/components/common/last-updated";
import Link from "next/link";

// Define the type for a single project
type Project = {
  name: string;
  link: string;
  description: string;
  tags: {
    disease?: string[];
    participants: string[];
    contextual: string[];
  };
};

// Define breadcrumb type
type Breadcrumb = {
  text: string;
  link?: string;
};

// Breadcrumb data
const breadcrumbs: Breadcrumb[] = [
  { text: "Home", link: "/" },
  { text: "Research Projects" }, // Current page has no link
];

// Tag colours
const TAG_COLOURS: { [key: string]: string } = {
  participants: "bg-[#82AEB2] text-black",
  contextual: "bg-[#E9F2D1] text-black",
};

export default function ProjectsPage() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProjectData() {
    try {
      const data = await import("@/assets/Sorted_Swedish_Research_Projects.json");
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
      {/* Breadcrumbs */}
      <nav className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              {breadcrumb.link ? (
                <Link href={breadcrumb.link} className="text-primary hover:underline">
                  {breadcrumb.text}
                </Link>
              ) : (
                <span>{breadcrumb.text}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Title */}
      <Title level={1} className="mb-12">
        Swedish Research Projects
      </Title>

      {/* Introductory Section */}
      <div className="prose prose-lg text-gray-700 text-justify mx-auto mb-12">
        <p className="mb-4">
          This page highlights 15 selected research projects tied to biobanks, showcasing their significant role in advancing scientific research and medical innovation. These projects, conducted by academic institutions, healthcare providers, and industry collaborators in Sweden, address key scientific questions, drive technological development, and improve healthcare outcomes. By integrating biological material with comprehensive health data, Swedish biobanks provide a unique platform for longitudinal studies, translational research, and precision medicine. These projects demonstrate how biobank resources bridge the gap between fundamental science and clinical applications.
        </p>
        <p>
          The information on this page is based on the brochure{" "}
          <a
            href="https://biobanksverige.se/wp-content/uploads/2022/11/digital-broschyr-15-svenska-forskningsprojekt-version-10.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            "15 Swedish Research Projects"
          </a>{" "}
          published by Biobank Sweden. See the brochure for a more comprehensive overview of the projects.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="w-full max-w-prose bg-muted border border-neutral rounded-lg p-4 text-sm text-muted-foreground text-center mx-auto mb-12">
        <p>
          To access data, researchers may need to obtain ethical approval, submit
          data requests, and set up data management agreements.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-6">
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
              <div className="flex flex-wrap gap-2">
                {Object.entries(project.tags).map(([category, tags]) =>
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Last Updated */}
      <LastUpdated date="12-12-2024" />
    </div>
  );
}
