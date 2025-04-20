import type { MissionsDataProps, ProjectsDataProps } from '@/types/globals';

import type { QuoteBlockProps } from '@/components/home/quoteBlock/QuoteBlock';

export const MISSIONS_DATA = [
  {
    companyUrl: 'https://www.timi.pro',
    list: ['Intégration de nouveaux éléments au site web'],
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '13/03/25 au 20/03/25', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  },
  {
    companyUrl: 'https://www.timi.pro',
    list: ['Intégration du nouveau design site web'],
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '10/02/25 au 17/02/25', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  },
  {
    companyUrl: 'https://www.timi.pro',
    list: ['Intégration de nouveaux éléments au site web'],
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '05/06/24 au 11/06/24', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  },
  {
    companyUrl: 'https://www.timi.pro',
    list: ['Intégration de nouveaux éléments au site web'],
    picture: { alt: 'Logo Timi', url: '/timi.webp' },
    subtitle: { content: '24/05/24 au 28/05/24', element: 'h3' },
    title: { content: 'Timi', element: 'h2' }
  }
] satisfies Array<MissionsDataProps>;

export const PROJECTS_DATA = [
  {
    list: [
      'Utilisation du Kit Figma UI pour créer le design (Simple Design System)',
      'React / Next.js / TailwindCSS',
      'Génération du CV via Puppeteer',
      'Envoi d’un email avec Nodemailer',
      'Hébergement sur Vercel'
    ],
    picture: { alt: 'Photo du projet', url: '/avatar.webp' },
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
    quote: 'Parmi la crème de la crème'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    quote: 'Un perfectionniste qui ne laisse rien au hasard'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    quote: 'À recommander les yeux fermés'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    quote: 'S’il ne vous en faut qu’un, c’est lui !'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    quote: 'Une qualité toujours au rendez-vous'
  },
  {
    author: 'Dorian Garcia',
    authorJob: 'Développeur web front-end',
    avatarUrl: '/avatar.webp',
    quote: 'Une personne qui a le sens de l’humour'
  }
] satisfies Array<QuoteBlockProps>;
