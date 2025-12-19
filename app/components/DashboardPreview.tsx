'use client'

export default function DashboardPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Interactive Dashboard</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Stay in control with transcripts, speaker summaries, action items, and AI insights—all in one place.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Transcripts</li>
            <li>Summaries</li>
            <li>Action items</li>
            <li>Charts & insights</li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl bg-nous-blue/10 p-4 dark:bg-nous-blue/20">
                <div className="h-4 w-2/3 rounded bg-nous-blue/40"></div>
                <div className="mt-2 h-3 w-full rounded bg-nous-blue/20"></div>
                <div className="mt-2 h-3 w-5/6 rounded bg-nous-blue/20"></div>
              </div>
              <div className="rounded-xl bg-nous-pink/10 p-4 dark:bg-nous-pink/20">
                <div className="h-4 w-2/3 rounded bg-nous-pink/40"></div>
                <div className="mt-2 h-3 w-full rounded bg-nous-pink/20"></div>
                <div className="mt-2 h-3 w-5/6 rounded bg-nous-pink/20"></div>
              </div>
              <div className="rounded-xl bg-nous-pink/10 p-4 dark:bg-nous-pink/20">
                <div className="h-32 rounded bg-nous-pink/30"></div>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
                <div className="h-10 rounded bg-emerald-200"></div>
                <div className="mt-2 h-10 rounded bg-emerald-100"></div>
                <div className="mt-2 h-10 rounded bg-emerald-100"></div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 h-12 w-12 animate-pulse-slow rounded-full bg-gradient-to-tr from-nous-blue to-nous-pink opacity-50"></div>
        </div>
      </div>
    </section>
  )
}

