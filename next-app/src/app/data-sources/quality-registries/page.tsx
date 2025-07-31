"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Title from "@/components/common/title";
import { LastUpdated } from "@/components/common/last-updated";
import { Safe } from "@/components/common/SafeContent";
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
    "Registercentrum Norr",
    "Registercentrum Syd",
    "Registercentrum Sydost",
    "Registercentrum Västra Götaland",
    "RCC Mellansverige",
    "RCC Norr",
    "RCC Stockholm Gotland",
    "RCC Syd",
    "RCC Sydöst",
    "RCC Väst",
    "Uppsala Clinical Research Center",
  ],
  registryCategory: [
    "National cancer quality registry",
    "National quality registry",
    "Other quality registry",
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

// Swedish to English medical term translations
const swedishToEnglishTerms: { [key: string]: string[] } = {
  // Common medical conditions
  cancer: ["cancer", "tumor", "neoplasia"],
  hjärtinfarkt: ["heart attack", "myocardial infarction", "cardiac"],
  stroke: ["stroke", "cerebrovascular", "brain"],
  diabetes: ["diabetes", "diabetic"],
  parkinson: ["parkinson", "parkinson's"],
  alzheimer: ["alzheimer", "dementia"],
  epilepsi: ["epilepsy", "seizure"],
  astma: ["asthma", "respiratory"],
  artrit: ["arthritis", "rheumatoid"],
  osteoporos: ["osteoporosis", "bone"],

  // Body parts and systems
  hjärta: ["heart", "cardiac", "cardiovascular"],
  lungor: ["lung", "pulmonary", "respiratory"],
  lever: ["liver", "hepatic"],
  njurar: ["kidney", "renal"],
  hjärna: ["brain", "cerebral", "neurological"],
  blod: ["blood", "hematological"],
  ben: ["bone", "skeletal"],
  leder: ["joint", "articular"],
  muskler: ["muscle", "muscular"],
  nervsystem: ["nervous system", "neurological"],

  // Medical procedures and treatments
  kirurgi: ["surgery", "surgical"],
  kemoterapi: ["chemotherapy", "cancer treatment"],
  strålbehandling: ["radiation", "radiotherapy"],
  transplantation: ["transplant", "transplantation"],
  dialys: ["dialysis", "renal replacement"],
  behandling: ["treatment", "therapy"],
  medicin: ["medicine", "medication", "drug"],

  // Patient groups
  barn: ["child", "pediatric", "children"],
  äldre: ["elderly", "geriatric", "aging"],
  vuxna: ["adult", "adults"],
  spädbarn: ["infant", "newborn", "neonatal"],
  gravid: ["pregnant", "pregnancy", "maternal"],

  // Registry-specific terms
  kvalitetsregister: ["quality registry", "registry"],
  nationellt: ["national"],
  regionalt: ["regional"],
  sjukhus: ["hospital", "clinical"],
  vård: ["care", "healthcare"],
  forskning: ["research", "study"],
  uppföljning: ["follow-up", "monitoring"],

  // Common Swedish medical abbreviations
  hiv: ["hiv", "aids"],
  covid: ["covid", "coronavirus"],
  ms: ["multiple sclerosis", "ms"],
  cf: ["cystic fibrosis", "cf"],
  ivf: ["in vitro fertilization", "ivf"],
  acls: ["anterior cruciate ligament", "acl"],
};

// Function to expand search terms with Swedish translations
function expandSearchTerms(terms: string[]): string[] {
  const expandedTerms = [...terms];

  terms.forEach((term) => {
    const normalizedTerm = term.toLowerCase().trim();

    // Check if the term is Swedish and has English translations
    if (swedishToEnglishTerms[normalizedTerm]) {
      expandedTerms.push(...swedishToEnglishTerms[normalizedTerm]);
    }

    // Also check for reverse mapping (English to Swedish)
    Object.entries(swedishToEnglishTerms).forEach(([swedish, englishTerms]) => {
      if (
        englishTerms.some((english) => english.toLowerCase() === normalizedTerm)
      ) {
        expandedTerms.push(swedish, ...englishTerms);
      }
    });
  });

  // Remove duplicates and return
  return [...new Set(expandedTerms)];
}

// Utility functions for improved search
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^\w\s]/g, " ") // Replace punctuation with spaces
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
}

function highlightSearchTerms(text: string, searchTerms: string[]): string {
  if (searchTerms.length === 0) return text;

  let highlightedText = text;
  searchTerms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      '<mark class="bg-accent">$1</mark>'
    );
  });

  return highlightedText;
}

function calculateSimilarity(text1: string, text2: string): number {
  const normalized1 = normalizeText(text1);
  const normalized2 = normalizeText(text2);

  // Exact match gets highest score
  if (normalized1 === normalized2) return 1.0;

  // Check if one contains the other
  if (normalized1.includes(normalized2) || normalized2.includes(normalized1)) {
    return 0.9;
  }

  // Word-based similarity
  const words1 = new Set(normalized1.split(" "));
  const words2 = new Set(normalized2.split(" "));

  const intersection = new Set([...words1].filter((x) => words2.has(x)));
  const union = new Set([...words1, ...words2]);

  return intersection.size / union.size;
}

function calculateSearchScore(
  registry: IRegistrySource,
  searchTerms: string[]
): number {
  let maxScore = 0;

  // Expand search terms with Swedish translations
  const expandedSearchTerms = expandSearchTerms(searchTerms);

  // Search through all relevant fields
  const searchableTexts = [
    registry.name,
    registry.Information,
    ...registry.search_tags,
    ...registry.category,
    ...registry.registry_centre,
  ];

  for (const searchTerm of expandedSearchTerms) {
    let termScore = 0;

    for (const text of searchableTexts) {
      const similarity = calculateSimilarity(searchTerm, text);
      termScore = Math.max(termScore, similarity);
    }

    // Bonus for exact matches in name or search tags
    const normalizedSearchTerm = normalizeText(searchTerm);
    const normalizedName = normalizeText(registry.name);
    const normalizedTags = registry.search_tags.map((tag) =>
      normalizeText(tag)
    );

    if (
      normalizedName.includes(normalizedSearchTerm) ||
      normalizedTags.some((tag) => tag.includes(normalizedSearchTerm))
    ) {
      termScore = Math.max(termScore, 0.95);
    }

    maxScore = Math.max(maxScore, termScore);
  }

  return maxScore;
}

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
  const [searchResults, setSearchResults] = useState<
    Array<{ registry: IRegistrySource; score: number }>
  >([]);

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

  function getCountForType(type: string, isRegistryCentre: boolean): number {
    return registrySourcesJSON.filter((source) => {
      const tags = isRegistryCentre ? source.registry_centre : source.category;
      return tags.some((tag) => tag.toLowerCase() === type.toLowerCase());
    }).length;
  }

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

    const searchTerms = searchBar
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);
    if (searchTerms.length === 0) return true;

    const searchScore = calculateSearchScore(registry, searchTerms);

    // Return true if any search term has a reasonable match (threshold: 0.3)
    return searchScore >= 0.3;
  }

  // Calculate and sort search results by relevance
  useEffect(() => {
    if (searchBar.length === 0) {
      setSearchResults([]);
      return;
    }

    const searchTerms = searchBar
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);
    if (searchTerms.length === 0) {
      setSearchResults([]);
      return;
    }

    const results = registrySourcesJSON
      .filter((registry) => applyRegistryCentreFilter(registry))
      .filter((registry) => applyRegistryCategoryFilter(registry))
      .map((registry) => ({
        registry,
        score: calculateSearchScore(registry, searchTerms),
      }))
      .filter((result) => result.score >= 0.3)
      .sort((a, b) => b.score - a.score);

    setSearchResults(results);
  }, [searchBar, selectedFilters, registrySourcesJSON]);

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
                placeholder="Search by name or keywords"
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
                className="bg-muted"
              />
              {searchBar.length === 0 && (
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Examples:</p>
                  <ul className="space-y-1 text-sm">
                    <li>"barn" / "child" - finds pediatric registries</li>
                    <li>"hjärta" / "heart" - finds cardiac registries</li>
                  </ul>
                </div>
              )}
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
                        {element} ({getCountForType(element, true)})
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
                        {element} ({getCountForType(element, false)})
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          {searchBar.length > 0 && (
            <div className="text-sm text-muted-foreground mb-4">
              Found {searchResults.length} result
              {searchResults.length !== 1 ? "s" : ""} for "{searchBar}" (ordered
              by relevance to search query)
            </div>
          )}
          {(searchBar.length > 0
            ? searchResults
            : registrySourcesJSON
                .filter((registry) => applyRegistryCentreFilter(registry))
                .filter((registry) => applyRegistryCategoryFilter(registry))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((registry) => ({ registry, score: 0 }))
          ).map((result, index) => {
            const item = result.registry;
            const score = result.score;
            return (
              <Card key={index}>
                <CardHeader className="bg-muted">
                  <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <Safe.Url
                      url={item.url}
                      className="text-xl text-primary hover:underline"
                    >
                      <Safe.HTML
                        html={
                          searchBar.length > 0
                            ? highlightSearchTerms(
                                item.name,
                                expandSearchTerms(
                                  searchBar
                                    .toLowerCase()
                                    .split(/\s+/)
                                    .filter((term) => term.length > 0)
                                )
                              )
                            : item.name
                        }
                        allowedTags={["mark"]}
                        allowedAttr={["class"]}
                      />
                    </Safe.Url>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <Safe.HTML
                    html={
                      searchBar.length > 0
                        ? highlightSearchTerms(
                            item.Information || "Information not available.",
                            expandSearchTerms(
                              searchBar
                                .toLowerCase()
                                .split(/\s+/)
                                .filter((term) => term.length > 0)
                            )
                          )
                        : item.Information || "Information not available."
                    }
                    allowedTags={["mark"]}
                    allowedAttr={["class"]}
                    className="mb-3"
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                      <strong>Start year:</strong> {item.start_date}
                    </div>
                    <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                      <strong>Organisation:</strong>{" "}
                      <Safe.Url
                        url={organisationLinks[item.registry_centre[0]]}
                        className="hover:underline"
                      >
                        <Safe.HTML
                          html={
                            searchBar.length > 0
                              ? highlightSearchTerms(
                                  item.registry_centre.join(", "),
                                  expandSearchTerms(
                                    searchBar
                                      .toLowerCase()
                                      .split(/\s+/)
                                      .filter((term) => term.length > 0)
                                  )
                                )
                              : item.registry_centre.join(", ")
                          }
                          allowedTags={["mark"]}
                          allowedAttr={["class"]}
                          className="inline"
                        />
                      </Safe.Url>
                    </div>
                    <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
                      <strong>Category:</strong>{" "}
                      <Safe.HTML
                        html={
                          searchBar.length > 0
                            ? highlightSearchTerms(
                                item.category.join(", "),
                                expandSearchTerms(
                                  searchBar
                                    .toLowerCase()
                                    .split(/\s+/)
                                    .filter((term) => term.length > 0)
                                )
                              )
                            : item.category.join(", ")
                        }
                        allowedTags={["mark"]}
                        allowedAttr={["class"]}
                        className="inline"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <LastUpdated date="31-07-2025" />
    </div>
  );
}
