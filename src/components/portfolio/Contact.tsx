import { useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { IconLink } from "./Nav";
import { profil, reseaux, PLACEHOLDER_URL } from "@/data/portfolio";

export function Contact() {
  const [envoye, setEnvoye] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const objet = encodeURIComponent(String(data.get("objet") ?? ""));
    const corps = encodeURIComponent(
      `Nom : ${data.get("nom")}\nEmail : ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${profil.email}?subject=${objet}&body=${corps}`;
    setEnvoye(true);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 halo opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
            Construisons quelque chose d’<span className="text-gradient">intelligent</span>{" "}
            ensemble.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Je suis actuellement à la recherche d’un stage de fin d’études (PFE) et ouverte aux
            opportunités dans les domaines de l’Intelligence Artificielle, de l’IA générative, du
            Machine Learning et du Génie Logiciel.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">Email</dt>
              <dd>
                <a href={`mailto:${profil.email}`} className="hover:text-primary">
                  {profil.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">Localisation</dt>
              <dd>{profil.localisation}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-2">
            <IconLink href={reseaux.linkedin} label="LinkedIn">
              <Linkedin className="size-4" />
            </IconLink>
            <IconLink href={reseaux.github} label="GitHub">
              <Github className="size-4" />
            </IconLink>
          </div>
          {reseaux.linkedin === PLACEHOLDER_URL ? (
            <p className="mt-4 text-xs text-muted-foreground">
              Les liens LinkedIn et GitHub sont des emplacements temporaires : communiquez-moi vos
              adresses exactes pour les activer.
            </p>
          ) : null}
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-panel rounded-3xl p-6 shadow-card sm:p-8">
            {envoye ? (
              <div className="grid min-h-80 place-items-center text-center">
                <div>
                  <CheckCircle2 className="mx-auto size-12 text-cyan" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold">Merci pour votre message</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Votre logiciel de messagerie s’ouvre avec le message pré-rempli. Vous pouvez
                    aussi m’écrire directement à {profil.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnvoye(false)}
                    className="mt-6 rounded-full border border-border px-5 py-2 text-sm font-medium hover:bg-accent"
                  >
                    Écrire un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <Champ label="Nom" name="nom" autoComplete="name" />
                <Champ label="Email" name="email" type="email" autoComplete="email" />
                <Champ label="Objet" name="objet" />
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="animated-gradient mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  <Send className="size-4" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Champ({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
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
