import { useMatomo } from "@jonkoops/matomo-tracker-react";
import Cookie from "js-cookie";
import React from "react";

// cookies are stored as strings, so they cannot be directly used as boolean type
export function cookieIsSetToTrue(cookieName: string): Boolean {
  let cookieValue: string | undefined = Cookie.get(cookieName);
  /* if (!cookieValue) {
    throw new Error(
      'Cookie with name "' + cookieName + '" does not exist or is not set yet.'
    );
  } else { */
  return Cookie.get(cookieName) === "true";
  // }
}

export function TrackPageViewIfEnabled() {
  // const { trackPageView, trackEvent } = useMatomo() , trackEvent to track clicks and other events
  const { trackPageView } = useMatomo();

  // track page visit if trackingEnabled cookie is set to 'true'

  React.useEffect(() => {
    if (cookieIsSetToTrue("trackingEnabled")) {
      trackPageView();
    }
  }, []);
}
