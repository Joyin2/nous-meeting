'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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

      {/* Desktop Layout (Swiper - Zoom Style) */}
      <div className="hidden md:block relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet zoom-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active zoom-bullet-active',
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={600}
          className="zoom-swiper"
        >
          {features.map((f) => (
            <SwiperSlide key={f.title}>
              <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
                {/* Text Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-white leading-tight">{f.title}</h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-700">
                  <Image 
                    src={f.image} 
                    alt={f.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:scale-110">
          <svg className="h-6 w-6 text-zinc-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:scale-110">
          <svg className="h-6 w-6 text-zinc-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
