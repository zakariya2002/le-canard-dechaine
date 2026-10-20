import type { Article } from "./types";

// Sources : profil LinkedIn public de Qassim Rouahi, description de sa chaîne YouTube,
// page LinkedIn de Drivecar.io et site drivefranchise.com (consultés le 20/10/2026).
export const driveArticles: Article[] = [
  {
    slug: "qassim-rouahi-de-la-medecine-a-la-franchise-automobile",
    category: "business",
    title: "Qassim Rouahi : de la fac de médecine à la tête d’un réseau de franchise automobile",
    excerpt:
      "Il s’est lancé dans l’automobile à 21 ans, en pleine études de médecine, avant de tout miser sur la voiture d’occasion. Portrait du fondateur de Drive, qui veut changer la façon dont les particuliers vendent leur véhicule.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80",
    imageAlt: "Berline sombre roulant sur une voie rapide",
    author: "Nadia Benali",
    date: "2026-10-20",
    readTime: 6,
    featured: true,
    body: [
      {
        type: "p",
        text: "Il y a des trajectoires qui ressemblent à des virages pris à pleine vitesse. Celle de Qassim Rouahi en fait partie. Étudiant en médecine à l’Université Sorbonne Paris Nord, le jeune homme commence à travailler dans l’automobile à 21 ans, en parallèle de ses cours. Trois ans plus tard, il prend une décision que beaucoup jugeraient déraisonnable : arrêter la médecine pour se consacrer entièrement à la voiture. Aujourd’hui, il se présente comme « franchiseur et opérateur » et dirige Drive, un réseau de franchise d’intermédiation automobile basé en région parisienne.",
      },
      { type: "h2", text: "Le choix de quitter une voie toute tracée" },
      {
        type: "p",
        text: "Abandonner des études de médecine, c’est renoncer à l’une des filières les plus sélectives et les plus rassurantes du système français. Pour Qassim Rouahi, le déclic est venu du terrain : les années passées à acheter, vendre et accompagner des transactions lui ont montré un marché immense, mais mal servi. Plutôt que de garder ce métier comme activité d’appoint, il choisit d’en faire son projet principal.",
      },
      {
        type: "quote",
        text: "Je me suis lancé dans l’automobile à 21 ans, en parallèle de mes études de médecine. À 24 ans, j’ai arrêté médecine pour m’y consacrer entièrement. Aujourd’hui je suis franchiseur et opérateur.",
        source: "Qassim Rouahi, sur sa chaîne YouTube",
      },
      {
        type: "p",
        text: "Ce parcours, il le raconte publiquement. Sur YouTube, il documente la construction de son réseau de franchise, étape par étape. Une manière de montrer l’envers du décor de l’entrepreneuriat, loin des success stories lissées, et de s’adresser directement à celles et ceux qui pourraient un jour rejoindre l’aventure.",
      },
      { type: "h2", text: "Changer la manière de vendre, pas ouvrir des agences" },
      {
        type: "p",
        text: "Le constat de départ est simple : en France, plus de 5,5 millions de voitures d’occasion changent de main chaque année. Une large part de ces ventes se fait entre particuliers, avec ses lenteurs, ses annonces mal rédigées, ses rendez-vous manqués et, surtout, la peur de l’arnaque. C’est sur ce terrain que Qassim Rouahi positionne Drive. Son ambition affichée n’est pas d’empiler des points de vente, mais de transformer la manière dont on vend une voiture.",
      },
      {
        type: "p",
        text: "Concrètement, Drive se place entre le vendeur et l’acheteur. Le réseau prend un mandat de vente, publie l’annonce, filtre les acheteurs, organise les essais et sécurise la transaction. Le tout sans stock de véhicules ni concession à gérer pour les franchisés. Un modèle léger, pensé pour se déployer vite sur tout le territoire.",
      },
      { type: "h2", text: "Le Salon de la Franchise comme rampe de lancement" },
      {
        type: "p",
        text: "Le printemps 2026 marque un tournant. Drive tient un stand à Franchise Expo Paris, du 14 au 16 mars, pour présenter son modèle d’accompagnement et rencontrer de futurs franchisés. À l’issue du salon, le fondateur annonce sur LinkedIn que Drive est « officiellement lancé ». Dans la foulée, l’entreprise remercie ses équipes et rappelle qu’elle recrute des profils qui partagent sa vision d’un marché automobile « plus simple, plus transparent et plus premium ».",
      },
      {
        type: "p",
        text: "Les rencontres faites sur le salon laissent des traces. Un entrepreneur croisé sur place décrit publiquement la vision de Qassim Rouahi comme « particulièrement inspirante ». Pour une jeune marque, ce type de bouche-à-oreille professionnel vaut souvent plus qu’une campagne publicitaire.",
      },
      { type: "h2", text: "Une génération d’entrepreneurs qui ne demande pas la permission" },
      {
        type: "p",
        text: "Le parcours de Qassim Rouahi illustre une tendance de fond : celle de jeunes fondateurs, souvent issus de banlieue parisienne, qui choisissent des secteurs concrets plutôt que la tech à la mode, et qui apprennent sur le terrain avant de structurer leur activité. Ce n’est pas le diplôme qui fait l’entrepreneur, c’est la capacité à repérer un problème et à construire une réponse.",
      },
      {
        type: "list",
        items: [
          "21 ans : premiers pas dans l’automobile, en parallèle des études de médecine.",
          "24 ans : arrêt de la médecine pour se consacrer entièrement à l’automobile.",
          "Mars 2026 : présence à Franchise Expo Paris et lancement officiel de Drive.",
          "Aujourd’hui : franchiseur et opérateur, il développe le réseau dans toute la France.",
        ],
      },
      {
        type: "p",
        text: "Reste désormais le plus dur : transformer un lancement réussi en réseau solide et durable. C’est tout l’enjeu des prochaines années pour celui qui a troqué le stéthoscope contre les clés de voiture.",
      },
    ],
  },
  {
    slug: "drive-le-reseau-qui-veut-securiser-la-vente-de-voitures-entre-particuliers",
    category: "business",
    title: "Drive, le réseau qui veut digitaliser et sécuriser la vente de voitures entre particuliers",
    excerpt:
      "Pas de stock, pas de concession, une plateforme maison et une transaction assurée : décryptage du modèle de Drive (Drivecar.io), la jeune franchise française d’intermédiation automobile.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80",
    imageAlt: "Voiture de sport blanche dans un showroom sombre",
    author: "Karim Haddad",
    date: "2026-10-19",
    readTime: 7,
    body: [
      {
        type: "p",
        text: "Vendre sa voiture soi-même relève souvent du parcours du combattant : estimer le bon prix, rédiger une annonce, répondre à des dizaines de messages, recevoir des inconnus pour des essais, puis s’inquiéter du paiement. C’est précisément ce marché que vise Drive (Drivecar.io), un réseau de franchise français d’intermédiation automobile qui se donne pour mission de « digitaliser et sécuriser la vente de voitures entre particuliers ».",
      },
      { type: "h2", text: "Un marché énorme, une expérience client à la traîne" },
      {
        type: "p",
        text: "Avec plus de 5,5 millions de transactions de véhicules d’occasion par an en France, le marché est l’un des plus importants du commerce entre particuliers. Pourtant, selon Drive, il reste « mal exploité » : expérience client insuffisante, peur des arnaques, faible digitalisation et délais de vente trop longs. Le pari du réseau est de professionnaliser ce moment de vie sans en faire disparaître l’avantage principal pour le vendeur, à savoir un meilleur prix qu’une reprise classique.",
      },
      { type: "h2", text: "Comment ça marche, étape par étape" },
      {
        type: "list",
        items: [
          "Le franchisé prospecte son secteur et signe un mandat de vente avec le propriétaire.",
          "Il publie l’annonce et gère les contacts entrants.",
          "Il sélectionne les acheteurs sérieux et organise les essais.",
          "Il sécurise la transaction, couverte par un assureur partenaire.",
        ],
      },
      {
        type: "p",
        text: "Le vendeur, lui, suit l’avancement de sa vente, et les fonds comme les dossiers sont protégés à chaque étape. Le tout s’appuie sur DriveX, une plateforme développée en interne qui gère la cotation des véhicules, le suivi commercial, les tableaux de bord et l’intranet du réseau.",
      },
      { type: "h2", text: "Un modèle sans stock, pensé pour la franchise" },
      {
        type: "p",
        text: "C’est l’argument central pour les futurs franchisés : ni stock de voitures à financer, ni concession à faire tourner. Drive propose deux formats, showroom ou agence, et vise une ouverture en moins de six mois. Chaque franchisé dispose d’une zone exclusive pendant toute la durée de son contrat de cinq ans, renouvelable.",
      },
      {
        type: "p",
        text: "L’accompagnement est structuré : trois à quatre semaines de formation, dont une au siège et deux à trois en agence pilote, un animateur réseau dédié, un pôle marketing, des partenaires juridiques, financiers et immobiliers, ainsi qu’un séminaire annuel et des réunions régionales.",
      },
      {
        type: "quote",
        text: "Le réseau Drive est sélectif : nous cherchons des personnalités, pas des CV.",
        source: "Site officiel du réseau Drive",
      },
      { type: "h2", text: "Ce qu’il faut savoir côté chiffres" },
      {
        type: "p",
        text: "Selon les informations publiées par le réseau, les droits d’entrée s’élèvent à 30 000 € HT, formation initiale comprise, avec un apport à partir de 15 000 € HT et un financement global à partir de 60 000 € HT pour une agence. La redevance mensuelle est de 1 500 € HT fixe, puis de 8 % du chiffre d’affaires mensuel au-delà de 12 500 € HT, à laquelle s’ajoute une redevance marketing de 2 %. Drive revendique dix franchisés recrutés en six mois.",
      },
      {
        type: "p",
        text: "Comme le rappelle le réseau lui-même, ces éléments relèvent d’une communication de recrutement et ne constituent ni une offre de contrat ni une promesse de rentabilité. Les informations financières détaillées figurent dans le document d’information précontractuel (DIP), remis obligatoirement avant toute signature. Tout candidat a intérêt à le faire relire par un conseil indépendant.",
      },
      { type: "h2", text: "Une jeune pousse portée par son fondateur" },
      {
        type: "p",
        text: "Fondée par Qassim Rouahi, ancien étudiant en médecine devenu entrepreneur de l’automobile, l’entreprise compte une petite équipe d’une dizaine de personnes. Elle a officialisé son lancement après sa participation à Franchise Expo Paris en mars 2026 et recrute désormais des franchisés dans toute la France, la disponibilité de chaque zone étant validée après candidature.",
      },
      {
        type: "p",
        text: "Le slogan affiché sur LinkedIn résume l’ambition : « Join the future of automotive sales ». Reste à voir si le modèle tiendra ses promesses à grande échelle. Une chose est sûre : sur un marché aussi vaste et aussi peu structuré, la place existe pour un acteur qui parie sur la confiance.",
      },
    ],
  },
];
