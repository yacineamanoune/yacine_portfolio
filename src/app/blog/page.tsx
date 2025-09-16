'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'

export default function Blog() {
  const blogs = [
  {
    id: 1,
    title: 'why we built shipfree',
    date: 'Feb 21, 2025',
    link: '/blog/why-we-built-shipfree',
    description: "blog article 1 description .",
    icon: 'https://ext.same-assets.com/937924524/3131399881.svg'
  },
  {
    id: 2,
    title: 'Creating Grainy Textures in Figma',
    date: 'Mar 15, 2025',
    link: '/blog/grainy-textures',
    description:"blog article 2 description .",
    icon: 'https://ext.same-assets.com/937924524/3131399881.svg'
  }
]

  return (
    <>
      <Header showHomeLink={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-[2.5rem] font-serif tracking-tight text-primary mb-8">Blog</h1>
        <div className="grid gap-8">
          {blogs.map(blog => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
        </div>
      </div>
      <Footer />
    </>
  )
}