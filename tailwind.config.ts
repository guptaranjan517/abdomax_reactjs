import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "475px",
        desktop: "991px",
        "3xl": "1700px",
        bigscreen: "1900px",
      },
      backgroundSize: {
        "50%": "50%",
        "28%": "28%",
      },
      fontFamily: {
        Public_Sans: ["Public Sans", "sans-serif"],
        DIN: ["DIN Condensed", "sans-serif"],
      },
      boxShadow: {
        cardshadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        formbottomborderbg:
          "linear-gradient(left, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.20), rgba(0, 0, 0, 0))",
        selecttimebggradient:
          "linear-gradient(to right, transparent 10%, #33c7de0d 60%, transparent 100%)",
        bgAbs: "url('/images/absBg.png')",
        bgFlanks: "url('/images/flanksArea.png')",
        bgUpperArms: "url('/images/upperArmsArea.png')",
        bgButtocks: "url('/images/buttocksArea.png')",
        bgThigh: "url('/images/thighArea.png')",
        bgClaves: "url('/images/clavesArea.png')",
        bgBlush: "url('/images/blushImg.svg')",
        mobileBlushImg: "url('/images/mobileBlushImg.svg')",
        bgStar: "url('/images/bgStar.png')",
        bgAbout:
          "linear-gradient(to bottom right, rgba(149, 219, 50, 0.15) 0%, #0c0c0c 30%)",
        bgBannercolor:
          "linear-gradient(to right, rgba(149, 219, 50, 0.15) 0%, #000000 50%)",
        bgTreatedArea:
          "linear-gradient(to bottom, rgba(149, 219, 50, 0.07) 0%, #0c0c0c 100%)",

        bgAnyQuestion: "url('/images/anyQusetion.png')",
        bgAnyQuestionMobile: "url('/images/anyQusetion-mobile.svg')",
        bgBanner: "url('/images/banner.png')",
        bgJourney: "url('/images/journey.png')",
        SelectDatebg: "url('/images/datebanner.png')",
        SelectDatebgshadow: "url('/images/datebanner-shadow.png')",
        ContactUsbg: "url('/images/contact-us-banner.png')",
        progressBanner: "url('/images/progressBanner.png')",
        medicalNoticeBanner: "url('/images/medicalNoticeBanner.png')",
        listOfPriceBanner: "url('/images/listOfPriceBanner.png')",
        bgTickCardLeft:
          "linear-gradient(to right, rgba(25, 25, 25, 0.5) 30%, rgba(0, 0, 0, 0.5) 50%)",
        bgTickCardRight:
          "linear-gradient(to left, rgba(25, 25, 25, 0.5) 30%, rgba(0, 0, 0, 0.5) 50%)",
      },
      borderColor: {
        "custom-gradient":
          "linear-gradient(0deg, #000000 0%, #95DB32 7.56%, #95DB32 54%, #95DB32 7.56%, #000000 0%)",
      },
      colors: {
        lightGreen: "#95DB32",
        DarkBlue: "#009FB7",
        lightBlue: "#1DBDD5",
        txtBlack: "#191919",
        bgFooter: "#1C1C1C",
        bgArrow: "#7AB429",
        lightBlack: "#222529",
        bgSliderArrow: "#24272B",
        txtArrow: "#D9D9D9",
        placeholdertxt: "#ffffffbf",
        bgNotification: "#95DB32",
        selecttimebg: "#191919",
        stepstext: "#ffffff99",
        morningafterborder: "#ffffff0f",
        morningaftertxt: "#1DBDD5",
        graybutton: "#525252",
        inputfieldbg: "#ffffff0f",
        inputfieldtxt: "#ffffffb3",
        popuptext: "#000000b3",
        bgSubscriptionCard: "#383C42",
        bgReview: "#131212",
      },
      height: {
        "10p": "10px",
        "18p": "18px",
        "52p": "52px",
        100: "100px",
        200: "200px",
        300: "300px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1100: "1100px",
      },
      width: {
        "52p": "52px",
        400: "400px",
        450: "450px",
        500: "500px",
        600: "600px",
      },
      spacing: {
        "2p": "2px",
        "10p": "10px",
      },
      fontSize: {
        "15p": "15px",
        "22p": "22px",
      },
    },
  },
  plugins: [],
};
export default config;
