import { v4 as randomUUID } from 'uuid';

import type {
  MissionsDataProps,
  ProjectsDataProps,
  ResumeDataPropsExtended,
  ResumeSections
} from '@/types/globals';

import type { QuoteBlockProps } from '@/components/home/quoteBlock/QuoteBlock';

export const MISSIONS_DATA = [
  {
    blockList: [{ id: randomUUID(), item: 'Intégration de nouveaux éléments au site web' }],
    companyUrl: 'https://www.timi.pro',
    id: randomUUID(),
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '13/03/25 au 20/03/25', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  },
  {
    blockList: [{ id: randomUUID(), item: 'Intégration du nouveau design site web' }],
    companyUrl: 'https://www.timi.pro',
    id: randomUUID(),
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '10/02/25 au 17/02/25', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  },
  {
    blockList: [{ id: randomUUID(), item: 'Intégration de nouveaux éléments au site web' }],
    companyUrl: 'https://www.timi.pro',
    id: randomUUID(),
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '05/06/24 au 11/06/24', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  },
  {
    blockList: [{ id: randomUUID(), item: 'Intégration de nouveaux éléments au site web' }],
    companyUrl: 'https://www.timi.pro',
    id: randomUUID(),
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '24/05/24 au 28/05/24', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  }
] satisfies Array<MissionsDataProps>;

export const PROJECTS_DATA = [
  {
    blockList: [
      {
        id: randomUUID(),
        item: 'Utilisation du Kit Figma UI pour créer le design (Simple Design System)'
      },
      { id: randomUUID(), item: 'React / Next.js / TailwindCSS' },
      { id: randomUUID(), item: 'Génération du CV via Puppeteer' },
      { id: randomUUID(), item: 'Envoi d’un email avec Nodemailer' },
      { id: randomUUID(), item: 'Hébergement sur Vercel' }
    ],
    id: randomUUID(),
    picture: { alt: 'Photo du projet', url: '/default.webp' },
    projectUrl: 'https://github.com/Dorianspeed/website',
    subtitle: { content: 'Site vitrine présentant mon parcours', element: 'h3' },
    title: { content: 'Website', element: 'h2' }
  }
] satisfies Array<ProjectsDataProps>;

export const QUOTES_DATA = [
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    id: randomUUID(),
    quote: 'Parmi la crème de la crème'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    id: randomUUID(),
    quote: 'Un perfectionniste qui ne laisse rien au hasard'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    id: randomUUID(),
    quote: 'À recommander les yeux fermés'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    id: randomUUID(),
    quote: 'S’il ne vous en faut qu’un, c’est lui !'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    id: randomUUID(),
    quote: 'Une qualité toujours au rendez-vous'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    id: randomUUID(),
    quote: 'Une personne qui a le sens de l’humour'
  }
] satisfies Array<QuoteBlockProps>;

export const RESUME_DATA = {
  'my-certifications': {
    data: [
      {
        assetsList: [],
        blockList: [],
        id: randomUUID(),
        picture: { alt: 'Logo Opquast', url: '/opquast.webp' },
        subtitle: { content: 'Certificat Opquast - Oct. 2020 à Oct. 2025', element: 'h4' },
        title: { content: 'Maîtrise de la qualité en projet web - 845 points', element: 'h3' }
      }
    ],
    position: 3
  },
  'my-courses': {
    data: [
      {
        assetsList: [],
        blockList: [
          {
            id: randomUUID(),
            item: 'Une formation intensive en téléprésentiel sur 721h (5 mois) au sein d’une école Labellisée Grande Ecole du Numérique'
          },
          {
            id: randomUUID(),
            item: '3 mois de socle (HTML5, CSS3, Javascript, SQL, Git, Méthode Agile, API REST, Architecture MVC'
          },
          {
            id: randomUUID(),
            item: '1 mois de spécialisation (SQL avancé, Sqitch, API GraphQL, MongoDB / Redis, Mocha / Chai)'
          },
          {
            id: randomUUID(),
            item: '1 mois de projet (Site type Medium, groupe de 5 personnes)'
          }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo O’clock', url: '/oclock.webp' },
        subtitle: { content: 'École O’clock', element: 'h4' },
        title: { content: 'Reconversion en développement web', element: 'h3' }
      },
      {
        assetsList: [],
        blockList: [],
        id: randomUUID(),
        picture: { alt: 'Logo IUT de Rouen', url: '/iut.webp' },
        subtitle: { content: 'IUT - Rouen - 2009 à 2011', element: 'h4' },
        title: { content: 'Diplôme Universitaire de Technologie Chimie', element: 'h3' }
      },
      {
        assetsList: [],
        blockList: [],
        id: randomUUID(),
        picture: { alt: 'Logo Lycée Galilée', url: '/default.webp' },
        subtitle: {
          content: 'Lycée Galilée - Franqueville-Saint-Pierre - 2006 à 2009',
          element: 'h4'
        },
        title: { content: 'Baccalauréat série scientifique', element: 'h3' }
      }
    ],
    position: 2
  },
  'my-professional-experiences': {
    data: [
      {
        assetsList: [
          { id: randomUUID(), item: 'Softskill' },
          { id: randomUUID(), item: 'Softskill' }
        ],
        blockList: [
          {
            id: randomUUID(),
            item: 'Utilisation des langages / technologies au sein des différents projets : React / NextJS / Styled-Components / TypeScript'
          },
          {
            id: randomUUID(),
            item: 'Intégration de nouvelles fonctionnalités sur les différents produits de l’entreprise (intégration HTML / CSS et création de nouveaux composants React)'
          },
          {
            id: randomUUID(),
            item: 'Réalisation de tests unitaires et end2end (Jest / Cypress)'
          },
          {
            id: randomUUID(),
            item: 'Participation à l’architecture technique des nouvelles fonctionnalités et au déploiement / suivi des développements'
          }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo Casavo', url: '/casavo.webp' },
        subtitle: { content: 'Casavo - CDI - Juil. 2021 à mai 2024', element: 'h4' },
        title: { content: 'Développeur web front-end', element: 'h3' }
      },
      {
        assetsList: [
          { id: randomUUID(), item: 'Softskill' },
          { id: randomUUID(), item: 'Softskill' }
        ],
        blockList: [
          { id: randomUUID(), item: 'Travail en équipe' },
          {
            id: randomUUID(),
            item: 'Réalisation des analyses physico-chimiques selon les Pharmacopées Européenne et Japonaise, l’USP, la Food Chemical Codex, la JECFA, ...'
          },
          {
            id: randomUUID(),
            item: 'Réalisation d’études BPL (Bonnes Pratiques de Laboratoire)'
          },
          { id: randomUUID(), item: 'Analyse des engrais selon les exigences COFRAC' },
          {
            id: randomUUID(),
            item: 'Analyses des chlorures et Karl Fischer sur tous types de matrices'
          },
          { id: randomUUID(), item: 'Analyse des détergents et produits d’hygiène' },
          {
            id: randomUUID(),
            item: 'Gestion en autonomie des dossiers (analyses, respect des dates de rendu client, ...)'
          },
          { id: randomUUID(), item: 'Rédaction et validation des dossiers dans le LIMS' },
          { id: randomUUID(), item: 'Rédaction de nouveaux protocoles' },
          {
            id: randomUUID(),
            item: 'Analyse des contaminants et pesticides en LC-MS/MS (extractions liquide-liquide et solide-liquide, purification SPE)'
          }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo SGS', url: '/sgs.webp' },
        subtitle: { content: 'SGS France - CDI - Août 2017 à Févr. 2020', element: 'h4' },
        title: { content: 'Technicien chimiste', element: 'h3' }
      },
      {
        assetsList: [
          { id: randomUUID(), item: 'Softskill' },
          { id: randomUUID(), item: 'Softskill' }
        ],
        blockList: [
          { id: randomUUID(), item: 'Travailleur isolé de nuit' },
          {
            id: randomUUID(),
            item: 'Contrôle des matières premières et des produits finis dans le domaine du fiduciaire'
          },
          {
            id: randomUUID(),
            item: 'Contrôles visuel ou mécanique entraînant l’utilisation d’appareils mesurant les différentes caractéristiques du papier et des encres'
          },
          { id: randomUUID(), item: 'Mise en place de nouvelles procédures d’analyse' },
          { id: randomUUID(), item: 'Étude rhéologique des encres' }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo Oberthur', url: '/oberthur.webp' },
        subtitle: {
          content: 'Oberthur Fiduciaire SAS - CDI - Déc. 2011 à Juil. 2017',
          element: 'h4'
        },
        title: { content: 'Contrôleur qualité', element: 'h3' }
      },
      {
        assetsList: [
          { id: randomUUID(), item: 'Softskill' },
          { id: randomUUID(), item: 'Softskill' }
        ],
        blockList: [
          { id: randomUUID(), item: 'Travail de nuit' },
          {
            id: randomUUID(),
            item: 'Travail en équipe dans le domaine de la plasturgie pour le compte de la pharmaceutique'
          },
          { id: randomUUID(), item: 'Évolution dans une zone à atmosphère contrôlée' },
          { id: randomUUID(), item: 'Fabrication de systèmes de pulvérisation' },
          { id: randomUUID(), item: 'Réalisation des contrôles en cours de production' },
          { id: randomUUID(), item: 'Respect des Bonnes Pratiques de Fabrication (BPF)' }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo Aptar Pharma', url: '/aptar.webp' },
        subtitle: { content: 'Aptar Pharma - CDD - Juil. 2011 à Août 2011', element: 'h4' },
        title: { content: 'Opérateur contrôleur', element: 'h3' }
      },
      {
        assetsList: [
          { id: randomUUID(), item: 'Softskill' },
          { id: randomUUID(), item: 'Softskill' }
        ],
        blockList: [
          {
            id: randomUUID(),
            item: 'Mise en place d’un protocole d’utilisation sur un dessiccateur à infrarouge'
          },
          {
            id: randomUUID(),
            item: 'Contrôle des matières premières et des produits finis dans l’industrie cosmétique'
          },
          {
            id: randomUUID(),
            item: 'Réalisation des tests de teneur en eau (Karl Fischer), d’indice d’iode, de densité, de pH-métrie, de point de fusion, d’indice de réfraction, ...'
          }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo Azeo', url: '/default.webp' },
        subtitle: { content: 'Azeo - Stage - Févr. 2011 à Avr. 2011', element: 'h4' },
        title: { content: 'Technicien chimiste', element: 'h3' }
      },
      {
        assetsList: [
          { id: randomUUID(), item: 'Softskill' },
          { id: randomUUID(), item: 'Softskill' }
        ],
        blockList: [
          { id: randomUUID(), item: 'Travail en 2x8' },
          {
            id: randomUUID(),
            item: 'Travail dans le domaine de la plasturgie pour le compte de la pharmaceutique'
          },
          { id: randomUUID(), item: 'Evolution dans une zone à atmosphère contrôlée' },
          { id: randomUUID(), item: 'Fabrication de systèmes de pulvérisation' },
          { id: randomUUID(), item: 'Réalisation des contrôles en cours de production' },
          { id: randomUUID(), item: 'Respect des Bonnes Pratiques de Fabrication (BPF)' }
        ],
        id: randomUUID(),
        picture: { alt: 'Logo Aptar Pharma', url: '/aptar.webp' },
        subtitle: { content: 'Aptar Pharma - CDD - Juil. 2010 à Août 2010', element: 'h4' },
        title: { content: 'Opérateur contrôleur', element: 'h3' }
      }
    ],
    position: 1
  }
} satisfies Record<ResumeSections, ResumeDataPropsExtended>;
