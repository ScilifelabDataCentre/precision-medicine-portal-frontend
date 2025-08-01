"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import Title from "@/components/common/title";
import { LastUpdated } from "@/components/common/last-updated";
import { LoadingState } from "@/components/common/LoadingState";
import { FilterSection } from "@/components/common/FilterSection";
import { QualityRegistryCard } from "@/components/QualityRegistryCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IRegistryFilters, IRegistrySource, filters } from "@/interfaces/types";

// Configuration constants
const ORGANISATION_LINKS: Record<string, string> = {
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
} as const;

const SEARCH_CONFIG = {
  SCORE_THRESHOLD: 0.3,
  DEBOUNCE_DELAY: 300,
} as const;

// Swedish to English medical term translations
const swedishToEnglishTerms: { [key: string]: string[] } = {
  // Common medical conditions
  cancer: ["cancer", "tumor", "neoplasia"],
  hjärtinfarkt: ["heart attack", "myocardial infarction", "cardiac"],
  hjärninfarkt: [
    "cerebral infarction",
    "brain stroke",
    "cerebrovascular accident",
    "cva",
  ],
  stroke: ["stroke", "cerebrovascular", "brain"],
  diabetes: ["diabetes", "diabetic"],
  parkinson: ["parkinson", "parkinson's"],
  alzheimer: ["alzheimer", "dementia"],
  demens: ["dementia", "cognitive", "alzheimer"],
  epilepsi: ["epilepsy", "seizure"],
  astma: ["asthma", "respiratory"],
  artrit: ["arthritis", "rheumatoid"],
  reumatism: ["rheumatism", "rheumatic", "arthritis"],
  spondylit: ["spondylitis", "ankylosing spondylitis"],
  osteoporos: ["osteoporosis", "bone"],
  obesitas: ["obesity", "overweight"],
  hemofili: ["hemophilia", "bleeding disorder"],
  leukemi: ["leukemia", "leukaemia", "blood cancer"],
  lymfom: ["lymphoma", "lymphatic cancer"],
  fibros: ["fibrosis", "scarring"],
  dermatit: ["dermatitis", "eczema", "skin condition"],
  katarakt: ["cataract", "lens opacity"],

  // Body parts and systems
  hjärta: ["heart", "cardiac", "cardiovascular"],
  lungor: ["lung", "pulmonary", "respiratory"],
  lever: ["liver", "hepatic"],
  gallblåsa: ["gallbladder", "biliary"],
  gallvägar: ["bile ducts", "biliary tract"],
  njurar: ["kidney", "renal"],
  hjärna: ["brain", "cerebral", "neurological"],
  blod: ["blood", "hematological"],
  ben: ["bone", "skeletal"],
  leder: ["joint", "articular"],
  muskler: ["muscle", "muscular"],
  nervsystem: ["nervous system", "neurological"],
  hud: ["skin", "dermatological"],
  ögon: ["eyes", "ocular", "ophthalmology"],
  öron: ["ears", "auditory", "otology"],

  // Medical procedures and treatments
  kirurgi: ["surgery", "surgical"],
  handkirurgi: ["hand surgery", "microsurgery"],
  thoraxkirurgi: ["thoracic surgery", "chest surgery"],
  kärlkirurgi: ["vascular surgery", "vessel surgery"],
  hjärtkirurgi: ["cardiac surgery", "heart surgery"],
  bråckkirurgi: ["hernia surgery", "hernia repair"],
  barnkirurgi: ["pediatric surgery", "children surgery"],
  kemoterapi: ["chemotherapy", "cancer treatment"],
  strålbehandling: ["radiation", "radiotherapy"],
  transplantation: ["transplant", "transplantation"],
  dialys: ["dialysis", "renal replacement"],
  anestesi: ["anesthesia", "anesthetic"],
  intensivvård: ["intensive care", "icu", "critical care"],
  behandling: ["treatment", "therapy"],
  medicin: ["medicine", "medication", "drug"],

  // Patient groups
  barn: ["child", "pediatric", "children"],
  äldre: ["elderly", "geriatric", "aging"],
  vuxna: ["adult", "adults"],
  spädbarn: ["infant", "newborn", "neonatal"],
  gravid: ["pregnant", "pregnancy", "maternal"],
  neonatal: ["newborn", "neonatal", "infant"],

  // Medical specialties
  neurologi: ["neurology", "neurological"],
  onkologi: ["oncology", "cancer"],
  kardiologi: ["cardiology", "cardiac"],
  urologi: ["urology", "urological"],
  gynekologi: ["gynecology", "gynecological"],
  ortopedi: ["orthopedics", "orthopedic"],
  reumatologi: ["rheumatology", "rheumatic"],
  endokrinologi: ["endocrinology", "hormonal"],
  gastroenterologi: ["gastroenterology", "digestive"],

  // Specific conditions from registries
  kognitiv: ["cognitive", "mental", "brain function"],
  psykisk: ["psychiatric", "psychological", "mental health"],
  beteende: ["behavioral", "behaviour"],
  dysfori: ["dysphoria", "gender dysphoria"],
  cerebralparesi: ["cerebral palsy", "cp"],
  cystiskfibros: ["cystic fibrosis", "cf"],
  myelomeningocele: ["spina bifida", "neural tube defect"],
  neuralrörsdefekt: ["neural tube defect", "spina bifida"],

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
  if (!text || searchTerms.length === 0) return text;

  let highlightedText = text;

  // Escape special regex characters in search terms
  const escapedTerms = searchTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  escapedTerms.forEach((term) => {
    if (term.trim()) {
      const regex = new RegExp(`(${term})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="bg-accent">$1</mark>'
      );
    }
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

// Custom hook for debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function QualityRegistryPage() {
  // State management
  const [registries, setRegistries] = useState<IRegistrySource[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<IRegistryFilters>({
    registryCentre: [],
    registryCategory: [],
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Debounce search term for better performance
  const debouncedSearchTerm = useDebounce(
    searchTerm,
    SEARCH_CONFIG.DEBOUNCE_DELAY
  );

  // Data fetching
  useEffect(() => {
    const fetchRegistryData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const registryData = await import(
          "@/assets/Kvalitetsregister_geo_dates_02.09.2024.json"
        );

        const processedData = registryData.default.map(
          (entry: IRegistrySource) => ({
            ...entry,
            start_date: entry.start_date ? entry.start_date.split("-")[0] : "",
            category: entry.category || [],
          })
        );

        setRegistries(processedData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to load registry data";
        setError(errorMessage);
        console.error("Error fetching registry data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegistryData();
  }, []);

  // Memoized filter counts for performance
  const getCountForType = useCallback(
    (type: string, isRegistryCentre: boolean): number => {
      return registries.filter((source) => {
        const tags = isRegistryCentre
          ? source.registry_centre
          : source.category;
        return tags.some((tag) => tag.toLowerCase() === type.toLowerCase());
      }).length;
    },
    [registries]
  );

  // Filter management
  const updateFilter = useCallback(
    (filterType: keyof IRegistryFilters, filterName: string) => {
      setSelectedFilters((prev) => {
        const newFilters = { ...prev };
        if (newFilters[filterType].includes(filterName)) {
          newFilters[filterType] = newFilters[filterType].filter(
            (item) => item !== filterName
          );
        } else {
          newFilters[filterType] = [...newFilters[filterType], filterName];
        }
        return newFilters;
      });
    },
    []
  );

  // Search and filter logic
  const searchTerms = useMemo(() => {
    return debouncedSearchTerm
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);
  }, [debouncedSearchTerm]);

  const filteredAndSearchedRegistries = useMemo(() => {
    // Apply filters first
    const filtered = registries.filter((registry) => {
      const centreFilter =
        selectedFilters.registryCentre.length === 0 ||
        selectedFilters.registryCentre.some((filter) =>
          registry.registry_centre.some(
            (centre) => centre.toLowerCase() === filter.toLowerCase()
          )
        );

      const categoryFilter =
        selectedFilters.registryCategory.length === 0 ||
        selectedFilters.registryCategory.some((filter) =>
          registry.category.some(
            (cat) => cat.toLowerCase() === filter.toLowerCase()
          )
        );

      return centreFilter && categoryFilter;
    });

    // Apply search if there are search terms
    if (searchTerms.length === 0) {
      return filtered
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((registry) => ({ registry, score: 0 }));
    }

    return filtered
      .map((registry) => ({
        registry,
        score: calculateSearchScore(registry, searchTerms),
      }))
      .filter((result) => result.score >= SEARCH_CONFIG.SCORE_THRESHOLD)
      .sort((a, b) => b.score - a.score);
  }, [registries, selectedFilters, searchTerms]);

  // Loading state
  if (isLoading) {
    return <LoadingState />;
  }

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Error loading registries: {error}
          </p>
        </div>
      </div>
    );
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-muted"
              />
              {searchTerm.length === 0 && (
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
            <FilterSection
              title="Organisation"
              items={filters.registryCentre}
              selectedItems={selectedFilters.registryCentre}
              onFilterChange={(item) => updateFilter("registryCentre", item)}
              getItemCount={(item) => getCountForType(item, true)}
            />

            {/* Category Filters */}
            <FilterSection
              title="Category"
              items={filters.registryCategory}
              selectedItems={selectedFilters.registryCategory}
              onFilterChange={(item) => updateFilter("registryCategory", item)}
              getItemCount={(item) => getCountForType(item, false)}
            />
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          {/* Results summary */}
          <div className="space-y-2 mb-6">
            {searchTerms.length > 0 && (
              <div className="text-sm text-muted-foreground">
                Found {filteredAndSearchedRegistries.length} result
                {filteredAndSearchedRegistries.length !== 1 ? "s" : ""} for "
                <span className="font-medium text-foreground">
                  {debouncedSearchTerm}
                </span>
                "
                {filteredAndSearchedRegistries.length > 0 &&
                  " (ordered by relevance)"}
              </div>
            )}

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Showing {filteredAndSearchedRegistries.length} of{" "}
                {registries.length} registries
                {(selectedFilters.registryCentre.length > 0 ||
                  selectedFilters.registryCategory.length > 0) &&
                  " (filtered)"}
              </span>

              {filteredAndSearchedRegistries.length === 0 &&
                registries.length > 0 && (
                  <span className="text-error">No matches found</span>
                )}
            </div>
          </div>
          {/* Registry cards or empty state */}
          {filteredAndSearchedRegistries.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-muted-foreground space-y-2">
                <p className="text-lg font-medium">
                  {searchTerms.length > 0
                    ? "No registries found matching your search"
                    : "No registries match the selected filters"}
                </p>
                <p className="text-sm">
                  {searchTerms.length > 0
                    ? "Try adjusting your search terms or removing filters"
                    : "Try selecting different filter options"}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredAndSearchedRegistries.map((result, index) => (
                <QualityRegistryCard
                  key={result.registry.name}
                  registry={result.registry}
                  searchTerms={searchTerms}
                  index={index}
                  expandSearchTerms={expandSearchTerms}
                  highlightSearchTerms={highlightSearchTerms}
                  organisationLinks={ORGANISATION_LINKS}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <LastUpdated date="31-07-2025" />
    </div>
  );
}
