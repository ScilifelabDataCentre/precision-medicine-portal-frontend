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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

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

interface IProjectFilters {
  participants: string[];
  contextual: string[];
}

export default function SwedishResearchProjectsPage() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<IProjectFilters>({
    participants: [],
    contextual: [],
  });
  const [searchBar, setSearchBar] = useState<string>("");

  // Get unique tags for each category
  const uniqueTags = projectData.reduce(
    (acc, project) => {
      project.tags.participants?.forEach((tag) => {
        if (!acc.participants.includes(tag)) acc.participants.push(tag);
      });
      project.tags.contextual?.forEach((tag) => {
        if (!acc.contextual.includes(tag)) acc.contextual.push(tag);
      });
      return acc;
    },
    { participants: [], contextual: [] } as IProjectFilters
  );

  // Helper function to get the minimum number from a range string
  function getMinNumberFromRange(range: string): number {
    // Remove thousand separators and convert to number
    const cleanNumber = (str: string) => {
      return parseInt(str.replace(/\./g, "").replace(/[^0-9]/g, "")) || 0;
    };

    // Handle "less than" case
    if (range.includes("<")) {
      return cleanNumber(range) - 1; // Make it appear before the actual number
    }

    // Handle "greater than" case
    if (range.includes(">")) {
      return cleanNumber(range) + 1; // Make it appear after the actual number
    }

    // Handle single numbers
    if (!range.includes("-")) {
      return cleanNumber(range);
    }

    // Handle ranges (e.g., "1.000-10.000")
    const [min] = range.split("-").map((num) => cleanNumber(num));
    return min;
  }

  // Sort participants by numerical range and contextual alphabetically
  const sortedTags = {
    participants: [...uniqueTags.participants].sort((a, b) => {
      const minA = getMinNumberFromRange(a);
      const minB = getMinNumberFromRange(b);
      return minA - minB;
    }),
    contextual: [...uniqueTags.contextual].sort((a, b) => a.localeCompare(b)),
  };

  const nrOfCheckboxes =
    sortedTags.participants.length + sortedTags.contextual.length;
  const [checkedList, setCheckedList] = useState<boolean[]>(
    new Array(nrOfCheckboxes).fill(false)
  );

  async function fetchProjectData() {
    try {
      const data = await import(
        "@/assets/Sorted_Swedish_Research_Projects.json"
      );
      setProjectData(data.Projects as Project[]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching project data:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjectData();
  }, []);

  function getCountForType(type: string, isParticipant: boolean): number {
    return projectData.filter((project) => {
      const tags = isParticipant
        ? project.tags.participants
        : project.tags.contextual;
      return tags.some((tag) => tag.toLowerCase() === type.toLowerCase());
    }).length;
  }

  function checkedFilter(
    filterType: keyof IProjectFilters,
    filterName: string,
    boxIndex: number
  ) {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(filterName)) {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== filterName
        );
      } else {
        newFilters[filterType].push(filterName);
      }
      return newFilters;
    });

    setCheckedList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[boxIndex] = !newCheckedList[boxIndex];
      return newCheckedList;
    });
  }

  function applyParticipantFilter(project: Project) {
    return (
      selectedFilters.participants.length === 0 ||
      selectedFilters.participants.some((filter) =>
        project.tags.participants.some(
          (tag) => tag.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }

  function applyContextualFilter(project: Project) {
    return (
      selectedFilters.contextual.length === 0 ||
      selectedFilters.contextual.some((filter) =>
        project.tags.contextual.some(
          (tag) => tag.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }

  function applySearchBar(project: Project) {
    if (searchBar.length === 0) return true;
    const searchBarLower = searchBar.toLowerCase();
    const searchTags = searchBarLower.split(" ");
    return (
      project.name.toLowerCase().includes(searchBarLower) ||
      project.description.toLowerCase().includes(searchBarLower) ||
      searchTags.some((tag) =>
        [...project.tags.participants, ...project.tags.contextual].some(
          (searchTag) => searchTag.toLowerCase().includes(tag)
        )
      )
    );
  }

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
      <Title level={1} className="mb-4">
        Swedish Research Projects
      </Title>

      {/* Introductory Section */}
      <div className="text-justify mx-auto mb-4">
        <p className="mb-2">
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
      {/* Main Content with Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column - Filters */}
        <div className="space-y-8">
          <div className="w-full max-w-lg bg-muted border border-neutral rounded-lg p-4 text-sm text-muted-foreground text-left mx-auto">
            To access data, researchers may need to obtain ethical approval,
            submit data requests, and set up data management agreements.
          </div>
          {/* Search */}
          <div className="space-y-4">
            <label
              htmlFor="search"
              className="font-bold text-2xl text-foreground"
            >
              Search
            </label>
            <Input
              id="search"
              type="text"
              name="search"
              placeholder="Search by name or keyword"
              value={searchBar}
              onChange={(e) => setSearchBar(e.target.value)}
              className="bg-muted"
            />
          </div>

          {/* Participants Filters */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-foreground">Participants</h2>
            <Card>
              <CardContent className="pt-6">
                {sortedTags.participants.map((tag, index) => (
                  <div className="flex items-center space-x-3 mb-4" key={tag}>
                    <Checkbox
                      id={`participant-${index}`}
                      checked={checkedList[index]}
                      onCheckedChange={() =>
                        checkedFilter("participants", tag, index)
                      }
                    />
                    <label
                      htmlFor={`participant-${index}`}
                      className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tag} ({getCountForType(tag, true)})
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contextual Filters */}
          <div className="space-y-4">
            <h2 className="font-bold text-2xl text-foreground">Contextual</h2>
            <Card>
              <CardContent className="pt-6">
                {sortedTags.contextual.map((tag, index) => (
                  <div className="flex items-center space-x-3 mb-4" key={tag}>
                    <Checkbox
                      id={`contextual-${index}`}
                      checked={
                        checkedList[sortedTags.participants.length + index]
                      }
                      onCheckedChange={() =>
                        checkedFilter(
                          "contextual",
                          tag,
                          sortedTags.participants.length + index
                        )
                      }
                    />
                    <label
                      htmlFor={`contextual-${index}`}
                      className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tag} ({getCountForType(tag, false)})
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Projects */}
        <div className="lg:col-span-3 space-y-6">
          {projectData
            .filter((project) => applyParticipantFilter(project))
            .filter((project) => applyContextualFilter(project))
            .filter((project) => applySearchBar(project))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((project, index) => (
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
      </div>

      {/* Last Updated */}
      <LastUpdated date="21-05-2025" />
    </div>
  );
}
