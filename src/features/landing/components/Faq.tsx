import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/shared/i18n/LanguageContext"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

export default function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-3xl scroll-mt-16 px-4 py-10 sm:py-12 md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center md:px-6 md:pt-20 md:pb-14"
    >
      <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />

      <div className="mt-6 flex flex-col gap-3 sm:mt-8 md:mt-10">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={i} delay={i * 80}>
              <div 
                className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-stem-gold/30 bg-stem-gold/5" : "border-stem-line/[0.08] bg-stem-card hover:bg-stem-line/[0.03]"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold md:px-6"
                >
                  <span className="font-display text-sm font-medium text-stem-ink md:text-base">{item.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-stem-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-stem-gold" : ""}`}
                    size={18}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-stem-muted md:px-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
