"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInClass = mounted ? 'opacity-100 animate-[fadeIn_1s_ease_forwards]' : 'opacity-0';

  return (
    <section id="home" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${fadeInClass}`}>
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">
                Bishal Maity
              </span>
            </h1>
            <p className={`mx-auto max-w-[700px] text-white/70 md:text-xl ${mounted ? 'opacity-100 animate-[fadeIn_1s_ease_forwards_0.5s]' : 'opacity-0'}`}>
              A passionate web developer specializing in creating beautiful and functional web apps.
            </p>
          </div>
          <div className={`space-x-4 ${mounted ? 'opacity-100 animate-[fadeIn_1s_ease_forwards_0.8s]' : 'opacity-0'}`}>
            <Link href="#projects">
              <Button className="bg-gradient-to-r from-[#06b6d4] to-[#9333ea] hover:from-[#0891b2] hover:to-[#7e22ce] text-white border-0 shadow-lg">
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-[#22d3ee]/50 text-black hover:bg-white/10">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-white/50 hover:text-white transition-colors">
              <ArrowDown className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/20 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22d3ee]/20 rounded-full filter blur-[100px]" />
    </section>
  );
}

