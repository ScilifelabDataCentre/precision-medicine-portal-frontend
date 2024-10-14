"use client";

import { ReactElement } from "react";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import DataSourcesComponent from "@/components/DataSourcesComponent";
import { BODY_CLASSES } from "@/constants";
import { LastUpdated } from "@/components/common/last-updated";

export default function DataPage(): ReactElement {
  TrackPageViewIfEnabled();

  return (
    <div className={BODY_CLASSES + " py-16"}>
      <DataSourcesComponent />
      <LastUpdated date="11-11-2024" />
    </div>
  );
}
