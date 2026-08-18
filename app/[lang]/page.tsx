import { notFound } from "next/navigation";
import { getDict, isLang } from "@/content";

import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { StorySection } from "@/components/StorySection";
import { ArtSection } from "@/components/ArtSection";
import { CocinaSection } from "@/components/CocinaSection";
import { PaellaSection } from "@/components/PaellaSection";
import { WineSection } from "@/components/WineSection";
import { EspacioSection } from "@/components/EspacioSection";
import { TerrazaSection } from "@/components/TerrazaSection";
import { ContactSection } from "@/components/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const dict = getDict(lang);

  return (
    <>
      {/* 01 */} <Hero lang={lang} dict={dict} />
      {/* 02 */} <Manifesto dict={dict} />
      {/* 03 */} <StorySection dict={dict} />
      {/* 04 */} <ArtSection dict={dict} />
      {/* 05 + 07 — the carta tabs inside Cocina cover especialidades */}
      <CocinaSection dict={dict} />
      {/* 06 */} <PaellaSection dict={dict} />
      {/* 08 */} <WineSection dict={dict} />
      {/* 09 */} <EspacioSection dict={dict} />
      {/* 10 */} <TerrazaSection dict={dict} lang={lang} />
      {/* 11 — phone and email now live in Contact; there is no booking flow */}
      <ContactSection dict={dict} />
    </>
  );
}
