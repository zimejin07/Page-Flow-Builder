export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];

export const theme = {
  extend: {
    transitionDuration: {
      150: "150ms",
    },
    transitionTimingFunction: {
      "ease-in-out": "ease-in-out",
    },
    animation: {
      "transition-all": "all 150ms ease-in-out",
    },
  },
};

export const plugins = [];
