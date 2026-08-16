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

  const getDynamicHero = () => {
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()

    const parseMinutes = (timeStr, defaultMinutes) => {
      if (!timeStr) return defaultMinutes
      const parts = timeStr.split(':').map(Number)
      if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return defaultMinutes
      return parts[0] * 60 + parts[1]
    }

    const savedMorning = localStorage.getItem('fathakkir_morning_time') || '06:00'
    const savedEvening = localStorage.getItem('fathakkir_evening_time') || '18:00'
    const savedSleep = localStorage.getItem('fathakkir_sleep_time') || '21:00'

    const morningMin = parseMinutes(savedMorning, 6 * 60)
    const eveningMin = parseMinutes(savedEvening, 18 * 60)
    const sleepMin = parseMinutes(savedSleep, 21 * 60)

    if (currentMinutes >= morningMin && currentMinutes < eveningMin) {
      return {
        key: 'morning',
        badge: 'أذكار الصباح',
        icon: 'wb_sunny',
        title: 'ابدأ يومك بذكر الله وطمأنينة النفس'
      }
    } else if (currentMinutes >= eveningMin && currentMinutes < sleepMin) {
      return {
        key: 'evening',
        badge: 'أذكار المساء',
        icon: 'nights_stay',
        title: 'حصّن مسائك واختم يومك بالطاعات'
      }
    } else {
      return {
        key: 'sleep',
        badge: 'أذكار النوم',
        icon: 'bedtime',
        title: 'اختم يومك بالسكينة وأذكار النوم'
      }
    }
  }

  const currentHero = getDynamicHero()

  const isCategoryCompleted = (catKey) => {
    try {
      const d = new Date()
      const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
      const savedDate = localStorage.getItem('fathakkir_adhkar_date')
      if (savedDate !== today) return false

      const savedData = localStorage.getItem('fathakkir_adhkar_data')
      if (!savedData) return false

      const parsed = JSON.parse(savedData)
      const items = parsed[catKey]
      if (Array.isArray(items) && items.length > 0) {
        return items.every(item => item.count === 0)
      }
    } catch (e) {
      console.error(e)
    }
    return false
  }

  const categoryCards = [
    { key: 'morning', label: 'أذكار الصباح', icon: 'light_mode' },
    { key: 'evening', label: 'أذكار المساء', icon: 'dark_mode' },
    { key: 'sleep', label: 'أذكار النوم', icon: 'bedtime' },
    { key: 'prayer', label: 'أذكار الصلاة', icon: 'auto_awesome' }
  ]

  return (
    <main className="max-w-2xl mx-auto px-container-padding pb-32 pt-6">
      
      {/* 1. Welcome Section */}
      <section className="mt-stack-md text-right mb-6">
        <h2 className="font-body-ar text-on-surface mb-2">مرحباً بك مجدداً</h2>
        <p className="font-body-md text-on-surface mb-3" style={{ fontSize: '18px', lineHeight: 1.8, margin: 0 }}>
          “ ﴿وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ﴾ ”
        </p>
      </section>

      {/* 2. Hero Card — Dynamic based on time of day */}
      <section className="mt-stack-md mb-8">
        <div 
          onClick={() => handleCategoryClick(currentHero.key)}
          className="relative overflow-hidden rounded-3xl p-8 shadow-lg transition-transform active:scale-[0.98] duration-300 cursor-pointer"
          style={{ backgroundColor: 'var(--primary-container)' }}
        >
          <div className="relative z-10 flex flex-col items-start gap-6 text-right">
            {/* Badge Pill */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1", color: '#adc7f7' }}>
                {currentHero.icon}
              </span>
              <span className="font-label-sm text-white">{currentHero.badge}</span>
              {isCategoryCompleted(currentHero.key) && (
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded-full font-bold">✓ تم اليوم</span>
              )}
            </div>
            {/* Heading */}
            <div className="space-y-2">
              <h3 className="font-body-ar text-[32px] leading-tight" style={{ color: 'var(--on-primary-container)' }}>
                {currentHero.title}
              </h3>
            </div>
            {/* CTA Button */}
            <button 
              className="px-8 py-3 rounded-full font-label-sm hover:opacity-90 transition-colors flex items-center gap-2"
              style={{ backgroundColor: 'var(--primary-fixed)', color: 'var(--on-primary-fixed)' }}
            >
              <span>{isCategoryCompleted(currentHero.key) ? 'تمت القراءة اليوم' : 'اقرأ الآن'}</span>
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
          {categoryCards.map((cat) => {
            const completed = isCategoryCompleted(cat.key)
            return (
              <div 
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className="relative p-6 rounded-[32px] flex flex-col items-center justify-center text-center gap-4 transition-all cursor-pointer group shadow-[0_4px_20px_rgba(26,54,93,0.03)]"
                style={{ backgroundColor: 'var(--surface-container-low)' }}
              >
                {completed && (
                  <span className="absolute top-3 left-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span>✓</span> تم اليوم
                  </span>
                )}
                <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
                  <span className="material-symbols-outlined text-3xl" style={{ color: completed ? '#10b981' : 'var(--on-tertiary-container)' }}>
                    {completed ? 'check_circle' : cat.icon}
                  </span>
                </div>
                <span className="font-body-ar text-sm font-semibold" style={{ color: 'var(--primary)' }}>{cat.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. Daily Verse */}
      <section 
        className="hidden"
      >
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
