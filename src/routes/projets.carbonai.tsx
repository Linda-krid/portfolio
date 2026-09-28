import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Calculator,
  Database,
  FileText,
  GitBranch,
  Lightbulb,
  ListChecks,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Footer } from "@/components/portfolio/Contact";
import { Reveal } from "@/components/portfolio/Reveal";
import {
  CaseHero,
  CaseNav,
  Cards,
  Chain,
  CodeSourcePrive,
  DefiSolution,
  Flow,
  Galerie,
  Highlight,
  IllustrationCarbone,
  Indicateurs,
  NavigationProjets,
  Quote,
  Section,
} from "@/components/projets/CaseStudy";

const TITRE = "CarbonAI — Calcul et analyse de l’empreinte carbone | Linda KRID";
const DESCRIPTION =
  "Étude de cas CarbonAI : plateforme Laravel de calcul de l’empreinte carbone des entreprises, avec moteur de calcul déterministe et automatisation n8n couplée à l’IA générative.";

export const Route = createFileRoute("/projets/carbonai")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CarbonAIPage,
});

function CarbonAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <CaseNav />
      <main>
        <CaseHero
          titre="CarbonAI"
          categorie="IA Générative • Automatisation • Environnement"
          type="Stage d’été — VISS Tunisie"
          periode="Juillet 2026"
          accroche="Plateforme intelligente de calcul et d’analyse de l’empreinte carbone des entreprises."
          technologies={[
            "Laravel",
            "PHP",
            "MySQL",
            "n8n",
            "IA générative",
            "LLM",
            "JavaScript",
          ]}
          illustration={<IllustrationCarbone />}
        />

        <Section
          titre="Présentation"
          eyebrow="Vue d’ensemble"
          intro={
            <>
              <p>
                CarbonAI est une plateforme intelligente développée dans le cadre de mon stage chez
                VISS Tunisie (Vision Internet Soft &amp; Services).
              </p>
              <p>
                La plateforme accompagne les entreprises dans l’évaluation de leur impact
                environnemental en centralisant la collecte des données d’activité, le calcul des
                émissions de CO₂e ainsi que la génération automatisée de rapports et de
                recommandations.
              </p>
              <p>
                L’objectif est d’associer un moteur de calcul déterministe à des mécanismes
                d’automatisation et d’IA générative afin de simplifier la réalisation d’un bilan
                carbone.
              </p>
            </>
          }
        />

        <Section
          titre="Contexte & problématique"
          intro={
            <>
              <p>
                Le calcul de l’empreinte carbone nécessite de collecter des données provenant de
                nombreuses activités de l’entreprise, d’appliquer les facteurs d’émission appropriés
                et de produire des résultats exploitables.
              </p>
              <p>
                La réalisation manuelle de ces différentes opérations peut être longue, complexe et
                source d’erreurs, notamment lorsque les données utilisent différentes unités ou
                différentes périodes de référence.
              </p>
            </>
          }
        >
          <Cards
            items={[
              {
                titre: "Données hétérogènes",
                texte:
                  "Les informations proviennent de plusieurs activités et utilisent différents formats et unités.",
                icone: <Database className="size-5" />,
              },
              {
                titre: "Calculs complexes",
                texte:
                  "Les données doivent être converties, annualisées et associées aux facteurs d’émission adaptés.",
                icone: <Calculator className="size-5" />,
              },
              {
                titre: "Production des résultats",
                texte:
                  "Les résultats doivent être transformés en rapports et recommandations exploitables.",
                icone: <FileText className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section titre="Objectif du projet">
          <Quote>
            Concevoir une plateforme web permettant de collecter et structurer les données
            d’activité d’une entreprise, calculer automatiquement son empreinte carbone et générer
            des rapports et recommandations personnalisés.
          </Quote>
          <div className="mt-6">
            <Chain items={["Collecter", "Calculer", "Analyser"]} />
          </div>
        </Section>

        <Section titre="Utilisateurs de la plateforme">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                <Users className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">Utilisateur</h3>
                <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
                  {[
                    "Renseigner les informations de son entreprise",
                    "Saisir ses données d’activité",
                    "Effectuer son bilan carbone",
                    "Consulter ses résultats",
                    "Accéder aux rapports",
                    "Consulter les recommandations",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">Administrateur</h3>
                <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
                  {[
                    "Gérer les utilisateurs",
                    "Gérer les facteurs d’émission",
                    "Administrer les paramètres nécessaires au fonctionnement du calcul carbone",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section titre="Fonctionnalités principales">
          <Cards
            items={[
              {
                titre: "Authentification & rôles",
                texte: "Gestion sécurisée des utilisateurs et des droits d’accès.",
                icone: <ShieldCheck className="size-5" />,
              },
              {
                titre: "Gestion des entreprises",
                texte: "Centralisation des informations relatives aux entreprises.",
                icone: <Building2 className="size-5" />,
              },
              {
                titre: "Facteurs d’émission",
                texte: "Administration des facteurs utilisés par le moteur de calcul.",
                icone: <Database className="size-5" />,
              },
              {
                titre: "Formulaires dynamiques",
                texte:
                  "Génération de formulaires adaptés au contexte et aux activités de l’entreprise.",
                icone: <ListChecks className="size-5" />,
              },
              {
                titre: "Calcul carbone",
                texte: "Calcul et analyse des émissions en kgCO₂e et tCO₂e.",
                icone: <Calculator className="size-5" />,
              },
              {
                titre: "Rapports automatisés",
                texte: "Génération automatique de contenus d’analyse à partir des résultats.",
                icone: <FileText className="size-5" />,
              },
              {
                titre: "Recommandations",
                texte: "Proposition d’actions personnalisées pour réduire les émissions.",
                icone: <Lightbulb className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section
          titre="Architecture & fonctionnement"
          eyebrow="Cœur technique"
          intro={
            <p>
              Le parcours d’une donnée d’activité, de sa saisie jusqu’aux rapports et
              recommandations produits.
            </p>
          }
        >
          <Flow
            steps={[
              { titre: "Utilisateur", texte: "Saisie des informations et des données d’activité." },
              { titre: "Application Laravel", texte: "Logique métier et interface de la plateforme." },
              {
                titre: "Base de données MySQL",
                texte: "Stockage des entreprises, données et facteurs d’émission.",
              },
              {
                titre: "Moteur de calcul carbone",
                texte: "Calcul déterministe des émissions exécuté par Laravel.",
              },
              { titre: "Résultats", texte: "Émissions exprimées en kgCO₂e et tCO₂e." },
              { titre: "Workflows n8n", texte: "Orchestration des traitements automatisés." },
              { titre: "IA générative", texte: "Production des contenus d’analyse." },
              {
                titre: "Rapports & recommandations",
                texte: "Restitution exploitable pour l’entreprise.",
              },
            ]}
          />
          <div className="mt-8">
            <Highlight titre="Séparation calcul / IA">
              L’IA ne réalise pas le calcul des émissions. Le moteur de calcul carbone reste
              déterministe et est exécuté par Laravel à partir des données d’activité et des
              facteurs d’émission. L’IA générative intervient ensuite dans la génération des
              contenus, rapports et recommandations.
            </Highlight>
          </div>
        </Section>

        <Section titre="IA & Automatisation">
          <Cards
            items={[
              {
                titre: "Génération dynamique des formulaires",
                texte:
                  "Un workflow permet d’adapter les formulaires en fonction du contexte et des informations de l’entreprise.",
                icone: <ListChecks className="size-5" />,
              },
              {
                titre: "Génération des rapports",
                texte:
                  "Les résultats du bilan carbone sont exploités afin de produire automatiquement des contenus d’analyse.",
                icone: <FileText className="size-5" />,
              },
              {
                titre: "Génération des recommandations",
                texte:
                  "L’IA générative propose des recommandations adaptées afin d’aider l’entreprise à identifier des pistes de réduction de ses émissions.",
                icone: <Sparkles className="size-5" />,
              },
            ]}
          />
          <div className="mt-6">
            <Highlight titre="Orchestration : n8n">
              n8n assure la coordination des workflows entre la plateforme et les fonctionnalités
              d’IA générative : déclenchement des traitements, transmission des données et
              récupération des contenus produits.
            </Highlight>
          </div>
        </Section>

        <Section
          titre="Ma contribution"
          intro={
            <>
              <p>
                J’ai participé à la conception et au développement de CarbonAI, depuis l’analyse
                fonctionnelle jusqu’à l’implémentation de la plateforme.
              </p>
              <p>
                Mon travail a notamment porté sur la modélisation UML et de la base de données, le
                développement de la plateforme Laravel, la mise en œuvre du moteur de calcul
                carbone, la gestion des facteurs d’émission ainsi que la conception des workflows
                n8n pour automatiser la génération des formulaires, des rapports et des
                recommandations.
              </p>
            </>
          }
        >
          <Cards
            columns={4}
            items={[
              { titre: "Analyse & conception" },
              { titre: "Modélisation UML" },
              { titre: "Conception de la base de données" },
              { titre: "Développement Laravel" },
              { titre: "Moteur de calcul carbone" },
              { titre: "Gestion des facteurs d’émission" },
              { titre: "Workflows n8n" },
              { titre: "Intégration IA générative" },
            ]}
          />
        </Section>

        <Section titre="Technologies utilisées">
          <Cards
            items={[
              {
                titre: "Laravel / PHP",
                texte: "Backend, logique métier et moteur de calcul carbone.",
                icone: <ServerCog className="size-5" />,
              },
              {
                titre: "MySQL",
                texte:
                  "Stockage des utilisateurs, entreprises, facteurs d’émission, données d’activité et résultats.",
                icone: <Database className="size-5" />,
              },
              {
                titre: "n8n",
                texte: "Orchestration et automatisation des workflows.",
                icone: <Workflow className="size-5" />,
              },
              {
                titre: "IA générative / LLM",
                texte: "Génération des rapports, contenus et recommandations.",
                icone: <Sparkles className="size-5" />,
              },
              {
                titre: "JavaScript",
                texte: "Interactions côté interface.",
                icone: <ListChecks className="size-5" />,
              },
              {
                titre: "Git",
                texte: "Gestion des versions.",
                icone: <GitBranch className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section titre="Défis rencontrés & solutions">
          <DefiSolution
            items={[
              {
                titre: "Données hétérogènes",
                defi:
                  "Les données nécessaires au bilan carbone varient selon les activités des entreprises.",
                solution:
                  "Mise en place d’une configuration dynamique permettant d’adapter les formulaires.",
              },
              {
                titre: "Intégration Laravel / n8n",
                defi:
                  "Faire communiquer correctement la logique métier et les workflows d’automatisation.",
                solution:
                  "Séparation claire des responsabilités : calcul métier côté Laravel et génération automatisée côté n8n.",
              },
              {
                titre: "Unités & périodes",
                defi: "Les données peuvent être exprimées avec différentes unités et périodes.",
                solution:
                  "Mise en place de règles de conversion et d’annualisation avant l’application des facteurs d’émission.",
              },
            ]}
          />
        </Section>

        <Section
          titre="Résultat"
          intro={
            <>
              <p>
                Le projet a abouti à une application web fonctionnelle permettant de centraliser les
                données d’une entreprise, d’appliquer les facteurs d’émission et d’obtenir
                automatiquement son empreinte carbone.
              </p>
              <p>
                L’intégration de n8n et de l’IA générative permet également d’automatiser
                différentes tâches liées à la préparation des formulaires, des rapports et des
                recommandations.
              </p>
            </>
          }
        >
          <Indicateurs
            items={[
              "Centralisation des données",
              "Calcul automatisé",
              "Rapports générés automatiquement",
              "Recommandations personnalisées",
            ]}
          />
        </Section>

        <Section
          titre="Organisation du projet"
          intro={
            <p>
              Le projet a été organisé selon une approche Scrum, avec une répartition claire des
              responsabilités au sein de l’équipe.
            </p>
          }
        >
          <Cards
            items={[
              { titre: "Product Owner", texte: "Momtez Ayadi" },
              { titre: "Scrum Master", texte: "Asma Ghatassi" },
              { titre: "SCRUM Team / Développement", texte: "Linda Krid" },
            ]}
          />
        </Section>

        <Galerie
          titre="Aperçu de l’application"
          captures={[
            { titre: "Connexion / Accueil" },
            { titre: "Dashboard" },
            { titre: "Collecte des données" },
            { titre: "Résultats du bilan carbone" },
            { titre: "Rapports / Recommandations" },
          ]}
        />

        <CodeSourcePrive />

        <NavigationProjets
          precedent={{ label: "OptiSense", to: "/projets/optisense" }}
          suivant={{
            label: "Pipeline intelligent de données web",
            to: "/projets/pipeline-donnees-web",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
