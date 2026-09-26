import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profil, reseaux, sections, PLACEHOLDER_URL } from "@/data/portfolio";
import { useActiveSection, useTheme } from "./useTheme";

const ids = sections.map((s) => s.id);

export function Nav() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-x-0 border-t-0 py-2" : "border-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-5 sm:px-8">
        <a href="#accueil" className="font-display text-sm font-semibold tracking-tight">
          Linda<span className="text-gradient"> KRID</span>
        </a>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === s.id && "text-foreground",
                )}
              >
                {s.label}
                {active === s.id ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px animated-gradient" />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
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
          <a
            href={profil.cv}
            download
            className="hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/20 sm:inline-flex"
          >
            <Download className="size-4" />
            Télécharger mon CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel mx-4 mt-3 rounded-2xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-accent",
                    active === s.id ? "bg-accent text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profil.cv}
                download
                className="mt-1 flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-medium"
              >
                <Download className="size-4" />
                Télécharger mon CV
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  if (href === PLACEHOLDER_URL) {
    return (
      <span
        aria-label={label}
        title={`${label} — lien à ajouter`}
        className="grid size-9 cursor-default place-items-center rounded-full border border-border text-muted-foreground/50"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noreferrer noopener"
      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
    >
      {children}
    </a>
  );
}
