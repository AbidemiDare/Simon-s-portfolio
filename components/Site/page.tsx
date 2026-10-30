"use client";

import { useEffect, useState } from "react";
import { ventures } from "@/lib/content";
import Header from "../Header/page";
import Hero from "../Hero/page";
import Venture from "../Venture/page";
import About from "../About/page";
import Contact from "../Contact/page";
import Footer from "../Footer/page";

const views = ["home", "estate", "crypto", "shoes", "about", "contact"] as const;
type View = (typeof views)[number];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>;
}

export default function Site() {
  const [view, setView] = useState<View>("home");

  // The nav links are plain anchors (#estate, #contact...). The URL hash picks the view.
  useEffect(() => {
    const read = () => {
      const h = window.location.hash.slice(1) as View;
      setView(views.includes(h) ? h : "home");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const venture = ventures.find((v) => v.id === view);

  return (
    <div className="flex min-h-svh flex-col">
      <Container>
        <Header active={view} />
      </Container>

      <main key={view} className="flex flex-1 flex-col">
        {view === "home" && (
          <Container>
            <Hero />
          </Container>
        )}
        {venture && <Venture venture={venture} />}
        {view === "about" && (
          <Container>
            <About />
          </Container>
        )}
        {view === "contact" && (
          <Container>
            <Contact />
          </Container>
        )}
      </main>

      <Container>
        <div className="pt-8">
          <Footer />
        </div>
      </Container>
    </div>
  );
}
