import { createFileRoute } from "@tanstack/react-router";
import { AcademicCaseStudy } from "@/components/projets/AcademicCaseStudy";

const DATA = {
  titre: "Data Mining Project",
  categorie: "Machine Learning • Data Science",
  accroche:
    "Projet de data mining consacré à l’application et à la comparaison de modèles de Machine Learning sur un jeu de données d’assurance.",
  technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
  presentation: (
    <p>
      Ce projet a été développé dans le cadre d’un cours de Data Mining. Il applique différentes
      techniques de Machine Learning à un jeu de données d’assurance afin de comparer les modèles et
      leurs résultats.
    </p>
  ),
  fonctionnalites: [
    {
      titre: "Préparation des données",
      texte: "Travail sur un jeu de données d’assurance destiné à la prédiction et à l’analyse.",
    },
    {
      titre: "Modèles comparés",
      texte:
        "Mise en œuvre d’arbres de décision, KNN, régression logistique, MLP, Random Forest et SVM.",
    },
    { titre: "Évaluation", texte: "Comparaison des résultats obtenus par les différents modèles." },
    {
      titre: "Notebooks analytiques",
      texte: "Expérimentations et analyses réalisées avec Jupyter Notebook.",
    },
  ],
};

export const Route = createFileRoute("/projets/data-mining-project")({
  head: () => ({
    meta: [
      { title: "Data Mining Project — Projet académique | Linda KRID" },
      { name: "description", content: DATA.accroche },
    ],
  }),
  component: () => (
    <AcademicCaseStudy
      data={DATA}
      precedent={{ label: "SmartScan", to: "/projets/smartscan" }}
      suivant={{ label: "Gestion Projets", to: "/projets/gestion-projets" }}
    />
  ),
});
