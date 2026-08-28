import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Impact from '@/components/Impact';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Gaming from '@/components/Gaming';
import Ambassadors from '@/components/Ambassadors';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-50">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Work />
        <Skills />
        <Gaming />
        <Ambassadors />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
