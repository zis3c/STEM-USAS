import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/shared/i18n/LanguageContext"
import Reveal from "./Reveal"
import SectionHeader from "./SectionHeader"

export default function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative mx-auto max-w-4xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />

      <div className="mt-12 flex flex-col gap-4">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={i} delay={i * 100}>
              <div 
                className={`rounded-2xl border transition-all duration-300 ${isOpen ? "border-stem-gold/30 bg-stem-gold/5" : "border-white/[0.08] bg-stem-card hover:bg-white/[0.03]"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-medium text-stem-ink">{item.q}</span>
                  <ChevronDown
                    className={`text-stem-muted transition-transform duration-300 ${isOpen ? "rotate-180 text-stem-gold" : ""}`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p 
                    className="px-6 pb-6 text-sm leading-relaxed text-stem-muted"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
