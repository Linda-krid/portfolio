import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";
import { IconLink } from "./Nav";
import { profil, reseaux, rotationMetiers } from "@/data/portfolio";

function useRotation(mots: string[]) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % mots.length), 2400);
    return () => window.clearInterval(id);
  }, [mots.length]);
  return mots[index];
}

export function Hero() {
  const mot = useRotation(rotationMetiers);

  return (
    <section id="accueil" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-10 halo" />
      <div className="absolute inset-0 -z-10">
        <NeuralBackground />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide">
            <span className="size-2 rounded-full bg-cyan pulse-dot" />
            Disponible pour un PFE
          </span>

          <p className="mt-7 text-lg text-muted-foreground">Bonjour, je suis Linda KRID</p>
          <h1 className="mt-3 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Élève ingénieure en <span className="text-gradient">Génie Logiciel</span> &amp;
            <span className="text-gradient"> Informatique Décisionnelle</span>
          </h1>

          <p className="mt-6 flex flex-wrap items-baseline gap-2 font-mono text-sm sm:text-base">
            <span className="text-muted-foreground">Orientation —</span>
            <span
              key={mot}
              className="text-cyan duration-500 animate-in fade-in slide-in-from-bottom-2"
            >
              {mot}
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {profil.introduction}
          </p>

          <p className="mt-5 font-display text-lg font-medium">
            À la recherche d’un stage de fin d’études (PFE)
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projets"
              className="animated-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Découvrir mes projets
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-accent"
            >
              Me contacter
            </a>
            <a
              href={profil.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary/20"
            >
              <Download className="size-4" />
              Télécharger mon CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <IconLink href={reseaux.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </IconLink>
            <IconLink href={reseaux.github} label="GitHub">
              <Github className="size-4" />
            </IconLink>
            <IconLink href={`mailto:${profil.email}`} label="Email">
              <Mail className="size-4" />
            </IconLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-sm motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
          <div
            className="animated-gradient absolute -inset-2 rounded-[2rem] opacity-20 blur-xl"
            aria-hidden="true"
          />
          <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-2 shadow-card sm:p-3">
            <img
              src="/images/linda-portrait.webp"
              alt="Portrait professionnel de Linda KRID"
              width={900}
              height={1125}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-center transition-transform duration-500 motion-safe:hover:scale-[1.01]"
            />
            <dl className="grid grid-cols-2 gap-3 px-2 py-4 text-xs">
              <div>
                <dt className="text-muted-foreground">Localisation</dt>
                <dd className="mt-1 font-medium">{profil.localisation}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Recherche</dt>
                <dd className="mt-1 font-medium">Stage PFE</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
