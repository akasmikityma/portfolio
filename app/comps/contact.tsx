"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useInView } from "react-intersection-observer"
import emailjs from "emailjs-com"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string, // Replace with your Service ID
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string, // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_USER_ID as string // Replace with your User ID
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text)
          alert("Thanks for your message! I'll get back to you soon.")
          setFormData({ name: "", email: "", message: "" })
          setIsSending(false)
        },
        (error) => {
          console.error("Error sending email:", error.text)
          alert("Something went wrong. Please try again later.")
          setIsSending(false)
        }
      )
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12 md:gap-16">
          <div
            className={`space-y-4 text-center transform transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-white/70 md:text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "bishalmaity90@gmail.com",
                href: "mailto:your.email@example.com",
                delay: 200,
              },
              { icon: Phone, title: "Phone", content: "+91-7001493262", href: "tel: 7001493262", delay: 200 },
              { icon: MapPin, title: "Location", content: "Kolkata,West Bengal", href: "#", delay: 200 },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-black/40 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 transform ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <div className="mr-3 p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <item.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    <a href={item.href} className="hover:text-cyan-400 transition-colors">
                      {item.content}
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            className={`w-full max-w-2xl mx-auto bg-black/40 border border-white/10 backdrop-blur-sm transform transition-all duration-700 delay-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 shadow-lg shadow-cyan-500/20"
                  disabled={isSending}
                >
                  {isSending ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]" />
    </section>
  )
}

