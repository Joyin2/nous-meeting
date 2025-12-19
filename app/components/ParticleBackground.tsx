'use client'
import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const density = Math.max(60, Math.min(160, Math.floor((w * h) / 20000)))
    const positions = new Float32Array(density * 2)
    const velocities = new Float32Array(density * 2)
    const sizes = new Float32Array(density)

    for (let i = 0; i < density; i++) {
      positions[i * 2] = Math.random() * w
      positions[i * 2 + 1] = Math.random() * h
      const angle = Math.random() * Math.PI * 2
      const speed = 0.4 + Math.random() * 0.8
      velocities[i * 2] = Math.cos(angle) * speed
      velocities[i * 2 + 1] = Math.sin(angle) * speed
      sizes[i] = 0.6 + Math.random() * 1.6
    }

    let mouseX = -9999
    let mouseY = -9999
    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const handleLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    const linkDist = Math.min(140, Math.max(80, Math.sqrt(w * h) / 12))
    const attractDist = 120
    const attractStrength = 0.02

    const render = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < density; i++) {
        let x = positions[i * 2]
        let y = positions[i * 2 + 1]
        let vx = velocities[i * 2]
        let vy = velocities[i * 2 + 1]

        if (!reduceMotion && mouseX > -1) {
          const dx = mouseX - x
          const dy = mouseY - y
          const d2 = dx * dx + dy * dy
          if (d2 < attractDist * attractDist) {
            const d = Math.sqrt(d2) || 1
            vx += (dx / d) * attractStrength
            vy += (dy / d) * attractStrength
          }
        }

        x += vx
        y += vy

        if (x < 0) x = w
        if (x > w) x = 0
        if (y < 0) y = h
        if (y > h) y = 0

        positions[i * 2] = x
        positions[i * 2 + 1] = y

        ctx.beginPath()
        ctx.fillStyle = 'rgba(186, 55, 195, 0.8)'
        ctx.arc(x, y, sizes[i], 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) {
        ctx.strokeStyle = 'rgba(186, 55, 195, 0.18)'
        for (let i = 0; i < density; i++) {
          const xi = positions[i * 2]
          const yi = positions[i * 2 + 1]
          for (let j = i + 1; j < density; j++) {
            const xj = positions[j * 2]
            const yj = positions[j * 2 + 1]
            const dx = xi - xj
            const dy = yi - yj
            const d2 = dx * dx + dy * dy
            if (d2 < linkDist * linkDist) {
              const alpha = 1 - Math.sqrt(d2) / linkDist
              ctx.globalAlpha = Math.max(0.05, alpha * 0.5)
              ctx.beginPath()
              ctx.moveTo(xi, yi)
              ctx.lineTo(xj, yj)
              ctx.stroke()
            }
          }
        }
        ctx.globalAlpha = 1
      }

      rafRef.current = requestAnimationFrame(render)
    }

    if (!reduceMotion) {
      rafRef.current = requestAnimationFrame(render)
    } else {
      ctx.fillStyle = 'rgba(186, 55, 195, 0.2)'
      for (let i = 0; i < density; i++) {
        const x = positions[i * 2]
        const y = positions[i * 2 + 1]
        ctx.beginPath()
        ctx.arc(x, y, sizes[i], 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const handleResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-40 [mask-image:radial-gradient(1200px_1200px_at_50%_20%,rgba(255,255,255,1),rgba(255,255,255,0.2))]"
    />
  )
}
