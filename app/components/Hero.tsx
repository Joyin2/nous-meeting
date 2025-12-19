'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_1200px_at_50%_20%,rgba(66,47,155,0.25),transparent)]"></div>
      <div className="absolute inset-0 -z-30 animate-slow-pan bg-[conic-gradient(from_180deg_at_50%_50%,#422F9B_0%,#BA37C3_25%,#422F9B_50%,#BA37C3_75%,#422F9B_100%)] opacity-20"></div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="animate-rise text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-6xl text-glow">
          From Meetings to Meaning
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade text-lg leading-8 text-zinc-600 dark:text-white">
          Turns your meetings into actionable transcripts, live notes, intelligent summaries, and searchable insights—powered by AI.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="#signup" className="group rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-xl hover:opacity-90">
            <span className="inline-block transition group-hover:-translate-y-0.5">Get Started</span>
          </Link>
          <Link href="#features" className="group rounded-full border border-nous-blue px-6 py-3 text-sm font-medium text-nous-blue transition hover:bg-nous-blue/5 dark:border-nous-pink dark:text-nous-pink dark:hover:bg-nous-pink/10">
            <span className="inline-block transition group-hover:-translate-y-0.5">View Features</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

