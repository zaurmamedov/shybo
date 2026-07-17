export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePaths: readonly string[];
  featured: boolean;
};

export const projects: readonly Project[] = [
  {
    id: "project-1",
    title: "Проєкт 1",
    category: "Перегородки",
    description: "Встановлена перегородка.",
    imagePaths: [
      "/images/projects/project-1/p01.png",
      "/images/projects/project-1/p02.png",
    ],
    featured: true,
  },
  {
    id: "project-2",
    title: "Проєкт 2",
    category: "Сходи та пандуси",
    description: "Встановлені сходи та пандус.",
    imagePaths: [
      "/images/projects/project-2/p01.png",
      "/images/projects/project-2/p02.png",
    ],
    featured: true,
  },
  {
    id: "project-3",
    title: "Проєкт 3",
    category: "Каса",
    description: "Встановлена каса.",
    imagePaths: [
      "/images/projects/project-3/p01.png",
      "/images/projects/project-3/p02.png",
      "/images/projects/project-3/p03.png",
    ],
    featured: true,
  },
  {
    id: "project-4",
    title: "Проєкт 4",
    category: "Огорожа",
    description: "Встановлена огорожа.",
    imagePaths: ["/images/projects/project-4/p01.png"],
    featured: false,
  },
];
