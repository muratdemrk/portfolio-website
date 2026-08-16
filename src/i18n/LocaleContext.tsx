import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { de } from './de'
import { en } from './en'
import { tr } from './tr'
import type { Locale, Messages } from './types'

const STORAGE_KEY = 'portfolio-locale'

const dictionaries: Record<Locale, Messages> = { en, tr, de }

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'tr' || value === 'de'
}

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'tr'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isLocale(stored) ? stored : 'tr'
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
