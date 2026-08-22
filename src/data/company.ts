export type CompanyPrinciple = {
  title: string;
  description: string;
};

export type CompanyWorkStep = {
  title: string;
  description: string;
};

export type CompanyContent = {
  heroDescription: string;
  introduction: readonly string[];
  focus: string;
};

export type CompanyContactLink = {
  value: string;
  href: string;
  ariaLabel: string;
};

export type CompanyContacts = {
  phones: readonly CompanyContactLink[];
  email: CompanyContactLink;
  address: CompanyContactLink;
};

export const company = {
  heroDescription:
    "Будівельна компанія, що виконує комплекс будівельних, ремонтних та оздоблювальних робіт для житлових, комерційних і промислових об’єктів.",
  introduction: [
    "ШИБО бере участь у реалізації проєктів на різних етапах: від підготовки та організації робіт до основних будівельних процесів і завершального оздоблення.",
    "Працюємо з приватними замовниками, підприємствами, бюджетними установами та організаціями, а також беремо участь у публічних закупівлях через систему Prozorro. Для кожного об’єкта враховуємо його технічні особливості, призначення, обсяг робіт і вимоги замовника.",
  ],
  focus:
    "Наша мета — забезпечити зрозумілий і керований процес будівництва, у якому заздалегідь визначені завдання, обсяг робіт, строки та відповідальність сторін.",
} as const satisfies CompanyContent;

export const companyContacts = {
  phones: [
    {
      value: "068 465 95 67",
      href: "tel:+380684659567",
      ariaLabel: "Зателефонувати за номером 068 465 95 67",
    },
    {
      value: "097 592 16 77",
      href: "tel:+380975921677",
      ariaLabel: "Зателефонувати за номером 097 592 16 77",
    },
  ],
  email: {
    value: "shibokr@ukr.net",
    href: "mailto:shibokr@ukr.net",
    ariaLabel: "Написати на електронну пошту shibokr@ukr.net",
  },
  address: {
    value: "50065, м. Кривий Ріг, вул. Соборності, 66а",
    href: "https://www.google.com/maps/search/?api=1&query=50065%20%D0%BC.%20%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%96%2066%D0%B0",
    ariaLabel: "Відкрити адресу компанії ШИБО в Google Maps",
  },
} as const satisfies CompanyContacts;

export const companyPrinciples: readonly CompanyPrinciple[] = [
  {
    title: "Якість виконання",
    description:
      "Прагнемо виконувати роботи акуратно, технологічно правильно та відповідно до погоджених вимог.",
  },
  {
    title: "Відповідальність і прозорість",
    description:
      "Дотримуємося домовленостей, своєчасно комунікуємо та обговорюємо важливі рішення й зміни до їх реалізації.",
  },
  {
    title: "Безпека",
    description:
      "Враховуємо вимоги безпечного виконання будівельних і ремонтних робіт на об’єкті.",
  },
  {
    title: "Практичність рішень",
    description:
      "Пропонуємо рішення, які відповідають реальним завданням об’єкта й не ускладнюють проєкт без обґрунтованої потреби.",
  },
];

export const companyWorkSteps: readonly CompanyWorkStep[] = [
  {
    title: "Знайомство із завданням",
    description:
      "Уточнюємо тип об’єкта, необхідні роботи, побажання замовника та наявні вихідні матеріали.",
  },
  {
    title: "Огляд об’єкта",
    description:
      "За потреби оцінюємо поточний стан, технічні особливості та умови виконання робіт.",
  },
  {
    title: "Визначення обсягу",
    description:
      "Формуємо перелік робіт, визначаємо їх послідовність і обговорюємо можливі технічні рішення.",
  },
  {
    title: "Узгодження умов",
    description:
      "Погоджуємо обсяг, строки, порядок взаємодії та інші важливі умови до початку робіт.",
  },
  {
    title: "Виконання робіт",
    description:
      "Організовуємо процес і послідовно виконуємо погоджені етапи з урахуванням вимог об’єкта.",
  },
  {
    title: "Контроль і комунікація",
    description:
      "Контролюємо хід робіт, підтримуємо зв’язок і попередньо обговорюємо додаткові роботи або зміни.",
  },
  {
    title: "Завершення проєкту",
    description:
      "Перевіряємо виконані роботи, узгоджуємо результат і завершуємо проєкт у погодженому обсязі.",
  },
];
