/* -----------------------------------------------------------------
   The product catalogue: one copy, used by every page.

   It used to exist three times over - a six-product version on the
   home page, an eleven-product version on the listing page, and a
   third on the product pages - and the three had already drifted
   apart in wording and in how much detail each spec list carried.
   Changing a price meant remembering all three.

   Two things to know about the shape of an entry:

   en and ar hold three strings each: the name, a short line for the
   cards, and a longer line for the product page itself. The pages
   were already using three different lengths of text; keeping all
   three here means they can differ on purpose rather than by
   accident.

   opts is a LIST of choice groups, even when there is only one, so a
   product can offer more than one decision - a finish and a
   placement, say - without the page needing to change again.
   ----------------------------------------------------------------- */

const CATALOG=[
 {id:'ac',g:'❄',c:'climate',img:'images/ac.svg',price:349,was:449,flag:'pop',featured:true,demo:'plug',
  en:['AC controller',
      'Learns any split-unit remote. Reads room temperature and humidity itself.',
      'Learns any split-unit remote. Reads room temperature and humidity itself, so it stops cooling an empty room.'],
  ar:['متحكّم المكيّف',
      'يتعلّم إشارات جهاز التحكم لأي مكيّف سبليت، ويقيس حرارة الغرفة ورطوبتها بنفسه.',
      'يتعلّم إشارات جهاز التحكم لأي مكيّف سبليت، ويقيس حرارة الغرفة ورطوبتها بنفسه، فيوقف التبريد عن الغرف الشاغرة.'],
  opts:[{en:'Mounting',ar:'التركيب',items:[{en:'Stick-on',ar:'لاصق'},{en:'Wall bracket',ar:'حامل جداري'}]}],
  spec:[['compat','Any IR split unit'],['sensor','Temp ±0.3°C, humidity'],['power','USB-C, 1m cable'],['net','Wi-Fi 2.4GHz'],['range','8 m line of sight'],['size','62 × 62 × 18 mm']]},

 {id:'thermo',g:'◉',c:'climate',img:'images/thermo.svg',price:429,
  en:['Zone thermostat',
      'Wired replacement for central AC. One per floor, so upstairs stops cooling an empty room.',
      'Wired replacement for a central AC thermostat. One per floor, so upstairs stops running for an empty room.'],
  ar:['مقياس حرارة المناطق',
      'بديل سلكي لمنظّم التكييف المركزي. وحدة لكل دور، حتى لا يبرّد الدور العلوي غرفة شاغرة.',
      'بديل سلكي لمنظّم حرارة التكييف المركزي. وحدة لكل دور، حتى لا يعمل الدور العلوي من أجل غرفة شاغرة.'],
  opts:[],
  spec:[['wiring','24V, 4–6 wire'],['display','2.4" touch'],['sensor','Temp + occupancy'],['net','Wi-Fi 2.4GHz'],['fits','86mm back box'],['install','Technician required']]},

 {id:'temp',g:'△',c:'climate',img:'images/temp.svg',price:59,
  en:['Room temperature sensor',
      'Lets the AC read the room you sleep in, not the hallway.',
      'Lets the AC read the room you sleep in, not the hallway where the thermostat happens to be.'],
  ar:['حساس حرارة الغرفة',
      'يجعل المكيّف يقيس حرارة الغرفة التي تنام فيها، لا حرارة الممر.',
      'يجعل المكيّف يقيس حرارة الغرفة التي تنام فيها، لا حرارة الممر الذي رُكّب فيه المنظّم.'],
  opts:[{en:'Pack',ar:'العبوة',items:[{en:'Single',ar:'حبة'},{en:'Pack of 3',ar:'٣ حبات',extra:'159 SAR',price:159}]}],
  spec:[['accuracy','±0.3°C'],['battery','CR2450, ~18 months'],['net','Bluetooth to hub'],['size','40 × 40 × 11 mm']]},

 {id:'lock',g:'⌘',c:'security',img:'images/lock.svg',price:500,was:650,flag:'pop',featured:true,demo:'lock',
  en:['Smart door lock',
      'Fingerprint, code, phone or the original key. Fits most villa doors.',
      'Fingerprint, code, phone or the original key. Fits most Saudi villa doors without changing the door itself.'],
  ar:['قفل الباب الذكي',
      'بالبصمة أو الرمز أو الجوال أو المفتاح الأصلي. يناسب أغلب أبواب الفلل.',
      'بالبصمة أو الرمز أو الجوال أو المفتاح الأصلي. يُركّب على أغلب أبواب الفلل دون تغيير الباب.'],
  opts:[{en:'Placement',ar:'مكان التركيب',items:[{en:'Internal room door',ar:'باب غرفة داخلي',price:500},{en:'External door · heat and dust resistant',ar:'باب خارجي · مقاوم للحرارة والغبار',price:800,extra:'800 SAR'}]},
        {en:'Finish',ar:'اللون',items:[{en:'Matte black',ar:'أسود مطفي'},{en:'Brushed silver',ar:'فضي مصنفر'},{en:'Bronze',ar:'برونزي'}]}],
  spec:[['unlock','Fingerprint · code · app · key'],['prints','100'],['codes','20 permanent + temporary'],['battery','4× AA, ~10 months'],['backup','USB-C power bank'],['door','38 – 65 mm thick'],['net','Wi-Fi + Bluetooth'],['body','Zinc alloy, IP54']],
  faq:{en:[['What if the battery dies while I am out?','It warns you in the app for weeks first. If it still runs flat, hold a power bank to the USB-C port under the handle and it opens immediately. The metal key also still works.'],
           ['Does it survive the summer heat?','The outdoor panel is rated to 60°C. A door in direct west-facing sun can exceed that surface temperature, so we only recommend it on shaded or recessed doors.'],
           ['Can the housekeeper get in without my phone?','Yes. Give her a code that only works Sunday to Thursday, 8am to 4pm. It stops working on its own when you end it.']],
       ar:[['ماذا يحدث إذا نفدت البطارية وأنا خارج المنزل؟','ينبّهك التطبيق قبل ذلك بأسابيع. وإن نفدت، قرّب بطارية متنقلة من منفذ USB-C أسفل المقبض فيفتح فوراً. والمفتاح المعدني يعمل أيضاً.'],
           ['هل يتحمّل حرارة الصيف؟','اللوحة الخارجية معتمدة حتى ٦٠ درجة مئوية. وقد يتجاوز الباب المعرّض لأشعة الشمس الغربية هذه الدرجة، لذا نوصي به للأبواب المظللة فقط.'],
           ['هل يمكن للعاملة الدخول دون جوالي؟','نعم. تمنحها رمزاً يعمل من الأحد إلى الخميس، من الثامنة صباحاً إلى الرابعة عصراً، وينتهي تلقائياً عند إلغائه.']]}},

 {id:'gate',g:'⊟',c:'security',img:'images/gate.svg',price:449,featured:true,
  en:['Gate controller',
      'Wires into the existing gate motor. Open from the car, or automatically on arrival.',
      'Wires into the existing gate motor. Open from the car, or automatically when your phone reaches the street.'],
  ar:['متحكّم البوابة',
      'يتّصل بمحرّك البوابة الحالي. افتحها من السيارة أو تلقائياً عند الوصول.',
      'يتّصل بمحرّك البوابة الحالي. افتحها من السيارة، أو تلقائياً عند اقتراب جوالك من الشارع.'],
  opts:[],
  spec:[['compat','Most 220V gate motors'],['relay','Dry contact, 2 channel'],['trigger','App · auto-arrival · code'],['net','Wi-Fi 2.4GHz'],['install','Technician required']]},

 {id:'intercom',g:'▣',c:'security',img:'images/intercom.svg',price:699,flag:'low',
  en:['Video intercom',
      'See and talk to whoever is at the gate, from anywhere. Keeps the same wiring.',
      'See and talk to whoever is at the gate from anywhere. Replaces the handset unit, keeps the same wiring.'],
  ar:['إنتركم بالفيديو',
      'شاهد من يقف عند البوابة وتحدّث إليه من أي مكان، ويستخدم التمديدات نفسها.',
      'شاهد من يقف عند البوابة وتحدّث إليه من أي مكان. يستبدل السمّاعة القديمة ويستخدم التمديدات نفسها.'],
  opts:[{en:'Screen',ar:'الشاشة',items:[{en:'Audio only',ar:'صوت فقط',price:449,extra:'449 SAR'},{en:'With 7" screen',ar:'مع شاشة ٧ إنش'}]}],
  spec:[['camera','1080p, 140° lens'],['night','IR to 5 m'],['storage','Local SD or cloud'],['power','Existing 2-wire'],['net','Wi-Fi 2.4GHz']]},

 {id:'switch',g:'◫',c:'lighting',img:'images/switch.svg',price:189,featured:true,
  en:['Wall switch, 3 gang',
      'Replaces the plate, not the wiring. Still works by hand if the internet drops.',
      'Replaces the existing plate, not the wiring. Still works by hand if the internet drops.'],
  ar:['مفتاح جداري بثلاثة أزرار',
      'يستبدل الغطاء لا التمديدات، ويعمل يدوياً عند انقطاع الإنترنت.',
      'يستبدل الغطاء الحالي لا التمديدات، ويعمل يدوياً كالمعتاد عند انقطاع الإنترنت.'],
  opts:[{en:'Gangs',ar:'عدد الأزرار',items:[{en:'1 gang',ar:'زر واحد',price:129,extra:'129 SAR'},{en:'2 gang',ar:'زرّين',price:159,extra:'159 SAR'},{en:'3 gang',ar:'٣ أزرار'}]}],
  spec:[['fits','86mm back box'],['neutral','Required'],['load','10A per gang'],['manual','Yes, always works'],['net','Wi-Fi 2.4GHz']]},

 {id:'dimmer',g:'◐',c:'lighting',img:'images/dimmer.svg',price:229,
  en:['Dimmer switch',
      'For the majlis. Warm and full at Maghrib, low after Isha, untouched.',
      'For the majlis. Warm and full at Maghrib, low after Isha, without anyone touching it.'],
  ar:['مفتاح تعتيم',
      'للمجلس. إضاءة كاملة دافئة عند المغرب، وخافتة بعد العشاء، دون أن يلمسه أحد.',
      'للمجلس. إضاءة كاملة دافئة عند المغرب، وخافتة بعد العشاء، دون أن يلمسه أحد.'],
  opts:[],
  spec:[['fits','86mm back box'],['load','300W dimmable LED'],['neutral','Required'],['range','1 – 100%'],['net','Wi-Fi 2.4GHz']]},

 {id:'plug',g:'◈',c:'power',img:'images/plug.svg',price:89,was:129,flag:'pop',featured:true,demo:'plug',
  en:['Smart plug 16A',
      'Switches from your phone and counts every watt. Handles a freezer or window AC.',
      'A Type-G plug that switches from your phone and counts every watt behind it. Handles a freezer or a window AC, not just a lamp.'],
  ar:['أقباس ذكية ١٦ أمبير',
      'تتحكّم بها من جوالك وتحسب كل واط يمرّ خلالها. تتحمّل فريزر أو مكيّف شبّاك.',
      'أقباس بريطانية تتحكّم بها من جوالك وتحسب كل واط يمرّ خلالها. تتحمّل فريزر أو مكيّف شبّاك، لا مصباحاً فقط.'],
  opts:[{en:'Pack',ar:'العبوة',items:[{en:'Single',ar:'حبة'},{en:'Pack of 4',ar:'٤ حبات',price:299,extra:'299 SAR'},{en:'Pack of 8',ar:'٨ حبات',price:549,extra:'549 SAR'}]}],
  spec:[['rating','16A / 3680W, Type G'],['metering','Yes, ±1%'],['schedule','On/off, countdown, sunset'],['offline','Schedules keep running'],['cutoff','Automatic at 16A'],['size','54 × 54 × 72 mm'],['cert','SASO marked']],
  faq:{en:[['Can I run a water heater on it?','Only if the heater is under 3680W and plugs in rather than being wired into the wall. Most Saudi wall-mounted heaters are hardwired — those need an electrician and a different device.'],
           ['What happens to my schedules if the internet drops?','They keep running. The plug stores them on the device; you only lose remote control until the connection comes back.'],
           ['Will it actually save me money?','It shows consumption honestly, which is not the same thing. Most people save by finding one appliance they did not know was running, not from the plug itself.']],
       ar:[['هل يمكنني تشغيل سخّان عليها؟','فقط إذا كان السخّان أقل من ٣٦٨٠ واط وله قابس، وليس موصولاً بالجدار مباشرة. وأغلب السخانات الجدارية في السعودية موصولة مباشرة وتحتاج إلى كهربائي وجهاز آخر.'],
           ['ماذا يحدث للجدولة عند انقطاع الإنترنت؟','تستمر في العمل. إذ تحفظها الأقباس داخلياً، ويتوقف التحكم عن بُعد فقط حتى يعود الاتصال.'],
           ['هل توفّر عليّ فعلاً؟','إنها تعرض الاستهلاك بصدق، وهذا أمر مختلف عن التوفير. ويوفّر أغلب الناس لأنهم يكتشفون جهازاً يعمل دون علمهم.']]}},

 {id:'leak',g:'◌',c:'power',img:'images/leak.svg',price:79,featured:true,
  en:['Water leak sensor',
      'Sits flat under the sink or behind the washing machine. Alerts on the first drop.',
      'Sits flat under the sink or behind the washing machine. Two-year battery, messages you on the first drop.'],
  ar:['حساس تسرّب المياه',
      'يوضع تحت المغسلة أو خلف الغسالة. ينبّهك من أول قطرة.',
      'يوضع تحت المغسلة أو خلف الغسالة. بطاريته تدوم سنتين، ويرسل لك تنبيهاً من أول قطرة.'],
  opts:[{en:'Pack',ar:'العبوة',items:[{en:'Single',ar:'حبة'},{en:'Pack of 3',ar:'٣ حبات',price:199,extra:'199 SAR'}]}],
  spec:[['battery','CR2032, ~2 years'],['alarm','75dB local + app'],['height','13 mm'],['net','Bluetooth to hub']]},

 {id:'hub',g:'⬡',c:'power',img:'images/hub.svg',price:299,
  en:['Hub',
      'One per home. Keeps every routine running locally when the connection drops.',
      'One per home. Keeps every routine running locally when the connection drops, and it is what everything else talks to.'],
  ar:['الوحدة المركزية',
      'وحدة واحدة للمنزل، تجعل جميع الإجراءات تعمل محلياً عند انقطاع الاتصال.',
      'وحدة واحدة للمنزل، تجعل جميع الإجراءات تعمل محلياً عند انقطاع الاتصال، وإليها تتّصل بقية الأجهزة.'],
  opts:[],
  spec:[['devices','Up to 64'],['radios','Wi-Fi, Bluetooth, Zigbee'],['local','Routines run without internet'],['power','USB-C, 5V'],['size','96 × 96 × 24 mm']]}
];


/* Which file each product's page lives in. */
const SLUG={ac:'smart-ac-controller.html',thermo:'zone-thermostat.html',temp:'room-temperature-sensor.html',lock:'smart-door-lock.html',gate:'gate-controller.html',intercom:'video-intercom.html',switch:'smart-wall-switch.html',dimmer:'dimmer-switch.html',plug:'smart-plug-16a.html',leak:'water-leak-sensor.html',hub:'smart-home-hub.html'};

const CATNAME={climate:{en:'COOLING',ar:'التكييف'},security:{en:'DOORS & GATE',ar:'الأبواب والبوابة'},lighting:{en:'LIGHTING',ar:'الإضاءة'},power:{en:'POWER & SAFETY',ar:'الطاقة والسلامة'}};

/* Labels for the spec rows. A few carry shortEn / shortAr as well:
   the listing cards are narrow, so they were already using clipped
   wording there. Keeping both means the two pages can stay as they
   look today instead of one of them changing. */
const SPECLAB={compat:{en:'Works with',ar:'يتوافق مع'},
 sensor:{en:'Sensor',ar:'الحساس'},
 power:{en:'Power',ar:'الطاقة'},
 net:{en:'Connectivity',ar:'الاتصال'},
 range:{en:'Range',ar:'المدى'},
 size:{en:'Size',ar:'المقاس'},
 wiring:{en:'Wiring',ar:'التمديدات'},
 display:{en:'Display',ar:'الشاشة'},
 fits:{en:'Fits',ar:'يركّب على'},
 install:{en:'Installation',ar:'التركيب'},
 accuracy:{en:'Accuracy',ar:'الدقة'},
 battery:{en:'Battery',ar:'البطارية'},
 unlock:{en:'Unlock methods',ar:'طرق الفتح',shortEn:'Unlock'},
 prints:{en:'Fingerprints',ar:'البصمات'},
 codes:{en:'Codes',ar:'الرموز'},
 backup:{en:'Emergency power',ar:'طاقة الطوارئ'},
 door:{en:'Door thickness',ar:'سماكة الباب'},
 body:{en:'Body',ar:'الجسم'},
 relay:{en:'Relay',ar:'الريلاي'},
 trigger:{en:'Triggers',ar:'المشغّلات'},
 camera:{en:'Camera',ar:'الكاميرا'},
 night:{en:'Night vision',ar:'الرؤية الليلية'},
 storage:{en:'Storage',ar:'التخزين'},
 neutral:{en:'Neutral wire',ar:'سلك النيوترال'},
 load:{en:'Load',ar:'الحمل'},
 manual:{en:'Manual use',ar:'الاستخدام اليدوي',shortAr:'يدوياً'},
 rating:{en:'Rating',ar:'التحمّل'},
 metering:{en:'Energy metering',ar:'قياس الاستهلاك',shortEn:'Metering'},
 schedule:{en:'Scheduling',ar:'الجدولة'},
 offline:{en:'Works offline',ar:'يشتغل بدون نت',shortEn:'Offline',shortAr:'بدون نت'},
 cutoff:{en:'Overload cut-off',ar:'قطع الحمل الزائد'},
 cert:{en:'Certification',ar:'الشهادة'},
 alarm:{en:'Alarm',ar:'التنبيه'},
 height:{en:'Height',ar:'الارتفاع'},
 devices:{en:'Devices',ar:'عدد الأجهزة'},
 radios:{en:'Radios',ar:'الاتصالات'},
 local:{en:'Local control',ar:'التحكم المحلي'}};
