"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function WasteGraph() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; value: number; year: number } | null>(null)
    const pointsRef = useRef<{ x: number; y: number; value: number; year: number }[]>([])
    const dimensionsRef = useRef<{ width: number; height: number } | null>(null)

    // Data for e-waste in Brazil (in thousands of tons)
    const data = [
        { year: 2018, tons: 1.5 },
        { year: 2019, tons: 1.8 },
        { year: 2020, tons: 1.9 },
        { year: 2021, tons: 2 },
        { year: 2022, tons: 2.1 },
        { year: 2023, tons: 2.4 },
        { year: 2024, tons: 2.4 },
    ]

  // Function to draw the graph
    const drawGraph = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const dimensions = dimensionsRef.current
        if (!dimensions) return

        // Clear canvas
        ctx.clearRect(0, 0, dimensions.width, dimensions.height)

        // Graph settings
        const padding = {
        top: 30,
        right: 20,
        bottom: 40,
        left: 40,
        }
        const graphWidth = dimensions.width - padding.left - padding.right
        const graphHeight = dimensions.height - padding.top - padding.bottom

        // Find max value
        const maxValue = 4

        // Draw axes
        ctx.strokeStyle = "#e2e8f0" // slate-200
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(padding.left, padding.top)
        ctx.lineTo(padding.left, dimensions.height - padding.bottom)
        ctx.lineTo(dimensions.width - padding.right, dimensions.height - padding.bottom)
        ctx.stroke()

        // Draw y-axis labels
        ctx.textAlign = "right"
        ctx.textBaseline = "middle"
        ctx.fillStyle = "#94a3b8" // slate-400
        ctx.font = "12px sans-serif"

        const yAxisSteps = 4
        for (let i = 0; i <= yAxisSteps; i++) {
        const value = Math.round((maxValue / yAxisSteps) * i)
        const y = dimensions.height - padding.bottom - (graphHeight / yAxisSteps) * i

        ctx.fillText(`${value}`, padding.left - 5, y)
        }

        // Draw x-axis labels
        ctx.textAlign = "center"
        ctx.textBaseline = "top"
        ctx.fillStyle = "#94a3b8" // slate-400

        const xStep = graphWidth / (data.length - 1)
        data.forEach((item, index) => {
        const x = padding.left + xStep * index
        // Skip some labels on small screens to prevent overlap
        if (dimensions.width < 500 && index % 2 !== 0 && index !== data.length - 1) return
        ctx.fillText(item.year.toString(), x, dimensions.height - padding.bottom + 5)
        })

        // Draw the line
        ctx.strokeStyle = "#16a34a" // green-600
        ctx.lineWidth = 2
        ctx.beginPath()

        // Clear points array
        pointsRef.current = []

        data.forEach((item, index) => {
        const x = padding.left + xStep * index
        const yValue = (item.tons / maxValue) * graphHeight
        const y = dimensions.height - padding.bottom - yValue

        // Store point for hover detection
        pointsRef.current.push({ x, y, value: item.tons, year: item.year })

        if (index === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
        })
        ctx.stroke()

        // Draw points on the line
        pointsRef.current.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#ffffff"
        ctx.fill()
        ctx.strokeStyle = "#16a34a" // green-600
        ctx.lineWidth = 1
        ctx.stroke()
        })

        // Draw tooltip if hovering over a point
        if (hoveredPoint) {
        const tooltipWidth = 80
        const tooltipHeight = 40
        const tooltipX = Math.min(dimensions.width - tooltipWidth - 5, Math.max(5, hoveredPoint.x - tooltipWidth / 2))
        const tooltipY = hoveredPoint.y - tooltipHeight - 10

        // Draw tooltip background
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
        ctx.beginPath()
        ctx.roundRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 4)
        ctx.fill()

        // Draw tooltip text
        ctx.fillStyle = "#ffffff"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.font = "bold 12px sans-serif"
        ctx.fillText(`${hoveredPoint.year}`, tooltipX + tooltipWidth / 2, tooltipY + tooltipHeight / 3)
        ctx.fillText(`${hoveredPoint.value}M de Ton.`, tooltipX + tooltipWidth / 2, tooltipY + (tooltipHeight * 2) / 3)

        // Highlight the hovered point
        ctx.beginPath()
        ctx.arc(hoveredPoint.x, hoveredPoint.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = "#16a34a" // green-600
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.stroke()
        }
    }

    // Function to update canvas dimensions
    const updateCanvasDimensions = () => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return false

        const containerWidth = container.clientWidth
        // Set height based on width with min/max constraints
        const containerHeight = Math.max(250, Math.min(350, containerWidth * 0.5))

        // Set canvas dimensions with device pixel ratio for sharp rendering
        const dpr = window.devicePixelRatio || 1
        canvas.width = containerWidth * dpr
        canvas.height = containerHeight * dpr

        const ctx = canvas.getContext("2d")
        if (ctx) {
        ctx.scale(dpr, dpr)
        }

        canvas.style.width = `${containerWidth}px`
        canvas.style.height = `${containerHeight}px`

        dimensionsRef.current = { width: containerWidth, height: containerHeight }
        return true
    }

    // Handle mouse move for hover effect
    const handleMouseMove = (e: MouseEvent) => {
        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Check if mouse is over any point
        let found = false
        for (const point of pointsRef.current) {
        const distance = Math.sqrt((mouseX - point.x) ** 2 + (mouseY - point.y) ** 2)
        if (distance <= 15) {
            // 15px hit area
            setHoveredPoint(point)
            found = true
            break
        }
        }

        if (!found) {
        setHoveredPoint(null)
        }
    }

    // Handle touch for mobile devices
    const handleTouch = (e: TouchEvent) => {
        const canvas = canvasRef.current
        if (!canvas || e.touches.length !== 1) return

        const rect = canvas.getBoundingClientRect()
        const touchX = e.touches[0].clientX - rect.left
        const touchY = e.touches[0].clientY - rect.top

        // Check if touch is over any point
        let found = false
        for (const point of pointsRef.current) {
        const distance = Math.sqrt((touchX - point.x) ** 2 + (touchY - point.y) ** 2)
        if (distance <= 20) {
            // 20px hit area (larger for touch)
            setHoveredPoint(point)
            found = true
            break
        }
        }

        if (!found) {
        setHoveredPoint(null)
        }
    }

    // Set up ResizeObserver
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Initial setup
        if (updateCanvasDimensions()) {
        drawGraph()
        }

        // Create ResizeObserver
        const resizeObserver = new ResizeObserver(() => {
        if (updateCanvasDimensions()) {
            drawGraph()
        }
        })

        // Start observing
        resizeObserver.observe(container)

        // Cleanup
        return () => {
        resizeObserver.disconnect()
        }
    }, [])

    // Set up event listeners
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        // Add event listeners
        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("touchstart", handleTouch)
        canvas.addEventListener("touchmove", handleTouch)
        canvas.addEventListener("mouseleave", () => setHoveredPoint(null))
        canvas.addEventListener("touchend", () => setHoveredPoint(null))

        // Cleanup
        return () => {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("touchstart", handleTouch)
        canvas.removeEventListener("touchmove", handleTouch)
        canvas.removeEventListener("mouseleave", () => setHoveredPoint(null))
        canvas.removeEventListener("touchend", () => setHoveredPoint(null))
        }
    }, [])

    // Redraw when hoveredPoint changes
    useEffect(() => {
        drawGraph()
    }, [hoveredPoint])

    return (
        <Card className="w-full sm:py-6" ref={containerRef}>
            <canvas ref={canvasRef} className="w-full px-2 sm:px-6" />
        </Card>
    )
}
