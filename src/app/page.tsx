import AboutSection from "./components/about";
import EmailSection from "./components/email";
import Footer from "./components/footer-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/nav-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
