import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-18">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}