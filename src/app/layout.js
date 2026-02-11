import "./globals.css";
import { gopher } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${gopher.variable} bg-[#DCD1E6] font-sans antialiased`}
      >
        <Navbar /> {/* Only here */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}