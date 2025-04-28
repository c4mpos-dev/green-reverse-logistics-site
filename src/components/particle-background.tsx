"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
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

        // Leaf particles
        class Leaf {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            rotation: number
            rotationSpeed: number
            color: string
            opacity: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.size = Math.random() * 15 + 10
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 1 + 0.5
                this.rotation = Math.random() * Math.PI * 2
                this.rotationSpeed = Math.random() * 0.02 - 0.01
                this.color = `rgba(${Math.floor(100 + Math.random() * 50)}, ${Math.floor(150 + Math.random() * 50)}, ${Math.floor(50 + Math.random() * 50)}, 0.7)`
                this.opacity = 0.1 + Math.random() * 0.4
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                this.rotation += this.rotationSpeed

                // Reset position when out of bounds
                if (this.y > canvas!.height) {
                    this.y = -this.size
                    this.x = Math.random() * canvas!.width
                }
                if (this.x < -this.size) this.x = canvas!.width
                if (this.x > canvas!.width + this.size) this.x = -this.size
            }

            draw() {
                ctx!.save()
                ctx!.translate(this.x, this.y)
                ctx!.rotate(this.rotation)
                ctx!.globalAlpha = this.opacity
                ctx!.fillStyle = this.color

                // Draw leaf shape
                ctx!.beginPath()
                ctx!.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2)
                ctx!.fill()

                // Draw leaf vein
                ctx!.strokeStyle = `rgba(${Math.floor(80 + Math.random() * 30)}, ${Math.floor(120 + Math.random() * 30)}, ${Math.floor(40 + Math.random() * 30)}, 0.8)`
                ctx!.lineWidth = 1
                ctx!.beginPath()
                ctx!.moveTo(-this.size, 0)
                ctx!.lineTo(this.size, 0)
                ctx!.stroke()

                ctx!.restore()
            }
        }

        // Create leaves
        const leaves: Leaf[] = []
        const leafCount = Math.floor(window.innerWidth / 30) // Adjust density based on screen width
        for (let i = 0; i < leafCount; i++) {
            leaves.push(new Leaf())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw background gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
            gradient.addColorStop(0, "rgba(40, 120, 60, 0.2)")
            gradient.addColorStop(1, "rgba(20, 80, 40, 0.1)")
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Update and draw leaves
            leaves.forEach((leaf) => {
                leaf.update()
                leaf.draw()
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", setCanvasDimensions)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{ background: "linear-gradient(to bottom, rgba(240, 255, 240, 0.1), rgba(220, 255, 220, 0.05))" }}
        />
    )
}
