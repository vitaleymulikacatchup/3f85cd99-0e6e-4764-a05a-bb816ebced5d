'use client'

import { useState } from 'react'
import { Menu, X, Search, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    'ТЕЛЕКАНАЛИ',
    'ФІЛЬМИ',
    'МУЛЬТФІЛЬМИ',
    'СЕРІАЛИ',
    'ШОУ',
    'СПОРТ',
    'ОСВІТА'
  ]

  return (
    <header className="bg-gray-900 text-white relative z-50">
      {/* Top bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-300">MEGOGO</div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                Тарифи
              </button>
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                UA
              </button>
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                УВІЙТИ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold tracking-wider">
              MEGOGO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button className="text-gray-300 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header