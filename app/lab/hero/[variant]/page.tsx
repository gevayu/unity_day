import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ChoiceSection from "@/app/_home/ChoiceSection";
import HeroVariant from "../HeroVariant";
import { VARIANTS, getVariant } from "../variants";

type Props = { params: Promise<{ variant: string }> };

// Only /lab/hero/1 ... /lab/hero/7 exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return VARIANTS.map((v) => ({ variant: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const variant = getVariant((await params).variant);
  if (!variant) return {};
  return {
    title: `הירו ${variant.slug}: ${variant.title}`,
    description: variant.description,
  };
}

// What the Figma frame shows in its top 1900px: the site header, the hero
// exploration and the section under it. The rest of the homepage is left out.
export default async function HeroVariantPage({ params }: Props) {
  const variant = getVariant((await params).variant);
  if (!variant) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <HeroVariant variant={variant} />
        <ChoiceSection />
      </main>
    </>
  );
}
