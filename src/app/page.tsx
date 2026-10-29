import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClassesSection from "@/components/ClassesSection";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";
import FreeTrialSection from "@/components/FreeTrialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <HeroSection />
      <ClassesSection />
      <PersonalTrainingSection />
      <FreeTrialSection />
      <Footer />
    </main>
  );
}
