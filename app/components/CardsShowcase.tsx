'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const cards = [
  {
    id: 1,
    title: 'Seamless Collaboration',
    description: 'Transform the way your team works together with real-time insights and intelligent automation that keeps everyone aligned.',
    image: '/cards/1.png'
  },
  {
    id: 2,
    title: 'Powerful Analytics',
    description: 'Unlock deep insights from your meetings with AI-powered analytics that reveal trends, patterns, and opportunities.',
    image: '/cards/2.png'
  },
  {
    id: 3,
    title: 'Smart Workflows',
    description: 'Automate repetitive tasks and streamline your processes with intelligent workflows that adapt to your needs.',
    image: '/cards/3.png'
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description: 'Rest easy knowing your data is protected with enterprise-grade security and compliance features built for modern teams.',
    image: '/cards/4.png'
  },
  {
    id: 5,
    title: 'Unified Experience',
    description: 'Bring all your tools together in one unified platform that scales with your organization.',
    image: '/cards/5.png'
  },
  {
    id: 6,
    title: 'AI-Powered Insights',
    description: 'Leverage cutting-edge AI to extract meaningful insights and actionable intelligence from every conversation.',
    image: '/cards/6.png'
  }
]

export default function CardsShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Experience the Future of Meetings
        </h2>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
          Discover how our platform transforms the way you collaborate, communicate, and connect.
        </p>
      </div>

      {/* Mobile Layout (Stacked) */}
      <div className="grid grid-cols-1 gap-8 md:hidden">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-6 bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <Image 
                  src={card.image} 
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{card.title}</h3>
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout (Zoom-Style Swiper) */}
        <div className="hidden md:block relative">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            slidesPerGroup={1}
            loop={false}
            navigation={{
              nextEl: '.cards-swiper-button-next',
              prevEl: '.cards-swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            className="cards-showcase-swiper pb-12"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="group h-full">
                  {/* Card Container */}
                  <div className="relative h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-[600px] w-full overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.05]">
                      <Image 
                        src={card.image} 
                        alt={card.title}
                        fill
                        className="object-cover"
                        priority={card.id <= 4}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <button className="cards-swiper-button-prev absolute -left-6 top-1/3 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 dark:bg-zinc-800/95 shadow-lg border border-zinc-200 dark:border-zinc-600 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-zinc-700">
            <svg className="h-6 w-6 text-zinc-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="cards-swiper-button-next absolute -right-6 top-1/3 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 dark:bg-zinc-800/95 shadow-lg border border-zinc-200 dark:border-zinc-600 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-zinc-700">
            <svg className="h-6 w-6 text-zinc-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .cards-showcase-swiper .swiper-pagination {
          bottom: -40px !important;
        }
        
        .cards-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #d4d4d8 !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
        }
        
        .cards-bullet-active {
          width: 32px !important;
          border-radius: 6px !important;
          background: #3b82f6 !important;
          opacity: 1 !important;
        }
        
        .dark .cards-bullet {
          background: #52525b !important;
        }
        
        .dark .cards-bullet-active {
          background: #60a5fa !important;
        }
      `}</style>
    </section>
  )
}
