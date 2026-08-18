import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict, isLang } from "@/content";
import { privacidad } from "@/content/legal";
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
    title: `${dict.legal.privacidad} | Casa El Famós`,
    description: dict.meta.description,
    alternates: legalAlternates(lang, "privacidad"),
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <LegalPage doc={privacidad} dict={getDict(lang)} lang={lang} />;
}
