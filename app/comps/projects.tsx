"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Conqueror of Jockey",
      description: "A Multiplayer Card Game Adventure",
      image: "/Jockey.png",
      tags: ["Node.js", "React", "Tailwind CSS","Express","WebScoket"],
      liveUrl: "https://conquerorjockey.vercel.app",
      githubUrl: "https://github.com/akasmikityma/Jockey_Game",
    },
    {
      title: "ForceRight",
      description: "An ultimate app to Analyse and practice Competitive Programming",
      image: "/ForceRight.png",
      tags: ["React","TypeScript" ,"Chart.js", "Express","Node","PostgresSql","Prisma"],
      liveUrl: "https://force-rightapp.vercel.app",
      githubUrl: "https://github.com/akasmikityma/forceRight",
    },
    {
      title: "GaanTaan",
      description: "A collaborative playlist app for parties, road trips, workouts, or any occasion.",
      image: "/GaanTaan.png",
      tags: ["TypeScript", "Next.js", "PostgresSql","Prisma"],
      liveUrl: "https://gaan-taan.onrender.com",
      githubUrl: "https://github.com/akasmikityma/gaan-taan",
    },
    {
      title: "Adda-Goppo",
      description: "A Chat app",
      image: "/AddaGoppo.png",
      tags: ["Javascript", "Mui", "MongoDB","Node","Express","Scss","socket.io"],
      liveUrl: "https://chatapp-frontendui.vercel.app",
      githubUrl: "https://github.com/akasmikityma/chatapp-server",
    }
  ]

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12 md:gap-16">
          <div
            className={`space-y-4 text-center transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-white/70 md:text-lg">
              A showcase of my recent work, personal projects, and contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-black/40 border border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-700 hover:border-cyan-500/50 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredIndex === index ? "scale-110 blur-sm" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="flex gap-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-black/50 border-white/20 text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2 py-1 text-xs font-medium text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
    </section>
  )
}





// {
//   title: "Conqueror of Jockey",
//   description: "A Multiplayer Card Game Adventure",
//   image: "/Jockey.png",
//   tags: ["Next.js", "React", "Tailwind CSS"],
//   liveUrl: "#",
//   githubUrl: "#",
// },
// {
//   title: "ForceRight",
//   description: "Document every step of your competitive programming journey. Analyze your performance, track your progress, and become a better problem solver.A dashboard application with data visualization and user authentication.",
//   image: "/ForceRight.png",
//   tags: ["React", "Chart.js", "Firebase"],
//   liveUrl: "#",
//   githubUrl: "#",
// },
// {
//   title: "GaanTaan",
//   description: "GaanTaan lets you and your friends build collaborative playlists for parties, road trips, workouts, or any occasion. Music is better when shared.",
//   image: "/GaanTaan.png",
//   tags: ["TypeScript", "Next.js", "Supabase"],
//   liveUrl: "#",
//   githubUrl: "#",
// },