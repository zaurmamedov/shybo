export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "building" | "repair" | "finishing" | "roof" | "plumbing" | "waste";
};

export const services: readonly Service[] = [
  {
    id: "building-construction",
    title: "Будівництво житлових і нежитлових будівель",
    description:
      "Повний комплекс будівельних робіт для житлових, офісних і комерційних об’єктів.",
    icon: "building",
  },
  {
    id: "repair",
    title: "Ремонт",
    description:
      "Комплексний ремонт приміщень із підготовкою, оздобленням та завершальними роботами.",
    icon: "repair",
  },
  {
    id: "finishing",
    title: "Оздоблення",
    description:
      "Внутрішні та зовнішні оздоблювальні роботи з акуратним виконанням деталей.",
    icon: "finishing",
  },
  {
    id: "roof-repair",
    title: "Ремонт кровлі",
    description:
      "Відновлення, герметизація та ремонт покрівель різного типу.",
    icon: "roof",
  },
  {
    id: "plumbing",
    title: "Сантехнічні роботи",
    description:
      "Монтаж, заміна та ремонт сантехнічних систем і обладнання.",
    icon: "plumbing",
  },
  {
    id: "safe-waste-collection",
    title: "Збирання безпечних відходів",
    description:
      "Організоване збирання та підготовка безпечних будівельних відходів до вивезення.",
    icon: "waste",
  },
];

export const servicesOverview = services.map((service) => service.title).join(", ");
