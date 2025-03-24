import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 md:py-8 relative z-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-white/50 md:text-left">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.icon.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

