import { createFileRoute } from "@tanstack/react-router";
import { AcademicCaseStudy } from "@/components/projets/AcademicCaseStudy";

const DATA = {
  titre: "EventPlanner",
  categorie: "Laravel • Gestion d’événements",
  accroche:
    "Application web permettant de consulter, créer et gérer des événements et les inscriptions des utilisateurs.",
  technologies: ["PHP 8.2", "Laravel 12", "SQLite", "Vite", "Tailwind CSS", "Node.js"],
  presentation: (
    <p>
      EventPlanner est une application web développée avec Laravel dans un cadre pédagogique. Elle
      permet aux visiteurs de consulter les événements, aux utilisateurs de s’inscrire et aux
      administrateurs de gérer les catégories, les événements et les inscriptions.
    </p>
  ),
  fonctionnalites: [
    { titre: "Événements publics", texte: "Consultation des événements disponibles." },
    { titre: "Comptes utilisateurs", texte: "Création de compte, connexion et déconnexion." },
    { titre: "Inscriptions", texte: "Inscription des utilisateurs aux événements." },
    { titre: "Espace personnel", texte: "Consultation des inscriptions personnelles." },
    { titre: "Administration", texte: "Gestion des catégories, événements et participants." },
    { titre: "Archivage", texte: "Archivage des événements terminés." },
  ],
};

export const Route = createFileRoute("/projets/event-planner")({
  head: () => ({
    meta: [
      { title: "EventPlanner — Projet académique | Linda KRID" },
      { name: "description", content: DATA.accroche },
    ],
  }),
  component: () => (
    <AcademicCaseStudy
      data={DATA}
      precedent={{ label: "Clinique App", to: "/projets/clinique-app" }}
    />
  ),
});
