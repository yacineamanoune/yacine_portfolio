import Link from 'next/link'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FiTwitter, FiMail } from 'react-icons/fi'
import { FaYoutube, FaGithub  } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";


export default function SocialLinks() {
  return (
    <div className="w-fit grid grid-cols-3 gap-4 pt-4 tracking-tight md:flex md:flex-row md:items-start">
      <Link
        href="/resume"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <HiOutlineDocumentText className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">resume</span>
      </Link>

      <Link
        href="https://www.youtube.com/@BuildandDeploy-c1s"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FaYoutube  className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">youtube</span>
      </Link>

      <Link
        href="https://x.com/salimnunez01"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FiTwitter className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">twitter</span>
      </Link>
      <Link
        href="https://peerlist.io/salim_"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <SiPeerlist className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">peerlist</span>
      </Link>

      <Link
        href="https://github.com/rsalim0"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FaGithub className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">github</span>
      </Link>

      <Link
        href="mailto:me@salim.engineer"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center underline-offset-4 transition duration-150 ease-in-out md:hover:text-accent md:hover:underline"
      >
        <FiMail className="mr-1 h-4 w-4" />
        <span className="text-sm text-primary">email</span>
      </Link>
    </div>
  )
}
