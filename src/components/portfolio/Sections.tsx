import { useState } from "react";
import { Award, Building2, Calendar, GraduationCap, MapPin, Sparkles, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  type Projet,
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
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
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
  const [projetActif, setProjetActif] = useState<Projet | null>(null);

  return (
    <section id="projets" className="relative py-24">
      <div className="absolute inset-0 -z-10 halo opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Réalisations"
          titre="Mes projets"
          sousTitre="Une sélection de projets combinant Intelligence Artificielle, IA générative, automatisation et développement logiciel."
        />

        <div className="mt-14 space-y-10">
          {projets.map((p, i) => (
            <Reveal as="article" key={p.id} delay={i * 80}>
              <div className="card-hover grid overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7 sm:p-10">
                  <div className="flex items-center gap-3 font-mono text-xs text-primary">
                    <span className="text-2xl font-semibold opacity-40">{p.numero}</span>
                    <span className="uppercase tracking-[0.2em]">{p.categorie}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{p.titre}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {p.fonctionnalites.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setProjetActif(p)}
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary/20"
                  >
                    Découvrir le projet
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={projetActif !== null} onOpenChange={(o) => !o && setProjetActif(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-3xl">
          {projetActif ? (
            <>
              <DialogHeader>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {projetActif.categorie}
                </p>
                <DialogTitle className="text-2xl">{projetActif.titre}</DialogTitle>
                <DialogDescription>{projetActif.description}</DialogDescription>
              </DialogHeader>

              <img
                src={projetActif.image}
                alt={projetActif.imageAlt}
                loading="lazy"
                width={1280}
                height={800}
                className="mt-2 w-full rounded-xl border border-border object-cover"
              />

              <Bloc titre="Présentation">{projetActif.description}</Bloc>
              <Bloc titre="Problématique">{projetActif.problematique}</Bloc>
              <Bloc titre="Solution">{projetActif.solution}</Bloc>
              <Bloc titre="Architecture">{projetActif.architecture}</Bloc>

              <div>
                <h4 className="font-display text-sm font-semibold">Technologies</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {projetActif.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold">Fonctionnalités principales</h4>
                <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                  {projetActif.fonctionnalites.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold">Captures d’écran</h4>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  {[1, 2].map((n) => (
                    <div
                      key={n}
                      className="grid aspect-video place-items-center rounded-xl border border-dashed border-border bg-surface-elevated p-4 text-center text-xs text-muted-foreground"
                    >
                      Capture d’écran {n} à ajouter
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Bloc({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{titre}</h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</p>
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
                    className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  >
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
              <button
                type="button"
                disabled
                title="Certificat à ajouter prochainement"
                className="mt-6 w-fit cursor-not-allowed rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground opacity-60"
              >
                Voir le certificat
              </button>
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
