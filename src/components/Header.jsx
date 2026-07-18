import React from 'react'

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="header-glass">
      {/* Profile/Avatar Indicator (Right side in RTL) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-container)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          🕌
        </div>
      </div>

      {/* App Title (Center) */}
      <h1 style={{
        fontSize: '22px',
        fontWeight: '800',
        color: 'var(--primary)',
        letterSpacing: '-0.5px',
        margin: 0
      }}>
        فذكر
      </h1>

      {/* Dark Mode Quick Toggle (Left side in RTL) */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--primary)',
          cursor: 'pointer',
          padding: '6px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'var(--transition-bounce)'
        }}
        title={isDarkMode ? "الوضع المضيء" : "الوضع الداكن"}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
          {isDarkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </header>
  )
}
