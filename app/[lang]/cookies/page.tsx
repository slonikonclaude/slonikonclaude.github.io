import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict, isLang } from "@/content";
import { cookies } from "@/content/legal";
import { LegalPage } from "@/components/LegalPage";
import { legalAlternates } from "@/lib/legalMeta";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = getDict(lang);
  return {
    title: `${dict.legal.cookies} | Casa El Famós`,
    description: dict.meta.description,
    alternates: legalAlternates(lang, "cookies"),
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <LegalPage doc={cookies} dict={getDict(lang)} lang={lang} />;
}
