import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Github, Linkedin, Lock, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { reseaux } from "@/data/portfolio";
import { Reveal } from "@/components/portfolio/Reveal";
import { IconLink } from "@/components/portfolio/Nav";
import { useTheme } from "@/components/portfolio/useTheme";

/* ---------------------------------------------------------------- header */

export function CaseNav() {
  const { theme, toggle } = useTheme();
  return (
    <header className="glass-panel sticky top-0 z-50 border-x-0 border-t-0">
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="font-display text-sm font-semibold tracking-tight">
          Linda<span className="text-gradient"> KRID</span>
        </Link>
        <Link
          to="/"
          hash="projets"
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          <span className="hidden sm:inline">Retour aux projets</span>
        </Link>
        <div className="flex items-center gap-1.5">
          <IconLink href={reseaux.linkedin} label="LinkedIn">
            <Linkedin className="size-4" />
          </IconLink>
          <IconLink href={reseaux.github} label="GitHub">
            <Github className="size-4" />
          </IconLink>
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ hero */

export function CaseHero({
  titre,
  sousTitre,
  categorie,
  type,
  periode,
  accroche,
  technologies,
  illustration,
}: {
  titre: string;
  sousTitre?: string;
  categorie: string;
  type: string;
  periode?: string;
  accroche: string;
  technologies: string[];
  illustration: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="halo absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-14 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">{categorie}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{titre}</h1>
          {sousTitre ? <p className="mt-3 text-lg font-medium text-cyan">{sousTitre}</p> : null}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {accroche}
          </p>
          <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Cadre
              </dt>
              <dd className="mt-1 text-sm font-medium">{type}</dd>
            </div>
            {periode ? (
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Période
                </dt>
                <dd className="mt-1 text-sm font-medium">{periode}</dd>
              </div>
            ) : null}
          </dl>
          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="mx-auto w-full max-w-md">
          {illustration}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- primitives */

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function Section({
  titre,
  eyebrow,
  intro,
  children,
  className,
}: {
  titre: string;
  eyebrow?: string;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-5 py-14 sm:px-8", className)}>
      <Reveal className="max-w-3xl">
        {eyebrow ? (
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{titre}</h2>
        {intro ? (
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            {intro}
          </div>
        ) : null}
      </Reveal>
      {children ? <div className="mt-9">{children}</div> : null}
    </section>
  );
}

export function Cards({
  items,
  columns = 3,
}: {
  items: { titre: string; texte?: ReactNode; icone?: ReactNode }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {items.map((it, i) => (
        <Reveal key={it.titre} delay={i * 60}>
          <div className="card-hover h-full rounded-2xl border border-border bg-card p-5">
            {it.icone ? <div className="mb-3 text-primary">{it.icone}</div> : null}
            <h3 className="text-base font-semibold">{it.titre}</h3>
            {it.texte ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.texte}</p>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Highlight({ titre, children }: { titre?: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
        {titre ? <h3 className="text-lg font-semibold">{titre}</h3> : null}
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </Reveal>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="rounded-2xl border border-border bg-card p-6 text-lg leading-relaxed font-medium text-foreground sm:p-8 sm:text-xl">
        {children}
      </p>
    </Reveal>
  );
}

/** Étapes d'un pipeline / d'une architecture, présentées en flux lisible. */
export function Flow({ steps }: { steps: { titre: string; texte?: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.titre} delay={i * 50}>
          <div className="card-hover relative h-full rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[11px] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-semibold">{s.titre}</h3>
            </div>
            {s.texte ? (
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.texte}</p>
            ) : null}
            {i < steps.length - 1 ? (
              <ArrowRight
                className="absolute top-1/2 -right-3 hidden size-4 -translate-y-1/2 text-primary/40 sm:block"
                aria-hidden="true"
              />
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Suite compacte « A → B → C ». */
export function Chain({ items }: { items: string[] }) {
  return (
    <Reveal className="flex flex-wrap items-center gap-2">
      {items.map((it, i) => (
        <span key={it} className="flex items-center gap-2">
          <span className="rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium">
            {it}
          </span>
          {i < items.length - 1 ? (
            <ArrowRight className="size-4 text-primary/50" aria-hidden="true" />
          ) : null}
        </span>
      ))}
    </Reveal>
  );
}

export function DefiSolution({
  items,
}: {
  items: { titre: string; defi: string; solution: string }[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((it, i) => (
        <Reveal key={it.titre} delay={i * 60}>
          <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold">{it.titre}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
                Défi
              </span>
              <br />
              {it.defi}
            </p>
            <p className="mt-4 rounded-xl border border-cyan/30 bg-cyan/5 p-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                Solution
              </span>
              <br />
              {it.solution}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Puces({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export function Indicateurs({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <Reveal key={it} delay={i * 60}>
          <div className="rounded-2xl border border-border bg-surface-elevated p-5 text-center text-sm font-medium">
            {it}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CodeSourcePrive() {
  return (
    <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" aria-hidden="true" />
        Code source privé
      </p>
    </Reveal>
  );
}

/* -------------------------------------------------------------- galerie */

export type Capture = { titre: string; src?: string };

/** N'affiche rien tant qu'aucune capture réelle n'est fournie. */
export function Galerie({
  titre,
  captures,
  legende,
}: {
  titre: string;
  captures: Capture[];
  legende?: string;
}) {
  const disponibles = captures.filter((c) => !!c.src);
  if (disponibles.length === 0) return null;

  return (
    <Section titre={titre}>
      <div className="grid gap-5 sm:grid-cols-2">
        {disponibles.map((c, i) => (
          <Reveal key={c.titre} delay={i * 60}>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <a href={c.src} target="_blank" rel="noreferrer noopener">
                <img
                  src={c.src}
                  alt={c.titre}
                  loading="lazy"
                  className="w-full transition-transform duration-500 hover:scale-[1.02]"
                />
              </a>
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                {c.titre}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      {legende ? <p className="mt-4 text-sm text-muted-foreground">{legende}</p> : null}
    </Section>
  );
}

/* ----------------------------------------------------------- navigation */

export type Lien = {
  label: string;
  to:
    | "/projets/optisense"
    | "/projets/carbonai"
    | "/projets/pipeline-donnees-web"
    | "/projets/smartscan"
    | "/projets/data-mining-project"
    | "/projets/gestion-projets";
};

export function NavigationProjets({ precedent, suivant }: { precedent?: Lien; suivant?: Lien }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-6 pb-20 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-10 sm:flex-row">
        {precedent ? (
          <Link
            to={precedent.to}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            {precedent.label}
          </Link>
        ) : (
          <span />
        )}
        <Link
          to="/"
          hash="projets"
          className="rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary/20"
        >
          Voir tous mes projets
        </Link>
        {suivant ? (
          <Link
            to={suivant.to}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {suivant.label}
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- illustrations */

export function IllustrationConversation() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full"
      role="img"
      aria-label="Conversations analysées par l’intelligence artificielle"
    >
      <defs>
        <linearGradient id="opti-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.17 258)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="oklch(0.72 0.13 210)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="400" height="300" rx="26" fill="url(#opti-g)" />
      <rect
        x="44"
        y="56"
        width="180"
        height="34"
        rx="17"
        className="fill-card stroke-border"
        strokeWidth="1.2"
      />
      <rect
        x="196"
        y="106"
        width="180"
        height="34"
        rx="17"
        className="fill-card stroke-border"
        strokeWidth="1.2"
      />
      <rect
        x="44"
        y="156"
        width="150"
        height="34"
        rx="17"
        className="fill-card stroke-border"
        strokeWidth="1.2"
      />
      <circle cx="210" cy="246" r="34" className="fill-card stroke-border" strokeWidth="1.2" />
      <path
        d="M196 246h28M210 232v28"
        stroke="oklch(0.62 0.17 258)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M134 190v30M210 190v22"
        stroke="oklch(0.72 0.13 210)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
    </svg>
  );
}

export function IllustrationCarbone() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full"
      role="img"
      aria-label="Données d’activité converties en empreinte carbone"
    >
      <defs>
        <linearGradient id="carb-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.13 210)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="oklch(0.75 0.14 150)" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="400" height="300" rx="26" fill="url(#carb-g)" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={64 + i * 70}
          y={220 - i * 34}
          width="42"
          height={50 + i * 34}
          rx="10"
          className="fill-card stroke-border"
          strokeWidth="1.2"
        />
      ))}
      <path
        d="M60 110c40-36 92-36 132 0s92 36 132 0"
        fill="none"
        stroke="oklch(0.62 0.17 258)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="324" cy="110" r="7" fill="oklch(0.72 0.13 210)" />
    </svg>
  );
}

export function IllustrationPipeline() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="w-full"
      role="img"
      aria-label="Du web aux données structurées"
    >
      <defs>
        <linearGradient id="pipe-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.17 258)" stopOpacity="0.14" />
          <stop offset="100%" stopColor="oklch(0.68 0.16 300)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="400" height="300" rx="26" fill="url(#pipe-g)" />
      <circle cx="96" cy="160" r="42" className="fill-card stroke-border" strokeWidth="1.2" />
      <path
        d="M54 160h84M96 118c22 26 22 58 0 84M96 118c-22 26-22 58 0 84"
        fill="none"
        stroke="oklch(0.62 0.17 258)"
        strokeWidth="1.5"
      />
      <path d="M146 160h58" stroke="oklch(0.72 0.13 210)" strokeWidth="2" strokeDasharray="5 6" />
      <rect
        x="210"
        y="124"
        width="72"
        height="72"
        rx="18"
        className="fill-card stroke-border"
        strokeWidth="1.2"
      />
      <path
        d="M228 160h36M246 142v36"
        stroke="oklch(0.68 0.16 300)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M290 160h24" stroke="oklch(0.72 0.13 210)" strokeWidth="2" strokeDasharray="5 6" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="320"
          y={128 + i * 26}
          width="56"
          height="18"
          rx="6"
          className="fill-card stroke-border"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}
