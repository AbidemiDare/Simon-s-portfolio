import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Footer from "@/components/Footer/page";
import Hero from "@/components/Hero/page";
import Venture from "@/components/Venture/page";
import { ventures } from "@/lib/content";
import './globals.css';
import Header from "@/components/Header/page";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Header />
        <Hero />
      </div>
      {ventures.map((v) => (
        <Venture key={v.id} venture={v} />
      ))}
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
