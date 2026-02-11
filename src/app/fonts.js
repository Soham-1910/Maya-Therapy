import localFont from "next/font/local";

export const gopher = localFont({
    src: [
        {
            path: "./fonts/Gopher_light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Gopher_Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Gopher_Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-gopher",
    display: "swap",
});
