"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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

interface IRegistryFilters {
  registryCentre: string[];
  registryCategory: string[];
}

interface IRegistrySource {
  name: string;
  url: string;
  Information: string;
  start_date: string;
  registry_centre: string[];
  category: string[];
  search_tags: string[];
}

const filters: IRegistryFilters = {
  registryCentre: [
    "Kvalitetsregistercentrum Stockholm",
    "Registercentrum Syd",
    "Registercentrum Norr",
    "Uppsala Clinical Research Center",
    "Registercentrum Västra Götaland",
    "Registercentrum Sydost",
    "RCC Stockholm Gotland",
    "RCC Sydöst",
    "RCC Norr",
    "RCC Mellansverige",
    "RCC Väst",
    "RCC Syd",
  ],
  registryCategory: [
    "National quality registry",
    "Other quality registry",
    "National cancer quality registry",
  ],
};

const organisationLinks: { [key: string]: string } = {
  "Kvalitetsregistercentrum Stockholm": "https://qrcstockholm.se",
  "Registercentrum Syd": "https://registercentrum.se",
  "Registercentrum Norr": "https://rcnorr.se",
  "Uppsala Clinical Research Center": "https://www.ucr.uu.se/sv/",
  "Registercentrum Västra Götaland": "https://registercentrum.se",
  "Registercentrum Sydost":
    "https://sydostrasjukvardsregionen.se/samverkansgrupper/data-och-analys/registercentrum-sydost/",
  "RCC Stockholm Gotland": "https://cancercentrum.se/stockholm-gotland/",
  "RCC Sydöst": "https://cancercentrum.se/sydost/",
  "RCC Norr": "https://cancercentrum.se/norr/",
  "RCC Mellansverige": "https://cancercentrum.se/mellansverige/",
  "RCC Väst": "https://cancercentrum.se/vast/",
  "RCC Syd": "https://cancercentrum.se/syd/",
};

export default function QualityRegistryPage() {
  const [registrySourcesJSON, setRegistrySourcesJSON] = useState<
    IRegistrySource[]
  >([]);
  const [selectedFilters, setSelectedFilters] = useState<IRegistryFilters>({
    registryCentre: [],
    registryCategory: [],
  });
  const [searchBar, setSearchBar] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const nrOfCheckboxes = filters.registryCentre.concat(
    filters.registryCategory
  ).length;
  const [checkedList, setCheckedList] = useState<boolean[]>(
    new Array(nrOfCheckboxes).fill(false)
  );

  useEffect(() => {
    async function fetchRegistryData() {
      try {
        const registryData = await import(
          "@/assets/Kvalitetsregister_geo_dates_02.09.2024.json"
        );
        const updatedRegistryData = registryData.default.map(
          (entry: IRegistrySource) => ({
            ...entry,
            start_date: entry.start_date ? entry.start_date.split("-")[0] : "",
            category: entry.category || [],
          })
        );
        setRegistrySourcesJSON(updatedRegistryData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching registry data:", error);
        setIsLoading(false);
      }
    }

    fetchRegistryData();
  }, []);

  function checkedFilter(
    filterType: keyof IRegistryFilters,
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

  function applyRegistryCentreFilter(registry: IRegistrySource) {
    return (
      selectedFilters.registryCentre.length === 0 ||
      selectedFilters.registryCentre.some((filter) =>
        registry.registry_centre.some(
          (centre) => centre.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }

  function applyRegistryCategoryFilter(registry: IRegistrySource) {
    return (
      selectedFilters.registryCategory.length === 0 ||
      selectedFilters.registryCategory.some((filter) =>
        registry.category.some(
          (cat) => cat.toLowerCase() === filter.toLowerCase()
        )
      )
    );
  }

  function applySearchBar(registry: IRegistrySource) {
    if (searchBar.length === 0) return true;
    const searchBarLower = searchBar.toLowerCase();
    const searchTags = searchBarLower.split(" ");
    return (
      registry.name.toLowerCase().includes(searchBarLower) ||
      searchTags.some((tag) =>
        registry.search_tags.some((searchTag) =>
          searchTag.toLowerCase().includes(tag)
        )
      )
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
            <BreadcrumbLink href="/data-sources/quality-registries">
              Quality registries
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Title level={1}>Quality registries</Title>
      <div className="lg:grid lg:grid-cols-4 lg:gap-8 pt-8">
        <div className="lg:col-span-1 mb-8 lg:mb-0">
          <div className="space-y-8">
            {/* Disclaimer */}
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
            {/* Organisation Filters */}
            <div className="space-y-4">
              <h2 className="font-bold text-2xl text-foreground">
                Organisation
              </h2>
              <Card>
                <CardContent className="pt-6">
                  {filters.registryCentre.map((element, index) => (
                    <div
                      className="flex items-center space-x-3 mb-4"
                      key={element}
                    >
                      <Checkbox
                        id={`registryCentre-${index}`}
                        checked={checkedList[index]}
                        onCheckedChange={() =>
                          checkedFilter("registryCentre", element, index)
                        }
                      />
                      <label
                        htmlFor={`registryCentre-${index}`}
                        className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {element}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            {/* Category Filters */}
            <div className="space-y-4">
              <h2 className="font-bold text-2xl text-foreground">Category</h2>
              <Card>
                <CardContent className="pt-6">
                  {filters.registryCategory.map((element, index) => (
                    <div
                      className="flex items-center space-x-3 mb-4"
                      key={element}
                    >
                      <Checkbox
                        id={`registryCategory-${index}`}
                        checked={
                          checkedList[filters.registryCentre.length + index]
                        }
                        onCheckedChange={() =>
                          checkedFilter(
                            "registryCategory",
                            element,
                            filters.registryCentre.length + index
                          )
                        }
                      />
                      <label
                        htmlFor={`registryCategory-${index}`}
                        className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {element}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          {registrySourcesJSON
            .filter((registry) => applyRegistryCentreFilter(registry))
            .filter((registry) => applyRegistryCategoryFilter(registry))
            .filter((registry) => applySearchBar(registry))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item, index) => (
              <Card key={index}>
                <CardHeader className="bg-muted">
                  <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-primary hover:underline"
                    >
                      {item.name}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>{item.Information || "Information not available."}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                      <strong>Start year:</strong> {item.start_date}
                    </div>
                    <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                      <strong>Organisation:</strong>{" "}
                      <a
                        href={organisationLinks[item.registry_centre[0]]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.registry_centre.join(", ")}
                      </a>
                    </div>
                    <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                      <strong>Category:</strong> {item.category.join(", ")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
      <LastUpdated date="11-11-2024" />
    </div>
  );
}
