import { ReactNode } from "react";
import { Footer } from "@/components/portfolio/Contact";
import {
  Cards,
  CaseHero,
  CaseNav,
  type Lien,
  NavigationProjets,
  Section,
} from "@/components/projets/CaseStudy";

export type AcademicCaseStudyData = {
  titre: string;
  categorie: string;
  accroche: string;
  technologies: string[];
  presentation: ReactNode;
  fonctionnalites: { titre: string; texte: string }[];
  sections?: { titre: string; intro: ReactNode; children?: ReactNode }[];
};

export function AcademicCaseStudy({
  data,
  precedent,
  suivant,
}: {
  data: AcademicCaseStudyData;
  precedent?: Lien;
  suivant?: Lien;
}) {
  return (
    <div className="min-h-screen bg-background">
      <CaseNav />
      <main>
        <CaseHero
          titre={data.titre}
          categorie={data.categorie}
          type="Projet académique"
          accroche={data.accroche}
          technologies={data.technologies}
          illustration={<AcademicIllustration titre={data.titre} />}
        />

        <Section titre="Présentation" eyebrow="Vue d’ensemble" intro={data.presentation} />

        <Section titre="Fonctionnalités principales">
          <Cards items={data.fonctionnalites} columns={2} />
        </Section>

        {data.sections?.map((section) => (
          <Section key={section.titre} titre={section.titre} intro={section.intro}>
            {section.children}
          </Section>
        ))}

        <NavigationProjets precedent={precedent} suivant={suivant} />
      </main>
      <Footer />
    </div>
  );
}

function AcademicIllustration({ titre }: { titre: string }) {
  return (
    <div className="grid aspect-[4/3] place-items-center rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-surface-elevated to-cyan/10 p-8 shadow-card">
      <div className="rounded-2xl border border-border bg-card/85 px-6 py-5 text-center shadow-card">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          Projet académique
        </p>
        <p className="mt-2 font-display text-lg font-semibold">{titre}</p>
      </div>
    </div>
  );
}
