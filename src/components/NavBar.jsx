import React from 'react'

export default function NavBar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: 'home' },
    { id: 'adhkar', label: 'الأذكار', icon: 'menu_book' },
    { id: 'tasbih', label: 'المسبحة', icon: 'fingerprint' },
    { id: 'quran', label: 'القرآن', icon: 'auto_stories' },
    { id: 'salaf', label: 'السير', icon: 'person' }
  ]

  const handleTabClick = (item) => {
    setActiveTab(item.id)
  }

  return (
    <nav className="navbar-glass">
      {navItems.map((item) => {
        const isActive = activeTab === item.id
        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => handleTabClick(item)}
            style={{
              color: isActive ? 'var(--on-secondary-container)' : 'var(--on-surface-variant)',
              backgroundColor: isActive ? 'var(--secondary-container)' : 'transparent',
              borderRadius: '9999px',
              padding: isActive ? '4px 16px' : '0'
            }}
          >
            <span 
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                fontSize: '24px'
              }}
            >
              {item.icon}
            </span>
            {!isActive && (
              <span style={{ fontSize: '10px', marginTop: '2px' }}>{item.label}</span>
            )}
          </button>
        )
      })}
    </nav>
  )
}
