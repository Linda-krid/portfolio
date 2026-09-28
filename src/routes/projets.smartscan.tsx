import { createFileRoute } from "@tanstack/react-router";
import { Cards } from "@/components/projets/CaseStudy";
import { AcademicCaseStudy } from "@/components/projets/AcademicCaseStudy";

const DATA = {
  titre: "SmartScan",
  categorie: "Mobile • IA • Computer Vision",
  accroche:
    "Application mobile Flutter transformant la caméra du téléphone en assistant de reconnaissance intelligent.",
  technologies: [
    "Flutter",
    "Dart",
    "Google ML Kit",
    "Firebase",
    "Flutter Tesseract OCR",
    "Provider",
  ],
  presentation: (
    <p>
      SmartScan est une application mobile développée avec Flutter. Elle permet d’extraire du texte
      depuis une image, de lire des QR codes et des codes-barres, et d’analyser des objets et des
      visages directement sur l’appareil.
    </p>
  ),
  fonctionnalites: [
    {
      titre: "Reconnaissance de texte",
      texte: "Extraction de texte depuis une image grâce à l’OCR.",
    },
    {
      titre: "QR codes et codes-barres",
      texte: "Lecture des codes capturés avec la caméra du téléphone.",
    },
    { titre: "Analyse visuelle", texte: "Détection d’objets et de visages dans les images." },
    {
      titre: "Historique des analyses",
      texte: "Conservation d’un historique et affichage de statistiques.",
    },
    { titre: "Authentification", texte: "Authentification gérée avec Firebase." },
    {
      titre: "Interface multilingue",
      texte: "Interface disponible en français, anglais et arabe.",
    },
  ],
  sections: [
    {
      titre: "Ce que le projet m’a apporté",
      intro: (
        <p>
          Ce projet met en pratique le développement mobile Flutter et l’intégration de services de
          reconnaissance dans une application.
        </p>
      ),
    },
  ],
};

export const Route = createFileRoute("/projets/smartscan")({
  head: () => ({
    meta: [
      { title: "SmartScan — Projet académique | Linda KRID" },
      { name: "description", content: DATA.accroche },
    ],
  }),
  component: () => (
    <AcademicCaseStudy
      data={DATA}
      precedent={{
        label: "Pipeline intelligent de données web",
        to: "/projets/pipeline-donnees-web",
      }}
      suivant={{ label: "Data Mining Project", to: "/projets/data-mining-project" }}
    />
  ),
});
