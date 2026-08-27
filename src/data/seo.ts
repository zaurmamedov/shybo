export const siteUrl = "https://shybo.com.ua";
export const siteName = "ШИБО";

export const siteTitle = "Будівельна компанія ШИБО (SHYBO) | Кривий Ріг";
export const siteDescription =
  "Будівельна компанія ШИБО (SHYBO) у Кривому Розі. Будівництво, ремонт, оздоблювальні роботи, ремонт покрівлі та інші підтверджені послуги компанії.";

type OpenGraphImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type OpenGraphMetadataOptions = {
  title: string;
  description: string;
  path: string;
  images?: readonly OpenGraphImage[];
};

export const defaultOpenGraphImage: OpenGraphImage = {
  url: "/images/hero/hero-services.webp",
  width: 2560,
  height: 1707,
  alt: "Будівельні роботи на об’єкті",
};

export function createOpenGraphMetadata({
  title,
  description,
  path,
  images = [defaultOpenGraphImage],
}: OpenGraphMetadataOptions) {
  return {
    title,
    description,
    url: path,
    siteName,
    locale: "uk_UA",
    type: "website" as const,
    images: [...images],
  };
}
