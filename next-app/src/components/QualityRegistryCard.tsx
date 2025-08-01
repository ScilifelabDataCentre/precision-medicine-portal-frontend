import { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Safe } from "@/components/common/SafeContent";
import { IRegistrySource } from "@/interfaces/types";

/**
 * QualityRegistryCard Component
 *
 * This component is SPECIFIC to the Quality Registries page (/data-sources/quality-registries)
 * and should NOT be used elsewhere in the application.
 *
 * Features specific to quality registries:
 * - Displays registry information with Swedish-English term translation
 * - Handles search term highlighting with medical term expansion
 * - Shows organization links specific to Swedish registry centers
 * - Displays category information for quality registries
 * - Uses Safe HTML rendering for security (project requirement)
 *
 * Dependencies on quality registry page:
 * - expandSearchTerms function (Swedish-English medical terms)
 * - highlightSearchTerms function (search highlighting)
 * - ORGANISATION_LINKS constant (registry-specific URLs)
 */

interface QualityRegistryCardProps {
  registry: IRegistrySource;
  searchTerms: string[];
  index: number;
  expandSearchTerms: (terms: string[]) => string[];
  highlightSearchTerms: (text: string, terms: string[]) => string;
  organisationLinks: Record<string, string>;
}

export const QualityRegistryCard = ({
  registry,
  searchTerms,
  index,
  expandSearchTerms,
  highlightSearchTerms,
  organisationLinks,
}: QualityRegistryCardProps) => {
  const expandedTerms = useMemo(
    () => expandSearchTerms(searchTerms),
    [searchTerms, expandSearchTerms]
  );
  const hasSearch = searchTerms.length > 0;

  return (
    <Card key={registry.name} className="transition-shadow hover:shadow-md">
      <CardHeader className="bg-muted">
        <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Safe.Url
            url={registry.url}
            className="text-xl text-primary hover:underline"
          >
            <Safe.HTML
              html={
                hasSearch
                  ? highlightSearchTerms(registry.name, expandedTerms)
                  : registry.name
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
            hasSearch
              ? highlightSearchTerms(
                  registry.Information || "Information not available.",
                  expandedTerms
                )
              : registry.Information || "Information not available."
          }
          allowedTags={["mark"]}
          allowedAttr={["class"]}
          className="mb-3"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
            <strong>Start year:</strong> {registry.start_date}
          </div>
          <div className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm">
            <strong>Organisation:</strong>{" "}
            <Safe.Url
              url={organisationLinks[registry.registry_centre[0]]}
              className="hover:underline"
            >
              <Safe.HTML
                html={
                  hasSearch
                    ? highlightSearchTerms(
                        registry.registry_centre.join(", "),
                        expandedTerms
                      )
                    : registry.registry_centre.join(", ")
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
                hasSearch
                  ? highlightSearchTerms(
                      registry.category.join(", "),
                      expandedTerms
                    )
                  : registry.category.join(", ")
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
};
