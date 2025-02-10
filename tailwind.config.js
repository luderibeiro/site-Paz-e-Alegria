module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#08ad9c",
                    dark: "#0a9587",
                },
                secondary: {
                    DEFAULT: "#3299dc",
                },
                wood: {
                    light: "#5C4033",
                    dark: "#3E2723",
                },
                amber: {
                    100: "#FFECB3",
                    500: "#FFC107",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
            spacing: {
                128: "32rem",
            },
        },
        fontFamily: {
            logo: ["Playfair Display", "serif"],
        },
        letterSpacing: {
            logo: "0.05em",
        },
    },
    plugins: [],
};
