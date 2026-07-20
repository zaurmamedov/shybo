export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  images: readonly ProjectImage[];
  featured: boolean;
};

export const projects: readonly Project[] = [
  {
    id: "project-1",
    title: "Проєкт 1",
    category: "Перегородки",
    description: "Встановлена перегородка.",
    images: [
      {
        src: "/images/projects/project-1/p01.png",
        alt: "Встановлена скляна перегородка з дверима в приміщенні",
        width: 4000,
        height: 3000,
      },
      {
        src: "/images/projects/project-1/p02.png",
        alt: "Верхня частина встановленої скляної перегородки",
        width: 4000,
        height: 3000,
      },
    ],
    featured: true,
  },
  {
    id: "project-2",
    title: "Проєкт 2",
    category: "Сходи та пандуси",
    description: "Встановлені сходи та пандус.",
    images: [
      {
        src: "/images/projects/project-2/p01.png",
        alt: "Встановлені зовнішні сходи, пандус і металеві поручні",
        width: 1600,
        height: 738,
      },
      {
        src: "/images/projects/project-2/p02.png",
        alt: "Металева площадка пандуса з огородженням біля входу",
        width: 1600,
        height: 738,
      },
    ],
    featured: true,
  },
  {
    id: "project-3",
    title: "Проєкт 3",
    category: "Каса",
    description: "Встановлена каса.",
    images: [
      {
        src: "/images/projects/project-3/p01.png",
        alt: "Встановлена каса з металевим корпусом і вікном обслуговування",
        width: 898,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p02.png",
        alt: "Бічна частина металевого корпусу встановленої каси",
        width: 1196,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p03.png",
        alt: "Оздоблення бічної стінки встановленої каси",
        width: 738,
        height: 1598,
      },
    ],
    featured: true,
  },
  {
    id: "project-4",
    title: "Проєкт 4",
    category: "Огорожа",
    description: "Встановлена огорожа.",
    images: [
      {
        src: "/images/projects/project-4/p01.png",
        alt: "Встановлена металева огорожа з колючим дротом",
        width: 1200,
        height: 1600,
      },
    ],
    featured: false,
  },
];
