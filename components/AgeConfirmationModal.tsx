'use client'

import { useState, useEffect } from 'react'

const AgeConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay to simulate the behavior in screenshots
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleConfirm = () => {
    setIsOpen(false)
    // Store confirmation in localStorage to prevent showing again
    localStorage.setItem('ageConfirmed', 'true')
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative animate-slide-up">
        {/* 3D Character */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Підтвердження віку
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Продовжуючи користуватися MEGOGO, ви підтверджуєте, що вам виповнилося 21 рік, та погоджуєтесь із Угодою користувача та Політикою конфіденційності
          </p>
          
          <button
            onClick={handleConfirm}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors btn-primary"
          >
            Підтверджую
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgeConfirmationModal