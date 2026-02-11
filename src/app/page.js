import Navbar from "./components/Navbar";
import Home from "./Home/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Spacer so fixed navbar doesn’t overlap */}
      <div className="h-[96px]" />

      <Home />
      
    </main>
  );
}
