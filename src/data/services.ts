export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "building" | "repair" | "finishing" | "road";
};

export const services: readonly Service[] = [
  {
    id: "building-construction",
    title: "Будівництво житлових і нежитлових будівель",
    description: "Будівельні роботи для житлових і нежитлових об’єктів.",
    icon: "building",
  },
  {
    id: "repair",
    title: "Ремонт",
    description: "Ремонтні роботи для об’єктів різного призначення.",
    icon: "repair",
  },
  {
    id: "finishing",
    title: "Оздоблення",
    description: "Оздоблювальні роботи для житлових, комерційних і промислових об’єктів.",
    icon: "finishing",
  },
  {
    id: "road-construction",
    title: "Будівництво доріг і автострад",
    description: "Роботи з будівництва доріг і автострад.",
    icon: "road",
  },
];
