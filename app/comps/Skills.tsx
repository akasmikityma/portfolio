"use client"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,FaDocker  } from "react-icons/fa"
import { SiTailwindcss, SiGit, SiPostgresql } from "react-icons/si"
import { SiNextdotjs } from "react-icons/si";
export default function Skills() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Docker", icon: FaDocker },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "PostgreSQL", icon: SiPostgresql },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-black/80 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-[700px] text-white/70 md:text-lg">
            A showcase of the tools, technologies, and frameworks I use to build amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-md"></div>
                <skill.icon className="h-12 w-12 text-cyan-400 relative z-10" />
              </div>
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
    </section>
  )
}