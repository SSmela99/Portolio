import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export const useIsXSmall = () => useMediaQuery("(max-width: 639px)");
export const useIsSmall = () => useMediaQuery("(max-width: 767px)");
export const useIsMedium = () => useMediaQuery("(max-width: 1023px)");
export const useIsLarge = () => useMediaQuery("(max-width: 1279px)");
export const useIsXLarge = () => useMediaQuery("(max-width: 1535px)");
