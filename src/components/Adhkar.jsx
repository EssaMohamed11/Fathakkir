import React, { useState } from 'react'

export default function Adhkar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    { key: 'morning', label: 'الصباح' },
    { key: 'evening', label: 'المساء' },
    { key: 'sleep', label: 'النوم' },
    { key: 'prayer', label: 'بعد الصلاة' }
  ]

  const initialAdhkarData = {
    morning: [
      {
        id: 'm_kursi',
        title: 'آية الكرسي',
        text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۚ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
        count: 1,
        maxCount: 1,
        benefit: 'لن يزال عليك من الله حافظ ولا يقربك شيطان حتى تصبح.'
      },
      {
        id: 'm_muawadhat',
        title: 'المعوذات',
        text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ { قُلْ هُوَ اللَّهُ أَحَدٌ } وبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ { قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ } وبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ { قُلْ أَعُوذُ بِرَبِّ النَّاسِ }',
        count: 3,
        maxCount: 3,
        benefit: 'تقرأ الإخلاص والفلق والناس (3 مرات) تكفيك من كل شيء.'
      },
      {
        id: 'm_asbahna',
        title: 'أذكار الصباح',
        text: 'اصبحنا واصبح الملك لله ، و الحمد لله ، لا إله إلا الله وحده لا شريك له ، له الملك و له الحمد وهو على كل شيء قدير ، رب أسألك خير ما في هذا اليوم و خير ما بعده ، و أعوذ بك من شر ما في هذا اليوم و شر ما بعده ، رب أعوذ بك من الكسل ، و سوء الكبر ، رب أعوذ بك من عذاب في النار و عذاب في القبر.',
        count: 1,
        maxCount: 1,
        benefit: 'من أذكار الصباح العظيمة لسؤال الخير والاستعاذة من الشر.'
      },
      {
        id: 'm_beka_asbahna',
        title: 'اللهم بك أصبحنا',
        text: 'اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور',
        count: 1,
        maxCount: 1,
        benefit: 'من أذكار الصباح المأثورة.'
      },
      {
        id: 'm_sayyid',
        title: 'سيد الاستغفار',
        text: 'اللهم أنت ربي لا إله إلا أنت ، خلقتني وأنا عبدك ، و أنا على عهدك و وعدك ما استطعت ، أعوذ بك من شر ما صنعت ، أبوء لك بنعمتك علي ، و أبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.',
        count: 1,
        maxCount: 1,
        benefit: 'من قالها موقناً بها ومات من يومه دخل الجنة.'
      },
      {
        id: 'm_oshhedok',
        title: 'أشهدك وأشهد حملة عرشك',
        text: 'اللهم إني أصبحت أشهدك و أشهد حملة عرشك ، و ملائكتك و جميع خلقك ، بأنك أنت الله لا إله إلا أنت وحدك لا شريك لك ، و أن محمداً عبدك و رسولك.',
        count: 4,
        maxCount: 4,
        benefit: 'من قالها أربعاً عتقه الله من النار.'
      },
      {
        id: 'm_afw',
        title: 'دعاء العفو والعافية',
        text: 'اللهم إني أسألك العفو والعافية في الدنيا والأخره ، اللهم إني أسألك العفو والعافية ، في ديني ودنياي وأهلي ، و مالي ، اللهم استر عوراتي ، و آمن روعاتي ، اللهم احفظني من بين يدي ، و من خلفي ، و عن يميني ، و عن شمالي ، و من فوقي ، و أعوذ بعظمتك إن أغتال من تحتي',
        count: 1,
        maxCount: 1,
        benefit: 'دعاء الحفظ والوقاية والستر الشامل.'
      },
      {
        id: 'm_afene',
        title: 'دعاء العافية في البدن',
        text: 'اللهم عافني في بدني ، اللهم عافني في سمعي ، اللهم عافني في بصري ، لا إله إلا أنت . اللهم إني أعوذ بك من الكفر ، و الفقر ، و أعوذ بك من عذاب القبر ، لا إله إلا أنت',
        count: 3,
        maxCount: 3,
        benefit: 'تكرر 3 مرات لسؤال الله العافية التامة.'
      },
      {
        id: 'm_hasbi',
        title: 'الكفاية والتوكل',
        text: 'حسبي الله لا اله الا هو عليه توكلت وهو رب العرش العظيم',
        count: 7,
        maxCount: 7,
        benefit: 'من قالها سبعاً كفاه الله ما أهمه من أمر الدنيا والآخرة.'
      },
      {
        id: 'm_radeet',
        title: 'الرضا بالله رباً',
        text: 'رضيت بالله رباً وبالاسلام ديناً وبمحمد صلى الله عليه وسلم نبياً ورسولا',
        count: 3,
        maxCount: 3,
        benefit: 'من قالها ثلاثاً كان حقاً على الله أن يرضيه يوم القيامة.'
      },
      {
        id: 'm_bismillah',
        title: 'الأمان من الضر',
        text: 'بسم الله الذي لا يضر مع اسمه شيء في الارض ولا في السماء وهو السميع العليم',
        count: 3,
        maxCount: 3,
        benefit: 'من قالها ثلاثاً لم يضره شيء.'
      },
      {
        id: 'm_aoodh',
        title: 'أعوذ بكلمات الله التامات',
        text: 'اعوذ بكلمات الله التامات من شر ماخلق',
        count: 3,
        maxCount: 3,
        benefit: 'وقاية من كل مكروه وسوء وهامة.'
      },
      {
        id: 'm_salawat',
        title: 'الصلاة على النبي',
        text: 'اللهم صل وسلم على نبينا محمد',
        count: 10,
        maxCount: 10,
        benefit: 'من قالها عشراً أدركته شفاعة النبي ﷺ يوم القيامة.'
      },
      {
        id: 'm_istighfar',
        title: 'الاستغفار والتوبة',
        text: 'استغفر الله العظيم واتوب اليه',
        count: 100,
        maxCount: 100,
        benefit: 'تفتح المغاليق وتزيد الأرزاق والبركة.'
      },
      {
        id: 'm_tawheed',
        title: 'لا إله إلا الله وحده لا شريك له',
        text: 'لا اله الا الله وحده لاشريك له له الملك وله الحمد وهو على كل شيء قدير',
        count: 100,
        maxCount: 100,
        benefit: 'كتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزاً من الشيطان.'
      }
    ],
    evening: [
      {
        id: 'e_tasbih',
        title: 'التسبيح والتحميد',
        text: 'سبحان الله وبحمده.',
        count: 100,
        maxCount: 100,
        benefit: 'من قالها مئة مرة حطت خطاياه وإن كانت مثل زبد البحر.'
      },
      {
        id: 'e_kursi',
        title: 'آية الكرسي',
        text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۚ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
        count: 1,
        maxCount: 1,
        benefit: 'حارس من الملائكة يحرسه، ولا يقربه شيطان حتى يصبح.'
      },
      {
        id: 'e_muawadhat',
        title: 'المعوذات',
        text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ { قُلْ هُوَ اللَّهُ أَحَدٌ } وبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ { قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ } وبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ { قُلْ أَعُوذُ بِرَبِّ النَّاسِ }',
        count: 3,
        maxCount: 3,
        benefit: 'تقرأ الإخلاص والفلق والناس (3 مرات) تكفيك من كل شيء.'
      },
      {
        id: 'e_amsayna',
        title: 'أذكار المساء',
        text: 'أمسينا وأمسى الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، رب أسألك خير ما في هذه الليلة وخير ما بعدها، وأعوذ بك من شر ما في هذه الليلة وشر ما بعدها، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار وعذاب في القبر.',
        count: 1,
        maxCount: 1,
        benefit: 'سؤال خير هذه الليلة والاستعاذة من عذاب القبر والنار.'
      },
      {
        id: 'e_sayyid',
        title: 'سيد الاستغفار',
        text: 'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك عليّ وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.',
        count: 1,
        maxCount: 1,
        benefit: 'من قالها موقناً بها ومات في ليلته دخل الجنة.'
      },
      {
        id: 'e_oshhedok',
        title: 'أشهدك وأشهد حملة عرشك',
        text: 'اللهم إني أمسيت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمداً عبدك ورسولك.',
        count: 4,
        maxCount: 4,
        benefit: 'تكرر 4 مرات ليعتقك الله من النار.'
      },
      {
        id: 'e_afw',
        title: 'دعاء العفو والعافية',
        text: 'اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي.',
        count: 1,
        maxCount: 1,
        benefit: 'دعاء الحفظ والوقاية والستر الشامل.'
      },
      {
        id: 'e_ya_hayy',
        title: 'الاستغاثة بالله',
        text: 'يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.',
        count: 1,
        maxCount: 1,
        benefit: 'تصلح الشأن كله وهي وصية النبي ﷺ لفاطمة.'
      },
      {
        id: 'e_radeet',
        title: 'الرضا بالله رباً',
        text: 'رضيت بالله رباً وبالإسلام ديناً وبمحمد صلى الله عليه وسلم نبياً.',
        count: 3,
        maxCount: 3,
        benefit: 'من قالها ثلاثاً كان حقاً على الله أن يرضيه يوم القيامة.'
      },
      {
        id: 'e_hasbi',
        title: 'الكفاية والتوكل',
        text: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.',
        count: 7,
        maxCount: 7,
        benefit: 'من قالها سبعاً كفاه الله ما أهمه من أمر الدنيا والآخرة.'
      },
      {
        id: 'e_hamm',
        title: 'الاستعاذة من الهم والحزن',
        text: 'اللَّهُمَّ إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال.',
        count: 1,
        maxCount: 1,
        benefit: 'حماية وتفريج من هموم الدين والكسل والضيق.'
      },
      {
        id: 'e_rabbi_alameen',
        title: 'أمسينا وأمسى الملك لله رب العالمين',
        text: 'أمسينا وأمسي الملك لله رب العالمين، اللهم إني أسألك خير هذه الليلة، فتحها، ونصرها، ونورها وبركتها، وهداها، وأعوذ بك من شر ما فيها وشر ما بعدها.',
        count: 1,
        maxCount: 1,
        benefit: 'سؤال خير الليلة وفتحها وبركتها ونورها.'
      },
      {
        id: 'e_bismillah',
        title: 'الأمان من الضر',
        text: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.',
        count: 3,
        maxCount: 3,
        benefit: 'من قالها ثلاثاً لم يضره شيء.'
      },
      {
        id: 'e_fitrah',
        title: 'فطرة الإسلام',
        text: 'أمسينا على فطرة الإسلام، وعلى كلمة الإخلاص، وعلى دين نبينا محمد صلى الله عليه وسلم، وعلى ملة أبينا إبراهيم حنيفاً مسلماً وما كان من المشركين.',
        count: 1,
        maxCount: 1,
        benefit: 'تأكيد التوحيد واتباع ملة إبراهيم حنيفاً مسلماً.'
      },
      {
        id: 'e_beka_amsayna',
        title: 'اللهم بك أمسينا',
        text: 'اللهم بك أمسينا وبك أصبحنا، وبك نحيا وبك نموت وإليك النشور.',
        count: 1,
        maxCount: 1,
        benefit: 'من أذكار المساء المأثورة.'
      },
      {
        id: 'e_tawheed',
        title: 'لا إله إلا الله وحده لا شريك له',
        text: 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.',
        count: 100,
        maxCount: 100,
        benefit: 'حرز عظيم من الشيطان ومئات الحسنات.'
      },
      {
        id: 'e_ni_mah',
        title: 'شكر النعمة',
        text: 'اللهم ما أمسى بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر.',
        count: 1,
        maxCount: 1,
        benefit: 'من قالها حين يمسي فقد أدى شكر ليلته.'
      },
      {
        id: 'e_muda_af',
        title: 'تسبيح مضاعف',
        text: 'سبحان الله وبحمده عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته.',
        count: 3,
        maxCount: 3,
        benefit: 'أجر مضاعف عظيم وثقيل في الميزان.'
      },
      {
        id: 'e_afene',
        title: 'دعاء العافية في البدن',
        text: 'اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت، اللهم إني أعوذ بك من الكفر، والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت.',
        count: 3,
        maxCount: 3,
        benefit: 'تكرر 3 مرات لسؤال الله العافية التامة.'
      },
      {
        id: 'e_salawat',
        title: 'الصلاة على النبي',
        text: 'اللهم صل وسلم على نبينا محمد.',
        count: 10,
        maxCount: 10,
        benefit: 'من قالها عشراً أدركته شفاعة النبي ﷺ يوم القيامة.'
      }
    ],
    sleep: [
      {
        id: 's1',
        title: 'ذكر النوم',
        text: 'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.',
        count: 1,
        maxCount: 1,
        benefit: 'يُقال عند وضع الجنب على الفراش. (متفق عليه)'
      },
      {
        id: 's2',
        title: 'الوقاية من العذاب',
        text: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.',
        count: 3,
        maxCount: 3,
        benefit: 'كان النبي ﷺ يضع يده تحت خده ويقولها ثلاثاً. (رواه أبو داود)'
      },
      {
        id: 's3',
        title: 'آية الكرسي',
        text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ.',
        count: 1,
        maxCount: 1,
        benefit: 'من قرأها حين ينام لم يزل عليه من الله حافظ ولا يقربه شيطان حتى يصبح.'
      },
      {
        id: 's4',
        title: 'تسبيح النوم',
        text: 'سُبْحَانَ اللَّهِ (33) ، الْحَمْدُ لِلَّهِ (33) ، اللَّهُ أَكْبَرُ (34)',
        count: 1,
        maxCount: 1,
        benefit: 'وصية النبي ﷺ لعلي وفاطمة رضي الله عنهما وهي خير من خادم.'
      },
      {
        id: 's5',
        title: 'الدعاء عند الاضطجاع',
        text: 'اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ.',
        count: 1,
        maxCount: 1,
        benefit: 'من مات على هذا الذكر مات على الفطرة. (متفق عليه)'
      }
    ],
    prayer: [
      {
        id: 'p1',
        title: 'الاستغفار بعد الصلاة',
        text: 'أَسْتَغْفِرُ اللَّهَ (ثلاثاً). اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ.',
        count: 1,
        maxCount: 1,
        benefit: 'تقال مباشرة دبر كل صلاة مكتوبة. (رواه مسلم)'
      },
      {
        id: 'p2',
        title: 'التسبيح والتحميد والتكبير',
        text: 'سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33)، ثم تمام المئة: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
        count: 1,
        maxCount: 1,
        benefit: 'غُفرت خطاياه وإن كانت مثل زبد البحر. (رواه مسلم)'
      },
      {
        id: 'p3',
        title: 'آية الكرسي دبر الصلاة',
        text: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۚ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ.',
        count: 1,
        maxCount: 1,
        benefit: 'من قرأها دبر كل صلاة مكتوبة لم يكن بينه وبين الجنة إلا الموت.'
      },
      {
        id: 'p4',
        title: 'المعوذتان والإخلاص',
        text: 'قُلْ هُوَ اللَّهُ أَحَدٌ — قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ — قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        count: 3,
        maxCount: 3,
        benefit: 'يُقرأن بعد كل صلاة، وبعد صلاتي الفجر والمغرب ثلاثاً.'
      }
    ]
  }

  const [adhkar, setAdhkar] = useState(initialAdhkarData)
  const [successVisible, setSuccessVisible] = useState(false)

  const currentCategoryAdhkar = adhkar[selectedCategory] || []

  // Reset category count on demand
  const handleResetCategory = () => {
    setAdhkar(prev => ({
      ...prev,
      [selectedCategory]: initialAdhkarData[selectedCategory]
    }))
    setSuccessVisible(false)
  }

  // Calculate Progress
  const totalCount = currentCategoryAdhkar.reduce((acc, item) => acc + item.maxCount, 0)
  const remainingCount = currentCategoryAdhkar.reduce((acc, item) => acc + item.count, 0)
  const completedCount = totalCount - remainingCount
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  // Trigger sound effect
  const playTickSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()
      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.frequency.setValueAtTime(950, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.15)
      osc.start(audioCtx.currentTime)
      osc.stop(audioCtx.currentTime + 0.15)
    } catch (e) {
      console.warn('Audio Context failed', e)
    }
  }

  // Handle click on Zekr card
  const handleCardClick = (id) => {
    setAdhkar(prev => {
      const updatedList = prev[selectedCategory].map(item => {
        if (item.id === id && item.count > 0) {
          playTickSound()
          if ('vibrate' in navigator) navigator.vibrate(30)
          return { ...item, count: item.count - 1 }
        }
        return item
      })

      // Check if all are done
      const allDone = updatedList.every(item => item.count === 0)
      if (allDone) {
        setSuccessVisible(true)
        if ('vibrate' in navigator) navigator.vibrate([80, 80, 80])
      }

      return { ...prev, [selectedCategory]: updatedList }
    })
  }

  return (
    <div className="animate-fade-in">
      
      {/* Progress Bar under Header */}
      <div className="w-full h-1 overflow-hidden" style={{ backgroundColor: 'var(--surface-container-high)' }}>
        <div 
          className="h-full progress-bar-glow transition-all duration-300"
          style={{ 
            width: `${progressPercentage}%`,
            backgroundColor: 'var(--primary)',
            boxShadow: '0 0 12px var(--surface-tint)'
          }}
        ></div>
      </div>

      <main className="max-w-2xl mx-auto px-container-padding pb-48 pt-6">
        
        {/* Category Tab Selector */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 mb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className="px-6 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-all border-none cursor-pointer"
                style={{
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--surface-container-high)',
                  color: isActive ? 'var(--on-primary)' : 'var(--on-surface-variant)'
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Adhkar Cards */}
        <div className="space-y-6">
          {currentCategoryAdhkar.map((item) => {
            const isDone = item.count === 0

            return (
              <div 
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="zekr-card"
                style={{
                  opacity: isDone ? 0.7 : 1,
                  backgroundColor: 'var(--surface-container-lowest)',
                  border: '1px solid var(--outline-variant)',
                  borderColor: 'rgba(196, 201, 207, 0.15)'
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-label-sm font-label-sm" 
                    style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}
                  >
                    {item.title}
                  </span>
                  <button 
                    className="transition-colors border-none bg-transparent cursor-pointer"
                    style={{ color: 'var(--on-surface-variant)' }}
                    onClick={(e) => {
                      e.stopPropagation()
                      if (navigator.share) {
                        navigator.share({ text: item.text })
                      } else {
                        alert('تم نسخ الذكر')
                        navigator.clipboard.writeText(item.text)
                      }
                    }}
                  >
                    <span className="material-symbols-outlined text-xl">share</span>
                  </button>
                </div>

                <p className="font-body-ar text-center leading-loose mb-6" style={{ fontSize: '24px', color: 'var(--on-surface)' }}>
                  {item.text}
                </p>

                <div className="flex items-center justify-between gap-4 border-t pt-6" style={{ borderColor: 'var(--outline-variant)', opacity: 0.8 }}>
                  <p className="text-sm flex-1 leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
                    💡 {item.benefit}
                  </p>

                  {/* Circular Counter button */}
                  <button 
                    className="counter-btn-spring relative flex flex-col items-center justify-center w-20 h-20 rounded-full"
                    style={{
                      backgroundColor: isDone ? 'var(--secondary-container)' : 'var(--primary)',
                      color: isDone ? 'var(--on-secondary-container)' : 'var(--on-primary)',
                      transform: isDone ? 'scale(1.1)' : 'scale(1)',
                      border: 'none',
                      cursor: isDone ? 'default' : 'pointer',
                      boxShadow: '0 4px 12px rgba(26, 54, 93, 0.15)'
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(item.id)
                    }}
                  >
                    <span className="text-[10px] font-label-sm opacity-80 mb-0.5">العدد</span>
                    <span className="text-lg font-bold leading-none">
                      {isDone ? 'تم' : `${item.count}/${item.maxCount}`}
                    </span>
                    <div className="absolute inset-0 rounded-full border-2 border-white/25"></div>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </main>

      {/* Success Overlay */}
      {successVisible && (
        <div 
          onClick={handleResetCategory}
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity"
          style={{ backgroundColor: 'var(--background)', opacity: 0.98, backdropFilter: 'blur(8px)' }}
        >
          <div 
            className="px-10 py-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 text-center border"
            style={{ 
              backgroundColor: 'var(--surface-container-lowest)',
              borderColor: 'var(--outline-variant)' 
            }}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center" 
              style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)' }}
            >
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <p className="font-headline-md" style={{ color: 'var(--primary)' }}>أحسنت!</p>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>تقبل الله منك صالح الأعمال. اضغط هنا لإعادة البدء.</p>
          </div>
        </div>
      )}

    </div>
  )
}
