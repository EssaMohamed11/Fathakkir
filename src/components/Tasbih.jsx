import React, { useState } from 'react'

export default function Tasbih() {
  const [count, setCount] = useState(0)
  const [target, setTarget] = useState(33)
  const [selectedDhikr, setSelectedDhikr] = useState('سُبْحَانَ اللَّهِ')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrateEnabled, setVibrateEnabled] = useState(true)
  const [rippleActive, setRippleActive] = useState(false)

  const dhikrs = [
    'سُبْحَانَ اللَّهِ',
    'الْحَمْدُ لِلَّهِ',
    'لَا إِلَٰهَ إِلَّا اللَّهُ',
    'اللَّهُ أَكْبَرُ',
    'أَسْتَغْفِرُ اللَّهَ',
    'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ'
  ]

  const targets = [33, 100, 1000]

  const playClickSound = () => {
    if (!soundEnabled) return
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()
      
      osc.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime)
      gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04)
      
      osc.start()
      osc.stop(audioCtx.currentTime + 0.05)
    } catch (e) {
      console.warn("Audio Context blocked:", e)
    }
  }

  const playTargetSound = () => {
    if (!soundEnabled) return
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()
      
      osc.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime) // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.15) // E5
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3)
      
      osc.start()
      osc.stop(audioCtx.currentTime + 0.3)
    } catch (e) {
      console.warn(e)
    }
  }

  const handleIncrement = () => {
    playClickSound()
    
    if (vibrateEnabled && 'vibrate' in navigator) {
      navigator.vibrate(10)
    }

    setRippleActive(true)
    setTimeout(() => setRippleActive(false), 300)

    setCount(prev => {
      const nextVal = prev + 1
      if (nextVal === target) {
        playTargetSound()
        if (vibrateEnabled && 'vibrate' in navigator) {
          navigator.vibrate([30, 30, 30])
        }
      }
      return nextVal
    })
  }

  const handleReset = () => {
    setCount(0)
    if (vibrateEnabled && 'vibrate' in navigator) {
      navigator.vibrate(50)
    }
  }

  const cycleTarget = () => {
    const currentIndex = targets.indexOf(target)
    const nextIndex = (currentIndex + 1) % targets.length
    setTarget(targets[nextIndex])
    setCount(0)
  }

  return (
    <div style={{ 
      height: 'calc(100vh - 144px)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '0 24px', 
      position: 'relative' 
    }}>
      
      {/* 1. Target & Dhikr Info */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          padding: '6px 16px', 
          backgroundColor: 'var(--secondary-container)', 
          borderRadius: '9999px',
          marginBottom: '12px'
        }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--on-secondary-container)' }}>الهدف:</span>
          <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)' }}>{target}</span>
        </div>
        
        {/* Selector */}
        <div style={{ marginBottom: '8px' }}>
          <select 
            value={selectedDhikr} 
            onChange={(e) => setSelectedDhikr(e.target.value)}
            style={{
              border: '1px solid var(--outline-variant)',
              borderRadius: '8px',
              padding: '6px 12px',
              fontWeight: '700',
              color: 'var(--primary)',
              textAlign: 'center',
              backgroundColor: 'var(--surface-container-lowest)',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {dhikrs.map((d, index) => (
              <option key={index} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <p className="font-body-md" style={{ color: 'var(--on-surface-variant)', margin: 0 }}>{selectedDhikr}</p>
      </div>

      {/* 2. Central Counter Button */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '280px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        
        {/* Ripple layer */}
        <div 
          className="absolute inset-0 rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: 'var(--tertiary-container)', 
            transform: rippleActive ? 'scale(1)' : 'scale(0.9)',
            opacity: rippleActive ? 0.3 : 0 
          }}
        ></div>

        {/* Outer Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl" 
          style={{ backgroundColor: 'var(--surface-tint)', opacity: 0.05 }}
        ></div>

        {/* Counter Button */}
        <button 
          onClick={handleIncrement}
          className="relative group w-full h-full rounded-full flex flex-col items-center justify-center transition-all duration-200 active:scale-95 counter-active:active"
          style={{
            backgroundColor: 'var(--surface-container-lowest)',
            border: '1px solid var(--outline-variant)',
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05)',
            cursor: 'pointer'
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <span 
              className="font-display-ar" 
              style={{ 
                fontSize: '40px', 
                lineHeight: '60px', 
                fontWeight: '700', 
                color: count >= target ? 'var(--tertiary)' : 'var(--primary)',
                fontFamily: 'var(--font-ui)'
              }}
            >
              {count}
            </span>
            <span className="font-label-sm" style={{ color: 'var(--outline)', letterSpacing: '0.2em' }}>ضغط</span>
          </div>

          {/* Inner Dashed Ring */}
          <div className="absolute inset-4 border-2 border-dashed rounded-full pointer-events-none" style={{ borderColor: 'var(--outline-variant)', opacity: 0.3 }}></div>
        </button>

      </div>

      {/* 3. Secondary Controls */}
      <div style={{ display: 'flex', gap: '24px', marginTop: '48px' }}>
        
        <button 
          onClick={handleReset}
          className="flex items-center gap-2 px-6 py-3 rounded-full active:scale-95 transition-all border-none"
          style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--on-surface-variant)', cursor: 'pointer', fontWeight: '600' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>restart_alt</span>
          <span className="font-label-sm">إعادة ضبط</span>
        </button>

        <button 
          onClick={cycleTarget}
          className="flex items-center gap-2 px-6 py-3 rounded-full active:scale-95 transition-all border-none"
          style={{ backgroundColor: 'var(--tertiary-fixed)', color: 'var(--on-tertiary-fixed-variant)', cursor: 'pointer', fontWeight: '600' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>ads_click</span>
          <span className="font-label-sm">تغيير الهدف</span>
        </button>

      </div>

      {/* Haptics & Sound Settings Toggles */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '24px', padding: '8px 16px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--outline-variant)' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer', color: 'var(--on-surface-variant)' }}>
          <input 
            type="checkbox" 
            checked={soundEnabled} 
            onChange={(e) => setSoundEnabled(e.target.checked)} 
            style={{ accentColor: 'var(--primary)' }}
          />
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{soundEnabled ? 'volume_up' : 'volume_off'}</span>
          <span>صوت</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer', color: 'var(--on-surface-variant)' }}>
          <input 
            type="checkbox" 
            checked={vibrateEnabled} 
            onChange={(e) => setVibrateEnabled(e.target.checked)}
            style={{ accentColor: 'var(--primary)' }}
          />
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>vibration</span>
          <span>اهتزاز</span>
        </label>
      </div>

    </div>
  )
}
