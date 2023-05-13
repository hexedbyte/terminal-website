import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.hexed);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setTheme(themes.hexed);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded };
};
