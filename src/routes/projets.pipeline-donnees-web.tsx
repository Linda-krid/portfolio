import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Facebook,
  FileSpreadsheet,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Table,
  Workflow,
} from "lucide-react";
import { Footer } from "@/components/portfolio/Contact";
import {
  CaseHero,
  CaseNav,
  Cards,
  Chain,
  DefiSolution,
  Flow,
  Galerie,
  Highlight,
  IllustrationPipeline,
  Indicateurs,
  NavigationProjets,
  Puces,
  Quote,
  Section,
} from "@/components/projets/CaseStudy";

const TITRE = "Pipeline intelligent de traitement des données web | Linda KRID";
const DESCRIPTION =
  "Étude de cas : pipeline automatisé de collecte, d’analyse et de structuration d’informations d’entreprises, combinant web scraping, LLM local via LM Studio et orchestration n8n.";

export const Route = createFileRoute("/projets/pipeline-donnees-web")({
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
  component: PipelinePage,
});

function PipelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <CaseNav />
      <main>
        <CaseHero
          titre="Pipeline intelligent de traitement des données web"
          sousTitre="Automatisation de la collecte, de l’analyse et de la structuration d’informations d’entreprises"
          categorie="Automatisation • Web Scraping • LLM • Data"
          type="Stage — Piximind"
          accroche="Transformer des données web hétérogènes en informations structurées et directement exploitables."
          technologies={[
            "Python",
            "BeautifulSoup",
            "Selenium",
            "SerpAPI",
            "n8n",
            "LM Studio",
            "LLM",
            "Pandas",
            "Excel",
          ]}
          illustration={<IllustrationPipeline />}
        />

        <Section
          titre="Présentation"
          eyebrow="Vue d’ensemble"
          intro={
            <>
              <p>
                Ce projet a été réalisé dans le cadre de mon stage chez Piximind. Il vise à
                automatiser la collecte, le traitement et la structuration d’informations concernant
                des entreprises à partir de différentes sources web.
              </p>
              <p>
                La solution combine des techniques de web scraping, un modèle de langage exécuté
                localement avec LM Studio et des workflows n8n afin de transformer des données web
                hétérogènes en informations structurées et directement exploitables.
              </p>
            </>
          }
        />

        <Section
          titre="Contexte"
          intro={
            <>
              <p>
                Dans un environnement concurrentiel, les entreprises ont besoin d’informations
                fiables et actualisées sur leurs partenaires potentiels, concurrents et opportunités
                commerciales.
              </p>
              <p>
                La recherche manuelle de ces informations à travers des moteurs de recherche et
                différents sites web est cependant longue, peu structurée et sujette aux erreurs.
              </p>
            </>
          }
        >
          <Cards
            items={[
              {
                titre: "Recherche chronophage",
                texte: "La collecte manuelle demande beaucoup de temps.",
              },
              {
                titre: "Données dispersées",
                texte:
                  "Les informations sont réparties sur des sites aux structures très différentes.",
              },
              {
                titre: "Données peu standardisées",
                texte:
                  "Les formats, langues, encodages et structures HTML varient fortement d’un site à l’autre.",
              },
            ]}
          />
        </Section>

        <Section titre="Problématique">
          <Quote>
            Comment concevoir un système capable d’extraire, nettoyer et organiser automatiquement
            des données fiables à partir de sources web diverses ?
          </Quote>
          <div className="mt-6">
            <Puces
              items={[
                "Structures HTML hétérogènes",
                "Contenus chargés dynamiquement",
                "Encodages différents",
                "Informations incomplètes",
                "Restrictions anti-scraping",
                "Données bruitées ou redondantes",
              ]}
            />
          </div>
        </Section>

        <Section titre="Objectifs du projet">
          <Cards
            items={[
              {
                titre: "Collecter",
                texte:
                  "Extraire automatiquement des informations sur les entreprises à partir du web.",
              },
              {
                titre: "Filtrer",
                texte: "Identifier uniquement les sites et pages réellement pertinents.",
              },
              {
                titre: "Nettoyer",
                texte:
                  "Supprimer les doublons, gérer les encodages et normaliser les informations.",
              },
              {
                titre: "Structurer",
                texte:
                  "Transformer les données extraites en informations cohérentes et exploitables.",
              },
              {
                titre: "Automatiser",
                texte: "Orchestrer l’ensemble du processus à l’aide de n8n.",
              },
              {
                titre: "Exporter",
                texte: "Générer automatiquement un fichier Excel contenant les résultats.",
              },
            ]}
          />
        </Section>

        <Section
          titre="Pipeline de collecte et de traitement"
          eyebrow="Cœur technique"
          intro={
            <p>
              De la requête initiale jusqu’au fichier Excel final, chaque étape est automatisée.
            </p>
          }
        >
          <Flow
            steps={[
              { titre: "Requête utilisateur", texte: "Définition des critères de recherche." },
              {
                titre: "Recherche Google avec SerpAPI",
                texte: "Obtention de résultats structurés.",
              },
              {
                titre: "Récupération des sites web",
                texte: "Constitution de la liste des sources.",
              },
              { titre: "Scraping HTML", texte: "Extraction du contenu des pages." },
              {
                titre: "Identification des pages pertinentes",
                texte: "Sélection des pages utiles : contact, à propos, services…",
              },
              { titre: "Nettoyage des données", texte: "Normalisation et suppression du bruit." },
              {
                titre: "Analyse par LLM via LM Studio",
                texte: "Interprétation sémantique du contenu extrait.",
              },
              { titre: "Structuration JSON", texte: "Production d’une sortie homogène." },
              {
                titre: "Fusion des données",
                texte: "Consolidation des informations par entreprise.",
              },
              { titre: "Export Excel", texte: "Génération du fichier final exploitable." },
            ]}
          />
        </Section>

        <Section
          titre="Collecte des données"
          intro={
            <>
              <p>
                Le pipeline commence par une recherche automatisée avec SerpAPI, qui permet
                d’obtenir une liste de sites correspondant aux critères définis.
              </p>
              <p>
                Les pages web sont ensuite analysées à l’aide de différents outils de scraping
                adaptés au type de contenu rencontré.
              </p>
            </>
          }
        >
          <Cards
            items={[
              {
                titre: "BeautifulSoup",
                texte:
                  "Utilisé pour analyser rapidement les pages HTML statiques et extraire les balises utiles.",
                icone: <Globe className="size-5" />,
              },
              {
                titre: "Selenium",
                texte: "Utilisé lorsque le contenu est généré dynamiquement avec JavaScript.",
                icone: <Sparkles className="size-5" />,
              },
              {
                titre: "SerpAPI",
                texte:
                  "Utilisé pour automatiser les recherches Google et récupérer les résultats sous forme structurée.",
                icone: <Search className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section
          titre="Identification intelligente des pages"
          intro={
            <>
              <p>
                Tous les résultats récupérés ne sont pas nécessairement pertinents. Le pipeline
                vérifie d’abord si le site correspond réellement à une entreprise.
              </p>
              <p>
                Il identifie ensuite les pages internes susceptibles de contenir des informations
                utiles, par exemple Contact, À propos, Services ou Mentions légales.
              </p>
            </>
          }
        >
          <Cards
            columns={4}
            items={[
              { titre: "Page d’accueil", texte: "Analyse générale de l’activité." },
              { titre: "Contact", texte: "Recherche des coordonnées." },
              { titre: "À propos", texte: "Informations sur l’entreprise." },
              { titre: "Services", texte: "Description des activités proposées." },
            ]}
          />
        </Section>

        <Section titre="Nettoyage & normalisation">
          <Puces
            items={[
              "Suppression des doublons",
              "Gestion des caractères spéciaux",
              "Normalisation UTF-8",
              "Normalisation des numéros de téléphone",
              "Normalisation des URLs",
              "Contrôle des valeurs manquantes",
              "Vérification de la cohérence des données",
            ]}
          />
          <div className="mt-6">
            <Highlight titre="Pandas">
              Pandas est utilisé pour faciliter le nettoyage, le filtrage et la mise en forme
              homogène des informations collectées.
            </Highlight>
          </div>
        </Section>

        <Section
          titre="Analyse sémantique avec un LLM"
          eyebrow="LM Studio"
          intro={
            <>
              <p>
                Un modèle de langage exécuté localement avec LM Studio est utilisé pour interpréter
                le contenu textuel extrait des pages web.
              </p>
              <p>
                Il permet d’identifier et de structurer automatiquement les informations importantes
                même lorsque les pages ne suivent pas une structure HTML standardisée.
              </p>
            </>
          }
        >
          <Puces
            items={[
              "Vérifier si un site correspond à une entreprise",
              "Classifier certaines pages",
              "Extraire les informations pertinentes",
              "Générer une structure JSON homogène",
              "Vérifier certains formats de données",
            ]}
          />
        </Section>

        <Section
          titre="Informations collectées"
          intro={<p>Ces informations sont ensuite standardisées avant leur exportation.</p>}
        >
          <Cards
            columns={4}
            items={[
              { titre: "Nom de l’entreprise", icone: <Building2 className="size-5" /> },
              { titre: "Site web", icone: <Globe className="size-5" /> },
              { titre: "Description de l’activité", icone: <Table className="size-5" /> },
              { titre: "Email", icone: <Mail className="size-5" /> },
              { titre: "Téléphone", icone: <Phone className="size-5" /> },
              { titre: "Adresse", icone: <MapPin className="size-5" /> },
              { titre: "LinkedIn", icone: <Linkedin className="size-5" /> },
              { titre: "Facebook", icone: <Facebook className="size-5" /> },
            ]}
          />
        </Section>

        <Section
          titre="Orchestration avec n8n"
          intro={
            <p>
              n8n orchestre l’ensemble du pipeline et permet d’enchaîner automatiquement les
              différentes étapes, depuis la recherche initiale jusqu’à la génération du fichier
              final.
            </p>
          }
        >
          <Chain
            items={[
              "Configuration de la recherche",
              "SerpAPI",
              "Récupération HTML",
              "Filtrage des entreprises",
              "Identification des pages de contact",
              "Analyse du contenu",
              "LLM",
              "Fusion des résultats",
              "Fichier Excel",
            ]}
          />
          <div className="mt-8">
            <Cards
              columns={4}
              items={[
                { titre: "Automatisation", texte: "Réduction des interventions manuelles." },
                {
                  titre: "Flexibilité",
                  texte: "Les mots-clés, modèles et formats peuvent être modifiés facilement.",
                },
                { titre: "Traçabilité", texte: "Les exécutions et erreurs peuvent être suivies." },
                {
                  titre: "Interopérabilité",
                  texte: "Le workflow peut communiquer avec des API et d’autres services.",
                },
              ]}
            />
          </div>
        </Section>

        <Section titre="Technologies & outils">
          <Cards
            items={[
              {
                titre: "Python",
                texte:
                  "Développement des scripts de collecte, traitement et manipulation des données.",
              },
              {
                titre: "BeautifulSoup",
                texte: "Parsing et extraction des informations depuis les pages HTML.",
              },
              {
                titre: "Selenium",
                texte: "Chargement et interaction avec les pages web dynamiques.",
              },
              { titre: "SerpAPI", texte: "Automatisation des recherches Google." },
              {
                titre: "n8n",
                texte: "Orchestration complète du workflow.",
                icone: <Workflow className="size-5" />,
              },
              {
                titre: "LM Studio / LLM",
                texte: "Analyse, classification et structuration des données.",
              },
              { titre: "Pandas", texte: "Nettoyage et organisation des données." },
              {
                titre: "Excel",
                texte: "Format final d’exportation des informations.",
                icone: <FileSpreadsheet className="size-5" />,
              },
            ]}
          />
        </Section>

        <Section titre="Défis rencontrés & solutions">
          <DefiSolution
            items={[
              {
                titre: "Structures HTML hétérogènes",
                defi: "Chaque site possède une structure différente.",
                solution:
                  "Combinaison de BeautifulSoup, de règles d’extraction flexibles et d’une analyse sémantique via LLM.",
              },
              {
                titre: "Sites dynamiques",
                defi: "Certaines données sont générées uniquement après exécution de JavaScript.",
                solution: "Utilisation de Selenium pour charger le contenu dynamique.",
              },
              {
                titre: "Données bruitées",
                defi: "Présence de doublons, d’informations inutiles et de caractères spéciaux.",
                solution: "Pipeline de nettoyage, normalisation UTF-8 et traitement avec Pandas.",
              },
              {
                titre: "Informations difficiles à identifier",
                defi: "Certaines informations ne sont pas clairement identifiables dans le HTML.",
                solution: "Utilisation d’un LLM via LM Studio pour interpréter le contenu.",
              },
              {
                titre: "Restrictions d’accès",
                defi: "CAPTCHA, Cloudflare ou limitations d’IP peuvent empêcher certaines extractions.",
                solution:
                  "Utilisation de SerpAPI pour la recherche et mécanismes de gestion des erreurs.",
              },
            ]}
          />
        </Section>

        <Section
          titre="Résultats obtenus"
          intro={
            <>
              <p>
                Le système développé permet d’explorer automatiquement des sites web d’entreprises,
                d’identifier les pages stratégiques, d’extraire les informations essentielles et de
                les structurer de manière exploitable.
              </p>
              <p>
                L’orchestration n8n permet au pipeline de fonctionner de manière autonome, depuis la
                recherche initiale jusqu’à la génération du fichier Excel final.
              </p>
            </>
          }
        >
          <Indicateurs
            items={[
              "Exploration automatisée",
              "Extraction structurée",
              "Analyse par LLM",
              "Export automatique",
            ]}
          />
        </Section>

        <Section titre="Limites observées">
          <Puces
            items={[
              "Certains sites fortement protégés restent difficiles à analyser",
              "Certaines pages nécessitant des interactions utilisateur peuvent être partiellement extraites",
              "Les contenus courts ou ambigus peuvent provoquer des erreurs de classification",
              "Les performances dépendent de la complexité du site et du volume de contenu transmis au LLM",
            ]}
          />
        </Section>

        <Section
          titre="Ma contribution"
          intro={
            <>
              <p>
                Dans le cadre de ce stage, j’ai travaillé sur la conception et le développement du
                pipeline automatisé de collecte et de traitement des données web.
              </p>
              <p>
                Mon travail a porté sur le web scraping, le nettoyage et la structuration des
                données, l’intégration d’un modèle de langage via LM Studio et la conception du
                workflow n8n permettant d’automatiser l’ensemble du processus jusqu’à la génération
                du fichier Excel final.
              </p>
            </>
          }
        >
          <Cards
            columns={3}
            items={[
              { titre: "Web Scraping" },
              { titre: "Traitement des données" },
              { titre: "Intégration LLM" },
              { titre: "Conception du workflow n8n" },
              { titre: "Automatisation" },
              { titre: "Export des résultats" },
            ]}
          />
        </Section>

        <Galerie
          titre="Aperçu du workflow"
          captures={[{ titre: "Workflow n8n complet" }]}
          legende="Workflow n8n complet orchestrant la recherche, l’extraction, l’analyse et l’export des données."
        />

        <Galerie
          titre="Exemple de données générées"
          captures={[{ titre: "Fichier Excel généré" }]}
          legende="Le pipeline produit un fichier structuré regroupant les principales informations collectées pour chaque entreprise."
        />

        <Section
          titre="Perspectives d’amélioration"
          intro={<p>Évolutions envisagées, non encore réalisées à ce stade du projet.</p>}
        >
          <Cards
            items={[
              {
                titre: "Détection automatique de la langue",
                texte: "Adapter automatiquement le traitement aux sites multilingues.",
              },
              {
                titre: "Optimisation du scraping",
                texte: "Améliorer le traitement des sites fortement dynamiques.",
              },
              {
                titre: "Base de données dédiée",
                texte: "Stocker les résultats dans une base SQL ou NoSQL.",
              },
              {
                titre: "Interface utilisateur",
                texte:
                  "Permettre de lancer le pipeline depuis une interface graphique sans utiliser directement n8n.",
              },
              {
                titre: "Modèle LLM plus performant",
                texte: "Améliorer la précision de la classification et de l’extraction.",
              },
              { titre: "Déploiement Docker", texte: "Faciliter le déploiement de la solution." },
            ]}
          />
        </Section>

        <NavigationProjets
          precedent={{ label: "CarbonAI", to: "/projets/carbonai" }}
          suivant={{ label: "SmartScan", to: "/projets/smartscan" }}
        />
      </main>
      <Footer />
    </div>
  );
}
