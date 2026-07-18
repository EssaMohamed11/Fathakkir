import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Adhkar from './components/Adhkar'
import Tasbih from './components/Tasbih'
import Settings from './components/Settings'
import Salaf from './components/Salaf'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState('morning')
  const [showSettings, setShowSettings] = useState(false)

  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fathakkir_font_size')
    return saved ? parseInt(saved, 10) : 22
  })

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('fathakkir_dark_mode')
    return saved ? saved === 'true' : false
  })

  useEffect(() => {
    localStorage.setItem('fathakkir_font_size', fontSize.toString())
  }, [fontSize])

  useEffect(() => {
    localStorage.setItem('fathakkir_dark_mode', isDarkMode.toString())
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const renderActiveScreen = () => {
    if (showSettings) {
      return (
        <Settings 
          fontSize={fontSize}
          setFontSize={setFontSize}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      )
    }

    switch (activeTab) {
      case 'home':
        return (
          <Home 
            setActiveTab={setActiveTab} 
            setSelectedCategory={setSelectedCategory} 
          />
        )
      case 'adhkar':
        return (
          <Adhkar 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        )
      case 'tasbih':
        return <Tasbih />
      case 'salaf':
        return <Salaf />
      case 'quran':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <span className="material-symbols-outlined text-[64px] mb-4" style={{ color: 'var(--primary)' }}>
              auto_stories
            </span>
            <h2 className="font-headline-md mb-2" style={{ color: 'var(--primary)', fontSize: '20px' }}>قريباً إن شاء الله</h2>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>نعمل حالياً على تجهيز هذه الصفحة بالتصميم التفاعلي الكامل.</p>
          </div>
        )
      default:
        return <Home setActiveTab={setActiveTab} setSelectedCategory={setSelectedCategory} />
    }
  }

  // Get localized screen title
  const getScreenTitle = () => {
    if (showSettings) return 'الإعدادات'
    switch (activeTab) {
      case 'home': return 'فذكر'
      case 'adhkar': return 'الأذكار'
      case 'tasbih': return 'المسبحة'
      case 'quran': return 'القرآن الكريم'
      case 'salaf': return 'سير الصالحين'
      default: return 'فذكر'
    }
  }

  return (
    <div className="app-container">
      
      {/* Top Header */}
      <header className="glass-header">
        <div className="flex items-center justify-between px-container-padding py-4 max-w-2xl mx-auto w-full">
          {/* Left: Back button if settings is open, else profile icon */}
          {showSettings ? (
            <button 
              onClick={() => setShowSettings(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all border-none bg-transparent cursor-pointer"
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>arrow_forward</span>
            </button>
          ) : (
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden" 
              style={{ backgroundColor: 'var(--secondary-container)' }}
            >
              <span style={{ fontSize: '20px' }}>🕌</span>
            </div>
          )}

          {/* Center Title */}
          <h1 className="font-headline-md" style={{ color: 'var(--primary)', fontSize: '22px', fontWeight: '800' }}>
            {getScreenTitle()}
          </h1>

          {/* Right: Dark mode & Settings toggle buttons */}
          <div className="flex items-center gap-2">
            {!showSettings && (
              <button 
                onClick={() => setShowSettings(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all border-none bg-transparent cursor-pointer"
                style={{ color: 'var(--primary)' }}
                title="الإعدادات"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                  settings
                </span>
              </button>
            )}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all border-none bg-transparent cursor-pointer"
              style={{ color: 'var(--primary)' }}
              title={isDarkMode ? 'الوضع المضيء' : 'الوضع الداكن'}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {renderActiveScreen()}
      </div>

      {/* Bottom NavBar */}
      {!showSettings && (
        <NavBar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab)
            setShowSettings(false)
          }} 
        />
      )}

    </div>
  )
}
