'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const features = [
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
  },
  {
    title: 'Multilingual Support',
    desc: 'Break down language barriers with real-time transcription and translation in over 30 languages. Ensure every team member stays on the same page, no matter where they are.',
    image: '/features/feature-01.png'
  },
  {
    title: 'AI Chatbot Assistant',
    desc: 'Have a question about a past meeting? Just ask. Our AI Chatbot can instantly retrieve details, summarize decisions, and draft follow-up emails based on your meeting history.',
    image: '/features/feature-02.png'
  }
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Core Features</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">Clear, visual, and modular.</p>
      </div>

      {/* Mobile Layout (Stacked) */}
      <div className="grid grid-cols-1 gap-12 md:hidden">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col gap-6 bg-transparent">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-white">{f.title}</h3>
              <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">{f.desc}</p>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800/50">
              <Image 
                src={f.image} 
                alt={f.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout (Swiper) */}
      <div className="hidden md:block">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {features.map((f) => (
            <SwiperSlide key={f.title}>
              <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 bg-transparent text-center">
                <div className="max-w-2xl">
                  <h3 className="text-4xl font-bold text-zinc-800 dark:text-white">{f.title}</h3>
                  <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">{f.desc}</p>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-2xl dark:bg-zinc-800/50 dark:shadow-nous-blue/20">
                  <Image 
                    src={f.image} 
                    alt={f.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
