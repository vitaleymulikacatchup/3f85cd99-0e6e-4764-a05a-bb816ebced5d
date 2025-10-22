import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Subscription banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">ПЕРЕДПЛАТА «MEGOPACKS У»</h2>
          <p className="text-orange-100 mb-4">
            Підключайтеся • Топ Пакет • Топ Пакет Преміум
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            Підключити пакет
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Users and Partners */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Користувачам і партнерам</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Усе про передплати</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Програма лояльності</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Активувати промокод</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Умови користувача</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доступність</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Про нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Розважально MEGOGO разом</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Способи оплати</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансії</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MEGOGO BOOKS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Листівки близьким на MEGOGO</a></li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Партнерам</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Вихідні дані</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Структура власності</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гайдлайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Передплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Онлайн-кінотеатр</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Додати контент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнерська програма</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дистрибуція передплат</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Підтримка користувачів</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="mb-2">Усі контакти</p>
                  <p className="mb-2">Питання та відповіді</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-2">0 800 60 12 34</p>
                  <p className="text-xs">За тарифами мобільного оператора</p>
                </div>
                <div>
                  <p>+380 93 555 51 25</p>
                  <p>+380 67 555 51 25</p>
                </div>
                <div>
                  <p className="text-accent-400">support@megogo.net</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Ми в соцмережах</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Apps section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Наші застосунки</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
                <div>
                  <p className="text-xs text-gray-400">Available for</p>
                  <p className="text-sm font-semibold">Smart TV</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
                <div>
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">AppGallery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2025 MEGOGO. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer