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
