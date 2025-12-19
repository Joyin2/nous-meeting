'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-40 w-full transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-black/50 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/nous_logo.png" alt="Nous Meeting Logo" width={130} height={100} className="rounded-md" />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#signin" className="text-sm text-zinc-800 dark:text-zinc-100 hover:text-nous-blue dark:hover:text-nous-pink">
            Sign In
          </Link>
          <Link href="#signup" className="rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-4 py-2 text-sm font-medium text-white hover:opacity-90">
            Sign Up
          </Link>
        </div>
        <button
          className="md:hidden rounded-lg border border-zinc-200 p-2.5 dark:border-zinc-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <span className="block h-0.5 w-5 bg-current"></span>
          <span className="mt-1 block h-0.5 w-5 bg-current"></span>
          <span className="mt-1 block h-0.5 w-5 bg-current"></span>
        </button>
      </nav>
        {open && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-700 dark:bg-black">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 pt-2">
                <Link href="#signin" onClick={() => setOpen(false)} className="rounded-lg border border-zinc-200 px-4 py-2 text-sm dark:border-zinc-700 hover:text-nous-blue dark:hover:text-nous-pink">
                  Sign In
                </Link>
                <Link href="#signup" onClick={() => setOpen(false)} className="rounded-lg bg-gradient-to-r from-nous-blue to-nous-pink px-4 py-2 text-sm text-white hover:opacity-90">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
    </header>
  )
}
