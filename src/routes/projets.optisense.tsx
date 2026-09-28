import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  Building2,
  Database,
  FileText,
  Languages,
  LayoutDashboard,
  ListChecks,
  MessagesSquare,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Footer } from "@/components/portfolio/Contact";
import { Reveal } from "@/components/portfolio/Reveal";
import {
  CaseHero,
  CaseNav,
  Cards,
  Chain,
  DefiSolution,
  Flow,
  Galerie,
  Highlight,
  IllustrationConversation,
  Indicateurs,
  NavigationProjets,
  Puces,
  Quote,
  Section,
} from "@/components/projets/CaseStudy";

const TITRE = "OptiSense — Analyse intelligente des conversations | Linda KRID";
const DESCRIPTION =
  "Étude de cas OptiSense : plateforme d’analyse automatique des conversations d’un centre d’appel, combinant Mistral 7B fine-tuné, traduction NLLB et RAG pour la conformité RGPD.";

export const Route = createFileRoute("/projets/optisense")({
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
  component: OptiSensePage,
});

function OptiSensePage() {
  return (
    <div className="min-h-screen bg-background">
      <CaseNav />
      <main>
        <CaseHero
          titre="OptiSense"
          sousTitre="Analyse intelligente des conversations d’un centre d’appel spécialisé"
          categorie="Intelligence Artificielle • LLM • NLP • RAG"
          type="Projet de Fin d’Année (PFA) — IIT"
          periode="Juin 2026"
          accroche="Transformer les conversations d’un centre d’appel en indicateurs fiables de qualité de service."
          technologies={[
            "React",
            "FastAPI",
            "PostgreSQL",
            "Python",
            "Mistral 7B",
            "NLLB",
            "ChromaDB",
            "RAG",
            "LoRA",
          ]}
          illustration={<IllustrationConversation />}
        />

        <Section
          titre="Présentation"
          eyebrow="Vue d’ensemble"
          intro={
            <>
              <p>
                OptiSense est une plateforme intelligente conçue pour automatiser l’analyse des
                conversations entre les agents d’un centre d’appel spécialisé et ses partenaires.
              </p>
              <p>
                La solution transforme les conversations en informations structurées afin d’évaluer
                la qualité du service, suivre les performances des agents et fournir aux
                responsables des indicateurs exploitables pour l’aide à la décision.
              </p>
              <p>
                Elle combine une application web avec plusieurs modules d’Intelligence Artificielle
                spécialisés dans le traitement de conversations multilingues.
              </p>
            </>
          }
        />

        <Section
          titre="Contexte"
          intro={
            <>
              <p>
                Le centre d’appel optique basé en Tunisie accompagne les opticiens partenaires dans
                différentes situations : suivi des commandes, demandes d’information, réclamations,
                rappels, retards de livraison et questions liées aux produits optiques.
              </p>
              <p>
                Les conversations présentent une forte diversité linguistique et peuvent contenir du
                français, du dialecte tunisien, de l’arabizi ainsi que du vocabulaire technique
                propre au domaine de l’optique.
              </p>
            </>
          }
        >
          <Cards
            items={[
              {
                titre: "Centre d’appel",
                texte: "Gestion des demandes et du support des opticiens partenaires.",
                icone: <Building2 className="size-5" />,
              },
              {
                titre: "Conversations multilingues",
                texte: "Français, dialecte tunisien, arabe et arabizi.",
                icone: <Languages className="size-5" />,
              },
              {
                titre: "Contexte métier spécialisé",
                texte: "Commandes, produits optiques, retards, réclamations et suivi client.",
                icone: <MessagesSquare className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section titre="Problématique">
          <Quote>
            Comment automatiser l’analyse des conversations entre les opticiens et les agents du
            centre d’appel afin d’évaluer la qualité du service, détecter les situations critiques
            et produire des indicateurs fiables d’aide à la décision ?
          </Quote>
          <div className="mt-6">
            <Cards
              items={[
                {
                  titre: "Analyse manuelle coûteuse",
                  texte: "L’évaluation manuelle mobilise du temps et des ressources humaines.",
                },
                {
                  titre: "Évaluation potentiellement subjective",
                  texte: "Deux évaluateurs peuvent interpréter différemment une même conversation.",
                },
                {
                  titre: "Informations difficiles à détecter",
                  texte:
                    "Certains éléments comme une insatisfaction implicite ou une réponse incomplète nécessitent une compréhension du contexte global.",
                },
              ]}
            />
          </div>
        </Section>

        <Section titre="Objectifs du projet">
          <Cards
            items={[
              {
                titre: "Analyser",
                texte: "Comprendre automatiquement le contenu des conversations.",
              },
              {
                titre: "Évaluer",
                texte:
                  "Évaluer la qualité de la prise en charge selon une grille métier structurée.",
              },
              {
                titre: "Détecter",
                texte: "Identifier les réclamations, retards, rappels et situations critiques.",
              },
              {
                titre: "Mesurer",
                texte:
                  "Calculer des scores et indicateurs permettant de suivre la qualité du service.",
              },
              {
                titre: "Aider à la décision",
                texte: "Fournir aux responsables des données synthétiques et exploitables.",
              },
            ]}
          />
        </Section>

        <Section
          titre="Une évaluation structurée autour de 14 critères"
          eyebrow="Grille d’évaluation"
          intro={
            <p>
              Chaque conversation est évaluée selon une grille de 14 critères, de Q1 à Q14, répartis
              en trois familles complémentaires.
            </p>
          }
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                cle: "Customer Critical",
                plage: "Q1 → Q8",
                texte:
                  "Évaluation de la résolution de la demande, des délais communiqués, des informations fournies, de l’écoute et de la qualité de la prise en charge.",
              },
              {
                cle: "Business Critical",
                plage: "Q9 → Q13",
                texte:
                  "Évaluation du motif de contact, de la gestion de l’attente, des rappels, du libre-service et de certains critères métier.",
              },
              {
                cle: "Compliance Critical",
                plage: "Q14",
                texte: "Vérification du respect des exigences RGPD et de confidentialité.",
              },
            ].map((g, i) => (
              <Reveal key={g.cle} delay={i * 70}>
                <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                  <p className="font-mono text-xs tracking-[0.2em] text-primary">{g.plage}</p>
                  <h3 className="mt-3 text-base font-semibold">{g.cle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.texte}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <Highlight titre="Yes • No • NA">
              Chaque critère reçoit l’une de ces trois réponses. Les réponses Yes et No sont
              utilisées pour calculer les scores, tandis que NA n’est pas comptabilisé.
            </Highlight>
          </div>
        </Section>

        <Section
          titre="Pipeline d’analyse intelligente"
          eyebrow="Cœur technique"
          intro={
            <p>
              Chaque conversation traverse une chaîne de traitement complète, du texte brut
              jusqu’aux scores exploitables.
            </p>
          }
        >
          <Flow
            steps={[
              { titre: "Conversation", texte: "Échange textuel brut entre l’agent et l’opticien." },
              {
                titre: "Prétraitement Regex",
                texte: "Nettoyage et normalisation du texte pour obtenir une entrée homogène.",
              },
              {
                titre: "Extraction d’indices métier",
                texte: "Identification de signaux explicites liés aux critères Q1–Q13.",
              },
              {
                titre: "Traduction NLLB",
                texte: "Passage des segments en dialecte ou arabizi vers le français.",
              },
              {
                titre: "Enrichissement RAG / RGPD",
                texte: "Récupération des passages réglementaires pertinents pour le critère Q14.",
              },
              {
                titre: "Mistral 7B fine-tuné",
                texte: "Évaluation contextuelle de la conversation par le modèle spécialisé.",
              },
              { titre: "Évaluation Q1–Q14", texte: "Attribution d’une réponse à chaque critère." },
              { titre: "JSON structuré", texte: "Sortie normalisée directement exploitable." },
              {
                titre: "Scores & rapports",
                texte: "Calcul des indicateurs et restitution dans le tableau de bord.",
              },
            ]}
          />
        </Section>

        <Section
          titre="Préparation des conversations"
          intro={
            <p>
              Avant l’analyse par les modèles IA, les conversations sont nettoyées et structurées
              afin d’obtenir une entrée homogène et exploitable.
            </p>
          }
        >
          <Puces
            items={[
              "Nettoyage des espaces inutiles",
              "Normalisation des retours à la ligne",
              "Suppression des caractères parasites",
              "Normalisation de certaines expressions",
              "Harmonisation des rôles Agent / Client",
            ]}
          />
          <div className="mt-6">
            <Highlight titre="Extraction d’indices métier">
              Des expressions régulières permettent d’identifier certains signaux explicites liés
              aux critères Q1–Q13. Les indices fiables sont utilisés pour enrichir l’entrée
              transmise au modèle, qui reste responsable de l’évaluation finale.
            </Highlight>
          </div>
        </Section>

        <Section
          titre="Comprendre les conversations multilingues"
          eyebrow="NLLB — No Language Left Behind"
          intro={
            <p>
              NLLB est utilisé pour traduire les passages en dialecte tunisien, arabe dialectal ou
              arabizi vers le français afin d’obtenir une conversation plus homogène pour l’étape
              d’évaluation.
            </p>
          }
        >
          <Chain items={["Darija / Arabizi / Français", "NLLB", "Français"]} />
          <div className="mt-6">
            <Highlight titre="Adaptation avec LoRA">
              Une stratégie de fine-tuning légère basée sur LoRA permet d’adapter le modèle au
              vocabulaire et aux formulations du domaine.
            </Highlight>
          </div>
        </Section>

        <Section
          titre="Évaluation automatique avec Mistral 7B"
          intro={
            <p>
              Après la traduction, la conversation est transmise à un modèle Mistral 7B fine-tuné
              chargé d’évaluer les critères Q1 à Q14 et de produire une sortie structurée.
            </p>
          }
        >
          <Cards
            columns={4}
            items={[
              { titre: "Conversation traduite" },
              { titre: "Grille Q1–Q14" },
              { titre: "Indices métier" },
              { titre: "Contexte RGPD" },
            ]}
          />
          <div className="mt-6">
            <Chain items={["Instructions d’évaluation", "Mistral 7B", "JSON structuré"]} />
          </div>
        </Section>

        <Section
          titre="RAG pour la conformité RGPD"
          intro={
            <p>
              Pour le critère Q14 consacré à la conformité, le système utilise ChromaDB comme base
              vectorielle afin de récupérer les passages pertinents de la documentation RGPD. Ces
              passages sont ajoutés au contexte fourni au modèle afin d’ancrer l’évaluation dans des
              informations réglementaires pertinentes.
            </p>
          }
        >
          <Flow
            steps={[
              { titre: "Document RGPD" },
              { titre: "Découpage en segments" },
              { titre: "Embeddings" },
              { titre: "ChromaDB" },
              { titre: "Recherche par similarité" },
              { titre: "Contexte pertinent transmis au LLM" },
            ]}
          />
        </Section>

        <Section titre="Architecture technique">
          <Cards
            columns={4}
            items={[
              {
                titre: "React",
                texte: "Interface utilisateur de la plateforme.",
                icone: <LayoutDashboard className="size-5" />,
              },
              {
                titre: "FastAPI",
                texte: "API REST, logique applicative et orchestration des modules IA.",
                icone: <Server className="size-5" />,
              },
              {
                titre: "PostgreSQL",
                texte:
                  "Stockage des utilisateurs, agents, conversations, résultats d’analyse, sessions chatbot et configuration.",
                icone: <Database className="size-5" />,
              },
              {
                titre: "Modules IA",
                texte:
                  "Traduction NLLB, analyse Mistral 7B et récupération du contexte documentaire via ChromaDB.",
                icone: <Sparkles className="size-5" />,
              },
            ]}
          />
          <div className="mt-6">
            <Chain
              items={[
                "Interface React",
                "HTTP / JWT",
                "Backend FastAPI",
                "PostgreSQL & Modules IA",
              ]}
            />
          </div>
        </Section>

        <Section titre="Utilisateurs de la plateforme">
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                <Users className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">Administrateur</h3>
                <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
                  {[
                    "Gérer les agents",
                    "Consulter le tableau de bord",
                    "Consulter les rapports",
                    "Soumettre et analyser les conversations",
                    "Interroger les résultats via le chatbot",
                    "Consulter des statistiques et indicateurs",
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
                <Users className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold">Agent</h3>
                <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
                  {[
                    "Se connecter",
                    "Accéder à son espace",
                    "Consulter son profil",
                    "Suivre ses informations et résultats disponibles",
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
                titre: "Authentification sécurisée",
                texte: "Accès à la plateforme selon le rôle de l’utilisateur.",
                icone: <ShieldCheck className="size-5" />,
              },
              {
                titre: "Gestion des agents",
                texte: "Création, modification, activation et désactivation des comptes.",
                icone: <Users className="size-5" />,
              },
              {
                titre: "Analyse des conversations",
                texte: "Évaluation automatique selon la grille Q1–Q14.",
                icone: <ListChecks className="size-5" />,
              },
              {
                titre: "Tableau de bord",
                texte: "Consultation des scores, statistiques et tendances.",
                icone: <LayoutDashboard className="size-5" />,
              },
              {
                titre: "Rapports d’analyse",
                texte: "Présentation structurée des résultats.",
                icone: <FileText className="size-5" />,
              },
              {
                titre: "OptiSense Assistant",
                texte:
                  "Chatbot permettant d’interroger les données et résultats en langage naturel.",
                icone: <Bot className="size-5" />,
              },
              {
                titre: "Comparaison des performances",
                texte: "Consultation et comparaison des résultats des agents.",
                icone: <BarChart3 className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section
          titre="OptiSense Assistant"
          intro={
            <p>
              Le chatbot permet à l’administrateur d’interroger les résultats d’analyse en langage
              naturel et d’obtenir rapidement des informations sans parcourir manuellement les
              tableaux et rapports.
            </p>
          }
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "« Génère le rapport de cette conversation »",
              "« Quels agents obtiennent les meilleurs résultats ? »",
              "« Quels sont les scores observés ? »",
              "« Quelles tendances ressortent des analyses ? »",
            ].map((q, i) => (
              <Reveal key={q} delay={i * 50}>
                <p className="rounded-2xl border border-border bg-surface-elevated px-5 py-4 text-sm text-muted-foreground">
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section titre="Validation & performances" eyebrow="Expérimentation">
          <div className="grid gap-4 lg:grid-cols-3">
            <Reveal>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold">NLLB</h3>
                <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em]">Dataset</dt>
                    <dd className="mt-1">
                      3 062 exemples d’entraînement · 300 validation · 300 test
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em]">Métrique</dt>
                    <dd className="mt-1">BLEU</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={70}>
              <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold">Mistral 7B fine-tuné</h3>
                <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em]">Dataset</dt>
                    <dd className="mt-1">470 conversations annotées Q1–Q14</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em]">
                      Répartition
                    </dt>
                    <dd className="mt-1">80 % entraînement · 10 % validation · 20 % test</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em]">Métrique</dt>
                    <dd className="mt-1">Accuracy</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-base font-semibold">Pipeline complet</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Évaluation sur 94 conversations
                </p>
                <p className="mt-4 text-3xl font-semibold text-gradient">87 % – 100 %</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Accuracy observée selon les critères Q1–Q14.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section titre="Défis techniques">
          <DefiSolution
            items={[
              {
                titre: "Multilinguisme & code-switching",
                defi: "Comprendre des conversations combinant français, dialecte tunisien et arabizi.",
                solution: "Traduction avec NLLB et adaptation au contexte métier.",
              },
              {
                titre: "Compréhension contextuelle",
                defi: "Les intentions ou insatisfactions peuvent être implicites.",
                solution: "Utilisation d’un LLM fine-tuné complété par des indices métier.",
              },
              {
                titre: "Conformité",
                defi: "Le contrôle RGPD nécessite des informations de référence fiables.",
                solution: "Récupération de contexte via ChromaDB et RAG.",
              },
              {
                titre: "Fiabilité des résultats",
                defi: "L’analyse doit produire une sortie exploitable automatiquement.",
                solution: "Sortie JSON structurée et grille d’évaluation contrôlée.",
              },
            ]}
          />
        </Section>

        <Section
          titre="Ma contribution"
          intro={
            <p>Participation à la conception et à la réalisation de la plateforme OptiSense.</p>
          }
        />

        <Section
          titre="Résultat"
          intro={
            <>
              <p>
                OptiSense aboutit à une plateforme web fonctionnelle permettant d’automatiser
                l’évaluation des conversations du centre d’appel, de calculer des scores selon une
                grille métier structurée et de rendre les résultats accessibles à travers un tableau
                de bord et un assistant conversationnel.
              </p>
              <p>
                La solution contribue à réduire l’effort lié à l’analyse manuelle, à homogénéiser
                l’évaluation et à faciliter le suivi des performances et de la qualité du service.
              </p>
            </>
          }
        >
          <Indicateurs
            items={[
              "Analyse automatisée",
              "Évaluation structurée",
              "Suivi des performances",
              "Aide à la décision",
            ]}
          />
        </Section>

        <Section
          titre="Démonstration"
          eyebrow="Présentation vidéo"
          intro={
            <p>
              Découvrez le fonctionnement d’OptiSense, depuis l’analyse d’une conversation jusqu’à
              la consultation des résultats.
            </p>
          }
        >
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <video
              className="aspect-video w-full bg-slate-950 object-cover"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/optisense-demo.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
            <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
              Démonstration vidéo de la plateforme OptiSense.
            </figcaption>
          </figure>
        </Section>

        <Galerie
          titre="Aperçu de l’application"
          captures={[
            { titre: "Connexion" },
            { titre: "Tableau de bord" },
            { titre: "Gestion des agents" },
            { titre: "OptiSense Assistant" },
            { titre: "Rapport d’analyse généré" },
            { titre: "Comparaison des performances des agents" },
          ]}
        />

        <Section
          titre="Perspectives"
          intro={<p>Pistes d’évolution envisagées, non encore réalisées dans cette version.</p>}
        >
          <Cards
            columns={4}
            items={[
              {
                titre: "Transcription automatique",
                texte:
                  "Intégration future de Whisper pour analyser directement les fichiers audio.",
              },
              {
                titre: "Détection précoce des risques",
                texte:
                  "Génération d’alertes en cas d’insatisfaction, réclamation critique ou non-conformité.",
              },
              {
                titre: "Analyse multimodale",
                texte: "Combinaison du texte, de la voix et de la prosodie.",
              },
              {
                titre: "Recommandations métier",
                texte:
                  "Proposition d’actions correctives ou de recommandations de formation pour les agents.",
              },
            ]}
          />
        </Section>

        <NavigationProjets suivant={{ label: "CarbonAI", to: "/projets/carbonai" }} />
      </main>
      <Footer />
    </div>
  );
}
