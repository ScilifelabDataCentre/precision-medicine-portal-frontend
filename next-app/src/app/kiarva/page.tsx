"use client";

import { ReactElement } from "react";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";

// simport Iframe from "react-iframe";

export default function KiarvaIFramePage(): ReactElement {
  TrackPageViewIfEnabled();

  const kiarva_hostname = "https://kiarva.scilifelab.se/";

  return (
    <>
      <style jsx>{`
        .kiarva-page {
          height: 100vh; /* Full page height */
          overflow: hidden; /* Prevent scrollbars for the page */
        }
      `}</style>
      <div className="kiarva-page h-screen flex flex-col overflow-hidden">
        <main className="flex-1 overflow-hidden">
          {kiarva_hostname && (
            // <div className="h-full overflow-auto">
            //   <Iframe
            //     url={kiarva_hostname}
            //     width="100%"
            //     height="100%"
            //     allow="modals scripts"
            //     className="w-full h-full border-none"
            //   />
            // </div>
            // <div className="outer w-[500px] h-[150px] overflow-hidden">
            //   <iframe
            //     src="/"
            //     className="w-[520px] h-[170px] overflow-auto"
            //   ></iframe>
            // </div>
            <section className="outer w-[100%] h-[100%] overflow-hidden">
              <iframe
                src={kiarva_hostname}
                className="w-screen h-screen overflow-auto"
              ></iframe>
            </section>
          )}
        </main>
      </div>
    </>
  );
}
