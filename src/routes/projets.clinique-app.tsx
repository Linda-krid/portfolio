import { createFileRoute } from "@tanstack/react-router";
import { AcademicCaseStudy } from "@/components/projets/AcademicCaseStudy";

const DATA = {
  titre: "Clinique App",
  categorie: "Angular • Firebase • Gestion",
  accroche:
    "Application web de gestion d’une clinique pour organiser les patients, les médecins, les rendez-vous et les ordonnances.",
  technologies: ["Angular 21", "TypeScript", "Firebase", "AngularFire", "Bootstrap 5", "Chart.js"],
  presentation: (
    <p>
      Clinique App est une application web développée avec Angular et Firebase dans un cadre
      académique. Elle facilite la gestion d’une clinique grâce à une authentification et à un
      tableau de bord adaptés aux rôles des utilisateurs.
    </p>
  ),
  fonctionnalites: [
    { titre: "Authentification", texte: "Inscription et connexion des utilisateurs." },
    {
      titre: "Gestion des patients",
      texte: "Création et consultation des informations des patients.",
    },
    { titre: "Gestion des médecins", texte: "Organisation des médecins et des spécialités." },
    { titre: "Rendez-vous", texte: "Gestion des rendez-vous de la clinique." },
    { titre: "Ordonnances", texte: "Création et consultation des ordonnances." },
    { titre: "Tableau de bord", texte: "Accès aux informations selon le rôle de l’utilisateur." },
  ],
};

export const Route = createFileRoute("/projets/clinique-app")({
  head: () => ({
    meta: [
      { title: "Clinique App — Projet académique | Linda KRID" },
      { name: "description", content: DATA.accroche },
    ],
  }),
  component: () => (
    <AcademicCaseStudy
      data={DATA}
      precedent={{ label: "Gestion Projets", to: "/projets/gestion-projets" }}
      suivant={{ label: "EventPlanner", to: "/projets/event-planner" }}
    />
  ),
});
