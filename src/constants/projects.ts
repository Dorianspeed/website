import type { ProjectBlockProps } from '@/components/myProjects/projectBlock/ProjectBlock';

export const PROJECTS_DATA = [
  {
    description: 'Site vitrine présentant mon parcours',
    featuresList: [
      'Utilisation du Kit Figma UI pour créer le design (Simple Design System)',
      'React / Next.js / TailwindCSS',
      'Génération du CV via Puppeteer',
      'Envoi d’un email avec Nodemailer',
      'Hébergement sur Vercel'
    ],
    pictureUrl: '/avatar.webp',
    projectName: 'Website',
    projectUrl: 'https://github.com/Dorianspeed/website'
  }
] satisfies Array<ProjectBlockProps>;
