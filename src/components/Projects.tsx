import { projects } from '../data/projects'
import { useLocale } from '../i18n/LocaleContext'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const { t } = useLocale()

  return (
    <section id="projects" className="scroll-mt-24 px-6 pb-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 flex items-center gap-4 font-display text-2xl font-semibold text-slate-100">
          <span className="font-mono text-base font-normal text-teal-300">03.</span>
          {t.projectsTitle}
          <span className="h-px flex-1 bg-slate-700/80" />
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
