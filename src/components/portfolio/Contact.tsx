import type { ReactNode } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { IconLink } from "./Nav";
import { profil, reseaux, PLACEHOLDER_URL } from "@/data/portfolio";

const linkedinActif = reseaux.linkedin !== PLACEHOLDER_URL;
const githubActif = reseaux.github !== PLACEHOLDER_URL;

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 halo opacity-70" />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Construisons quelque chose d’<span className="text-gradient">intelligent</span>{" "}
            ensemble.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Je suis actuellement à la recherche d’un stage de fin d’études (PFE) et ouverte aux
            opportunités dans les domaines de l’Intelligence Artificielle, de l’IA générative, du
            Machine Learning et du Génie Logiciel.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            <CarteContact
              icone={<MapPin className="size-5" />}
              label="Localisation"
              valeur={profil.localisation}
            />
            <CarteContact
              icone={<Github className="size-5" />}
              label="GitHub"
              valeur="Profil GitHub"
              href={githubActif ? reseaux.github : undefined}
              externe
            />
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profil.email}`}
              className="animated-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              Me contacter par email
            </a>
            {linkedinActif ? (
              <a
                href={reseaux.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-accent"
              >
                <Linkedin className="size-4" />
                Voir mon LinkedIn
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-muted-foreground/70"
              >
                <Linkedin className="size-4" />
                Voir mon LinkedIn
              </span>
            )}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
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
        </Reveal>
      </div>
    </section>
  );
}

function CarteContact({
  icone,
  label,
  valeur,
  href,
  externe = false,
}: {
  icone: ReactNode;
  label: string;
  valeur: string;
  href?: string | undefined;
  externe?: boolean;
}) {
  const base =
    "group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 text-left shadow-card";

  const contenu = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-elevated text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:bg-primary/10">
        {icone}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium">{label}</span>
        <span className="mt-0.5 block truncate text-sm text-muted-foreground">{valeur}</span>
      </span>
      {href && externe ? (
        <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      ) : null}
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(externe ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className={`${base} card-hover`}
        >
          {contenu}
        </a>
      ) : (
        <div aria-disabled="true" className={`${base} cursor-default opacity-75`}>
          {contenu}
        </div>
      )}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm">© 2026 Linda KRID — Tous droits réservés</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Conçu autour de l’IA, du logiciel et de l’innovation.
          </p>
        </div>
        <div className="flex items-center gap-2">
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
    </footer>
  );
}
