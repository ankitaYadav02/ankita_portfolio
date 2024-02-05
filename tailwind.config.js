/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        DEFAULT: "var(--primary-6)",
        1: "var(--primary-1)",
        2: "var(--primary-2)",
        3: "var(--primary-3)",
        4: "var(--primary-4)",
        5: "var(--primary-5)",
        6: "var(--primary-6)",
        7: "var(--primary-7)",
        8: "var(--primary-8)",
        9: "var(--primary-9)",
        10: "var(--primary-10)",
        11: "var(--primary-11)",
        12: "var(--primary-12)",
      },
    },
  },
  plugins: [],
};
