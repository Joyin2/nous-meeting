'use client'
import { Clock, FileQuestion, XCircle } from 'lucide-react'

const items = [
  { title: 'Meetings Waste Time', desc: 'Hours lost without clear outcomes.', icon: Clock },
  { title: 'Notes get lost', desc: 'No central, searchable memory.', icon: FileQuestion },
  { title: 'Manual Follow-ups Fail', desc: 'Action items missed, no accountability.', icon: XCircle },
]

export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Why Nous Meeting</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">Explain the pain before the solution.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-nous-blue to-nous-pink">
              <it.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-white">{it.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
