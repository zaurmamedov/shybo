export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

export type Project = {
  slug: string;
  title: string;
  direction: string;
  description: string;
  coverImage: ProjectImage;
  galleryImages: readonly ProjectImage[];
};

export const projects: readonly Project[] = [
  {
    slug: "project-1",
    title: "Проєкт 1",
    direction: "Внутрішня перегородка",
    description:
      "Виконано облаштування внутрішньої заскленої перегородки з дверним блоком для розмежування робочого простору.",
    coverImage: {
      src: "/images/projects/project-1/page01.webp",
      alt: "Засклена внутрішня перегородка з дверним блоком",
      width: 1920,
      height: 1440,
    },
    galleryImages: [
      {
        src: "/images/projects/project-1/page01.webp",
        alt: "Засклена внутрішня перегородка з дверним блоком",
        width: 1920,
        height: 1440,
      },
      {
        src: "/images/projects/project-1/page14.webp",
        alt: "Перегородка та підвісна стеля в робочому приміщенні",
        width: 1800,
        height: 1350,
      },
      {
        src: "/images/projects/project-1/page04.webp",
        alt: "Верхня секція внутрішньої перегородки",
        width: 1800,
        height: 1350,
      },
      {
        src: "/images/projects/project-1/page11.webp",
        alt: "Загальний вигляд внутрішнього робочого простору",
        width: 1350,
        height: 1800,
      },
      {
        src: "/images/projects/project-1/page15.webp",
        alt: "Робоча зона біля внутрішньої перегородки",
        width: 1800,
        height: 1350,
      },
      {
        src: "/images/projects/project-1/page20.webp",
        alt: "Зона очікування в облаштованому приміщенні",
        width: 1350,
        height: 1800,
      },
      {
        src: "/images/projects/project-1/page10.webp",
        alt: "Стіна та підвісна стеля у внутрішньому просторі",
        width: 1350,
        height: 1800,
      },
      {
        src: "/images/projects/project-1/page12.webp",
        alt: "Оздоблена стіна з настінним обігрівачем",
        width: 1800,
        height: 1350,
      },
    ],
  },
  {
    slug: "project-2",
    title: "Проєкт 2",
    direction: "Металеві огорожі",
    description: "Виконано встановлення металевих секційних огорож різного типу.",
    coverImage: {
      src: "/images/projects/project-2/p03.webp",
      alt: "Металева секційна огорожа біля будівлі",
      width: 1200,
      height: 1600,
      objectPosition: "center 44%",
    },
    galleryImages: [
      {
        src: "/images/projects/project-2/p03.webp",
        alt: "Протяжна металева секційна огорожа біля будівлі",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/projects/project-2/p02.webp",
        alt: "Біла металева огорожа з геометричним заповненням",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/projects/project-2/p01.webp",
        alt: "Висока сітчаста огорожа з непрозорим заповненням",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    slug: "project-3",
    title: "Проєкт 3",
    direction: "Облаштування приміщення",
    description:
      "Виконано комплекс робіт з облаштування внутрішніх і зовнішніх зон об’єкта, зокрема закритого касового модуля з вікном та стійкою для обслуговування.",
    coverImage: {
      src: "/images/projects/project-3/p015.webp",
      alt: "Закритий касовий модуль із вікном обслуговування",
      width: 898,
      height: 1600,
      objectPosition: "center 48%",
    },
    galleryImages: [
      {
        src: "/images/projects/project-3/p015.webp",
        alt: "Закритий касовий модуль із вікном та стійкою обслуговування",
        width: 898,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p014.webp",
        alt: "Зона самообслуговування з терміналами",
        width: 898,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p07.webp",
        alt: "Облаштована внутрішня зона з робочими місцями",
        width: 1600,
        height: 898,
      },
      {
        src: "/images/projects/project-3/p10.webp",
        alt: "Робоче приміщення з підвісною стелею та освітленням",
        width: 1196,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p011.webp",
        alt: "Робоча зона зі стійкою обслуговування",
        width: 1196,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p018.webp",
        alt: "Дверний блок службового приміщення",
        width: 898,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p03.webp",
        alt: "Зовнішні банківські термінали у фасадній ніші",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/projects/project-3/p02.webp",
        alt: "Зовнішня зона з терміналами та металевим майданчиком",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    slug: "project-4",
    title: "Проєкт 4",
    direction: "Вхідна група",
    description:
      "Виконано облаштування вхідної групи зі сходами, металевим майданчиком, огородженнями та поручнями.",
    coverImage: {
      src: "/images/projects/project-4/p16.jpg",
      alt: "Вхідна група зі сходами, майданчиком і поручнями",
      width: 1600,
      height: 778,
    },
    galleryImages: [
      {
        src: "/images/projects/project-4/p16.jpg",
        alt: "Загальний вигляд вхідної групи зі сходами та поручнями",
        width: 1600,
        height: 778,
      },
      {
        src: "/images/projects/project-4/p11.jpg",
        alt: "Металевий майданчик біля входу та прилегле покриття",
        width: 778,
        height: 1600,
      },
      {
        src: "/images/projects/project-4/p13.jpg",
        alt: "Підхід до сходів із тактильним елементом у покритті",
        width: 778,
        height: 1600,
      },
      {
        src: "/images/projects/project-4/p07.jpg",
        alt: "Вхідні сходи з металевими поручнями та майданчиком",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/projects/project-4/p08.jpg",
        alt: "Металевий майданчик з огородженням біля входу",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/projects/project-4/p09.jpg",
        alt: "Поручні вздовж зовнішніх сходів",
        width: 1200,
        height: 1600,
      },
      {
        src: "/images/projects/project-4/p17.jpg",
        alt: "Прилегле мощене покриття біля металевого майданчика",
        width: 1600,
        height: 778,
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
