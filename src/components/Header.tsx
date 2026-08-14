import { motion } from 'framer-motion'
import { useLocale } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/types'

const options: { id: Locale; label: string }[] = [
  { id: 'en', label: 'EN' },
  { id: 'tr', label: 'TR' },
  { id: 'de', label: 'DE' },
]

export function Header() {
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a192f]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <nav aria-label={t.navLabel} className="flex items-center gap-6">
          <a
            href="#projects"
            className="font-mono text-sm text-slate-300 transition-colors hover:text-teal-300"
          >
            {t.navProjects}
          </a>
        </nav>
        <nav aria-label={t.langLabel} className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {options.map((option) => {
            const active = option.id === locale
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setLocale(option.id)}
                className="relative rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-300 transition-colors hover:text-teal-300"
                aria-pressed={active}
              >
                {active && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-teal-400/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
