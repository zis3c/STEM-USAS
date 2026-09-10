import { useState } from 'react'
import { Gamepad2, ArrowRight, X } from 'lucide-react'

export default function StemcraftBanner() {
  const [closed, setClosed] = useState(false)

  if (closed) return null

  const goToStemcraft = () => {
    window.location.href = '/stemcraft'
  }

  return (
    <div className="relative border-b border-emerald-500/30 bg-[#061426]/95 backdrop-blur-md px-3 py-1.5 text-xs text-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex shrink-0 items-center gap-1 rounded bg-emerald-500/20 px-2 py-0.5 font-pixel text-[9px] text-emerald-400 border border-emerald-500/40">
            <Gamepad2 size={11} />
            EVENT CUTI
          </span>
          <span className="truncate text-slate-300 text-[11px] sm:text-xs">
            Server Minecraft rasmi <strong className="text-white font-semibold">STEMcraft</strong> kini dibuka sepanjang cuti semester untuk warga USAS!
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={goToStemcraft}
            className="group inline-flex items-center gap-1 rounded-md bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-black active:scale-95"
          >
            <span>Panduan Masuk</span>
            <ArrowRight size={11} className="transition group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => setClosed(true)}
            className="rounded p-0.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Tutup Banner"
          >
            <X size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}
