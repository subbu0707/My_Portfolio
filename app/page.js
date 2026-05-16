import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InteractiveBackdrop from "../components/InteractiveBackdrop";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="page-enter relative pb-4">
      <InteractiveBackdrop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Credentials />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
