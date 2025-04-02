'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AnimationTechniquesPost() {
  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Modern Animation Techniques</h1>
        <p className="text-sm text-foreground">March 10, 2025</p>

        <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground">
          <img 
            src="/images/animation.jpg" 
            alt="Animation Demo"
            className="w-full rounded-lg shadow-lg mb-6"
          />
          <p>
            Modern web animations can significantly enhance user experience when used appropriately.
            This post explores various animation techniques using CSS animations, transitions, and
            JavaScript-based solutions.
          </p>
          <p>
            Learn how to create smooth, performant animations that add life to your web applications
            while maintaining accessibility and user experience.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}