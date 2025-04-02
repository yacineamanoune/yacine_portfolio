'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ResponsiveLayoutsPost() {
  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary">Building Responsive Layouts</h1>
        <p className="text-sm text-foreground">March 15, 2025</p>

        <div className="mt-6 prose prose-sm max-w-none prose-headings:text-primary prose-p:text-foreground">
          <img 
            src="/images/responsive.jpg" 
            alt="Responsive Design Illustration"
            className="w-full rounded-lg shadow-lg mb-6"
          />
          <p>
            Creating responsive layouts is essential for modern web development. This guide explores
            best practices and techniques for building layouts that adapt seamlessly across different
            screen sizes and devices.
          </p>
          <p>
            We'll dive deep into CSS Grid, Flexbox, and modern responsive design patterns that help
            create maintainable and scalable layouts.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}