'use client'
import Link from 'next/link'
import Image from 'next/image'

const sections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Help Center', href: '/help' },
      { label: 'FAQ', href: '/help#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of use', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo and Description Column */}
          <div className="lg:w-1/3">
             <div className="flex items-center gap-2 mb-6">
               <Image src="/nous_logo.png" alt="Nous Meeting Logo" width={120} height={40} className="object-contain" />
             </div>
             <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xs">
               AI-powered transcription, summaries, and meeting insights that turn conversations into action.
             </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:w-2/3 lg:justify-end">
            {sections.map((s) => (
              <div key={s.title}>
                <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{s.title}</div>
                <ul className="mt-4 space-y-2">
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-zinc-600 hover:text-nous-blue dark:text-zinc-300 dark:hover:text-nous-pink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} Nous Meeting. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
