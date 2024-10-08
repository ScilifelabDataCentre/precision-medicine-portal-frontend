import { Suspense } from "react";
import DataPageClient from "./PageClient";
import registryData from "@/assets/Kvalitetsregister_geo_dates_02.09.2024.json";

export const metadata = {
  title: "Registries",
  description: "Registry information",
};

async function getRegistryData() {
  // In a real-world scenario, you might fetch this data from an API
  // For now, we'll use the imported JSON data
  const updatedRegistryData = registryData.map((entry) => ({
    ...entry,
    start_date: entry.start_date ? entry.start_date.split("-")[0] : "",
    category: entry.category || [],
  }));
  return updatedRegistryData;
}

export default async function DataPage() {
  const registryData = await getRegistryData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataPageClient initialData={registryData} />
    </Suspense>
  );
}
