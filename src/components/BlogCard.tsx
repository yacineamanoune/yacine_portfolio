import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  blog: {
    id: number
    title: string
    date: string
    link: string
    description: string
    icon: string
  }
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={blog.link}
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-[1.02] md:hover:bg-hoverColor"
      >
        <div className="flex w-full flex-col items-start">
                        <div className="flex w-full items-center justify-between">
                          <h2 className="flex items-center justify-between font-medium tracking-tight text-primary group-hover:text-accent">
                            <span>{blog.title}</span>
                            <Image
                              src={blog.icon}
                              alt=""
                              width={16}
                              height={16}
                              className="ml-2 invert"
                            />
                          </h2>
                          <p className="text-sm font-normal text-foreground">
                            {blog.date}
                          </p>
                        </div>
                        <p className="pt-0.5 text-sm font-normal text-foreground max-w-[90%] truncate">
                          {blog.description}
                        </p>
                      </div>
      </Link>
    </div>
  )
}