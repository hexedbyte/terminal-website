import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  hexed: {
    id: "T_001",
    name: "hexed",
    colors: {
      body: "#1D2A35",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#66ff33",
      secondary: "#00ffff",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC",
        300: "#64748b",
        400: "#cc0000",
      },
    },
  },
};

export default theme;
