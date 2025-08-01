import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Reusable filter section component for displaying checkbox filters
 * Can be used across different pages that need similar filtering functionality
 */
interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onFilterChange: (item: string) => void;
  getItemCount: (item: string) => number;
}

export const FilterSection = ({
  title,
  items,
  selectedItems,
  onFilterChange,
  getItemCount,
}: FilterSectionProps) => (
  <div className="space-y-4">
    <h2 className="font-bold text-2xl text-foreground">{title}</h2>
    <Card>
      <CardContent className="pt-6">
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-3 mb-4">
            <Checkbox
              id={`filter-${item}`}
              checked={selectedItems.includes(item)}
              onCheckedChange={() => onFilterChange(item)}
            />
            <label
              htmlFor={`filter-${item}`}
              className="text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {item} ({getItemCount(item)})
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);
