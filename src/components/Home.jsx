import React from 'react'

export default function Home({ setActiveTab, setSelectedCategory }) {
  const handleCategoryClick = (key) => {
    setSelectedCategory(key)
    setActiveTab('adhkar')
  }

  const salafQuotes = [
    {
      name: 'عمر بن الخطاب رضي الله عنه',
      quote: 'لو نادى منادٍ من السماء: أيها الناس، إنكم داخلون الجنة كلكم إلا رجلاً واحداً، لخفت أن أكون هو.'
    },
    {
      name: 'الحسن البصري رحمه الله',
      quote: 'يا ابن آدم، إنما أنت أيام، فإذا ذهب يوم ذهب بعضك.'
    }
  ]

  return (
    <main className="max-w-2xl mx-auto px-container-padding pb-32 pt-6">
      
      {/* 1. Welcome Section */}
      <section className="mt-stack-md text-right mb-6">
        <h2 className="font-body-ar text-on-surface mb-2">مرحباً بك مجدداً</h2>
        <p className="font-body-md text-on-surface-variant">"ألا بذكر الله تطمئن القلوب"</p>
      </section>

      {/* 2. Hero Card — always deep blue bg with white text */}
      <section className="mt-stack-md mb-8">
        <div 
          onClick={() => handleCategoryClick('morning')}
          className="relative overflow-hidden rounded-3xl p-8 shadow-lg transition-transform active:scale-[0.98] duration-300 cursor-pointer"
          style={{ backgroundColor: 'var(--primary-container)' }}
        >
          <div className="relative z-10 flex flex-col items-start gap-6 text-right">
            {/* Badge Pill */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1", color: '#adc7f7' }}>
                wb_sunny
              </span>
              <span className="font-label-sm text-white">أذكار الصباح</span>
            </div>
            {/* Heading */}
            <div className="space-y-2">
              <h3 className="font-body-ar text-[32px] leading-tight" style={{ color: 'var(--on-primary-container)' }}>
                ابدأ يومك بذكر الله وطمأنينة النفس
              </h3>
            </div>
            {/* CTA Button */}
            <button 
              className="px-8 py-3 rounded-full font-label-sm hover:opacity-90 transition-colors flex items-center gap-2"
              style={{ backgroundColor: 'var(--primary-fixed)', color: 'var(--on-primary-fixed)' }}
            >
              <span>اقرأ الآن</span>
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Categories Grid */}
      <section className="mt-stack-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-headline-md" style={{ color: 'var(--primary)' }}>الأذكار</h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Card: Morning Adhkar */}
          <div 
            onClick={() => handleCategoryClick('morning')}
            className="p-6 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all cursor-pointer group shadow-[0_4px_20px_rgba(26,54,93,0.03)]"
            style={{ backgroundColor: 'var(--surface-container-low)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
              <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--on-tertiary-container)' }}>light_mode</span>
            </div>
            <span className="font-body-ar text-sm font-semibold" style={{ color: 'var(--primary)' }}>أذكار الصباح</span>
          </div>

          {/* Card: Evening Adhkar */}
          <div 
            onClick={() => handleCategoryClick('evening')}
            className="p-6 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all cursor-pointer group shadow-[0_4px_20px_rgba(26,54,93,0.03)]"
            style={{ backgroundColor: 'var(--surface-container-low)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
              <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--on-tertiary-container)' }}>dark_mode</span>
            </div>
            <span className="font-body-ar text-sm font-semibold" style={{ color: 'var(--primary)' }}>أذكار المساء</span>
          </div>

          {/* Card: Sleep Adhkar */}
          <div 
            onClick={() => handleCategoryClick('sleep')}
            className="p-6 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all cursor-pointer group shadow-[0_4px_20px_rgba(26,54,93,0.03)]"
            style={{ backgroundColor: 'var(--surface-container-low)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
              <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--on-tertiary-container)' }}>bedtime</span>
            </div>
            <span className="font-body-ar text-sm font-semibold" style={{ color: 'var(--primary)' }}>أذكار النوم</span>
          </div>

          {/* Card: Prayer Adhkar */}
          <div 
            onClick={() => handleCategoryClick('prayer')}
            className="p-6 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all cursor-pointer group shadow-[0_4px_20px_rgba(26,54,93,0.03)]"
            style={{ backgroundColor: 'var(--surface-container-low)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
              <span className="material-symbols-outlined text-3xl" style={{ color: 'var(--on-tertiary-container)' }}>auto_awesome</span>
            </div>
            <span className="font-body-ar text-sm font-semibold" style={{ color: 'var(--primary)' }}>أذكار الصلاة</span>
          </div>

        </div>
      </section>

      {/* 4. Daily Verse */}
      <section 
        className="mt-stack-lg mb-8 p-6 rounded-3xl text-center"
        style={{ 
          backgroundColor: 'var(--surface-container-low)', 
          border: '1px solid var(--outline-variant)' 
        }}
      >
        <span className="material-symbols-outlined mb-2" style={{ color: 'var(--primary)', fontSize: '28px' }}>
          format_quote
        </span>
        <p className="font-body-ar leading-relaxed" style={{ color: 'var(--on-surface)', fontSize: '16px' }}>
          "فاذكروني أذكركم واشكروا لي ولا تكفرون"
        </p>
        <p className="font-label-sm mt-3" style={{ color: 'var(--on-surface-variant)' }}>
          [ سورة البقرة: 152 ]
        </p>
      </section>

      {/* 5. Salaf Quotes */}
      <section className="mt-stack-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-headline-md" style={{ color: 'var(--primary)' }}>من حياة السلف</h4>
          <button 
            className="font-label-sm flex items-center gap-1 hover:opacity-80 transition-opacity active:scale-95"
            style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setActiveTab('salaf')}
          >
            <span>عرض الكل</span>
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {salafQuotes.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-[32px] shadow-[0_4px_20px_rgba(26,54,93,0.03)]"
              style={{ 
                backgroundColor: 'var(--surface-container-low)', 
                border: '1px solid var(--outline-variant)',
                borderColor: 'rgba(196, 201, 207, 0.15)' 
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--primary-fixed)', color: 'var(--on-primary-fixed)' }}
                >
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="font-headline-md text-sm font-bold" style={{ color: 'var(--primary)' }}>
                  {item.name}
                </span>
              </div>
              <p className="font-body-ar text-sm leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
