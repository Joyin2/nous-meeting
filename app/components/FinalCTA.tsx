'use client'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-20">
      <div className="absolute inset-0 -z-10 animate-slow-pan bg-[conic-gradient(from_180deg_at_50%_50%,#422F9B_0%,#BA37C3_25%,#422F9B_50%,#BA37C3_75%,#422F9B_100%)] opacity-25"></div>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Ready to use Nous Meeting?</h2>
        <Link href="#signup" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-8 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90">
          Try Now
        </Link>
      </div>
    </section>
  )
}

