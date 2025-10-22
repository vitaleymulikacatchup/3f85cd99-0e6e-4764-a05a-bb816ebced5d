import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center min-h-[600px] lg:min-h-[700px]">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4">
              <span className="text-sm text-gray-600 uppercase tracking-wide">
                SEARCHLIGHT
              </span>
            </div>
            
            <h1 className="hero-title font-black text-primary-600 mb-6">
              РОУЗИ
            </h1>
            
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded">
                  16+
                </span>
                <span className="text-sm text-gray-600">
                  Комедія, Драма
                </span>
              </div>
              <div className="text-accent-600 font-semibold text-sm mb-4">
                ПОКУПКА
              </div>
              <div className="text-gray-700">
                <p className="mb-2">Бенедикт Камбербетч</p>
                <p>Олівія...</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors btn-primary">
                Дивитися
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
                Трейлер
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/3">
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-couple.jpg"
                alt="Роузи - головні герої фільму"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent" />
        </div>
      </div>
      
      {/* Featured content cards */}
      <div className="absolute bottom-8 left-4 right-4 lg:left-8 lg:right-8">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <div className="flex-shrink-0 w-32 h-20 bg-blue-600 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
              Фільм
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-20 bg-orange-500 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
              Серіал
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-20 bg-gray-800 rounded-lg relative overflow-hidden flex items-center justify-center">
            <div className="text-white text-2xl font-bold">HBO</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero