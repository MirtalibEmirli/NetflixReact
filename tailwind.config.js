module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Düzgün yol qeyd edilib
  ],
  theme: {
    extend: {
      fontFamily: {
        netflix: ['"Netflix Sans"', '"Helvetica Neue"', '"Segoe UI"', "Roboto"],
        roboto: ["Roboto", "serif"],
        poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "serif"],
        Playfair: ["Playfair Display", "serif"],
        Libre: ["Libre Baskerville", "serif"],
        Noto:['Noto Sans PhagsPa','serif']
      },
      colors: {
        netflixRed: "#E50914", // Netflix qırmızı rəngi
      },
    },
  },
  plugins: [],
};
