'use client'
import Tilt3D from './Tilt3D'
import { Video, Users, Camera, MessageSquare, FileText } from 'lucide-react'

const integrations = [
  { name: 'Zoom', caption: 'Automatically capture meetings from Zoom', icon: Video },
  { name: 'Microsoft Teams', caption: 'Seamless Teams integration', icon: Users },
  { name: 'Google Meet', caption: 'Auto-detect Meet sessions', icon: Camera },
  { name: 'Slack', caption: 'Share summaries in Slack', icon: MessageSquare },
  { name: 'Notion', caption: 'Sync action items to Notion', icon: FileText },
]

export default function Integrations() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Integrations</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">Build trust and familiarity.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {integrations.map((it) => (
          <Tilt3D key={it.name}>
            <div className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-nous-blue to-nous-pink">
                <it.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-3 text-sm font-semibold">{it.name}</div>
              <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">{it.caption}</div>
            </div>
          </Tilt3D>
        ))}
      </div>
    </section>
  )
}
