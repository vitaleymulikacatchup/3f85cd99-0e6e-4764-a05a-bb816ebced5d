import Image from 'next/image'
import { Star } from 'lucide-react'

interface ContentCardProps {
  title: string
  type: 'movie' | 'series' | 'live'
  rating?: string
  image: string
}

const ContentCard = ({ title, type, rating, image }: ContentCardProps) => {
  const getTypeLabel = () => {
    switch (type) {
      case 'movie':
        return 'Фільм'
      case 'series':
        return 'Серіал'
      case 'live':
        return 'Прямий ефір'
      default:
        return ''
    }
  }

  const getTypeColor = () => {
    switch (type) {
      case 'movie':
        return 'bg-blue-600'
      case 'series':
        return 'bg-green-600'
      case 'live':
        return 'bg-red-600'
      default:
        return 'bg-gray-600'
    }
  }

  return (
    <div className="content-card group cursor-pointer">
      <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Type badge */}
        <div className={`absolute top-2 left-2 ${getTypeColor()} text-white px-2 py-1 text-xs font-semibold rounded`}>
          {getTypeLabel()}
        </div>
        
        {/* Rating */}
        {rating && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-xs font-semibold rounded flex items-center space-x-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500">
          {getTypeLabel()}
        </p>
      </div>
    </div>
  )
}

export default ContentCard