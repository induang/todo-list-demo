module.exports = {
  content: ["./src/**/*.{html,tsx,jsx}"],
  theme: {
    extend: {
      spacing: {
        125: "500px",
      },
    },
  },
  plugins: [require("daisyui")],
};
