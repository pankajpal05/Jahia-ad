/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 1px 20px 0px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: "#0d6efd",
        primary_hover: "#2f80f7",
        secondary: "#F5F5FA",
        secondary_hover: "#7a7d80",
        tertiary: "#000000",
        tertiary_hover: "#444444",
        outline: "#f2f5f7"
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'serif': ['Sora', 'ui-serif', 'Georgia', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      spacing: {
        1: "0.25rem", // 4px
        2: "0.5rem", // 8px
        3: "0.75rem", // 12px
        4: "1rem", // 16px
        5: "1.25rem", // 20px
        6: "1.5rem", // 24px
        8: "2rem", // 32px
      },
    },
  },
  safelist: [
    {
      pattern: /^grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)$/, // Safelist dynamic grid-cols-*
      variants: ['lg'],
    },
    {
      pattern: /^text-(primary|secondary|tertiary)$/, // Safelist dynamic text-* colors
    },
    {
      pattern: /^bg-(primary|secondary|tertiary)$/, // Safelist dynamic bg-* colors
    },
    {
      pattern: /^bg-(primary|secondary|tertiary)_hover$/, // Safelist dynamic hover:bg-* colors
      variants: ['hover'],
    },
  ],
  plugins: [],
};