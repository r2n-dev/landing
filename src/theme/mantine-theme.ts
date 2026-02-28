import { createTheme, type MantineColorsTuple } from "@mantine/core";

const brandColors: MantineColorsTuple = [
  "#ebf6ff",
  "#d7ebff",
  "#afd5ff",
  "#85bdff",
  "#61a9ff",
  "#4b9cff",
  "#3b95ff",
  "#2d80e4",
  "#1f72cd",
  "#0962b6",
];

export const mantineTheme = createTheme({
  colors: {
    brand: brandColors,
  },
  primaryColor: "brand",
  primaryShade: {
    light: 6,
    dark: 7,
  },
  defaultRadius: "md",
  fontFamily:
    "var(--font-sans), -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  headings: {
    fontFamily:
      "var(--font-sans), -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    fontWeight: "700",
  },
  components: {
    Button: {
      defaultProps: {
        radius: "xl",
      },
    },
    Card: {
      defaultProps: {
        radius: "lg",
        withBorder: true,
      },
    },
  },
});
