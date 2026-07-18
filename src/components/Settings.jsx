import React, { useState } from 'react'

export default function Settings({ fontSize, setFontSize, isDarkMode, setIsDarkMode }) {
  const [morningNotif, setMorningNotif] = useState(true)
  const [eveningNotif, setEveningNotif] = useState(true)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'تطبيق فذكر',
        text: 'تطبيق فذكر للأذكار والتسبيح وقراءة القرآن الكريم',
        url: window.location.origin
      })
    } else {
      navigator.clipboard.writeText(window.location.origin)
      alert('تم نسخ رابط التطبيق لمشاركته')
    }
  }

  // Reusable setting card style
  const cardStyle = {
    backgroundColor: 'var(--surface-container-lowest)',
    border: '1px solid var(--outline-variant)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(26, 54, 93, 0.04)'
  }

  const sectionIconStyle = { color: 'var(--on-tertiary-container)' }
  const sectionTitleStyle = { color: 'var(--primary)' }
  const rowTitleStyle = { color: 'var(--on-surface)', fontSize: '16px', fontWeight: '600' }
  const rowSubtitleStyle = { color: 'var(--on-surface-variant)', fontSize: '12px' }
  const dividerStyle = { backgroundColor: 'var(--outline-variant)', height: '1px', margin: '0 20px', opacity: 0.4 }

  return (
    <main className="max-w-2xl mx-auto px-container-padding py-6 space-y-10 pb-32">

      {/* SECTION 1: Notifications */}
      <section className="space-y-3 text-right">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined" style={sectionIconStyle}>notifications_active</span>
          <h2 className="font-headline-md" style={sectionTitleStyle}>الإشعارات والتنبيهات</h2>
        </div>

        <div style={cardStyle} className="p-5 space-y-6">
          {/* Row 1 */}
          <div className="flex items-center justify-between">
            <div className="text-right">
              <span className="font-body-lg block font-semibold" style={rowTitleStyle}>أذكار الصباح</span>
              <span className="block mt-0.5" style={rowSubtitleStyle}>تذكير يومي في الصباح الباكر</span>
            </div>
            <label className="switch-container">
              <input 
                type="checkbox" 
                className="switch-input" 
                checked={morningNotif} 
                onChange={(e) => setMorningNotif(e.target.checked)} 
              />
              <span className="switch-slider"></span>
            </label>
          </div>

          <div style={dividerStyle}></div>

          {/* Row 2 */}
          <div className="flex items-center justify-between">
            <div className="text-right">
              <span className="font-body-lg block font-semibold" style={rowTitleStyle}>أذكار المساء</span>
              <span className="block mt-0.5" style={rowSubtitleStyle}>تذكير يومي بالمساء وقبل الغروب</span>
            </div>
            <label className="switch-container">
              <input 
                type="checkbox" 
                className="switch-input" 
                checked={eveningNotif} 
                onChange={(e) => setEveningNotif(e.target.checked)} 
              />
              <span className="switch-slider"></span>
            </label>
          </div>
        </div>
      </section>

      {/* SECTION 2: Appearance */}
      <section className="space-y-3 text-right">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined" style={sectionIconStyle}>palette</span>
          <h2 className="font-headline-md" style={sectionTitleStyle}>المظهر والخطوط</h2>
        </div>

        <div style={{ ...cardStyle, padding: '20px' }} className="space-y-6">
          
          {/* Font Size slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-body-lg" style={{ ...rowTitleStyle }}>حجم خط النصوص الدينية</span>
              <span className="font-bold text-sm" style={{ color: 'var(--primary)' }}>{fontSize}px</span>
            </div>

            <input 
              type="range" 
              min="14" 
              max="32" 
              value={fontSize} 
              onChange={(e) => setFontSize(parseInt(e.target.value))} 
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to left, var(--secondary-container) ${100 - ((fontSize - 14) / 18 * 100)}%, var(--primary) ${100 - ((fontSize - 14) / 18 * 100)}%)`,
                outline: 'none',
                accentColor: 'var(--primary)'
              }}
            />

            <div className="flex justify-between" style={{ color: 'var(--on-surface-variant)', fontSize: '12px' }}>
              <span>كبير</span>
              <span>صغير</span>
            </div>

            {/* Preview Box */}
            <div 
              className="p-5 rounded-xl flex items-center justify-center text-center" 
              style={{ backgroundColor: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', borderColor: 'rgba(196,201,207,0.2)' }}
            >
              <p style={{ fontSize: `${fontSize}px`, margin: 0, color: 'var(--on-surface)', fontFamily: 'var(--font-religious)', lineHeight: 1.8 }}>
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </p>
            </div>
          </div>

          <div style={dividerStyle}></div>

          {/* Dark Mode toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-right">
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', fontSize: '22px' }}>
                {isDarkMode ? 'dark_mode' : 'light_mode'}
              </span>
              <span className="font-body-lg font-semibold" style={rowTitleStyle}>الوضع الليلي</span>
            </div>
            <label className="switch-container">
              <input 
                type="checkbox" 
                className="switch-input" 
                checked={isDarkMode} 
                onChange={(e) => setIsDarkMode(e.target.checked)} 
              />
              <span className="switch-slider"></span>
            </label>
          </div>

        </div>
      </section>

      {/* SECTION 3: Support */}
      <section className="space-y-3 text-right">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined" style={sectionIconStyle}>help_center</span>
          <h2 className="font-headline-md" style={sectionTitleStyle}>الدعم والمساعدة</h2>
        </div>

        <div style={{ ...cardStyle }}>
          {/* Row: About */}
          <div className="flex items-center justify-between p-5 cursor-pointer active:scale-[0.98] transition-all"
            style={{ ':hover': { backgroundColor: 'var(--surface-container-low)' } }}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)' }}>info</span>
              <div>
                <span className="font-body-lg font-semibold block" style={rowTitleStyle}>عن التطبيق</span>
                <span style={{ ...rowSubtitleStyle }}>فذكر - نسخة 1.0</span>
              </div>
            </div>
            <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>chevron_left</span>
          </div>

          <div style={dividerStyle}></div>

          {/* Row: Share */}
          <div 
            onClick={handleShare}
            className="flex items-center justify-between p-5 cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)' }}>share</span>
              <span className="font-body-lg font-semibold" style={rowTitleStyle}>شارك مع الأصدقاء</span>
            </div>
            <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>chevron_left</span>
          </div>

          <div style={dividerStyle}></div>

          {/* Row: Privacy */}
          <div className="flex items-center justify-between p-5 cursor-pointer active:scale-[0.98] transition-all">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)' }}>policy</span>
              <span className="font-body-lg font-semibold" style={rowTitleStyle}>سياسة الخصوصية</span>
            </div>
            <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>chevron_left</span>
          </div>
        </div>
      </section>

      {/* Reset button */}
      <button 
        className="w-full py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 font-bold border-none cursor-pointer"
        style={{
          color: 'var(--error)',
          backgroundColor: 'var(--error-container)',
          opacity: 0.85
        }}
        onClick={() => {
          if (window.confirm('هل تريد مسح الإعدادات المحفوظة وإعادة تعيين التطبيق؟')) {
            localStorage.clear()
            window.location.reload()
          }
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>restart_alt</span>
        <span>إعادة تعيين التطبيق</span>
      </button>

    </main>
  )
}
