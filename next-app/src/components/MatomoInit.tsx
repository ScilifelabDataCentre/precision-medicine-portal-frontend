'use client'

import { useEffect } from 'react'
import { init } from "@socialgouv/matomo-next";

export default function MatomoInit() {
  useEffect(() => {
    if (window.location.origin === "https://precision-medicine-portal.scilifelab.se/") {
      init({
          url: 'https://matomo.dc.scilifelab.se/', 
          siteId: '9',
          disableCookies: true,
      })
    }
  }, [])

  return null
}