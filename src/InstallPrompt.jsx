import React, { useEffect, useState } from 'react'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      const alreadyShown = localStorage.getItem('fathakkir_install_prompt_shown') === 'true'
      if (alreadyShown) return

      event.preventDefault()
      setDeferredPrompt(event)
      setVisible(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const closePrompt = () => {
    setVisible(false)
    setDeferredPrompt(null)
    localStorage.setItem('fathakkir_install_prompt_shown', 'true')
  }

  const installApp = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choiceResult = await deferredPrompt.userChoice
    localStorage.setItem('fathakkir_install_prompt_shown', 'true')
    setVisible(false)
    setDeferredPrompt(null)
    console.log('PWA install choice:', choiceResult.outcome)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="w-full max-w-sm rounded-[28px] bg-white p-6 shadow-2xl text-right">
        <p className="font-headline-md text-primary mb-3">تثبيت التطبيق</p>
        <p className="font-body-md text-on-surface-variant mb-6 leading-7">
          اضغط زر التثبيت لتجعل التطبيق متاحًا مثل أي تطبيق على هاتفك.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            className="flex-1 rounded-xl bg-surface-container-high px-4 py-3 text-on-surface transition-all"
            onClick={closePrompt}
          >
            اغلاق
          </button>
          <button
            className="flex-1 rounded-xl bg-primary px-4 py-3 text-white transition-all"
            onClick={installApp}
          >
            تثبيت
          </button>
        </div>
      </div>
    </div>
  )
}
