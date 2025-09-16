'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Letterboxd Movie Recommender',
    description: 'Movie recommendations using Letterboxd user profile and collaborative filtering.',
    link: 'projects/letterboxd-recommender'
  }
]


export default function Home() {
  return (
    <>
      <Header />

      <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">
        Yacine Amanoune
      </h1>

      <div className="flex items-center gap-1.5 font-medium tracking-tight">
        <h2 className="text-base text-foreground">ML/AI Engineer</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">Data Scientist</h2>
        <span className="text-foreground/50">•</span>
        <h2 className="text-base text-foreground">Developer</h2>
      </div>

      <p className="pt-4 text-sm text-foreground">
        Hello, my name is Yacine Amanoune. I'm passionate about machine learning and I love to{' '}
        <strong className="text-primary">build</strong> stuff.
      </p>

      <SocialLinks />

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Projects</h2>
        <div className="pt-1.5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </section>

      <section className="pt-8">
        <h2 className="font-medium tracking-tight text-foreground">Experience</h2>
        <div className="pt-4">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="flex items-center justify-between font-medium tracking-tight text-primary">
                  <span>Machine Learning Engineer / Data Scientist</span>
                </h3>
                <span className="text-sm font-normal text-foreground">Technip Energies</span>
              </div>
              <div className="mt-1 sm:mt-0 text-sm text-foreground/70 font-mono">
                2022 – Present
              </div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm font-normal text-foreground space-y-2 pl-2">
              <li>
                Conversational Assistant for Internal Document Analysis – Designed a chatbot using RAG architecture with LangChain, significantly reducing processing time for operational teams and enabling high-potential use cases.
              </li>
              <li>
                Automated Compliance Verification – Developed a document validation system based on LLMs, achieving 93% accuracy. Built an extraction pipeline for regulatory compliance checks.
              </li>
              <li>
                Predictive Analytics for Project Costs – Built a K-means clustering model with 95% accuracy, improving cost forecasting. Automated data integration for real-time analysis of man-hour distribution.
              </li>
              <li>
                Cable Routing Automation & 3D Grid Generation – Developed an integrated automatic cable routing system, reducing manual design time by 80%. Implemented A* pathfinding algorithms, 3D grid models, and computational geometry for industrial-scale automation.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
