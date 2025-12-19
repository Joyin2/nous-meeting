'use client'
import Tilt3D from './Tilt3D'
import { ShieldCheck, Lock, Database, FileSearch, CheckCircle } from 'lucide-react'

const items = [
  { title: 'End-to-end encryption', icon: ShieldCheck },
  { title: 'Role-based access control', icon: Lock },
  { title: 'Data retention policies', icon: Database },
  { title: 'Audit logs', icon: FileSearch },
  { title: 'Compliance readiness', icon: CheckCircle },
]

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Security & Compliance</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">Enterprise confidence and trust.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <Tilt3D key={t.title}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-nous-blue to-nous-pink">
                <t.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-4 text-lg font-semibold">{t.title}</div>
            </div>
          </Tilt3D>
        ))}
      </div>
    </section>
  )
}
