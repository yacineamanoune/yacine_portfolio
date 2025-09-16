import Link from 'next/link'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    link: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={project.link}
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor"
      >
        <div className="flex w-full flex-col items-start">
                        <div className="flex w-full items-center justify-between">
                          <h2 className="flex items-center justify-between font-medium tracking-tight text-primary group-hover:text-accent">
                            <span>{project.title}</span>
                          </h2>
                        </div>
                        <p className="pt-0.5 text-sm font-normal text-foreground max-w-[90%] truncate">
                          {project.description}
                        </p>
                      </div>
      </Link>
    </div>
  )
}
