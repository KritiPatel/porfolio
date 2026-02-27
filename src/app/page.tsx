import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

function Divider() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--c-border)] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Education />
        <Resume />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
