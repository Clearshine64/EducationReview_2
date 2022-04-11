module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    }
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    // themes: true,
    themes: [
      {
        mytheme: {
          "primary": "#570DF8",
          "secondary": "#44403c",
          "accent": "#f79521",
          "neutral": "#f79521",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#eab308",
          "error": "#ef4444",
        },
      }
      , 'dark'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}