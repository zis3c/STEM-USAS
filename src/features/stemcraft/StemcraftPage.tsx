import { useState, useEffect } from 'react'
import {
  Copy,
  Check,
  Clock,
  HelpCircle,
  ShieldCheck,
  ArrowLeft,
  ChevronDown,
  ExternalLink,
  Server,
  X,
  ZoomIn,
  Users,
} from 'lucide-react'
import ScrollToTop from '@/features/landing/components/ScrollToTop'
import MinecraftTransition from './components/MinecraftTransition'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface ServerStatus {
  online: boolean
  players: number
  max: number
}

const STATUS_URL = 'https://api.mcstatus.io/v2/status/bedrock/roosevelt-paolo.tun.ply.gg:47529'

export default function StemcraftPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [serverStatus, setServerStatus] = useState<ServerStatus>({ online: false, players: 0, max: 10 })
  const [statusLoading, setStatusLoading] = useState(true)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(STATUS_URL)
        if (res.ok) {
          const data = await res.json()
          if (data && typeof data.online === 'boolean') {
            setServerStatus({
              online: data.online,
              players: typeof data.players?.online === 'number' ? data.players.online : 0,
              max: typeof data.players?.max === 'number' ? data.players.max : 10,
            })
          }
        } else {
          setServerStatus((status) => ({ ...status, online: false, players: 0 }))
        }
      } catch {
        setServerStatus((status) => ({ ...status, online: false, players: 0 }))
      } finally {
        setStatusLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  // Countdown to 1 October 2026 00:00:00 GMT+8
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-10-01T00:00:00+08:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const tutorialSteps = [
    {
      step: '01',
      title: 'Buka Minecraft dan Tekan Play',
      renderDesc: () => (
        <span>
          Buka aplikasi Minecraft di telefon pintar atau PC anda. Pada menu utama, tekan butang <strong className="text-white font-semibold">Play</strong>.
        </span>
      ),
      img: '/stemcraft-assets/tutor1.PNG',
    },
    {
      step: '02',
      title: 'Pilih Tab Servers dan Tekan Add Server',
      renderDesc: () => (
        <span>
          Pilih tab <strong className="text-white font-semibold">Servers</strong> di bahagian atas skrin. Kemudian scroll ke bawah dan tekan butang <strong className="text-white font-semibold">Add Server</strong>.
        </span>
      ),
      img: '/stemcraft-assets/tutor2.PNG',
    },
    {
      step: '03',
      title: 'Isi Maklumat dan Tekan Add and Play',
      renderDesc: () => (
        <span className="text-justify block">
          Isi Server Name sebagai <code className="rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-emerald-400 font-bold">STEMCRAFT</code>, Server Address sebagai <code className="rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-emerald-400 font-bold">roosevelt-paolo.tun.ply.gg</code>, dan Port <code className="rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-emerald-400 font-bold">47529</code>. Tekan <strong className="text-white font-semibold">Add and Play</strong> untuk terus bermain, atau <strong className="text-white font-semibold">Add Server</strong> untuk simpan.
        </span>
      ),
      img: '/stemcraft-assets/tutor3.PNG',
    },
  ]

  const faqs = [
    {
      q: 'Boleh join guna telefon dan PC ke?',
      a: 'Boleh kedua-duanya. Asalkan menggunakan Minecraft Bedrock Edition (Pocket Edition di telefon Android atau iOS, dan Bedrock di PC Windows).',
    },
    {
      q: 'Minecraft Java Edition boleh masuk ke?',
      a: 'Tidak boleh. Server ini khas untuk edisi Bedrock sahaja.',
    },
    {
      q: 'Perlu install sebarang VPN ke?',
      a: 'Tidak perlu sebarang VPN. Sambungan terus menggunakan tunnel Playit.gg.',
    },
    {
      q: 'Berapa had pemain serentak?',
      a: 'Server survival santai ini menyokong sehingga 10 orang pemain serentak pada satu masa (boleh ditambah jika ada permintaan).',
    },
    {
      q: 'Kena bayar ke untuk sertai server ini?',
      a: 'Percuma. Server ini disediakan khas oleh pasukan STEM USAS untuk semua warga pelajar USAS beriadah cuti semester ini.',
    },
    {
      q: 'Apa perlu buat jika keluar ralat sambungan?',
      a: 'Pastikan Server Address ditaip roosevelt-paolo.tun.ply.gg dan Port 47529 dengan tepat tanpa ruang kosong, semak internet anda, dan cuba mulakan semula aplikasi Minecraft.',
    },
  ]

  const navigateToHome = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    window.history.pushState({}, '', '/')
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Minecraft Pixelated Entrance Transition */}
      <MinecraftTransition />

      {/* Subtle ambient lighting */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-full max-w-3xl rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-amber-500/[0.07] blur-[130px]" />
      </div>

      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#06070a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={navigateToHome}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95"
              aria-label="Kembali ke laman utama"
            >
              <ArrowLeft size={14} className="text-slate-400" />
              <span>STEM</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Unified Status Pill */}
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${statusLoading ? 'border-amber-500/30 bg-amber-500/10 text-amber-300' : serverStatus.online ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-red-500/30 bg-red-500/10 text-red-300'}`}>
              <span className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${statusLoading ? 'bg-amber-400 animate-pulse' : serverStatus.online ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                <span>{statusLoading ? 'Loading...' : serverStatus.online ? 'Online' : 'Offline'}</span>
              </span>
              <span className={`h-3 w-[1px] ${statusLoading ? 'bg-amber-500/30' : serverStatus.online ? 'bg-emerald-500/30' : 'bg-red-500/30'}`} />
              <span className={`flex items-center gap-1 ${statusLoading ? 'text-amber-200' : serverStatus.online ? 'text-emerald-300' : 'text-red-200'}`}>
                <Users size={12} className={statusLoading ? 'text-amber-400' : serverStatus.online ? 'text-emerald-400' : 'text-red-300'} />
                <span>{statusLoading ? '...' : `${serverStatus.players}/${serverStatus.max}`}</span>
              </span>
            </div>

            <a
              href="https://t.me/STEMUSAS"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <ExternalLink size={12} />
              Telegram
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* HERO SECTION */}
        <section className="text-center">
          <h1 className="flex items-center justify-center gap-2.5 sm:gap-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {/* Minecraft Grass Block Logo */}
            <svg
              className="h-8 w-8 sm:h-12 sm:w-12 shrink-0 drop-shadow-[0_0_16px_rgba(52,211,153,0.4)]"
              viewBox="0 0 32 32"
              fill="none"
              aria-label="Minecraft Logo"
            >
              {/* Top Face - Grass */}
              <polygon points="16,3 27.5,9.5 16,16 4.5,9.5" fill="#48B534" />
              <polygon points="16,4.5 23.5,9 16,13.5 8.5,9" fill="#5CD444" />

              {/* Left Face - Dirt Base */}
              <polygon points="4.5,9.5 16,16 16,29 4.5,22.5" fill="#724B2C" />
              {/* Left Face - Grass Drips */}
              <polygon points="4.5,9.5 16,16 16,19 14,18 12,20 9,17.5 7,19 4.5,16.5" fill="#48B534" />

              {/* Right Face - Dirt Base (Shadow) */}
              <polygon points="16,16 27.5,9.5 27.5,22.5 16,29" fill="#593A22" />
              {/* Right Face - Grass Drips (Shadow) */}
              <polygon points="16,16 27.5,9.5 27.5,16.5 25,19 23,17.5 20,20 18,18 16,19" fill="#3D9B2B" />
            </svg>
            <span>
              STEM<span className="text-emerald-400">CRAFT</span>
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Server Minecraft komuniti USAS untuk berehat, membina memori, dan meluangkan masa bersama kawan-kawan sepanjang cuti semester ini.
          </p>
        </section>

        {/* ULTRA-MINIMALIST COUNTDOWN */}
        <section className="mt-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400/90 mb-3">
            <Clock size={13} />
            <span className="tracking-wider uppercase text-[11px]">Baki Masa Server Dibuka</span>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4 font-mono text-2xl sm:text-4xl font-bold text-amber-400 tracking-tight">
            <div className="flex flex-col items-center">
              <span>{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest mt-1">HARI</span>
            </div>
            <span className="text-white/20 -mt-3">:</span>
            <div className="flex flex-col items-center">
              <span>{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest mt-1">JAM</span>
            </div>
            <span className="text-white/20 -mt-3">:</span>
            <div className="flex flex-col items-center">
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest mt-1">MINIT</span>
            </div>
            <span className="text-white/20 -mt-3">:</span>
            <div className="flex flex-col items-center">
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest mt-1">SAAT</span>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-400">
            Dibuka sepanjang cuti semester sehingga 1 Oktober 2026.
          </p>
        </section>

        {/* MINIMALIST SERVER DETAILS TABLE */}
        <section className="mt-8 sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Server size={14} />
                <span>MAKLUMAT SERVER</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">Bedrock / PE</span>
            </div>

            <div className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {/* Server Name */}
              <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 hover:bg-white/[0.02] transition">
                <span className="font-mono text-slate-400">Server Name</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-400 font-mono">STEMCRAFT</span>
                  <button
                    onClick={() => copyToClipboard('STEMCRAFT', 'name')}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition hover:bg-emerald-500 hover:text-black active:scale-95"
                    aria-label="Salin Server Name"
                    title="Salin Server Name"
                  >
                    {copiedField === 'name' ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              </div>

              {/* Server Address */}
              <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 hover:bg-white/[0.02] transition gap-3">
                <span className="font-mono text-slate-400 shrink-0">Server Address</span>
                <div className="flex items-center gap-2 min-w-0">
                  <code className="font-mono text-xs sm:text-sm font-bold text-emerald-400 truncate">
                    roosevelt-paolo.tun.ply.gg
                  </code>
                  <button
                    onClick={() => copyToClipboard('roosevelt-paolo.tun.ply.gg', 'address')}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition hover:bg-emerald-500 hover:text-black active:scale-95"
                    aria-label="Salin Server Address"
                    title="Salin Server Address"
                  >
                    {copiedField === 'address' ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              </div>

              {/* Port */}
              <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 hover:bg-white/[0.02] transition">
                <span className="font-mono text-slate-400">Port</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-emerald-400">47529</span>
                  <button
                    onClick={() => copyToClipboard('47529', 'port')}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition hover:bg-emerald-500 hover:text-black active:scale-95"
                    aria-label="Salin Port"
                    title="Salin Port"
                  >
                    {copiedField === 'port' ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              </div>

              {/* Edition */}
              <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 hover:bg-white/[0.02] transition">
                <span className="font-mono text-slate-400">Edition</span>
                <span className="text-slate-200">Bedrock (Phone &amp; PC)</span>
              </div>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP TUTORIAL (ZIG-ZAG ALTERNATING LAYOUT, BORDERLESS) */}
        <section className="mt-10 sm:mt-14">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-sm bg-emerald-400" />
              <h2 className="font-display text-base sm:text-lg font-bold text-white">
                Cara Masuk STEMcraft
              </h2>
            </div>
            <span className="text-[11px] font-mono text-slate-400">3 Langkah Mudah</span>
          </div>

          <div className="mt-6 space-y-8 sm:space-y-12">
            {tutorialSteps.map((s, index) => {
              const isEven = index % 2 === 1
              return (
                <div
                  key={s.step}
                  className="py-2"
                >
                  <div
                    className={`flex flex-col gap-6 md:items-center ${
                      isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                  >
                    {/* Gambar (Transparent, No Border, No Black Background) */}
                    <div
                      className="w-full md:w-1/2 relative cursor-zoom-in overflow-hidden rounded-xl group shrink-0"
                      onClick={() => setSelectedImage(s.img)}
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-auto max-h-[340px] object-contain mx-auto transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100 rounded-xl">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                          <ZoomIn size={13} />
                          Besarkan gambar
                        </span>
                      </div>
                    </div>

                    {/* Penerangan */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-amber-400 mb-1.5">
                        <span>LANGKAH {s.step}</span>
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {s.title}
                      </h3>
                      <div className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {s.renderDesc()}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* DISTINCT MINIMALIST WORLD PREVIEW (NO BORDER) */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">DUNIA SURVIVAL</span>
            <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-white">
              Gambaran Dunia STEMcraft
            </h3>
            <p className="text-xs text-slate-400 mt-1">Bina, teroka, dan santai bersama rakan</p>
          </div>

          <div
            className="relative cursor-zoom-in overflow-hidden rounded-2xl group"
            onClick={() => setSelectedImage('/stemcraft-assets/preview.PNG')}
          >
            <img
              src="/stemcraft-assets/preview.PNG"
              alt="Dunia Minecraft STEMcraft"
              className="w-full h-auto max-h-[460px] object-contain mx-auto transition duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100 rounded-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <ZoomIn size={14} />
                Klik untuk besarkan gambar
              </span>
            </div>
          </div>
        </section>

        {/* SERVER RULES */}
        <section className="mt-12 sm:mt-16">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <ShieldCheck size={16} />
              <span>PERATURAN SERVER</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-red-950/15 p-4">
                <div className="font-bold text-red-300 text-sm">
                  Dilarang Merosakkan Spawn
                </div>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  Bebas buat apa sahaja dalam server, tetapi jangan rosakkan atau buat sebarang perangkap di kawasan spawn.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/15 p-4">
                <div className="font-bold text-emerald-300 text-sm">
                  Bebas Meneroka dan Membina
                </div>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  Bina rumah, cari sumber, dan nikmati permainan survival santai bersama komuniti pelajar USAS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (ANIMATED ACCORDION) */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <HelpCircle size={14} />
              <span>SOALAN LAZIM</span>
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
              Pertanyaan &amp; Jawapan
            </h2>
          </div>

          <div className="mt-6 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-emerald-500/30 bg-emerald-500/[0.04]'
                      : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left text-xs sm:text-sm font-semibold text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 py-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#03060f] px-4 py-8 text-center text-xs text-slate-400">
        <p className="leading-relaxed">© {new Date().getFullYear()} STEM USAS. Minecraft hak milik Mojang Synergies AB.</p>
      </footer>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-black">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white hover:bg-white/20"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>
            <img
              src={selectedImage}
              alt="Paparan penuh"
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Scroll To Top */}
      <ScrollToTop />
    </div>
  )
}
