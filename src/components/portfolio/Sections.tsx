import { Link } from "@tanstack/react-router";
import {
  Award,
  Braces,
  Building2,
  Calendar,
  Code2,
  Container,
  Cpu,
  Database,
  GraduationCap,
  FolderKanban,
  MapPin,
  ScanLine,
  Server,
  Sparkles,
  ChartNoAxesCombined,
  Users,
} from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import {
  certifications,
  competences,
  domaines,
  experiences,
  formations,
  langues,
  profil,
  projets,
  vieAssociative,
} from "@/data/portfolio";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function APropos() {
  return (
    <section id="a-propos" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionTitle eyebrow="À propos" titre="À propos de moi" />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          {profil.aPropos.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {domaines.map((d, i) => (
            <Reveal as="li" key={d.titre} delay={i * 70}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-5">
                <Sparkles className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">{d.titre}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.texte}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Experiences() {
  return (
    <section id="experiences" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionTitle
        eyebrow="Parcours"
        titre="Expériences professionnelles"
        sousTitre="Des projets concrets mêlant Intelligence Artificielle, automatisation et développement web."
      />
      <ol className="relative mt-14 ml-3 space-y-10 border-l border-border pl-8 sm:ml-6">
        {experiences.map((exp, i) => (
          <Reveal as="li" key={exp.projet} delay={i * 90} className="relative">
            <span className="animated-gradient absolute -left-[41px] mt-2 size-3.5 rounded-full ring-4 ring-background" />
            <div className="card-hover rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 font-medium text-foreground">
                  <Building2 className="size-4 text-primary" aria-hidden="true" />
                  {exp.entreprise}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4" aria-hidden="true" />
                  {exp.periode}
                </span>
                <span>{exp.intitule}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{exp.projet}</h3>
              {exp.sousTitre ? (
                <p className="mt-1 text-sm font-medium text-cyan">{exp.sousTitre}</p>
              ) : null}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Projets() {
  return (
    <section id="projets" className="relative py-24">
      <div className="absolute inset-0 -z-10 halo opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Réalisations"
          titre="Mes projets"
          sousTitre="Une sélection de projets combinant Intelligence Artificielle, IA générative, automatisation et développement logiciel."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((p, i) => (
            <Reveal as="article" key={p.id} delay={i * 80}>
              <div className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-36 w-full object-cover brightness-[1.04] saturate-[0.62] sm:h-40"
                  />
                ) : (
                  <ProjetVisual id={p.id} />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-3 font-mono text-[11px] text-primary">
                    <span className="text-xl font-semibold opacity-40">{p.numero}</span>
                    <span className="pt-1 uppercase tracking-[0.16em]">
                      {p.type ? `${p.type} · ` : ""}
                      {p.categorie}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{p.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.fonctionnalites.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  {p.type ? (
                    <a
                      href={`/projets/${p.id}`}
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-cyan"
                    >
                      Découvrir le projet <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <Link
                      to={
                        p.id === "pipeline-web"
                          ? "/projets/pipeline-donnees-web"
                          : `/projets/${p.id}`
                      }
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-cyan"
                    >
                      Découvrir le projet <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjetVisual({ id }: { id: string }) {
  const Icon =
    id === "smartscan"
      ? ScanLine
      : id === "data-mining-project"
        ? ChartNoAxesCombined
        : FolderKanban;
  const libelle =
    id === "smartscan"
      ? "Reconnaissance mobile"
      : id === "data-mining-project"
        ? "Analyse de données"
        : id === "gestion-projets"
          ? "Gestion applicative"
          : id === "clinique-app"
            ? "Gestion médicale"
            : "Événements en ligne";

  return (
    <div className="relative grid h-36 place-items-center overflow-hidden bg-gradient-to-br from-primary/10 via-surface-elevated to-cyan/10 text-primary sm:h-40">
      <div className="absolute inset-x-8 top-8 h-px bg-primary/15" />
      <div className="absolute inset-x-14 bottom-8 h-px bg-cyan/20" />
      <div className="relative grid place-items-center gap-2 rounded-2xl border border-primary/20 bg-card/85 px-6 py-4 shadow-card">
        <Icon className="size-7 text-primary/80" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-mono text-[11px] text-muted-foreground">{libelle}</span>
      </div>
    </div>
  );
}

export function Competences() {
  return (
    <section id="competences" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionTitle
        eyebrow="Savoir-faire"
        titre="Compétences techniques"
        sousTitre="Technologies et méthodologies utilisées dans mes projets académiques et professionnels."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {competences.map((groupe, i) => (
          <Reveal key={groupe.categorie} delay={i * 60}>
            <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-sm font-semibold tracking-wide text-cyan uppercase">
                {groupe.categorie}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {groupe.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
                  >
                    <CompetenceIcon nom={item} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CompetenceIcon({ nom }: { nom: string }) {
  const Icon =
    nom === "Docker"
      ? Container
      : nom === "Python" || nom === "Java" || nom === "C++" || nom === "PHP" || nom === "C#"
        ? Code2
        : nom === "SQL" || nom === "MySQL" || nom === "PostgreSQL" || nom === "MongoDB"
          ? Database
          : nom === "FastAPI" || nom === "Spring Boot" || nom === ".NET"
            ? Server
            : nom === "TensorFlow" || nom === "PyTorch" || nom === "Keras"
              ? Cpu
              : nom === "RAG" || nom === "LLMs" || nom === "Fine-tuning"
                ? Braces
                : Sparkles;

  return <Icon className="size-3.5 text-primary/75" aria-hidden="true" />;
}

export function Formation() {
  return (
    <section id="formation" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionTitle eyebrow="Académique" titre="Formation" />
      <ol className="relative mt-14 ml-3 space-y-8 border-l border-border pl-8 sm:ml-6">
        {formations.map((f, i) => (
          <Reveal as="li" key={f.periode} delay={i * 80} className="relative">
            <span
              className={
                f.actuel
                  ? "animated-gradient absolute -left-[41px] mt-2 size-3.5 rounded-full ring-4 ring-background"
                  : "absolute -left-[41px] mt-2 size-3.5 rounded-full bg-border ring-4 ring-background"
              }
            />
            <div
              className={
                f.actuel
                  ? "card-hover rounded-2xl border border-primary/40 bg-card p-6 shadow-card"
                  : "card-hover rounded-2xl border border-border bg-card p-6"
              }
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4" aria-hidden="true" />
                  {f.periode}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden="true" />
                  {f.lieu}
                </span>
                {f.actuel ? (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-xs font-medium text-foreground">
                    En cours
                  </span>
                ) : null}
              </div>
              <h3 className="mt-3 inline-flex items-center gap-2 text-lg font-semibold">
                <GraduationCap className="size-5 text-primary" aria-hidden="true" />
                {f.etablissement}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.intitule}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionTitle eyebrow="Reconnaissances" titre="Certifications" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.titre} delay={i * 70}>
            <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <Award className="size-5 text-primary" aria-hidden="true" />
                <span className="font-mono text-xs text-muted-foreground">{c.annee}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{c.titre}</h3>
              <p className="mt-1 text-sm text-cyan">{c.sousTitre}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function LanguesEtAssociatif() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Langues</h2>
          </Reveal>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {langues.map((l, i) => (
              <Reveal as="li" key={l.langue} delay={i * 50}>
                <div className="flex items-baseline justify-between py-4">
                  <span className="font-display text-base font-medium">{l.langue}</span>
                  <span className="font-mono text-sm text-muted-foreground">{l.niveau}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Vie associative</h2>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {vieAssociative.map((v, i) => (
              <Reveal as="li" key={v.nom} delay={i * 50}>
                <div className="card-hover flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium">
                  <Users className="size-4 text-primary" aria-hidden="true" />
                  {v.nom}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
