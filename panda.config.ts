import { defineConfig, defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
  pageTitle: {
    description: "page title",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "40px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  sectionTitleL: {
    description: "section large title",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "38px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  sectionTitleM: {
    description: "section medium title",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "28px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  subTitle: {
    description: "subTitle",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  bodyL: {
    description: "body large",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  bodyM: {
    description: "body medium",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  bodyS: {
    description: "body small",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  bodyXS: {
    description: "body x-small",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "16px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  captionM: {
    description: "caption medium",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
  captionS: {
    description: "caption small",
    value: {
      fontFamily: "Pretendard Variable",
      fontSize: "11px",
      fontWeight: "400",
      lineHeight: "14px",
      letterSpacing: "0em",
      textDecoration: "None",
      textTransform: "None",
    },
  },
});

export default defineConfig({
  preflight: true,
  emitPackage: true,
  presets: ["@shadow-panda/preset"],
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
  exclude: [],
  jsxFramework: "react",
  // The output directory for your css system
  outdir: "@shadow-panda/styled-system",
  theme: {
    extend: {
      textStyles,
      breakpoints: {
        sm: "1339px",
        md: "1440px",
        lg: "1920px",
        xl: "2560px",
      },
      tokens: {
        colors: {
          magenta: {
            "100": { value: "#FFF0F2" },
            "200": { value: "#FFE2E7" },
            "300": { value: "#FF9FB2" },
            "400": { value: "#FF4370" },
            "500": { value: "#ED1150" },
            "600": { value: "#A80940" },
            "700": { value: "#50011C" },
          },
          green: {
            "100": { value: "#EBFEF4" },
            "200": { value: "#CDFEE4" },
            "300": { value: "#26E197" },
            "400": { value: "#01B574" },
            "500": { value: "#00A369" },
            "600": { value: "#00543C" },
            "700": { value: "#003023" },
          },
          blue: {
            "100": { value: "#EFF4FB" },
            "200": { value: "#DAE9FF" },
            "300": { value: "#9AC1FA" },
            "400": { value: "#2B75FC" },
            "500": { value: "#3A61F2" },
            "600": { value: "#213489" },
            "700": { value: "#182253" },
          },
          gray: {
            "100": { value: "#FFFFFF" },
            "200": { value: "#F7F7F7" },
            "300": { value: "#F1F1F1" },
            "400": { value: "#E6E6E6" },
            "500": { value: "#BFBFBF" },
            "600": { value: "#76767A" },
            "700": { value: "#3A3A3F" },
            "800": { value: "#131317" },
          },
        },
      },
    },
  },
});
