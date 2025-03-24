"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Globe } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12 md:gap-16">
          <div
            className={`space-y-4 text-center transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-white/70 md:text-lg">
              Get to know more about my background, skills, and what drives me as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`flex justify-center transform transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-rotate-gradient"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden bg-black">
                  <Image
                    src="/me.jpg"
                    alt="Profile"
                    fill
                    className="object-cover rounded-full p-1"
                  />
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transform transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                My Journey
              </h3>
              <p className="text-white/70">
                I&apos;m a web developer with a passion for creating intuitive and engaging digital experiences. With a
                background in design and programming, I bring a unique perspective to every project.
              </p>
              <p className="text-white/70">
                I enjoy solving complex problems and turning ideas into reality through clean, efficient code. When I&apos;m
                not coding, you can find me exploring new technologies, contributing to open-source projects, or
                enjoying outdoor activities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Code, title: "Development", delay: 600 },
              { icon: Palette, title: "Design", delay: 800 },
              { icon: Globe, title: "Strategy", delay: 1000 },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-black/40 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 transform ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <div className="relative p-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-md"></div>
                    <item.icon className="h-10 w-10 text-cyan-400 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/70">
                    {item.title === "Development" &&
                      "Experienced in building responsive websites and applications using modern frameworks and technologies."}
                    {item.title === "Design" &&
                      "Skilled in creating visually appealing interfaces with a focus on user experience and accessibility."}
                    {item.title === "Strategy" &&
                      "Adept at understanding business needs and translating them into effective digital solutions."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px]" />
    </section>
  )
}

