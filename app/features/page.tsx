'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Tilt3D from "../components/Tilt3D";
import Link from "next/link";

const featuresList = [
  {
    title: 'Auto Transcription',
    desc: 'Let our AI automatically handle your meeting notes. Autotranscription runs in the background, capturing conversations with speaker labels and delivering accurate text—no setup, no effort, no missed details.',
    image: '/features/feature-01.png'
  },
  {
    title: 'AI Generated Summaries',
    desc: 'Let AI do the heavy lifting. Instantly extract key takeaways, action items, sentiment shifts, and speaker summaries—so you leave every meeting with clarity and direction.',
    image: '/features/feature-02.png'
  },
  {
    title: 'Analyze Speaker Sentiment',
    desc: 'Visualize how your meetings feel. Our AI analyzes tone and language to detect sentiment shifts—displayed through intuitive charts and graphs so you can spot engagement and alignment at a glance.',
    image: '/features/feature-03.png'
  },
  {
    title: 'Interactive Dashboard',
    desc: 'Stay in control with a real-time dashboard that organizes your meeting transcripts, speaker summaries, action items, and AI insights—all in one place.',
    image: '/features/feature-04.png'
  },
  {
    title: 'Personalized Calendar',
    desc: 'Keep track of key action items, follow-ups, and meeting insights—automatically synced to your calendar. ActionBoard AI highlights what matters most and helps you plan smarter, not harder.',
    image: '/features/feature-05.png'
  }
]

export default function FeaturesPage() {
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
              Nous Meeting Features
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-7xl animate-rise">
              Powerful <span className="bg-gradient-to-r from-nous-blue to-nous-pink bg-clip-text text-transparent">AI-Driven Features</span>
            </h1>
            <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto animate-fade">
              Discover how our AI-powered platform revolutionizes the way you conduct, analyze, and extract value from every meeting.
            </p>
            <div className="mt-10 flex justify-center gap-4 animate-fade">
              <Link href="#feature-suite" className="rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-8 py-3 text-base font-medium text-white hover:opacity-90 transition-opacity">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="feature-suite" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-6 text-center">
             <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Complete Feature Suite</div>
             <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">Everything you need for <br/> intelligent meetings</h2>
             <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
               Each feature is designed to work seamlessly together, creating a comprehensive meeting intelligence platform.
             </p>
          </div>
        </section>

        {/* Features List Section */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 space-y-32">
            {featuresList.map((f, index) => (
              <div key={f.title} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-nous-blue/10 to-nous-pink/10 px-3 py-1 text-xs font-bold text-nous-blue dark:text-nous-pink mb-4 border border-nous-blue/20">
                    AI-Powered
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-800 dark:text-white mb-6">{f.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Tilt3D>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-2xl group">
                       <div className="absolute inset-0 bg-gradient-to-tr from-nous-blue/20 to-nous-pink/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                       <Image 
                         src={f.image} 
                         alt={f.title} 
                         fill 
                         className="object-cover"
                       />
                    </div>
                  </Tilt3D>
                </div>
              </div>
            ))}
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

                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                  Ready to experience <br/> these features?
                </h2>
                
                <div className="mt-12 flex justify-center">
                  <Link 
                    href="#" 
                    className="relative group/btn inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-lg font-bold text-zinc-800 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                  >
                    <span className="relative z-10">Get Started</span>
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
