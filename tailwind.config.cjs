/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        750: "750px",
      },
      lineHeight: {
        13: "13px",
        18: "18px",
        22: "22px",
      },
      fontSize: {
        11: "11px",
        13: "13px",
        15: "15px",
        17: "17px",
        19: "19px",
      },
      colors: {
        // Grey
        Grey10: "#191919",
        Grey08: "#4C4C4C",
        Gray07: "#666666",
        Grey05: "#333333",
        Grey04: "#666666",
        Grey03: "#999999",
        Grey02: "#CCCCCC",
        Grey01: "#F3F3F3",
        White: "#FFFFFF",
        // Blue
        Blue03: "#008ED6",
        Blue04: "#0A72BA",
        Blue05: "#085B95",
        Blue06: "#12659F",
        // Red
        Red04: "#CB181A",
        Red03: "#DF2C2E",
        Red01: "#FFEFEF",
        ADARed04: "#D02F31",
        // green
        Green03: "#1eba9c",
        // yellow
        Yellow01: "#FEEFDB",
        // transparent
        Transparent: "rgba(255, 255, 255, 0)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
