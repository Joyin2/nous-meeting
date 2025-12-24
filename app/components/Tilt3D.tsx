'use client'
import { useRef, useState, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  scale?: number
}

export default function Tilt3D({ children, className, maxTilt = 8, scale = 1.02 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const handleMove = (e: PointerEvent) => {
      if (reduceMotion) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = x / rect.width
      const py = y / rect.height
      const rx = (py - 0.5) * -2 * maxTilt
      const ry = (px - 0.5) * 2 * maxTilt
      setStyle({
        transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`,
      })
    }
    const handleLeave = () => {
      setStyle({
        transform: `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`,
      })
    }
    el.addEventListener('pointermove', handleMove)
    el.addEventListener('pointerleave', handleLeave)
    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerleave', handleLeave)
    }
  }, [maxTilt, scale])

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 will-change-transform ${className ?? ''}`}
      style={style}
    >
      {children}
    </div>
  )
}

