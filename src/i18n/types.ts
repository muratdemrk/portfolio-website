export type Locale = 'en' | 'tr' | 'de'

export type ProjectCopy = {
  title: string
  description: string
}

export type Messages = {
  greeting: string
  role: string
  about: string
  contactCta: string
  projectsCta: string
  projectsTitle: string
  githubLabel: string
  githubUnavailable: string
  footer: string
  langLabel: string
  navLabel: string
  navProjects: string
  navSocials: string
  liveLabel: string
  prevImage: string
  nextImage: string
  closeImage: string
  projects: Record<string, ProjectCopy>
}
