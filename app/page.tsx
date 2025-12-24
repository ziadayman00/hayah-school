import AboutSummary from "@/components/AboutSummary";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stages from "@/components/Stages";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSummary />
      <Stages />
      <ApplicationForm />
      <Footer />
    </main>
  );
}