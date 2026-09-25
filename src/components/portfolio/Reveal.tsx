import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionTitle({
  eyebrow,
  titre,
  sousTitre,
  align = "left",
}: {
  eyebrow?: string;
  titre: string;
  sousTitre?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">{titre}</h2>
      {sousTitre ? <p className="mt-4 text-base text-muted-foreground">{sousTitre}</p> : null}
    </Reveal>
  );
}
