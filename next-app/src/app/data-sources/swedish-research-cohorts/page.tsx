"use client";

import { useState, useEffect, ReactElement } from "react";
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
import { Users, Dna, Activity } from "lucide-react";

type StudyType =
  | "population_cohort"
  | "disease_specific_cohort"
  | "biobank_study"
  | "cohort_infrastructure";

type DataType =
  | "genomics"
  | "clinical_data"
  | "imaging"
  | "registry_linkage"
  | "multi_omics";

type DiseaseArea = "cancer" | "cardiovascular" | "metabolic" | "neurology";

type DataSource = {
  title: string;
  link: string;
  SND?: string;
  category: string;
  study_type: StudyType;
  data_types: DataType[];
  disease_area: DiseaseArea[];
  description: string;
  tags?: string[];
};

const STUDY_TYPE_LABELS: Record<StudyType, string> = {
  population_cohort: "Population cohort",
  disease_specific_cohort: "Disease-specific cohort",
  biobank_study: "Biobank study",
  cohort_infrastructure: "Cohort infrastructure",
};

const DATA_TYPE_LABELS: Record<DataType, string> = {
  genomics: "Genomics",
  clinical_data: "Clinical data",
  imaging: "Imaging",
  registry_linkage: "Registry linkage",
  multi_omics: "Multi-omics",
};

const DISEASE_AREA_LABELS: Record<DiseaseArea, string> = {
  cancer: "Cancer",
  cardiovascular: "Cardiovascular",
  metabolic: "Metabolic",
  neurology: "Neurology",
};

const TAG_COLOURS: { [key: string]: string } = {
  snd: "bg-[#649ED2] text-black",
  tag: "bg-muted text-muted-foreground",
};

interface Filters {
  study_type: StudyType[];
  data_types: DataType[];
  disease_area: DiseaseArea[];
}

export default function SwedishResearchCohortsPage(): ReactElement {
  const [dataSources, setDataSources] = useState<DataSource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    study_type: [],
    data_types: [],
    disease_area: [],
  });
  const [searchBar, setSearchBar] = useState("");

  async function fetchData() {
    try {
      const data =
        await import("@/assets/Sorted_Swedish_Research_Projects.json");
      setDataSources(data.dataSources as DataSource[]);
    } catch (error) {
      console.error("Error fetching cohort data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function toggleStudyType(value: StudyType) {
    setFilters((prev) => ({
      ...prev,
      study_type: prev.study_type.includes(value)
        ? prev.study_type.filter((t) => t !== value)
        : [...prev.study_type, value],
    }));
  }

  function toggleDataType(value: DataType) {
    setFilters((prev) => ({
      ...prev,
      data_types: prev.data_types.includes(value)
        ? prev.data_types.filter((t) => t !== value)
        : [...prev.data_types, value],
    }));
  }

  function toggleDiseaseArea(value: DiseaseArea) {
    setFilters((prev) => ({
      ...prev,
      disease_area: prev.disease_area.includes(value)
        ? prev.disease_area.filter((d) => d !== value)
        : [...prev.disease_area, value],
    }));
  }

  function matchesFilters(item: DataSource): boolean {
    if (
      filters.study_type.length > 0 &&
      !filters.study_type.includes(item.study_type)
    )
      return false;
    if (filters.data_types.length > 0) {
      const hasMatch = filters.data_types.some((dt) =>
        item.data_types.includes(dt),
      );
      if (!hasMatch) return false;
    }
    if (filters.disease_area.length > 0) {
      const hasMatch = filters.disease_area.some((da) =>
        item.disease_area?.includes(da),
      );
      if (!hasMatch) return false;
    }
    return true;
  }

  function matchesSearch(item: DataSource): boolean {
    if (!searchBar.trim()) return true;
    const words = searchBar.toLowerCase().split(/\s+/).filter(Boolean);
    const searchable = [
      item.title,
      item.description,
      ...(item.tags ?? []),
      ...item.data_types.map((d) => DATA_TYPE_LABELS[d]),
      STUDY_TYPE_LABELS[item.study_type],
      ...(item.disease_area ?? []).map((d) => DISEASE_AREA_LABELS[d]),
    ]
      .join(" ")
      .toLowerCase();
    return words.every((word) => searchable.includes(word));
  }

  const filtered = dataSources
    .filter(matchesFilters)
    .filter(matchesSearch)
    .sort((a, b) => a.title.localeCompare(b.title));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-6">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav aria-label="Breadcrumb navigation" role="navigation">
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
                Swedish research cohorts and biobank studies
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <Title level={1} className="mb-4">
        Swedish research cohorts and biobank studies
      </Title>

      <div
        className="text-justify mx-auto mb-6"
        role="doc-abstract"
        aria-label="Page introduction and overview"
      >
        <p className="mb-2">
          This page highlights major Swedish research cohorts and biobank-based
          studies that collect biological samples and health data. These are
          typically long-term research resources used by multiple studies rather
          than single projects. In Sweden, such data are often linked with
          national quality registries and health registers, enabling large-scale
          precision medicine research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside
          className="space-y-6"
          aria-label="Search and filter options"
          role="complementary"
        >
          <div
            className="w-full max-w-lg bg-muted border border-neutral rounded-lg p-4 text-sm text-muted-foreground text-left mx-auto"
            role="note"
            aria-label="Data access information"
          >
            To access data, researchers may need to obtain ethical approval,
            submit data requests, and set up data management agreements.
          </div>

          <section aria-label="Search cohorts and biobank studies">
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
                aria-describedby="search-help"
              />
              <div id="search-help" className="sr-only">
                Search by name, description, study type, data type, or disease
                area
              </div>
            </div>
          </section>

          <section aria-label="Filters" className="space-y-6">
            {(filters.study_type.length > 0 ||
              filters.data_types.length > 0 ||
              filters.disease_area.length > 0) && (
              <button
                type="button"
                onClick={() =>
                  setFilters({
                    study_type: [],
                    data_types: [],
                    disease_area: [],
                  })
                }
                className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Clear all filters"
              >
                Clear all filters
              </button>
            )}

            <fieldset className="space-y-4">
              <legend className="font-bold text-xl text-foreground flex items-center gap-2">
                <Users className="h-5 w-5" aria-hidden="true" />
                Study type
              </legend>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <div
                    className="space-y-3"
                    role="group"
                    aria-label="Study type filters"
                  >
                    {(Object.keys(STUDY_TYPE_LABELS) as StudyType[]).map(
                      (key) => (
                        <div className="flex items-center space-x-3" key={key}>
                          <Checkbox
                            id={`study-${key}`}
                            checked={filters.study_type.includes(key)}
                            onCheckedChange={() => toggleStudyType(key)}
                            aria-label={STUDY_TYPE_LABELS[key]}
                          />
                          <label
                            htmlFor={`study-${key}`}
                            className="text-sm cursor-pointer"
                          >
                            {STUDY_TYPE_LABELS[key]}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-bold text-xl text-foreground flex items-center gap-2">
                <Dna className="h-5 w-5" aria-hidden="true" />
                Data type
              </legend>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <div
                    className="space-y-3"
                    role="group"
                    aria-label="Data type filters"
                  >
                    {(Object.keys(DATA_TYPE_LABELS) as DataType[]).map(
                      (key) => (
                        <div className="flex items-center space-x-3" key={key}>
                          <Checkbox
                            id={`data-${key}`}
                            checked={filters.data_types.includes(key)}
                            onCheckedChange={() => toggleDataType(key)}
                            aria-label={DATA_TYPE_LABELS[key]}
                          />
                          <label
                            htmlFor={`data-${key}`}
                            className="text-sm cursor-pointer"
                          >
                            {DATA_TYPE_LABELS[key]}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-bold text-xl text-foreground flex items-center gap-2">
                <Activity className="h-5 w-5" aria-hidden="true" />
                Disease area
              </legend>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <div
                    className="space-y-3"
                    role="group"
                    aria-label="Disease area filters"
                  >
                    {(Object.keys(DISEASE_AREA_LABELS) as DiseaseArea[]).map(
                      (key) => (
                        <div className="flex items-center space-x-3" key={key}>
                          <Checkbox
                            id={`disease-${key}`}
                            checked={filters.disease_area.includes(key)}
                            onCheckedChange={() => toggleDiseaseArea(key)}
                            aria-label={DISEASE_AREA_LABELS[key]}
                          />
                          <label
                            htmlFor={`disease-${key}`}
                            className="text-sm cursor-pointer"
                          >
                            {DISEASE_AREA_LABELS[key]}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </fieldset>
          </section>
        </aside>

        <section
          className="lg:col-span-3 space-y-6"
          aria-label="Cohorts and biobank studies results"
          role="region"
        >
          <div
            className="space-y-6"
            role="list"
            aria-label={`${filtered.length} resources found`}
          >
            {filtered.map((item) => (
              <article key={item.title} role="listitem">
                <Card className="bg-muted border border-neutral rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="bg-muted p-4">
                    <CardTitle className="text-lg font-medium text-primary hover:underline">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        aria-label={`Visit ${item.title} (opens in new tab)`}
                      >
                        {item.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-card p-4">
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      {item.SND && (
                        <a
                          href={item.SND}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full text-black ${TAG_COLOURS.snd} hover:opacity-90 self-start transition-opacity duration-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                          aria-label={`View SND metadata for ${item.title} (opens in new tab)`}
                        >
                          SND Metadata
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20.092"
                            className="flex-shrink-0"
                            aria-hidden="true"
                            role="presentation"
                          >
                            <path d="m12 0 2.561 2.537-6.975 6.976 2.828 2.828 6.988-6.988L20 7.927 19.998 0H12z" />
                            <path d="M9 4.092v-2H0v18h18v-9h-2v7H2v-14h7z" />
                          </svg>
                        </a>
                      )}
                      <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-label="Resource type and data types"
                      >
                        <span
                          className={`px-3 py-1 rounded-full text-sm shrink-0 ${TAG_COLOURS.tag}`}
                          role="listitem"
                        >
                          {STUDY_TYPE_LABELS[item.study_type]}
                        </span>
                        {item.data_types.map((dt) => (
                          <span
                            key={dt}
                            className={`px-3 py-1 rounded-full text-sm shrink-0 ${TAG_COLOURS.tag}`}
                            role="listitem"
                          >
                            {DATA_TYPE_LABELS[dt]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No matching cohorts or studies found. Try adjusting your search
                or filters.
              </p>
            )}
          </div>
        </section>
      </div>

      <div
        className="mt-8 p-4 bg-muted/50 border border-neutral rounded-lg text-sm text-muted-foreground"
        role="complementary"
        aria-label="Context on Swedish data linkage"
      >
        <p className="mb-2">
          In Sweden, cohort and biobank data are often linked with clinical
          registries and national health registers, creating rich datasets for
          precision medicine research. Researchers can apply for access through
          the responsible institutions or national catalogues.
        </p>
        <p>
          For a broader catalogue of Swedish research data, see the{" "}
          <a
            href="https://snd.se/en/catalogue/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Swedish National Data Service catalogue search (opens in new tab)"
          >
            Swedish National Data Service (SND) search
          </a>
          .
        </p>
      </div>

      <LastUpdated date="20-08-2025" />
    </div>
  );
}
