"use client";

import { ReactElement } from "react";

import { LastUpdated } from "@/components/common/last-updated";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Title from "@/components/common/title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  sanitizeURL,
  createSafeImageSrc,
  sanitizeText,
} from "@/lib/security-utils";

interface IDataSourceFilters {
  dataTypes: string[];
  diseaseTypes: string[];
}

interface IDataSourcesDC {
  name: string;
  url: string;
  description: string;
  thumbnail: string;
  ddls: string[];
  data: string[];
  disease_type: string[];
  search_tags: string[];
}

export default function DataSourcesOthersPage(): ReactElement {
  const [dataSourcesJSON, setDataSourcesJSON] = useState<IDataSourcesDC[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<IDataSourceFilters>({
    dataTypes: [],
    diseaseTypes: [],
  });
  const [searchBar, setSearchBar] = useState<string>("");

  const filters: IDataSourceFilters = {
    dataTypes: [
      "Biobank",
      "Chemical Biology",
      "Clinical",
      "Enzymes, Pathways, Interactions",
      "Epidemiology",
      "Evolution and Phylogeny",
      "General",
      "Genes and Genomes",
      "Imaging",
      "Molecular and Cellular Structures",
      "Phenotypic",
      "Proteins and Proteomes",
    ],
    diseaseTypes: [
      "Cancer",
      "Cardiovascular Diseases",
      "Developmental Disorders",
      "Drug Development",
      "General",
      "Genetic Disorders",
      "Immunological Diseases",
      "Infectious Diseases",
      "Metabolic Disorders",
      "Neurological Disorders",
      "Psychiatric Disorders",
      "Public Health",
      "Rare Diseases",
      "Various Diseases",
    ],
  };

  const nrOfCheckboxes = filters.dataTypes.concat(filters.diseaseTypes).length;
  const [checkedList, setCheckedList] = useState<boolean[]>(
    new Array(nrOfCheckboxes).fill(false)
  );

  const dataSourcesURI: string =
    "https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/develop/data/data_sources.json";

  function getCountForType(type: string, isDataType: boolean): number {
    return dataSourcesJSON.filter((source) => {
      const tags = isDataType ? source.data : source.disease_type;
      return tags.some((tag) => tag.toLowerCase() === type.toLowerCase());
    }).length;
  }

  async function getData() {
    try {
      const response = await axios.get(dataSourcesURI);
      const tmpDataSourcesJSON = response.data
        .filter((element: IDataSourcesDC) =>
          element.ddls.includes("Precision Medicine and Diagnostics")
        )
        .filter(
          (element: IDataSourcesDC) => element.name !== "SCAPIS database"
        ); // Exclude "SCAPIS"
      setDataSourcesJSON(tmpDataSourcesJSON);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function checkedDataFilter(
    tagType: keyof IDataSourceFilters,
    tagName: string,
    boxIndex: number
  ) {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      const key = tagType === "dataTypes" ? "dataTypes" : "diseaseTypes";
      if (newFilters[key].includes(tagName)) {
        newFilters[key] = newFilters[key].filter((item) => item !== tagName);
      } else {
        newFilters[key].push(tagName);
      }
      return newFilters;
    });

    setCheckedList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[boxIndex] = !newCheckedList[boxIndex];
      return newCheckedList;
    });
  }

  function applyDataTypeFilter(dataSource: IDataSourcesDC) {
    return (
      selectedFilters.dataTypes.length === 0 ||
      selectedFilters.dataTypes.some((filter) =>
        dataSource.data.some(
          (tag) => tag.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }

  function applyDiseaseTypeFilter(dataSource: IDataSourcesDC) {
    return (
      selectedFilters.diseaseTypes.length === 0 ||
      selectedFilters.diseaseTypes.some((filter) =>
        dataSource.disease_type.some(
          (tag) => tag.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }

  function applySearchBar(dataSource: IDataSourcesDC) {
    if (searchBar.length === 0) return true;
    const searchBarLower = searchBar.toLowerCase();
    const searchTags = searchBarLower.split(" ");
    return (
      dataSource.name.toLowerCase().includes(searchBarLower) ||
      searchTags.some((tag) =>
        dataSource.search_tags.some((searchTag) =>
          searchTag.toLowerCase().includes(tag)
        )
      )
    );
  }

  useEffect(() => {
    getData();
  }, []);

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
              <BreadcrumbLink href="/data-sources/others">
                Other data sources
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <Title level={1}>Data sources</Title>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8 pt-8">
        <aside
          className="lg:col-span-1 mb-8 lg:mb-0"
          aria-label="Search and filter options"
          role="complementary"
        >
          <div className="space-y-8">
            <div
              className="w-full max-w-lg bg-muted border border-neutral rounded-lg p-4 text-sm text-muted-foreground text-left mx-auto"
              role="note"
              aria-label="Data access information"
            >
              To access data, researchers may need to obtain ethical approval,
              submit data requests, and set up data management agreements.
            </div>

            <section aria-label="Search data sources">
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
                  Search data sources by name or keyword
                </div>
              </div>
            </section>

            <section aria-label="Filter by data type">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">
                  Data Type
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <fieldset>
                      <legend className="sr-only">
                        Select data types to filter by
                      </legend>
                      {filters.dataTypes.map((element, index) => (
                        <div
                          className="flex items-center space-x-3 mb-4"
                          key={element}
                        >
                          <Checkbox
                            id={`dataType-${index}`}
                            checked={checkedList[index]}
                            onCheckedChange={() =>
                              checkedDataFilter("dataTypes", element, index)
                            }
                            aria-describedby={`dataType-${index}-count`}
                          />
                          <label
                            htmlFor={`dataType-${index}`}
                            className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {element}{" "}
                            <span id={`dataType-${index}-count`}>
                              ({getCountForType(element, true)})
                            </span>
                          </label>
                        </div>
                      ))}
                    </fieldset>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section aria-label="Filter by disease type">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl text-foreground">
                  Disease Type
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <fieldset>
                      <legend className="sr-only">
                        Select disease types to filter by
                      </legend>
                      {filters.diseaseTypes.map((element, index) => (
                        <div
                          className="flex items-center space-x-3 mb-4"
                          key={element}
                        >
                          <Checkbox
                            id={`diseaseType-${index}`}
                            checked={
                              checkedList[filters.dataTypes.length + index]
                            }
                            onCheckedChange={() =>
                              checkedDataFilter(
                                "diseaseTypes",
                                element,
                                filters.dataTypes.length + index
                              )
                            }
                            aria-describedby={`diseaseType-${index}-count`}
                          />
                          <label
                            htmlFor={`diseaseType-${index}`}
                            className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {element}{" "}
                            <span id={`diseaseType-${index}-count`}>
                              ({getCountForType(element, false)})
                            </span>
                          </label>
                        </div>
                      ))}
                    </fieldset>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </aside>

        <section
          className="lg:col-span-3 space-y-6"
          aria-label="Data sources results"
          role="region"
        >
          <div
            role="list"
            aria-label={`${
              dataSourcesJSON
                .filter((data) => applyDataTypeFilter(data))
                .filter((data) => applyDiseaseTypeFilter(data))
                .filter((data) => applySearchBar(data)).length
            } data sources found`}
          >
            {dataSourcesJSON
              .filter((data) => applyDataTypeFilter(data))
              .filter((data) => applyDiseaseTypeFilter(data))
              .filter((data) => applySearchBar(data))
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item, index) => (
                <article key={index} role="listitem" className="mb-6">
                  <Card className="h-full">
                    <CardHeader className="bg-muted">
                      <CardTitle className="flex flex-row justify-between items-center gap-4 sm:flex-row">
                        <a
                          href={sanitizeURL(item.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-primary hover:underline flex-grow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                          aria-label={`Visit ${sanitizeText(
                            item.name
                          )} website (opens in new tab)`}
                        >
                          {sanitizeText(item.name)}
                        </a>
                        <img
                          className="w-40 h-10 object-contain object-right"
                          src={createSafeImageSrc(item.thumbnail)}
                          alt=""
                          role="presentation"
                          aria-hidden="true"
                        />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </article>
              ))}
          </div>
        </section>
      </div>

      <LastUpdated date="09-06-2025" />
    </div>
  );
}
