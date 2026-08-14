import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '../data/projects'
import { useLocale } from '../i18n/LocaleContext'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLocale()
  const reduce = useReducedMotion()
  const copy = t.projects[project.id]
  const images = project.images
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const startX = useRef<number | null>(null)
  const lightboxStartX = useRef<number | null>(null)
  const canSlide = images.length > 1

  const go = (dir: -1 | 1) => {
    setActive((current) => (current + dir + images.length) % images.length)
  }

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (canSlide && event.key === 'ArrowLeft') go(-1)
      if (canSlide && event.key === 'ArrowRight') go(1)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, canSlide, images.length])

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const targetIsImage = (event.target as HTMLElement).tagName === 'IMG'
    if (startX.current === null) {
      if (targetIsImage) setOpen(true)
      return
    }
    const delta = event.clientX - startX.current
    startX.current = null
    if (canSlide && Math.abs(delta) >= 40) {
      go(delta < 0 ? 1 : -1)
      return
    }
    if (targetIsImage) setOpen(true)
  }

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.08 }}
      whileHover={reduce ? undefined : { y: -8 }}
      className="group overflow-hidden rounded-xl border border-slate-700/70 bg-[#112240] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-[border-color,box-shadow] duration-300 hover:border-teal-300/50 hover:shadow-[0_20px_40px_-20px_rgba(100,255,218,0.25)]"
    >
      <div
        className="relative h-48 overflow-hidden bg-[#0a192f]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          startX.current = null
        }}
      >
        <img
          src={images[active]}
          alt={copy?.title ?? project.id}
          draggable={false}
          className={`h-full w-full cursor-zoom-in select-none ${
            project.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'
          }`}
        />
        {canSlide && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                go(-1)
              }}
              onPointerDown={(event) => event.stopPropagation()}
              aria-label={t.prevImage}
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a192f]/80 text-slate-100 backdrop-blur-sm transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                go(1)
              }}
              onPointerDown={(event) => event.stopPropagation()}
              aria-label={t.nextImage}
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a192f]/80 text-slate-100 backdrop-blur-sm transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div
              className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
              onPointerDown={(event) => event.stopPropagation()}
            >
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`${i + 1} / ${images.length}`}
                  onClick={(event) => {
                    event.stopPropagation()
                    setActive(i)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'w-4 bg-teal-300' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-slate-100">{copy?.title}</h3>
          <div className="flex shrink-0 items-center gap-1">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t.liveLabel}
                className="rounded-md p-1.5 text-slate-400 transition-colors hover:text-teal-300"
              >
                <ExternalLinkIcon className="h-5 w-5" />
              </a>
            )}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={t.githubLabel}
                className="rounded-md p-1.5 text-slate-400 transition-colors hover:text-teal-300"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            ) : (
              <span className="sr-only">{t.githubUnavailable}</span>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{copy?.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-600/80 px-2.5 py-0.5 font-mono text-[11px] text-teal-300/90"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/90 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={copy?.title ?? project.id}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.closeImage}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#0a192f]/80 text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
            >
              <span className="text-2xl leading-none">×</span>
            </button>
            {canSlide && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  go(-1)
                }}
                aria-label={t.prevImage}
                className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a192f]/80 text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            {canSlide && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  go(1)
                }}
                aria-label={t.nextImage}
                className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a192f]/80 text-slate-100 transition-colors hover:border-teal-300 hover:text-teal-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
            <img
              src={images[active]}
              alt={copy?.title ?? project.id}
              draggable={false}
              className="max-h-[85svh] max-w-[min(96vw,1100px)] select-none rounded-lg object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              onPointerDown={(event) => {
                event.stopPropagation()
                lightboxStartX.current = event.clientX
              }}
              onPointerUp={(event) => {
                event.stopPropagation()
                if (!canSlide || lightboxStartX.current === null) return
                const delta = event.clientX - lightboxStartX.current
                lightboxStartX.current = null
                if (Math.abs(delta) < 40) return
                go(delta < 0 ? 1 : -1)
              }}
              onPointerCancel={() => {
                lightboxStartX.current = null
              }}
            />
            {canSlide && (
              <div
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2"
                onClick={(event) => event.stopPropagation()}
              >
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`${i + 1} / ${images.length}`}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? 'w-6 bg-teal-300' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>,
          document.body,
        )}
    </motion.article>
  )
}
