import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  APropos,
  Certifications,
  Competences,
  Experiences,
  Formation,
  LanguesEtAssociatif,
  Projets,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const TITRE = "Linda KRID | Intelligence Artificielle & Génie Logiciel";
const DESCRIPTION =
  "Portfolio de Linda KRID, étudiante ingénieure en Génie Logiciel et Informatique Décisionnelle, spécialisée en Intelligence Artificielle, IA générative, LLMs, Machine Learning et développement logiciel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <APropos />
        <Experiences />
        <Projets />
        <Competences />
        <Formation />
        <Certifications />
        <LanguesEtAssociatif />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
