import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { ColorExtends } from "./src/configs/tailwind/colors-extend";

import { SpaceExtend } from "./src/configs/ui/space/space-extend";
import { WidthExtend } from "./src/configs/ui/width/width-extend";
import { SpacingExtend } from "./src/configs/ui/spacing/spacing-extend";
import { RadiusExtend } from "./src/configs/ui/radius/radius-extend";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    screens: {
      // => @media (min-width: 640px and max-width: 767px) { ... }
      mobile: { min: "0px", max: "479px" },
      mobileLS: { min: "480px", max: "779px" },
      tablet: { min: "780px", max: "899px" },
      tabletLS: { min: "900px", max: "1023px" },
      desktop: { min: "1024px", max: "1535px" },
      extra: { min: "1536px" },
    },
    container: {
      center: true,
      padding: {
        "padding-mobile": "1rem",
        "padding-desktop": "2rem",
      },
    },
    extend: {
      fontFamily: {
        lato: ["var(--lato-font-family)", ...fontFamily.sans],
      },
      textColor: {
        "gray-200-foreground": "hsl(var(--gray-700))",
      },
      colors: ColorExtends,
      borderRadius: RadiusExtend, //usage: rounded-md
      spacing: SpacingExtend, // usage : border-spacing-0
      gap: SpaceExtend,
      padding: SpaceExtend,
      margin: SpaceExtend,
      space: SpaceExtend, // usage: space-x-none
      width: WidthExtend,

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
