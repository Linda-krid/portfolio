import { createFileRoute } from "@tanstack/react-router";
import { AcademicCaseStudy } from "@/components/projets/AcademicCaseStudy";

const DATA = {
  titre: "Gestion Projets",
  categorie: "Java • Jakarta EE • Gestion",
  accroche:
    "Application web de gestion de projets permettant d’organiser les utilisateurs, les projets, les catégories et les affectations.",
  technologies: ["Java 17", "Jakarta EE", "JSP", "JPA", "Hibernate", "MySQL", "Maven"],
  presentation: (
    <p>
      Gestion Projets est une application web développée avec Jakarta EE dans le cadre du semestre 2
      JEE. Elle permet aux administrateurs de gérer les utilisateurs, les projets, les catégories et
      les affectations, tandis que les employés peuvent consulter les projets auxquels ils
      participent.
    </p>
  ),
  fonctionnalites: [
    { titre: "Authentification", texte: "Connexion et déconnexion des utilisateurs." },
    {
      titre: "Gestion des rôles",
      texte: "Accès différencié pour les administrateurs et les employés.",
    },
    {
      titre: "Gestion des projets",
      texte: "Création et administration des projets et des catégories.",
    },
    {
      titre: "Affectation des employés",
      texte: "Association des employés aux projets correspondants.",
    },
    { titre: "Consultation", texte: "Accès des employés aux projets auxquels ils participent." },
    { titre: "Tableau de bord", texte: "Vue dédiée à l’administration de la plateforme." },
  ],
};

export const Route = createFileRoute("/projets/gestion-projets")({
  head: () => ({
    meta: [
      { title: "Gestion Projets — Projet académique | Linda KRID" },
      { name: "description", content: DATA.accroche },
    ],
  }),
  component: () => (
    <AcademicCaseStudy
      data={DATA}
      precedent={{ label: "Data Mining Project", to: "/projets/data-mining-project" }}
      suivant={{ label: "Clinique App", to: "/projets/clinique-app" }}
    />
  ),
});
