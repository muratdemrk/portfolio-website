import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { useLocale } from './i18n/LocaleContext'

export default function App() {
  const { t } = useLocale()

  return (
    <div className="min-h-svh bg-[#0a192f] text-slate-400">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(100,255,218,0.06),_transparent_55%)]" />
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
      </main>
      <footer className="relative border-t border-white/5 py-8 text-center font-mono text-xs text-slate-500">
        {t.footer}
      </footer>
    </div>
  )
}
