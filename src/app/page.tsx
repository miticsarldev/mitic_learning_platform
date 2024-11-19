import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 max-w-screen-xl mx-auto">
        <HeroSection />
      </main>
    </div>
  );
}
