import { useEffect } from "react";
import store from "../store/index";

export default function useDarkMode() {
  const prefersDarkScheme =
    typeof window === "undefined"
      ? ""
      : window.matchMedia("(prefers-color-scheme: dark)");

  const withDarkMode = (media) => {
    const dark = Boolean(media.matches);
    store.darkMode = dark;
  };

  useEffect(() => {
    prefersDarkScheme.addListener(withDarkMode);
    withDarkMode(prefersDarkScheme);
  }, []);
}

// "[{\"date\":\"18 Nov. 20\",\"amount\":5000000,\"remaining_balance\":2000000},{\"date\":\"30 Dec. 20\",\"amount\":2000000,\"remaining_balance\":0}]"
