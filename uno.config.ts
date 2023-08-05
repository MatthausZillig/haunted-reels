import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#111928",
        300: "#1F2A37",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2A37",
        900: "#111928",
      },
      purple: {
        50: "#F6F5FF",
        100: "#EDEBFE",
        200: "#DCD7FE",
        300: "#CABFFD",
        400: "#AC94FA",
        500: "#9061F9",
        600: "#7E3AF2",
        700: "#6C2BD9",
        800: "#5521B5",
        900: "#4A1D96",
      },
    },
    breakpoints: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },
});
