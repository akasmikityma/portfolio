"use client"

import { useEffect, useRef } from "react"

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Grid properties
    const gridSize = 30
    const dotSize = 1

    // Animation properties
    let animationFrameId: number
    let time = 0

    // Draw the grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)")
      gradient.addColorStop(1, "rgba(10, 10, 20, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid dots with simpler animation
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Simplified animation that doesn't rely on custom keyframes
          const opacity = 0.1 + Math.sin(time + (x + y) * 0.01) * 0.05

          ctx.fillStyle = `rgba(0, 255, 170, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      time += 0.01
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-70" />
}

