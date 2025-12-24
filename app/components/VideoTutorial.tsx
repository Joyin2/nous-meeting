'use client'
import { PlayCircle, Zap, Users, Brain } from 'lucide-react'

export default function VideoTutorial() {
  const features = [
    { 
      icon: Zap, 
      title: 'Quick Setup', 
      desc: 'Get started in minutes with our intuitive interface',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      icon: Users, 
      title: 'Seamless Integration', 
      desc: 'Connect directly with your Zoom account',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Brain, 
      title: 'Smart Features', 
      desc: 'Automatic transcription and AI-powered summaries',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">See How It Works</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">Watch our step-by-step tutorial</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Creative Cards */}
        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Number Badge */}
              <div className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-nous-blue to-nous-pink text-white font-bold text-lg shadow-lg opacity-80 group-hover:opacity-100 transition-opacity">
                {idx + 1}
              </div>

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-nous-blue group-hover:to-nous-pink transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Right Side - Video */}
        <div className="relative group">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-700 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="relative aspect-video">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dyP_l0B5r5A?si=nB4RQUXEH9WifVLU" 
                title="How to Create & Join a Zoom Meeting Using NousMeeting | Step-by-Step Tutorial" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Play Icon Badge */}
          <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-nous-blue to-nous-pink shadow-2xl animate-pulse-slow">
            <PlayCircle className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
