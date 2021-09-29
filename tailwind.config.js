module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80')",
      }),
      colors: {
        sitetheme: {
          blue: "#000066",
          lightblue: "##7D7DB1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
