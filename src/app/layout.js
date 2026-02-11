import "./globals.css";
import { gopher } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gopher.variable}>
      <body className="bg-[#DCD1E6] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
