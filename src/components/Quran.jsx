import React, { useState } from 'react'

export default function Quran({ fontSize }) {
  const [selectedSurah, setSelectedSurah] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAyah, setSelectedAyah] = useState(null) // { num, text, tafseer }
  const [isSaved, setIsSaved] = useState(false)

  const quranData = [
    {
      id: 1,
      name: 'Al-Fatihah',
      nameAr: 'الفاتحة',
      type: 'Meccan',
      versesCount: 7,
      verses: [
        { num: 1, text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', tafseer: 'أبدأ قراءتي مستعيناً بالله العظيم ذي الرحمة الواسعة الممتدة، الرحمن بجميع خلقه والرحيم بعباده المؤمنين.' },
        { num: 2, text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', tafseer: 'الثناء والحمد والمدح الكامل لله وحده خالق العوالم ورازقها ومدبر شؤونها بلطف وإحسان.' },
        { num: 3, text: 'الرَّحْمَٰنِ الرَّحِيمِ', tafseer: 'الرحمن: ذو الرحمة الشاملة لجميع المخلوقات، الرحيم: ذو الرحمة الخاصة بعباده المؤمنين.' },
        { num: 4, text: 'مَالِكِ يَوْمِ الدِّينِ', tafseer: 'وهو سبحانه وحده مالك يوم القيامة، يوم الجزاء والحساب، وتفرد الملك والعدل التام فيه.' },
        { num: 5, text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', tafseer: 'نخصك وحدك يا ربنا بالطاعة والعبادة والخضوع، ونطلب العون منك وحدك في سائر شؤوننا ولا نتوكل إلا عليك.' },
        { num: 6, text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', tafseer: 'أرشدنا ودلنا ووفقنا وثبتنا على الطريق القويم والمنهج الواضح الإسلامي الذي لا عوج فيه.' },
        { num: 7, text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', tafseer: 'طريق الأنبياء والصديقين والصالحين، لا طريق من غضبت عليهم لعلمهم الحق وتركه كاليهود، ولا طريق الضالين كالنصارى.' }
      ]
    },
    {
      id: 108,
      name: 'Al-Kawthar',
      nameAr: 'الكوثر',
      type: 'Meccan',
      versesCount: 3,
      verses: [
        { num: 1, text: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', tafseer: 'إنا أعطيناك يا محمد الخير الكثير والفضل العظيم في الدنيا والآخرة ومن ذلك نهر الكوثر العظيم في الجنة.' },
        { num: 2, text: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', tafseer: 'فأخلص لربك صلاتك كلها واذبح ذبيحتك له وحده واذكر اسمه عليها شكراً على نعمائه.' },
        { num: 3, text: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ', tafseer: 'إن مبغضك ومعاديك وشانئك يا محمد هو المقطوع والأبتر من كل خير، ومن الذكر الحسن في الدنيا والآخرة.' }
      ]
    },
    {
      id: 112,
      name: 'Al-Ikhlas',
      nameAr: 'الإخلاص',
      type: 'Meccan',
      versesCount: 4,
      verses: [
        { num: 1, text: 'قُلْ هُوَ اللَّهُ أَحَدٌ', tafseer: 'قل يا محمد للناس معلناً: الله هو الواحد الأحد، المنفرد بالكمال والألوهية والربوبية لا شريك له.' },
        { num: 2, text: 'اللَّهُ الصَّمَدُ', tafseer: 'الله وحده هو الذي تصمد وتتجه إليه الخلائق كلها في حوائجها ومسائلها لكمال صفاته وعظمته.' },
        { num: 3, text: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', tafseer: 'ليس له ولد سبحانه ولا والد، لعظمته وتنزيهه عن المثيل والنظير والشريك.' },
        { num: 4, text: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', tafseer: 'وليس له مكافئ ولا شبيه ولا نظير في خلقه سبحانه بأي وجه من الوجوه.' }
      ]
    },
    {
      id: 113,
      name: 'Al-Falaq',
      nameAr: 'الفلق',
      type: 'Medinan',
      versesCount: 5,
      verses: [
        { num: 1, text: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', tafseer: 'قل: ألتجئ وأعتصم برب الفلق والصبح الذي يفلقه من الليل.' },
        { num: 2, text: 'مِن شَرِّ مَا خَلَقَ', tafseer: 'من أذى وشر جميع ما خلق الله من المخلوقات والإنس والجن والدواب.' },
        { num: 3, text: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', tafseer: 'ومن شر الليل المظلم إذا دخل وحل، لما ينتشر فيه من الهوام والشرور.' },
        { num: 4, text: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', tafseer: 'ومن شر السواحر اللاتي ينفثن في عقد السحر والخيوط ليؤذين الناس.' },
        { num: 5, text: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', tafseer: 'ومن شر حاسد مبغض يتمنى زوال النعمة عن الناس إذا أظهر حسده وسعى في إلحاق الأذى.' }
      ]
    },
    {
      id: 114,
      name: 'Al-Nas',
      nameAr: 'الناس',
      type: 'Medinan',
      versesCount: 6,
      verses: [
        { num: 1, text: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', tafseer: 'قل: أستجير وألتجئ بخالق الناس والمدبر لشؤونهم ومالكهم.' },
        { num: 2, text: 'مَلِكِ النَّاسِ', tafseer: 'ملك الناس المتصرف فيهم بحكمة وعدل، الغني عن عباده سبحانه.' },
        { num: 3, text: 'إِلَٰهِ النَّاسِ', tafseer: 'معبود الناس بحق، الذي لا إله غيره ولا معبود سواه.' },
        { num: 4, text: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', tafseer: 'من أذى الشيطان الذي يلقي وساوسه في القلوب ويخنس ويتراجع إذا ذُكر الله سبحانه.' },
        { num: 5, text: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', tafseer: 'الذي يبث الوساوس والشكوك والأوهام والشرور في قلوب وصدور البشر.' },
        { num: 6, text: 'مِنَ الْجِنَّةِ وَالنَّاسِ', tafseer: 'سواء كان هذا الشيطان الموسوس من شياطين الجن المستترين أو شياطين الإنس الظاهرين.' }
      ]
    }
  ]

  const filteredSurahs = quranData.filter(surah =>
    surah.nameAr.includes(searchQuery) || surah.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="animate-fade-in">
      
      {selectedSurah ? (
        /* ================== READING VIEW ================== */
        <div className="px-container-padding pb-32 pt-6">
          
          {/* Top Back Row */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={() => { setSelectedSurah(null); setSelectedAyah(null); }}
              className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center transition-all"
            >
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </button>
            <div className="text-center">
              <h2 className="font-headline-md text-primary" style={{ fontSize: '18px', color: '#002045' }}>سورة {selectedSurah.nameAr}</h2>
              <p className="font-label-sm text-on-surface-variant" style={{ color: '#43474e' }}>
                {selectedSurah.type === 'Meccan' ? 'مكية' : 'مدنية'} • {selectedSurah.versesCount} آيات
              </p>
            </div>
            <div style={{ width: '40px' }}></div>
          </div>

          {/* Bismillah Banner */}
          {selectedSurah.id !== 1 && (
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-4 rounded-3xl" style={{ backgroundColor: 'rgba(213, 226, 233, 0.3)', border: '1px solid rgba(0, 32, 69, 0.05)' }}>
                <p className="font-display-ar" style={{ fontSize: '30px', color: '#002045', margin: 0 }}>
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
              </div>
            </div>
          )}

          {/* Verses Container */}
          <div className="space-y-6">
            {selectedSurah.verses.map((ayah) => (
              <div 
                key={ayah.num}
                className="card-premium"
                style={{ padding: '24px', backgroundColor: '#ffffff' }}
              >
                <div className="flex flex-col items-end space-y-4">
                  {/* Verse text */}
                  <p 
                    className="font-body-ar leading-[3.5rem] w-full text-center" 
                    style={{ fontSize: `${fontSize}px`, color: '#181c1e' }}
                  >
                    {ayah.text}
                    {/* Verse Badge */}
                    <span className="verse-number-badge mx-2 align-middle">
                      {ayah.num}
                    </span>
                  </p>

                  {/* Tafsir Trigger button */}
                  <div className="w-full flex justify-center pt-2">
                    <button 
                      onClick={() => setSelectedAyah(ayah)}
                      className="flex items-center gap-2 text-primary hover:bg-primary-fixed/30 py-2 px-4 rounded-full transition-all text-label-sm font-label-sm"
                      style={{ color: '#002045' }}
                    >
                      <span className="material-symbols-outlined text-base">menu_book</span>
                      <span>عرض التفسير</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tafsir Bottom Sheet Modal */}
          {selectedAyah && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300"
                onClick={() => { setSelectedAyah(null); setIsSaved(false); }}
              ></div>

              {/* Bottom Sheet */}
              <div 
                className="fixed bottom-0 left-0 right-0 w-full max-w-2xl mx-auto bg-surface rounded-t-[32px] p-8 pb-12 z-[70] bottom-sheet-transition"
                style={{ 
                  backgroundColor: '#f7fafc',
                  boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
                  transform: 'translateY(0)' 
                }}
              >
                {/* Drag handle */}
                <div className="w-12 h-1.5 rounded-full mx-auto mb-6" style={{ backgroundColor: 'rgba(196, 201, 207, 0.5)' }}></div>

                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-headline-md text-primary" style={{ color: '#002045' }}>تفسير الآية ({selectedAyah.num})</h3>
                  <button 
                    onClick={() => { setSelectedAyah(null); setIsSaved(false); }}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container"
                    style={{ backgroundColor: '#e5e9eb' }}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Verse Arabic preview */}
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(0, 32, 69, 0.05)' }}>
                    <p className="font-body-ar text-center text-primary leading-relaxed" style={{ fontSize: '20px', color: '#002045' }}>
                      {selectedAyah.text}
                    </p>
                  </div>
                  {/* Interpret text */}
                  <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2">
                    <h4 className="font-bold text-on-surface">التفسير الميسر</h4>
                    <p className="font-body-md leading-relaxed" style={{ color: '#43474e', textAlign: 'justify' }}>
                      {selectedAyah.tafseer}
                    </p>
                  </div>
                  {/* Action buttons */}
                  <div className="pt-6 border-t border-outline-variant/20 flex gap-4" style={{ borderColor: 'rgba(196, 201, 207, 0.2)' }}>
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ text: `${selectedAyah.text}\nتفسير: ${selectedAyah.tafseer}` })
                        } else {
                          navigator.clipboard.writeText(`${selectedAyah.text}\nتفسير: ${selectedAyah.tafseer}`)
                          alert('تم نسخ الآية وتفسيرها')
                        }
                      }}
                      className="flex-1 py-4 text-white rounded-2xl font-label-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                      style={{ backgroundColor: '#002045', border: 'none', cursor: 'pointer' }}
                    >
                      <span className="material-symbols-outlined">share</span>
                      <span>مشاركة الآية</span>
                    </button>
                    <button 
                      onClick={() => setIsSaved(!isSaved)}
                      className="flex-1 py-4 rounded-2xl font-label-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                      style={{ backgroundColor: '#d5e2e9', color: '#58646a', border: 'none', cursor: 'pointer' }}
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}>
                        bookmark
                      </span>
                      <span>{isSaved ? 'تم الحفظ' : 'حفظ العلامة'}</span>
                    </button>
                  </div>
                </div>

              </div>
            </>
          )}

        </div>
      ) : (
        /* ================== INDEX VIEW ================== */
        <div className="px-container-padding pb-32 pt-6">
          
          {/* Index Title */}
          <h3 className="font-headline-md text-primary mb-4" style={{ color: '#002045' }}>سور القرآن الكريم</h3>

          {/* Search bar input */}
          <div className="mb-6 relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" style={{ color: '#74777f' }}>
              search
            </span>
            <input 
              type="text" 
              placeholder="ابحث عن السورة باسمها..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-none rounded-xl focus:ring-2 focus:ring-primary/10 transition-all text-body-md placeholder:text-on-surface-variant/50"
              style={{ backgroundColor: '#f1f4f6', outline: 'none' }}
            />
          </div>

          {/* Hero Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            
            {/* Bento 1: Last Read */}
            <div 
              className="relative overflow-hidden rounded-3xl p-6 text-on-primary min-h-[140px] flex flex-col justify-end cursor-pointer"
              style={{ backgroundColor: '#1a365d' }}
              onClick={() => setSelectedSurah(quranData[0])}
            >
              <div className="relative z-10 text-right">
                <p className="font-label-sm text-on-primary-container mb-1" style={{ color: '#86a0cd' }}>آخر قراءة</p>
                <h2 className="font-headline-md text-white mb-1">الفاتحة</h2>
                <p className="font-body-md opacity-80 text-white/80 italic">الآية ١ - ٧</p>
              </div>
            </div>

            {/* Bento 2: Count Stats */}
            <div className="rounded-3xl p-6 flex flex-col justify-center items-center text-center" style={{ backgroundColor: '#d5e2e9' }}>
              <span className="material-symbols-outlined text-4xl mb-2" style={{ color: '#58646a' }}>menu_book</span>
              <h3 className="font-headline-md text-primary" style={{ color: '#002045', margin: 0 }}>{quranData.length} سور</h3>
              <p className="font-label-sm text-on-secondary-container uppercase" style={{ color: '#58646a' }}>متاحة للقراءة</p>
            </div>

          </div>

          {/* Surah List title row */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline-md text-primary" style={{ color: '#002045' }}>كل السور</h3>
            <button className="flex items-center gap-1 text-on-surface-variant font-label-sm hover:text-primary" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <span>ترتيب</span>
              <span className="material-symbols-outlined text-sm">tune</span>
            </button>
          </div>

          {/* Glass List of Surahs */}
          <div className="space-y-3">
            {filteredSurahs.map((surah) => (
              <div 
                key={surah.id}
                onClick={() => setSelectedSurah(surah)}
                className="glass-card flex items-center justify-between cursor-pointer"
              >
                {/* Number Badge and Text */}
                <div className="flex items-center gap-4">
                  {/* Badge star representation */}
                  <div className="w-12 h-12 flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-4xl" style={{ color: '#adc7f7' }}>star_outline</span>
                    <span className="absolute inset-0 flex items-center justify-center font-label-sm text-primary" style={{ color: '#002045', fontWeight: 'bold' }}>
                      {surah.id}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-primary leading-tight" style={{ fontSize: '16px', color: '#002045' }}>
                      {surah.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{
                        backgroundColor: surah.type === 'Meccan' ? '#d5e2e9' : 'rgba(159, 202, 255, 0.3)',
                        color: surah.type === 'Meccan' ? '#58646a' : '#58a2f0'
                      }}>
                        {surah.type === 'Meccan' ? 'مكية' : 'مدنية'}
                      </span>
                      <span style={{ fontSize: '12px', color: '#43474e' }}>{surah.versesCount} آيات</span>
                    </div>
                  </div>
                </div>

                {/* Arabic Calligraphy Name */}
                <div className="text-right">
                  <p className="font-display-ar text-primary" style={{ fontSize: '24px', color: '#002045', margin: 0 }}>
                    {surah.nameAr}
                  </p>
                </div>

              </div>
            ))}

            {filteredSurahs.length === 0 && (
              <p style={{ textAlign: 'center', color: '#43474e', padding: '24px' }}>
                لا توجد نتائج مطابقة لبحثك.
              </p>
            )}
          </div>

        </div>
      )}

    </div>
  )
}
