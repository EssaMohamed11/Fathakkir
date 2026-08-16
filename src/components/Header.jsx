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
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <img 
            src={`${import.meta.env.BASE_URL}icons/logo.png`} 
            alt="فذكِّر" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                e.currentTarget.nextElementSibling.style.display = 'block';
              }
            }}
          />
          <span style={{ fontSize: '20px', display: 'none' }}>🕌</span>
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
        فذكِّر
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
