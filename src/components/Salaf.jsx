import React, { useState } from 'react'

export default function Salaf() {
  const [activeSubTab, setActiveSubTab] = useState('list') // 'list' or 'tree'
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [activeFilter, setActiveFilter] = useState('الكل')
  const [detailTab, setDetailTab] = useState('bio') // 'bio' or 'quotes'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTreeBio, setSelectedTreeBio] = useState(null)

  const filters = ['الكل', 'الأنبياء', 'الصحابة', 'التابعين', 'الأئمة']

  const charactersData = [
    // ----------------- الأنبياء -----------------
    {
      id: 'adam',
      name: 'آدم عليه السلام',
      displayName: 'آدم عليه السلام',
      category: 'الأنبياء',
      subtitle: 'أبو البشر وأول الأنبياء',
      shortBio: 'أول البشر وخلق الله بيديه ونفخ فيه من روحه، وأسجد له ملائكته وعلمه الأسماء كلها.',
      fullBio: 'خلقه الله سبحانه وتعالى من طين بيديه الشريفتين، وأسجد له الملائكة سجود تكريم، وعلمه أسماء كل الأشياء. عاش في الجنة مع زوجته حواء، ثم أُهبط إلى الأرض بعد أكله من الشجرة وتوبته المقبولة من الله، ليعمر الأرض ويبدأ منها الاستخلاف البشري.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ.', context: 'دعاء وتوبة آدم وحواء بعد أكلهما من الشجرة كما حكاه القرآن الكريم.' }
      ],
      deeds: [
        { text: 'السجود التكريمي من الملائكة له وتعليم الله له الأسماء كلها.', context: 'اصطفاء إلهي وتفضيل لآدم وبنيه بالعلم والاستخلاف.' }
      ]
    },
    {
      id: 'noah',
      name: 'نوح عليه السلام',
      displayName: 'نوح عليه السلام',
      category: 'الأنبياء',
      subtitle: 'شيخ المرسلين وأول أولي العزم',
      shortBio: 'أول رسول أرسله الله إلى أهل الأرض بعد وقوع الشرك، دعا قومه ألف سنة إلا خمسين عاماً.',
      fullBio: 'أرسله الله إلى قومه لما عبدوا الأصنام (وداً وسواعاً ويغوث ويعوق ونسراً)، فصبر على دعوتهم ليلاً ونهاراً وسراً وجهاراً لمدة 950 سنة. بنى السفينة بأمر الله ووحيّه، وأهلك الله الكافرين بالطوفان العظيم ونجّى المؤمنين معه لتبدأ البشرية عهداً جديداً من نسله.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ.', context: 'من دعاء نوح عليه السلام لقومه ولنفسه كما ورد في سورة نوح.' }
      ],
      deeds: [
        { text: 'بناء الفلك (السفينة) وحمل المؤمنين وأزواج من كل الحيوانات.', context: 'نجاة البشرية والكائنات من الطوفان العظيم بأمر الله.' }
      ]
    },
    {
      id: 'ibrahim',
      name: 'إبراهيم عليه السلام',
      displayName: 'إبراهيم عليه السلام',
      category: 'الأنبياء',
      subtitle: 'خليل الله وأبو الأنبياء',
      shortBio: 'خليل الرحمن، ومحطم الأصنام، الذي جعل الله في ذريته النبوة والكتاب ورفع قواعد البيت الحرام.',
      fullBio: 'ولد في العراق ودعا أباه وقومه إلى التوحيد ونبذ الأصنام، فألقوه في النار فجعلها الله برداً وسلاماً عليه. هاجر إلى الشام والحجاز، وأمره الله بتقديم ابنه إسماعيل قرباناً ففداه الله بذبح عظيم. بنى الكعبة المشرفة مع إسماعيل وهو والد إسحاق وإسماعيل اللذين تسلسلت منهما النبوات.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَن نَّعْبُدَ الْأَصْنَامَ.', context: 'من دعاء إبراهيم عليه السلام لمكة وبنيه كما حكاه القرآن الكريم.' }
      ],
      deeds: [
        { text: 'بناء قواعد الكعبة المشرفة بمكة المكرمة مع ابنه إسماعيل.', context: 'تأسيس قبلة الموحدين وبيت الله الحرام بأمر رب العزة.' }
      ]
    },
    {
      id: 'musa',
      name: 'موسى عليه السلام',
      displayName: 'موسى عليه السلام',
      category: 'الأنبياء',
      subtitle: 'كليم الله ورسول بني إسرائيل',
      shortBio: 'كليم الرحمن الذي أرسله الله إلى فرعون بالآيات والتوراة، ونجّى الله به بني إسرائيل.',
      fullBio: 'ولد في مصر في زمن فرعون الطاغية، وألقته أمه في اليم بأمر الله فتربى في بيت فرعون. ناداه الله عند جبل الطور وكلمه تكليماً وأرسله بآيات المعجزات (العصا واليد) إلى فرعون. عبر البحر مع قومه بعد انشقاقه بأمر الله وغرق فرعون وجنوده، وأنزل الله عليه التوراة.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي * وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي.', context: 'دعاء موسى عليه السلام عندما كلفه الله بالذهاب لفرعون.' }
      ],
      deeds: [
        { text: 'شق البحر بعصاه وعبور بني إسرائيل ونجاتهم وهلاك فرعون.', context: 'من أعظم معجزات الأنبياء المسجلة بالقرآن الكريم.' }
      ]
    },
    {
      id: 'isa',
      name: 'عيسى عليه السلام',
      displayName: 'عيسى عليه السلام',
      category: 'الأنبياء',
      subtitle: 'كلمة الله وروح منه',
      shortBio: 'رسول الله وكلمته ألقاها إلى مريم العذراء، تكلّم في المهد وصنع المعجزات ورُفع إلى السماء.',
      fullBio: 'خلقه الله بكلمة منه من غير أب من أمه مريم العذراء الصديقة، فأنطقه الله في المهد ليبرئ أمه. أجرى الله على يديه إحياء الموتى وإبراء الأكمه والأبرص وخلق الطير من الطين بإذن الله. أنزل الله عليه الإنجيل، ونجاه الله من القتل والصلب ورفعه إليه إلى السماء وسينزل في آخر الزمان.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا.', context: 'أول كلام نطق به عيسى عليه السلام في المهد دفاعاً عن أمه مريم.' }
      ],
      deeds: [
        { text: 'إبراء الأكمه والأبرص وإحياء الموتى بإذن الله وتنبؤه بنزول نبي بعده.', context: 'معجزات باهرة لإثبات صدق رسالته وبشرى بمحمد ﷺ.' }
      ]
    },
    {
      id: 'yusuf',
      name: 'يوسف عليه السلام',
      displayName: 'يوسف عليه السلام',
      category: 'الأنبياء',
      subtitle: 'الصديق وجميل الأنبياء',
      shortBio: 'نبي الله الصديق الذي أوتي شطر الحسن، وصبر على كيد إخوته وفتنة السجن حتى صار عزيز مصر.',
      fullBio: 'ابن يعقوب عليه السلام، تآمر عليه إخوته وألقوه في الجب، فبيع كعبد في مصر. ثبت أمام فتنة امرأة العزيز وسُجن مظلوماً، وعلمه الله تأويل الرؤى ففسر رؤيا الملك وخرج ليتولى خزائن مصر، وجمع شمل أسرته بعد سنوات الصبر الطويلة.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'قَالَ رَبِّ السِّجْنُ أَحَبُّ إِلَيَّ مِمَّا يَدْعُونَنِي إِلَيْهِ.', context: 'ثبات يوسف عليه السلام أمام فتنة نساء مصر واختياره الابتلاء على المعصية.' }
      ],
      deeds: [
        { text: 'إدارة أزمة القحط والمجاعة في مصر وتأمين الغذاء للناس.', context: 'تجسيد للتخطيط الحكيم والأمانة والعفة في الحكم والتدبير.' }
      ]
    },

    // ----------------- الصحابة -----------------
    {
      id: 'abubakr',
      name: 'أبو بكر الصديق رضي الله عنه',
      displayName: 'أبو بكر الصديق',
      category: 'الصحابة',
      subtitle: 'الخليفة الأول وصاحب الغار',
      shortBio: 'صاحب رسول الله ﷺ ورفيقه في الهجرة، وأول الخلفاء الراشدين، وأعظم هذه الأمة إيماناً بعد نبيها.',
      fullBio: 'عبد الله بن عثمان التيمي القرشي، أول من أسلم من الرجال، نصر الدعوة بماله ونفسه، ورافقه في الهجرة الشريفة، بويع بالخلافة بعد وفاة النبي ﷺ فثبت أركان الدولة الإسلامية وحارب المرتدين وجمع القرآن الكريم.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'أصدق الصدق الأمانة، وأكذب الكذب الخيانة.', context: 'من خطبته الأولى بعد مبايعته بالخلافة.' },
        { text: 'احرص على الموت توهب لك الحياة.', context: 'من وصاياه المشهورة للجنود.' }
      ],
      deeds: [
        { text: 'إنفاق ماله كله لله ورسوله في يوم العسرة.', context: 'سأله النبي ﷺ: ما أبقيت لأهلك؟ قال: أبقيت لهم الله ورسوله.' },
        { text: 'محاربة المرتدين وحفظ وحدة الأمة بعد الوفاة النبوية.', context: 'قال كلمته الشهيرة: أينقص الدين وأنا حي؟' }
      ]
    },
    {
      id: 'omar',
      name: 'عمر بن الخطاب رضي الله عنه',
      displayName: 'عمر بن الخطاب',
      category: 'الصحابة',
      subtitle: 'الفاروق وثاني الخلفاء الراشدين',
      shortBio: 'ثاني الخلفاء الراشدين، ومن أعظم القادة في التاريخ، لُقب بالفاروق لعدله وفصله بين الحق والباطل.',
      fullBio: 'عمر بن الخطاب بن نفيل العدوي القرشي، أسلم في السنة السادسة من البعثة فكان إسلامه فتحاً للمسلمين، اتسم عهده بالفتوحات الكبيرة والعدل التام، وهو أول من أرخ بالتاريخ الهجري وأول من دون الدواوين ونظم عسس الليل.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'تفقهوا قبل أن تسودوا، وحاسبوا أنفسكم قبل أن تحاسبوا.', context: 'من وصاياه المشهورة للرعية.' },
        { text: 'حاسبوا أنفسكم قبل أن تُحاسبوا، وزِنوا أنفسكم قبل أن تُوزنوا؛ فإنه أهون عليكم في الحساب غداً أن تحاسبوا أنفسكم اليوم.', context: 'من أثره الشهير في الموعظة وتهذيب النفس.' }
      ],
      deeds: [
        { text: 'تأسيس التاريخ الهجري وتدوين الدواوين العسكرية والإدارية.', context: 'بداية التنظيم الإداري للدولة الإسلامية.' },
        { text: 'عسّ الرعية بالليل وتفقد أحوال الفقراء بنفسه.', context: 'قصته الشهيرة مع المرأة وأولادها الجياع وحمله الدقيق على ظهره.' }
      ]
    },
    {
      id: 'uthman',
      name: 'عثمان بن عفان رضي الله عنه',
      displayName: 'عثمان بن عفان',
      category: 'الصحابة',
      subtitle: 'ذو النورين والخليفة الثالث',
      shortBio: 'ثالث الخلفاء الراشدين، لُقب بذي النورين لزواجه من ابنتي النبي ﷺ، جمّع القرآن الكريم وأوصله للأمة.',
      fullBio: 'عثمان بن عفان بن أبي العاص الأموي القرشي، أسلم مبكراً وهاجر الهجرتين إلى الحبشة ثم إلى المدينة، زوّجه النبي ﷺ ابنته رقية فلما توفيت زوّجه أختها أم كلثوم فلُقب بذي النورين. اشترى بئر رومة وسقى منها المسلمين، وجهّز جيش العسرة. جمع القرآن الكريم على مصحف واحد وبعث بنسخه إلى الأمصار، وكان غاية في الحياء والتقوى حتى قال عنه النبي ﷺ: إن الملائكة تستحي من عثمان.',
      colorClass: 'border-primary',
      avatarBg: 'var(--tertiary-container)',
      avatarText: 'var(--on-tertiary-container)',
      quotes: [
        { text: 'لو طهرت قلوبكم ما شبعتم من كلام ربكم.', context: 'مقولته الشهيرة في العلاقة بين نقاء القلب والتعلق بكلام الله، ذكرها العلماء كالإمام ابن القيم في بيان فضل القرآن.' },
        { text: 'ما تغنّيت ولا تمنّيت ولا مسست فرجي بيميني منذ بايعت بها رسول الله ﷺ.', context: 'يحدث بهذا عن نفسه رضي الله عنه، دلالةً على رفيع خُلُقِه وشدة تمسكه بالعهد.' }
      ],
      deeds: [
        { text: 'جمع القرآن الكريم في مصحف واحد وإرسال نسخه إلى الأمصار الإسلامية.', context: 'أبقى نسخة عنده وحرق ما سواها من الصحف المختلفة حفاظاً على وحدة المسلمين.' },
        { text: 'شراء بئر رومة من ماله الخاص وتسبيلها للمسلمين، وتجهيز جيش العسرة بماله.', context: 'قال النبي ﷺ لمّا اشترى البئر: الجنة لعثمان. وقال في جيش العسرة: ما ضرّ عثمان ما فعل بعد اليوم.' }
      ]
    },
    {
      id: 'ali',
      name: 'علي بن أبي طالب رضي الله عنه',
      displayName: 'علي بن أبي طالب',
      category: 'الصحابة',
      subtitle: 'باب العلم والخليفة الرابع',
      shortBio: 'ابن عم النبي ﷺ وصهره، وأول من أسلم من الصبيان، رابع الخلفاء الراشدين وأحد الفرسان الشجعان.',
      fullBio: 'علي بن أبي طالب الهاشمي القرشي، ربيب رسول الله ﷺ ومفتديه بنومه في فراشه ليلة الهجرة. تزوج فاطمة الزهراء وأنجب منها الحسن والحسين. تميز بالبلاغة والفقه والقضاء العادل والشجاعة الأسطورية في خيبر وغيرها من الغزوات. تولى الخلافة بعد استشهاد عثمان رضي الله عنه.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'قيمة كل امرئ ما يحسنه، وخالطوا الناس مخالطة إن مِتّم معها بكوا عليكم وإن عشتم حنّوا إليكم.', context: 'من درر كلامه البليغ في الحث على العلم وحسن الخلق.' }
      ],
      deeds: [
        { text: 'الفداء بالنفس والنوم في فراش النبي ﷺ ليلة الهجرة لتضليل المشركين.', context: 'أول تضحية كبرى لإنقاذ الدعوة وبداية تاريخ الهجرة.' },
        { text: 'فتح حصون خيبر المستعصية بضربة واحدة بعد إعطائه الراية.', context: 'قال النبي ﷺ: لأعطين الراية غداً رجلاً يحب الله ورسوله ويحبه الله ورسوله.' }
      ]
    },
    {
      id: 'khalid',
      name: 'خالد بن الوليد رضي الله عنه',
      displayName: 'خالد بن الوليد',
      category: 'الصحابة',
      subtitle: 'سيف الله المسلول والبطل الفاتح',
      shortBio: 'قائد عسكري فذ لم يهزم في معركة قط، لقبه النبي ﷺ بسيف الله المسلول لبطولته وبسالته.',
      fullBio: 'خالد بن الوليد بن المغيرة المخزومي، أسلم قبل فتح مكة، خاض أكثر من مائة معركة حاسمة ضد الفرس والروم، قاد جيوش المسلمين بنجاح في معارك اليرموك واليمامة، واشتهر بدهائه وحنكته التكتيكية النادرة.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'لقد شهدت كذا وكذا معركة، وما في جسدي موضع شبر إلا وفيه ضربة بسيف أو طعنة برمح، وها أنا ذا أموت على فراشي كما يموت العير، فلا نامت أعين الجبناء.', context: 'كلماته الأخيرة المؤثرة قبل وفاته على فراشه.' },
        { text: 'ما من ليلة يُهدى إليّ فيها عروس، بأحبّ إليّ من ليلة شديدة الجليد في سرية من المهاجرين أصبّح بها العدو.', context: 'في عشقه للجهاد وإعلاء كلمة الله.' }
      ],
      deeds: [
        { text: 'إنقاذ جيش المسلمين في معركة مؤتة بعبقرية حربية فريدة.', context: 'تغيير خطوط المعركة وانسحاب الجيش بسلام.' },
        { text: 'الانتصار التاريخي في معركة اليرموك الفاصلة ضد الروم.', context: 'أنهى الوجود البيزنطي في بلاد الشام بالكامل.' }
      ]
    },
    {
      id: 'aburayda',
      name: 'أبو عبيدة بن الجراح رضي الله عنه',
      displayName: 'أبو عبيدة',
      category: 'الصحابة',
      subtitle: 'أمير الأمة وأمينها',
      shortBio: 'فاتح بلاد الشام وأحد العشرة المبشرين بالجنة، سماه النبي ﷺ «أمين هذه الأمة» لشدة أمانته وزهده.',
      fullBio: 'عامر بن عبد الله بن الجراح، أسلم قديماً وشهد المشاهد كلها. عُرف بتواضعه الشديد وزهده المطلق، قاد الجيوش الإسلامية في فتح الشام خلفاً لخالد بن الوليد، وتوفي في طاعون عمواس بعد أن رفض ترك جنوده.',
      colorClass: 'border-primary',
      avatarBg: 'var(--secondary-container)',
      avatarText: 'var(--on-secondary-container)',
      quotes: [
        { text: 'أيها الناس، إني امرؤ من قريش، وما منكم من أحمر ولا أسود يفضلني بغير تقوى إلا وددت أني في إهابه.', context: 'تجسيد للتواضع والعدل وتأكيد قيمة التقوى في الإسلام.' }
      ],
      deeds: [
        { text: 'قيادة جيوش المسلمين لفتح بيت المقدس وبلاد الشام بالكامل وتأمين النصارى.', context: 'عقد صلحاً تاريخياً وحفظ الأرواح وبنى حضارة الشام الإسلامية.' }
      ]
    },

    // ----------------- التابعين -----------------
    {
      id: 'hassan',
      name: 'الحسن البصري رحمه الله',
      displayName: 'الحسن البصري',
      category: 'التابعين',
      subtitle: 'سيد التابعين وإمام أهل البصرة',
      shortBio: 'إمام وعالم البصرة، من أكابر التابعين وأشهر الزهاد والعلماء المؤثرين بمواعظهم البليغة.',
      fullBio: 'الحسن بن يسار البصري، ولد بالمدينة وتوفي بالبصرة، تربى في بيت أم المؤمنين أم سلمة رضي الله عنها فنهل من علم الصحابة، كان بليغ الموعظة، شديد الخوف والزهد، شبيهاً بكلام الأنبياء في مواعظه وعبره.',
      colorClass: 'border-tertiary-fixed-dim',
      avatarBg: 'var(--tertiary-container)',
      avatarText: 'var(--on-tertiary-container)',
      quotes: [
        { text: 'ما الدُّنيا إلا حُلُم، والآخرة يقظة، والموت متوسط بينهما، ونحن في أضغاث أحلام.', context: 'في ذم التعلق بالدنيا الفانية.' },
        { text: 'يا ابن آدم، إنما أنت أيام، فإذا ذهب يوم ذهب بعضك.', context: 'في وجوب اغتنام العمر القصير في طاعة الله.' }
      ],
      deeds: [
        { text: 'الوعظ والتدريس الدائم في المسجد الجامع بالبصرة.', context: 'تخرج من حلقته كبار العلماء والزهاد.' },
        { text: 'الصدع بكلمة الحق أمام الولاة والحكام دون خوف.', context: 'موقفه الشهير مع الحجاج بن يوسف الثقفي.' }
      ]
    },
    {
      id: 'omar2',
      name: 'عمر بن عبد العزيز رحمه الله',
      displayName: 'عمر بن عبد العزيز',
      category: 'التابعين',
      subtitle: 'الخليفة العادل والرمز الفريد',
      shortBio: 'الخليفة الأموي الثامن، لُقب بخامس الخلفاء الراشدين لعدله وورعه ومسيرته الإصلاحية الكبرى.',
      fullBio: 'عمر بن عبد العزيز بن مروان، حفيد عمر بن الخطاب من جهة أمه. تولى الخلافة فبدأ بعزل الولاة الظالمين وأردّ المظالم لبيت المال، ونشر العدل حتى لم يجد الناس فقيراً يأخذ الصدقة. كما أمر بجمع الحديث النبوي لأول مرة رسمياً.',
      colorClass: 'border-tertiary-fixed-dim',
      avatarBg: 'var(--tertiary-container)',
      avatarText: 'var(--on-tertiary-container)',
      quotes: [
        { text: 'أيها الناس، أصلحوا آخرتكم يصلح الله دنياكم، وأصلحوا سرائركم يصلح الله علانيتكم.', context: 'من خطبه ومواعظه الجامعة في الإصلاح النفسي.' }
      ],
      deeds: [
        { text: 'رد المظالم ونشر العدل وتدوين السنة النبوية الشريفة رسمياً لأول مرة.', context: 'حماية السنة النبوية من الضياع والتأسيس لمنهج التدوين الحديثي.' }
      ]
    },
    {
      id: 'said',
      name: 'سعيد بن المسيب رحمه الله',
      displayName: 'سعيد بن المسيب',
      category: 'التابعين',
      subtitle: 'فقيه المدينة وإمام التابعين',
      shortBio: 'أحد الفقهاء السبعة بالمدينة المنورة، وأعلم التابعين بحديث رسول الله وأقضية الخلفاء الراشدين.',
      fullBio: 'سعيد بن المسيب المخزومي، ولد في خلافة عمر بن الخطاب. تميز بصلابته في الحق وعفته الشديدة، حيث رفض تزويج ابنته لولي عهد الخليفة وزوّجه لطالب علم فقير. عانى من السجن والجلد في سبيل ثباته على مواقفه.',
      colorClass: 'border-tertiary-fixed-dim',
      avatarBg: 'var(--tertiary-container)',
      avatarText: 'var(--on-tertiary-container)',
      quotes: [
        { text: 'ما أذن المؤذن منذ ثلاثين سنة إلا وأنا في المسجد، وما فاتني التكبيرة الأولى منذ أربعين سنة.', context: 'في همته العالية ورباطه بالصلوات الخمس في جماعة المسجد.' }
      ],
      deeds: [
        { text: 'حفظ قضايا عمر بن الخطاب وأحكام الصحابة ونقلها نقلاً أميناً للأجيال.', context: 'مرجع الفقه الأول في المدينة المنورة طيلة نصف قرن.' }
      ]
    },

    // ----------------- الأئمة -----------------
    {
      id: 'abuhanifa',
      name: 'الإمام أبو حنيفة النعمان رحمه الله',
      displayName: 'الإمام أبو حنيفة',
      category: 'الأئمة',
      subtitle: 'إمام الفقهاء وصاحب المذهب الحنفي',
      shortBio: 'مؤسس المذهب الحنفي، وأحد الأئمة الأربعة، عُرف بالورع الشديد والذكاء المفرط وحسن القياس والجدال بالحق.',
      fullBio: 'النعمان بن ثابت الكوفي، ولد بالكوفة والتقى ببعض الصحابة. كان يعمل تاجراً للحرير متحرِّياً الكسب الحلال والصدق. وضع أسس الفقه التقديري والقياس العقلي المنضبط، ورفض تولي القضاء للخليفة المنصور صيانة لدينه فسُجن حتى مات.',
      colorClass: 'border-error-container',
      avatarBg: 'var(--error-container)',
      avatarText: 'var(--on-error-container)',
      quotes: [
        { text: 'إذا صحّ الحديث فهو مذهبي، ولا يحل لأحد أن يأخذ بقولنا ما لم يعلم من أين أخذناه.', context: 'دليل منهجه القائم على تعظيم الدليل والحديث فوق كل رأي.' }
      ],
      deeds: [
        { text: 'وضع علم الفقه وتفريع المسائل وتدوينها لأول مرة مع أصحابه.', context: 'تسهيل فهم الشريعة واستنباط الأحكام الفرعية للحياة اليومية.' }
      ]
    },
    {
      id: 'malik',
      name: 'الإمام مالك بن أنس رحمه الله',
      displayName: 'الإمام مالك',
      category: 'الأئمة',
      subtitle: 'إمام دار الهجرة وصاحب الموطأ',
      shortBio: 'إمام المذهب المالكي وأحد الأئمة الأربعة، صاحب كتاب الموطأ الشهير وأعلم أهل المدينة في زمانه.',
      fullBio: 'مالك بن أنس الأصبحي المدني، إمام دار الهجرة، اشتهر بطلبه الدقيق للحديث النبوي الشريف والتثبت فيه، تميز بمهابته ومجالسه العلمية الوقورة، وصاحب المقولة الخالدة في الاستواء على العرش.',
      colorClass: 'border-error-container',
      avatarBg: 'var(--error-container)',
      avatarText: 'var(--on-error-container)',
      quotes: [
        { text: 'لن يصلح آخر هذه الأمة إلا بما صلح به أولها.', context: 'مقولته الشهيرة في وجوب الاتباع والتمسك بالسنة النبوية.' },
        { text: 'العلم ليس بكثرة الرواية، وإنما العلم نور يضعه الله في القلوب.', context: 'في بيان حقيقة العلم وأنه موهبة ربانية لا مجرد حفظ واستظهار.' },
        { text: 'كل أحد يؤخذ من قوله ويرد إلا صاحب هذا القبر ﷺ.', context: 'قاله وهو يشير إلى قبر النبي ﷺ، في تعظيم السنة ردّ كل قول خالفها.' }
      ],
      deeds: [
        { text: 'تأليف كتاب الموطأ أول كتاب جامع للحديث والفقه مرتب على أبواب الفقه.', context: 'استغرق تأليفه وتنقيحه أربعين عاماً، وقيل إنه ألّفه بأمر الخليفة المنصور.' },
        { text: 'الامتناع عن الفتوى إلا بعد طهارة ووقار تام وبخور، تعظيماً لحديث رسول الله ﷺ.', context: 'كان يقول: أنا لا أحدث حديث رسول الله ﷺ إلا على طهارة إجلالاً له.' }
      ]
    },
    {
      id: 'shafii',
      name: 'الإمام محمد بن إدريس الشافعي رحمه الله',
      displayName: 'الإمام الشافعي',
      category: 'الأئمة',
      subtitle: 'ناصر السنة وصاحب المذهب الشافعي',
      shortBio: 'مؤسس المذهب الشافعي والواضع الأول لعلم أصول الفقه بكتابه «الرسالة»، جمع بين الحديث والرأي وعُرف بالبلاغة الفذة.',
      fullBio: 'محمد بن إدريس الشافعي القرشي، ولد في غزة وتنقّل بين مكة والمدينة واليمن والعراق ومصر. حفظ الموطأ صغيراً، وتتلمذ على الإمام مالك ومحمد بن الحسن الشيباني. لُقب بناصر السنة لنصرته المذهب الحديثي ومناظرته أهل الرأي.',
      colorClass: 'border-error-container',
      avatarBg: 'var(--error-container)',
      avatarText: 'var(--on-error-container)',
      quotes: [
        { text: 'ما ناظرت أحداً قط إلا أحببت أن يظهر الله الحق على يديه، ورأيي صواب يحتمل الخطأ ورأي غيري خطأ يحتمل الصواب.', context: 'منتهى الإخلاص والأدب العلمي والإنصاف في المناظرة وحوار الآخر.' }
      ],
      deeds: [
        { text: 'تأليف كتاب الرسالة وتأسيس علم أصول الفقه لأول مرة في تاريخ المسلمين.', context: 'وضع القواعد والضوابط العقلية والنقلية لاستنباط الأحكام الشرعية.' }
      ]
    },
    {
      id: 'hanbal',
      name: 'الإمام أحمد بن حنبل رحمه الله',
      displayName: 'الإمام أحمد',
      category: 'الأئمة',
      subtitle: 'إمام أهل السنة وصاحب المسند',
      shortBio: 'مؤسس المذهب الحنبلي، صابر الفتنة الكبرى ومؤلف «المسند»، لُقب بإمام أهل السنة لثباته على العقيدة الصحيحة.',
      fullBio: 'أحمد بن محمد بن حنبل الشيباني، ولد ببغداد ورحل في طلب الحديث إلى الشام ومكة واليمن. واجه محنة خلق القرآن الشهيرة بكل ثبات رافضاً التنازل عن معتقد السلف فتعرض للحبس والضرب. صاحب المسند الضخم الذي يضم أكثر من ثلاثين ألف حديث.',
      colorClass: 'border-error-container',
      avatarBg: 'var(--error-container)',
      avatarText: 'var(--on-error-container)',
      quotes: [
        { text: 'بيننا وبينكم الجنائز، والقرآن كلام الله غير مخلوق منه بدأ وإليه يعود.', context: 'مقولته الشهيرة في المحنة وتأكيداً لثقة الجماهير في علمهم وثباتهم.' }
      ],
      deeds: [
        { text: 'تأليف مسند الإمام أحمد وحفظ السنة النبوية من التحريف والضياع بجهد جبار.', context: 'أضخم موسوعة حديثية مسندة ومنسقة في التراث الإسلامي.' }
      ]
    }
  ]

  const familyTree = {
    grandparent: {
      name: 'عبد المطلب',
      role: 'الجد',
      bio: 'جد النبي ﷺ وسيد قريش في زمانه، اشتهر بحفر بئر زمزم وشهامة الأخلاق وحماية الكعبة في عام الفيل.',
      icon: 'military_tech'
    },
    father: {
      name: 'عبد الله',
      role: 'الأب',
      bio: 'والد النبي ﷺ، توفي وهو في طريق العودة من التجارة بالشام، ودفن بالمدينة المنورة والنبي ﷺ لا يزال جنيناً في بطن أمه.',
      icon: 'person'
    },
    mother: {
      name: 'آمنة بنت وهب',
      role: 'الأم',
      bio: 'أم النبي ﷺ، من أشرف نساء قريش نسباً، توفيت بالأبواء (بين مكة والمدينة) والنبي ﷺ في السادسة من عمره.',
      icon: 'woman'
    },
    prophet: {
      name: 'محمد ﷺ',
      role: 'رسول الله',
      bio: 'سيد المرسلين وخاتم النبيين، محمد بن عبد الله بن عبد المطلب ﷺ، صاحب الشفاعة العظمى والحوض المورود، بُعث رحمة للعالمين.',
      icon: 'auto_awesome'
    },
    wives: [
      { name: 'خديجة بنت خويلد', role: 'أم المؤمنين', bio: 'أولى زوجات النبي ﷺ، نصرته وآمنت به حين كفر الناس، وواسته بمالها، وأول من أسلم من النساء، وبشرها الله ببيت في الجنة من قصب.', icon: 'favorite' },
      { name: 'عائشة بنت أبي بكر', role: 'أم المؤمنين', bio: 'الصديقة بنت الصديق، أحب زوجات النبي ﷺ إليه بعد خديجة، وأعلم النساء بحديث رسول الله ودين الإسلام.', icon: 'book' },
      { name: 'حفصة بنت عمر', role: 'أم المؤمنين', bio: 'بنت الفاروق عمر رضي الله عنهما، صوّامة قوّامة، وهي التي حُفظ عندها المصحف الشريف بعد وفاة أبي بكر وعمر.', icon: 'shield' }
    ],
    children: [
      { name: 'فاطمة الزهراء', role: 'الابنة', bio: 'أحب بناته ﷺ إليه، سيدة نساء أهل الجنة، زوجة علي بن أبي طالب رضي الله عنه، وأم الحسن والحسين سبطي رسول الله.', icon: 'star' },
      { name: 'القاسم', role: 'الابن', bio: 'بكر النبي ﷺ وولد بمكة قبل البعثة وتوفي صغيراً، وبه كان يُكنى رسول الله ﷺ (أبو القاسم).', icon: 'person' },
      { name: 'زينب', role: 'الابنة', bio: 'كبرى بنات النبي ﷺ، ولدت بمكة وتزوجت ابن خالتها أبو العاص بن الربيع وهاجرت إلى المدينة المنورة.', icon: 'person' },
      { name: 'إبراهيم', role: 'الابن', bio: 'آخر أبناء النبي ﷺ، ولد بالمدينة المنورة من مارية القبطية وتوفي طفلاً صغيراً فحزن عليه النبي وبكاه.', icon: 'child_care' }
    ]
  }

  // Filter list based on inputs
  const filteredCharacters = charactersData.filter(char => {
    const matchesSearch = char.name.includes(searchQuery) || char.shortBio.includes(searchQuery)
    const matchesFilter = activeFilter === 'الكل' || char.category === activeFilter
    return matchesSearch && matchesFilter
  })

  // Common horizontal divider lines styled dynamically
  const lineStyle = { backgroundColor: 'var(--outline-variant)', opacity: 0.3 }

  return (
    <div className="animate-fade-in">
      
      {/* Tab Selector: List vs Tree (Segmented Control style) */}
      <div className="px-container-padding pt-6">
        <div className="flex w-full p-1 rounded-2xl mb-6" style={{ backgroundColor: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', borderColor: 'rgba(196,201,207,0.15)' }}>
          <button 
            className="flex-1 py-3 text-sm font-bold rounded-xl transition-all border-none cursor-pointer text-center"
            onClick={() => { setActiveSubTab('list'); setSelectedCharacter(null); }}
            style={{
              backgroundColor: activeSubTab === 'list' ? 'var(--surface-container-lowest)' : 'transparent',
              color: activeSubTab === 'list' ? 'var(--primary)' : 'var(--on-surface-variant)',
              boxShadow: activeSubTab === 'list' ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none'
            }}
          >
            سير الصحابة والسلف
          </button>
          <button 
            className="flex-1 py-3 text-sm font-bold rounded-xl transition-all border-none cursor-pointer text-center"
            onClick={() => { setActiveSubTab('tree'); setSelectedCharacter(null); }}
            style={{
              backgroundColor: activeSubTab === 'tree' ? 'var(--surface-container-lowest)' : 'transparent',
              color: activeSubTab === 'tree' ? 'var(--primary)' : 'var(--on-surface-variant)',
              boxShadow: activeSubTab === 'tree' ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none'
            }}
          >
            شجرة العائلة النبوية
          </button>
        </div>
      </div>

      {/* ================== TAB 1: LIST / BIOGRAPHIES ================== */}
      {activeSubTab === 'list' && (
        <div className="pb-32">
          {!selectedCharacter ? (
            /* Character List View */
            <div className="px-container-padding pt-2">
              
              {/* Search Bar */}
              <div className="relative group mb-6">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--outline)' }}>
                  search
                </span>
                <input 
                  type="text" 
                  placeholder="ابحث عن شخصية..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-none rounded-xl py-4 pr-12 pl-4 text-on-surface placeholder:text-outline transition-all duration-300"
                  style={{ 
                    outline: 'none',
                    backgroundColor: 'var(--surface-container-low)',
                    border: '1px solid var(--outline-variant)',
                    borderColor: 'rgba(196,201,207,0.15)'
                  }}
                />
              </div>

              {/* Filter Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 mb-6">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className="px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-all border-none cursor-pointer"
                      style={{
                        backgroundColor: isActive ? 'var(--primary)' : 'var(--surface-container-high)',
                        color: isActive ? 'var(--on-primary)' : 'var(--on-surface-variant)'
                      }}
                    >
                      {filter}
                    </button>
                  )
                })}
              </div>

              {/* Profile Cards */}
              <div className="space-y-4">
                {filteredCharacters.map((char) => (
                  <div 
                    key={char.id}
                    onClick={() => { setSelectedCharacter(char); setDetailTab('bio'); }}
                    className="rounded-xl p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(26,54,93,0.03)] hover:shadow-md transition-all group cursor-pointer border-r-4 text-right"
                    style={{ 
                      backgroundColor: 'var(--surface-container-lowest)', 
                      border: '1px solid var(--outline-variant)', 
                      borderRight: `4px solid ${char.category === 'الصحابة' || char.category === 'الأنبياء' ? 'var(--primary)' : char.category === 'التابعين' ? 'var(--tertiary-container)' : 'var(--error)'}`,
                      borderColor: 'rgba(196, 201, 207, 0.15)'
                    }}
                  >
                    {/* Avatar with first letter */}
                    <div 
                      className="w-16 h-16 rounded-full shrink-0 flex items-center justify-center font-bold"
                      style={{ backgroundColor: char.avatarBg, color: char.avatarText, fontSize: '20px' }}
                    >
                      {char.displayName.charAt(0)}
                    </div>
                    {/* Text block */}
                    <div className="flex-1 min-w-0 text-right">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-headline-md text-[16px] font-bold" style={{ color: 'var(--primary)' }}>{char.displayName}</h3>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{
                          backgroundColor: char.avatarBg,
                          color: char.avatarText
                        }}>
                          {char.category}
                        </span>
                      </div>
                      <p className="text-sm line-clamp-2 leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
                        {char.shortBio}
                      </p>
                    </div>
                    {/* Chevron indicator */}
                    <span className="material-symbols-outlined transition-colors" style={{ color: 'var(--outline)' }}>
                      chevron_left
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            /* Character Detail View */
            <div className="animate-fade-in">
              
              {/* Back AppBar */}
              <div 
                className="sticky top-0 z-40 bg-surface/85 backdrop-blur-md px-container-padding py-4 flex items-center justify-between border-b" 
                style={{ backgroundColor: 'var(--background)', opacity: 0.95, borderBottom: '1px solid var(--outline-variant)', borderColor: 'rgba(196,201,207,0.15)' }}
              >
                <button 
                  onClick={() => setSelectedCharacter(null)}
                  className="active:scale-95 p-2 rounded-full flex items-center border-none bg-transparent cursor-pointer"
                >
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>arrow_forward</span>
                </button>
                <h2 className="font-headline-md text-[18px]" style={{ color: 'var(--primary)' }}>{selectedCharacter.displayName}</h2>
                <div style={{ width: '40px' }}></div>
              </div>

              {/* Hero landscape section */}
              <div className="px-container-padding pt-6">
                <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(26,54,93,0.05)]">
                  {/* Styled desert landscape placeholder using CSS gradient */}
                  <div 
                    className="w-full h-full flex flex-col justify-end p-6 text-right"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.75) 100%), linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)'
                    }}
                  >
                    <span className="text-white/80 font-label-sm uppercase tracking-widest mb-1">{selectedCharacter.category}</span>
                    <h3 className="text-white text-xl md:text-2xl font-bold leading-snug" style={{ margin: 0 }}>
                      {selectedCharacter.subtitle}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Sticky Tab Navigation */}
              <div 
                className="sticky z-30 bg-surface/80 backdrop-blur-md px-container-padding mt-6 border-b" 
                style={{ backgroundColor: 'var(--background)', opacity: 0.95, borderBottom: '1px solid var(--outline-variant)', borderColor: 'rgba(196,201,207,0.15)' }}
              >
                <div className="flex gap-8 justify-start py-2">
                  <button 
                    onClick={() => setDetailTab('bio')}
                    className="py-2 font-headline-md text-[16px] relative border-none bg-transparent cursor-pointer font-bold"
                    style={{
                      color: detailTab === 'bio' ? 'var(--primary)' : 'var(--on-surface-variant)',
                    }}
                  >
                    السيرة الذاتية
                    {detailTab === 'bio' && (
                      <div className="absolute bottom-[-2px] left-0 right-0 h-[3px] rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                    )}
                  </button>
                  <button 
                    onClick={() => setDetailTab('quotes')}
                    className="py-2 font-headline-md text-[16px] relative border-none bg-transparent cursor-pointer font-bold"
                    style={{
                      color: detailTab === 'quotes' ? 'var(--primary)' : 'var(--on-surface-variant)',
                    }}
                  >
                    أقوال وأعمال
                    {detailTab === 'quotes' && (
                      <div className="absolute bottom-[-2px] left-0 right-0 h-[3px] rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                    )}
                  </button>
                </div>
              </div>

              {/* Detail Content */}
              <div className="px-container-padding mt-6 space-y-6">
                {detailTab === 'bio' ? (
                  /* Biography Articles */
                  <div className="space-y-6">
                    <div 
                      className="rounded-3xl p-6 shadow-[0_4px_20px_rgba(26,54,93,0.03)] border"
                      style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'var(--outline-variant)', opacity: 0.95 }}
                    >
                      <h4 className="font-headline-md mb-4 border-r-4 pr-4 text-[18px]" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>السيرة والنشأة</h4>
                      <p className="font-body-ar text-justify leading-relaxed" style={{ fontSize: '20px', color: 'var(--on-surface-variant)' }}>
                        {selectedCharacter.fullBio}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl flex items-start gap-4" style={{ backgroundColor: 'var(--tertiary-container)' }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--on-tertiary-container)' }}>info</span>
                      <p className="font-body-md text-justify italic" style={{ color: 'var(--on-tertiary-container)', margin: 0 }}>
                        هذه الشخصية تمثل فصلاً مجيداً من فصول التاريخ الإسلامي العظيم والاقتداء به جلب للسكينة والمنهج الصحيح.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Sayings & Quotes */
                  <div className="space-y-4">
                    {selectedCharacter.quotes.map((q, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-3xl p-6 shadow-[0_4px_20px_rgba(26,54,93,0.03)] border flex flex-col items-center"
                        style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'var(--outline-variant)', opacity: 0.95 }}
                      >
                        <div className="w-full flex justify-between items-center mb-4">
                          <span 
                            className="px-3 py-1 rounded-full text-label-sm font-label-sm" 
                            style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}
                          >
                            من أقواله
                          </span>
                          <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>format_quote</span>
                        </div>
                        <p className="font-display-ar text-center leading-loose mb-4" style={{ fontSize: '32px', color: 'var(--primary)' }}>
                          "{q.text}"
                        </p>
                        <div className="h-[1px] w-full my-4" style={{ backgroundColor: 'var(--outline-variant)', opacity: 0.3 }}></div>
                        <p className="font-body-md w-full text-right" style={{ color: 'var(--on-surface-variant)', fontSize: '13px' }}>
                          📌 {q.context}
                        </p>
                      </div>
                    ))}

                    {selectedCharacter.deeds && selectedCharacter.deeds.map((d, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-3xl p-6 shadow-[0_4px_20px_rgba(26,54,93,0.03)] border flex flex-col items-center"
                        style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'var(--outline-variant)', opacity: 0.95 }}
                      >
                        <div className="w-full flex justify-between items-center mb-4">
                          <span 
                            className="px-3 py-1 rounded-full text-label-sm font-label-sm" 
                            style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)' }}
                          >
                            من أعماله
                          </span>
                          <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>verified_user</span>
                        </div>
                        <p className="font-body-ar text-center leading-loose mb-4" style={{ fontSize: '22px', color: 'var(--primary)' }}>
                          {d.text}
                        </p>
                        <div className="h-[1px] w-full my-4" style={{ backgroundColor: 'var(--outline-variant)', opacity: 0.3 }}></div>
                        <p className="font-body-md w-full text-right" style={{ color: 'var(--on-surface-variant)', fontSize: '13px' }}>
                          📌 {d.context}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      )}

      {/* ================== TAB 2: PROPHET'S FAMILY TREE ================== */}
      {activeSubTab === 'tree' && (
        <div className="pb-32 px-container-padding pt-2">
          
          <div className="text-center mb-10">
            <p className="font-body-md" style={{ color: 'var(--on-surface-variant)' }}>
              نسب رسول الله ﷺ وآل بيته الأطهار (اضغط للاستعراض)
            </p>
          </div>

          {/* Tree representation */}
          <div className="relative flex flex-col items-center">
            
            {/* Grandfather */}
            <div 
              className="border px-8 py-3 rounded-2xl shadow-sm cursor-pointer transition-all text-center" 
              style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'rgba(196,201,207,0.2)' }}
              onClick={() => setSelectedTreeBio(familyTree.grandparent)}
            >
              <span className="text-xs font-label-sm block mb-1" style={{ color: 'var(--on-surface-variant)' }}>الجد</span>
              <span className="text-xl font-body-ar font-bold" style={{ color: 'var(--primary)' }}>{familyTree.grandparent.name}</span>
            </div>

            <div className="w-0.5 h-10" style={lineStyle}></div>

            {/* Parents Branching */}
            <div className="relative w-48 h-10">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={lineStyle}></div>
              <div className="absolute top-0 left-0 w-0.5 h-full" style={lineStyle}></div>
              <div className="absolute top-0 right-0 w-0.5 h-full" style={lineStyle}></div>
            </div>

            <div className="flex gap-12 -mt-1">
              <div 
                className="border px-6 py-3 rounded-xl shadow-sm cursor-pointer transition-colors text-center" 
                style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'rgba(196,201,207,0.2)' }}
                onClick={() => setSelectedTreeBio(familyTree.father)}
              >
                <span className="text-xs font-label-sm block mb-1" style={{ color: 'var(--on-surface-variant)' }}>الأب</span>
                <span className="text-lg font-body-ar font-semibold" style={{ color: 'var(--primary)' }}>{familyTree.father.name}</span>
              </div>
              <div 
                className="border px-6 py-3 rounded-xl shadow-sm cursor-pointer transition-colors text-center" 
                style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'rgba(196,201,207,0.2)' }}
                onClick={() => setSelectedTreeBio(familyTree.mother)}
              >
                <span className="text-xs font-label-sm block mb-1" style={{ color: 'var(--on-surface-variant)' }}>الأم</span>
                <span className="text-lg font-body-ar font-semibold" style={{ color: 'var(--primary)' }}>{familyTree.mother.name}</span>
              </div>
            </div>

            <div className="relative w-48 h-12">
              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={lineStyle}></div>
              <div className="absolute top-0 left-0 w-0.5 h-full" style={lineStyle}></div>
              <div className="absolute top-0 right-0 w-0.5 h-full" style={lineStyle}></div>
            </div>
            <div className="w-0.5 h-8" style={lineStyle}></div>

            {/* Prophet Muhammad node */}
            <div 
              className="relative z-10" 
              onClick={() => setSelectedTreeBio(familyTree.prophet)}
            >
              <div 
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-xl cursor-pointer transform hover:scale-105 transition-transform"
                style={{
                  backgroundColor: 'var(--primary-container)',
                  outline: '4px solid var(--on-primary-container)'
                }}
              >
                <span className="text-white font-body-ar text-2xl leading-none mb-1">محمد</span>
                <span className="text-[10px] font-label-sm" style={{ color: 'var(--primary-fixed)' }}>رسول الله ﷺ</span>
              </div>
            </div>

            <div className="w-0.5 h-12" style={lineStyle}></div>
            <div className="relative w-full max-w-lg h-0.5" style={lineStyle}></div>

            {/* Children and wives branching */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-12 w-full max-w-2xl px-4">
              
              {/* Wives */}
              <div className="flex flex-col items-center">
                <div className="relative h-8 w-0.5 -mt-12" style={lineStyle}></div>
                <h3 className="text-xs px-4 py-1 rounded-full font-label-sm mb-6 shadow-sm border-none" style={{ backgroundColor: 'var(--tertiary-container)', color: 'var(--on-tertiary-container)' }}>أمهات المؤمنين</h3>
                <div className="space-y-4 w-full">
                  {familyTree.wives.map((wife, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedTreeBio(wife)}
                      className="p-3 rounded-xl border flex items-center gap-3 cursor-pointer hover:bg-surface-container transition-colors shadow-sm text-right"
                      style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'var(--outline-variant)', opacity: 0.95 }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-container)' }}>
                        <span className="material-symbols-outlined text-sm" style={{ color: 'var(--on-secondary-container)' }}>favorite</span>
                      </div>
                      <span className="font-body-ar text-[15px]" style={{ color: 'var(--primary)' }}>{wife.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Children */}
              <div className="flex flex-col items-center">
                <div className="relative h-8 w-0.5 -mt-12" style={lineStyle}></div>
                <h3 className="text-xs px-4 py-1 rounded-full font-label-sm mb-6 shadow-sm border-none" style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)' }}>الأبناء والبنات</h3>
                <div className="space-y-4 w-full">
                  {familyTree.children.map((child, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedTreeBio(child)}
                      className="p-3 rounded-xl border flex items-center gap-3 cursor-pointer hover:bg-surface-container transition-colors shadow-sm text-right"
                      style={{ backgroundColor: 'var(--surface-container-lowest)', borderColor: 'var(--outline-variant)', opacity: 0.95 }}
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-container)' }}>
                        <span className="material-symbols-outlined text-sm" style={{ color: 'var(--on-secondary-container)' }}>{child.icon}</span>
                      </div>
                      <span className="font-body-ar text-[15px]" style={{ color: 'var(--primary)' }}>{child.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* Tree bio bottom sheet */}
      {selectedTreeBio && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300"
            onClick={() => setSelectedTreeBio(null)}
          ></div>
          <div 
            className="fixed bottom-0 left-0 right-0 z-[70] rounded-t-[32px] p-8 bottom-sheet max-w-2xl mx-auto shadow-2xl bottom-sheet-transition"
            style={{ transform: 'translateY(0)', backgroundColor: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}
          >
            <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: 'var(--outline-variant)', opacity: 0.3 }}></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}>
                <span className="material-symbols-outlined text-3xl">{selectedTreeBio.icon || 'person'}</span>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-headline-md" style={{ color: 'var(--primary)', margin: 0 }}>{selectedTreeBio.name}</h2>
                <p className="text-sm font-label-sm" style={{ color: 'var(--on-surface-variant)', margin: 0 }}>{selectedTreeBio.role}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl mb-8 text-right" style={{ backgroundColor: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', borderColor: 'rgba(196,201,207,0.15)' }}>
              <p className="font-body-ar leading-relaxed" style={{ fontSize: '18px', color: 'var(--on-surface)', margin: 0 }}>
                {selectedTreeBio.bio}
              </p>
            </div>

            <button 
              className="w-full py-4 rounded-2xl font-label-sm text-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-none cursor-pointer font-bold"
              onClick={() => setSelectedTreeBio(null)}
              style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)' }}
            >
              <span>إغلاق</span>
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        </>
      )}

    </div>
  )
}
