'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import ContentCard from './ContentCard'

interface ContentItem {
  title: string
  type: 'movie' | 'series' | 'live'
  rating?: string
  image: string
}

interface ContentSectionProps {
  title: string
  items: ContentItem[]
}

const ContentSection = ({ title, items }: ContentSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 6
  const maxIndex = Math.max(0, items.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-1/6 px-2">
              <ContentCard
                title={item.title}
                type={item.type}
                rating={item.rating}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContentSection