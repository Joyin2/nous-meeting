'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Tilt3D from "../components/Tilt3D";
import Link from "next/link";

const values = [
  {
    title: 'Customer First',
    desc: 'Every decision we make starts with our customers\' needs and success in mind.',
  },
  {
    title: 'Innovation',
    desc: 'We constantly push boundaries to create cutting-edge AI solutions.',
  },
  {
    title: 'Collaboration',
    desc: 'We believe the best results come from diverse teams working together.',
  },
  {
    title: 'Excellence',
    desc: 'We strive for excellence in everything we do, from code to customer service.',
  },
]

export default function About() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_1200px_at_50%_20%,rgba(66,47,155,0.25),transparent)]"></div>
          <div className="absolute inset-0 -z-30 animate-slow-pan bg-[conic-gradient(from_180deg_at_50%_50%,#422F9B_0%,#BA37C3_25%,#422F9B_50%,#BA37C3_75%,#422F9B_100%)] opacity-20"></div>
          
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="inline-flex items-center rounded-full border border-nous-blue/30 bg-nous-blue/10 px-3 py-1 text-sm font-medium text-nous-blue dark:text-nous-pink backdrop-blur-md mb-8">
              About Nous Meeting
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-7xl animate-rise">
              We&apos;re on a mission to make meetings <span className="bg-gradient-to-r from-nous-blue to-nous-pink bg-clip-text text-transparent">more productive</span>
            </h1>
            <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto animate-fade">
              By turning conversations into actionable insights with AI.
            </p>
            <div className="mt-10 flex justify-center gap-4 animate-fade">
              <Link href="#story" className="rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-8 py-3 text-base font-medium text-white hover:opacity-90 transition-opacity">
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Our Journey</div>
                <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <p>
                    Nous Meeting was founded with a simple idea: meetings should empower people, not drain them.
                  </p>
                  <p>
                    We saw teams wasting hours searching notes, losing track of action items, and struggling to align. Our founders, having experienced these pain points firsthand in their corporate careers, knew there had to be a better way.
                  </p>
                  <p>
                    Our AI-powered platform captures, organizes, and transforms conversations into clarity—helping teams focus on what matters most: making progress and achieving results.
                  </p>
                </div>
                <div className="mt-8">
                   <Link href="#mission" className="text-nous-blue dark:text-nous-pink font-medium hover:underline flex items-center gap-2">
                    Read our mission <span>→</span>
                   </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-nous-blue to-nous-pink rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-2xl">
                   {/* Placeholder for "Team collaboration" image */}
                   <Image 
                     src="/home/ab-home-01.png" 
                     alt="Team collaboration" 
                     fill 
                     className="object-cover"
                     unoptimized
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Our Purpose</div>
               <h2 className="text-4xl font-bold text-zinc-800 dark:text-white">Mission & Vision</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Tilt3D className="h-full">
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">Our Mission</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    To simplify communication and maximize productivity by providing teams with AI-powered meeting intelligence that ensures nothing is lost, forgotten, or overlooked.
                  </p>
                </div>
              </Tilt3D>
              
              <Tilt3D className="h-full">
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">Our Vision</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    To become the go-to productivity companion for organizations worldwide—where every meeting ends with clarity, direction, and results.
                  </p>
                </div>
              </Tilt3D>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Our Values</div>
               <h2 className="text-4xl font-bold text-zinc-800 dark:text-white">What Drives Us</h2>
               <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                 Our core values guide every decision we make and shape the culture we build
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <Tilt3D key={v.title} className="h-full">
                  <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900 group">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-nous-blue to-nous-pink flex items-center justify-center mb-6 text-white font-bold text-xl">
                      {v.title[0]}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-3">{v.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </Tilt3D>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="mx-auto max-w-5xl">
            <Tilt3D>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 p-12 text-center shadow-2xl sm:p-20 group">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#422F9B,transparent_70%)] opacity-30 transition-opacity duration-700 group-hover:opacity-50"></div>
                <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,#BA37C3_0%,transparent_50%,#422F9B_100%)] opacity-20 animate-slow-pan"></div>
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 group-hover:border-white/20 transition-colors"></div>

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg mb-6">
                  Ready to Join Our Mission?
                </h2>
                <p className="mx-auto max-w-2xl text-lg sm:text-xl text-zinc-300 mb-10 leading-relaxed">
                  Be part of the future of productive meetings. Start your journey with Nous Meeting today.
                </p>
                
                <div className="flex justify-center">
                  <Link 
                    href="#" 
                    className="relative group/btn inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-lg font-bold text-zinc-800 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                  >
                    <span className="relative z-10">Get Started Free</span>
                    <span className="absolute inset-0 -z-0 bg-gradient-to-r from-nous-blue/20 to-nous-pink/20 opacity-0 transition-opacity group-hover/btn:opacity-100"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover/btn:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </Tilt3D>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
