'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import ProjectCard from '@/components/ProjectCard'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'ShipFree',
    description: 'An open-source next.js saas boilerplate alternative to shipfast',
    link: 'https://shipfree.idee8.agency'
  },
  {
    id: 2,
    title: 'Mentor.ai',
    description: 'AI to mentor you on your codebase',
    link: 'https://github.com/idee8/mentor.ai'
  },
  {
    id: 3,
    title: 'Careervault',
    description: 'Discover hidden job posts on linkedin',
    link: 'https://careervault.work'
  },
  {
    id: 4,
    title: 'Metri',
    description: 'Grow your startup with data analytics',
    link: 'https://metri.salim.engineer'
  },
  {
    id: 5,
    title: 'Salim',
    description: 'Me on the internet - one you are on',
    link: 'https://salim.engineer'
  }
]

const blogs = [
  {
    id: 1,
    title: 'why we built shipfree',
    views: 918,
    date: 'Feb 21, 2025',
    link: '/blog/why-we-built-shipfree'
  },
  {
    id: 2,
    title: 'Creating Grainy Textures in Figma',
    views: 423,
    date: 'Mar 15, 2025',
    link: '/blog/grainy-textures'
  }
]

const photos = [
  {
    id: 1,
    src: '/photos/me.png',
    alt: 'Workspace setup',
    className: 'col-span-2 row-span-6'
  },
  {
    id: 2,
    src: '/photos/cat.png',
    alt: 'My Cute cat',
    className: 'col-span-2 row-span-3'
  },
  {
    id: 3,
    src: '/photos/setup.png',
    alt: 'setup',
    className: 'col-span-2 row-span-3'
  },
]

export default function Home() {
  return (
    <>
      <Header />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Salim Rutaganda
      </h1>

      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <h2 className="text-base text-foreground">designer</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">developer</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">entrepreneur</h2>
      </div>

      <p className="pt-4 text-sm text-foreground">
        Hi there, I'm Salim, a 16 y/o high school student at RCA building the next Apple. I craft dope {' '}
        <span className="text-primary">AI</span> and{' '}
        <span className="text-primary">web dev</span> projects, I'm a freak {' '} 
        <span className="text-primary">UI designer</span> rocking a minimalist style.{' '} When I'm not coding, I'm chasing wild ideas to ignite my next epic entrepreneurial quest.
      </p>

      <SocialLinks />

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Projects</h2>
        <div className="pt-1.5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="group">
          <p className="mt-4 w-fit rounded-md border border-foreground/10 bg-hoverColor px-2 py-1 text-xs text-foreground transition-all duration-300 ease-in-out">
            Feel free to explore my{' '}
            <Link
              href="https://github.com/rutaganda-salim?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-primary underline underline-offset-2 transition-all duration-150 ease-in-out md:hover:text-accent md:group-hover:text-accent"
            >
              GitHub
            </Link>{' '}
            for more projects. Most of them are open-source.
          </p>
        </div>
      </section>

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Blog</h2>
        <div className="pt-1.5">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Photos</h2>
        <div className="pt-1.5 grid grid-cols-4 gap-4 auto-rows-[minmax(0,_1fr)] min-h-[400px]">
          {photos.map(photo => (
            <div
              key={photo.id}
              className={`relative w-full h-full overflow-hidden rounded-xl ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
                priority={photo.id === 1}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
