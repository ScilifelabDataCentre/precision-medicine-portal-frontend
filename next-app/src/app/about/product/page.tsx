"use client";

import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import { ReactElement } from "react";

export default function AboutProductPage(): ReactElement {
  TrackPageViewIfEnabled();

  return (
    <div>
      <p>
        The Precision Medicine Portal is part of the{" "}
        <a
          href="https://www.scilifelab.se/data-driven/about-ddls/precision-medicine-and-diagnostics/"
          className="underline text-primary hover:text-black"
        >
          SciLifeLab DDLS node for Precision Medicine and Diagnostics
        </a>{" "}
        at Karolinska institutet and funded by the{" "}
        <a
          href="https://kaw.wallenberg.org/en"
          className="underline text-primary hover:text-black"
        >
          Knut and Alice Wallenberg Foundation
        </a>
        . Launching in autumn 2024, our overall goal is to support Swedish
        researchers with essential resources within precision medicine (or
        personalised medicine), such as relevant data sources, interactive data
        dashboards, data management support, and links to conferences, workshops
        and other Nordic precision medicine events.
      </p>
      <p>
        Our website is divided into two repositories: a frontend React app and a
        backend using Python and Flask. While operated by the SciLifeLab Data
        Centre and partners, we very much welcome community contributions.
      </p>
    </div>
  );
}
