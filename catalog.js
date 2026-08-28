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
 {id:'ac',g:'❄',c:'climate',price:349,was:449,flag:'pop',featured:true,demo:'plug',
  en:['AC controller',
      'Learns any split-unit remote. Reads room temperature and humidity itself.',
      'Learns any split-unit remote. Reads room temperature and humidity itself, so it stops cooling an empty room.'],
  ar:['متحكّم المكيّف',
      'يتعلّم ريموت أي مكيّف سبليت ويقرأ حرارة ورطوبة الغرفة بنفسه.',
      'يتعلّم ريموت أي مكيّف سبليت، ويقرأ حرارة ورطوبة الغرفة بنفسه، فيوقف التبريد للغرفة الفاضية.'],
  opts:[{en:'Mounting',ar:'التركيب',items:[{en:'Stick-on',ar:'لاصق'},{en:'Wall bracket',ar:'حامل جداري'}]}],
  spec:[['compat','Any IR split unit'],['sensor','Temp ±0.3°C, humidity'],['power','USB-C, 1m cable'],['net','Wi-Fi 2.4GHz'],['range','8 m line of sight'],['size','62 × 62 × 18 mm']]},

 {id:'thermo',g:'◉',c:'climate',price:429,
  en:['Zone thermostat',
      'Wired replacement for central AC. One per floor, so upstairs stops cooling an empty room.',
      'Wired replacement for a central AC thermostat. One per floor, so upstairs stops running for an empty room.'],
  ar:['ثرموستات المناطق',
      'بديل سلكي للتكييف المركزي. واحد لكل دور، عشان الدور العلوي ما يبرّد غرفة فاضية.',
      'بديل سلكي لثرموستات التكييف المركزي. واحد لكل دور، عشان الدور العلوي ما يشتغل لغرفة فاضية.'],
  opts:[],
  spec:[['wiring','24V, 4–6 wire'],['display','2.4" touch'],['sensor','Temp + occupancy'],['net','Wi-Fi 2.4GHz'],['fits','86mm back box'],['install','Technician required']]},

 {id:'temp',g:'△',c:'climate',price:59,
  en:['Room temperature sensor',
      'Lets the AC read the room you sleep in, not the hallway.',
      'Lets the AC read the room you sleep in, not the hallway where the thermostat happens to be.'],
  ar:['حساس حرارة الغرفة',
      'يخلي المكيف يقرأ الغرفة اللي تنام فيها، مو الممر.',
      'يخلي المكيف يقرأ الغرفة اللي تنام فيها، مو الممر اللي صادف فيه الثرموستات.'],
  opts:[{en:'Pack',ar:'العبوة',items:[{en:'Single',ar:'حبة'},{en:'Pack of 3',ar:'٣ حبات',extra:'159 SAR',price:159}]}],
  spec:[['accuracy','±0.3°C'],['battery','CR2450, ~18 months'],['net','Bluetooth to hub'],['size','40 × 40 × 11 mm']]},

 {id:'lock',g:'⌘',c:'security',price:500,was:650,flag:'pop',featured:true,demo:'lock',
  en:['Smart door lock',
      'Fingerprint, code, phone or the original key. Fits most villa doors.',
      'Fingerprint, code, phone or the original key. Fits most Saudi villa doors without changing the door itself.'],
  ar:['قفل الباب الذكي',
      'بصمة أو رمز أو جوال أو المفتاح الأصلي. يناسب أغلب أبواب الفلل.',
      'بصمة أو رمز أو جوال أو المفتاح الأصلي. يركّب على أغلب أبواب الفلل بدون تغيير الباب.'],
  opts:[{en:'Placement',ar:'مكان التركيب',items:[{en:'Internal room door',ar:'باب غرفة داخلي',price:500},{en:'External door · heat and dust resistant',ar:'باب خارجي · مقاوم للحرارة والغبار',price:800,extra:'800 SAR'}]},
        {en:'Finish',ar:'اللون',items:[{en:'Matte black',ar:'أسود مطفي'},{en:'Brushed silver',ar:'فضي مصنفر'},{en:'Bronze',ar:'برونزي'}]}],
  spec:[['unlock','Fingerprint · code · app · key'],['prints','100'],['codes','20 permanent + temporary'],['battery','4× AA, ~10 months'],['backup','USB-C power bank'],['door','38 – 65 mm thick'],['net','Wi-Fi + Bluetooth'],['body','Zinc alloy, IP54']],
  faq:{en:[['What if the battery dies while I am out?','It warns you in the app for weeks first. If it still runs flat, hold a power bank to the USB-C port under the handle and it opens immediately. The metal key also still works.'],
           ['Does it survive the summer heat?','The outdoor panel is rated to 60°C. A door in direct west-facing sun can exceed that surface temperature, so we only recommend it on shaded or recessed doors.'],
           ['Can the housekeeper get in without my phone?','Yes. Give her a code that only works Sunday to Thursday, 8am to 4pm. It stops working on its own when you end it.']],
       ar:[['وش يصير لو خلصت البطارية وأنا برا؟','ينبّهك بالتطبيق قبلها بأسابيع. ولو خلصت، قرّب باور بانك من منفذ USB-C تحت المقبض وينفتح على طول. والمفتاح المعدني برضه يشتغل.'],
           ['يتحمّل حر الصيف؟','اللوحة الخارجية معتمدة حتى ٦٠ درجة. الباب اللي عليه شمس غربية مباشرة ممكن يتجاوزها، لذلك ننصح فيه للأبواب المظللة فقط.'],
           ['تقدر العاملة تدخل بدون جوالي؟','نعم. تعطيها رمز يشتغل من الأحد للخميس، ٨ص – ٤م، ويوقف بنفسه لما تنهيه.']]}},

 {id:'gate',g:'⊟',c:'security',price:449,featured:true,
  en:['Gate controller',
      'Wires into the existing gate motor. Open from the car, or automatically on arrival.',
      'Wires into the existing gate motor. Open from the car, or automatically when your phone reaches the street.'],
  ar:['متحكّم البوابة',
      'يتوصّل مع محرك البوابة الحالي. افتح من السيارة أو تلقائياً عند الوصول.',
      'يتوصّل مع محرك البوابة الحالي. افتح من السيارة، أو تلقائياً لما جوالك يوصل الشارع.'],
  opts:[],
  spec:[['compat','Most 220V gate motors'],['relay','Dry contact, 2 channel'],['trigger','App · auto-arrival · code'],['net','Wi-Fi 2.4GHz'],['install','Technician required']]},

 {id:'intercom',g:'▣',c:'security',price:699,flag:'low',
  en:['Video intercom',
      'See and talk to whoever is at the gate, from anywhere. Keeps the same wiring.',
      'See and talk to whoever is at the gate from anywhere. Replaces the handset unit, keeps the same wiring.'],
  ar:['إنتركم بالفيديو',
      'شوف وكلّم اللي عند البوابة من أي مكان. ويستخدم نفس التمديدات.',
      'شوف وكلّم اللي عند البوابة من أي مكان. يستبدل السماعة القديمة ويستخدم نفس التمديدات.'],
  opts:[{en:'Screen',ar:'الشاشة',items:[{en:'Audio only',ar:'صوت فقط',price:449,extra:'449 SAR'},{en:'With 7" screen',ar:'مع شاشة ٧ إنش'}]}],
  spec:[['camera','1080p, 140° lens'],['night','IR to 5 m'],['storage','Local SD or cloud'],['power','Existing 2-wire'],['net','Wi-Fi 2.4GHz']]},

 {id:'switch',g:'◫',c:'lighting',price:189,featured:true,
  en:['Wall switch, 3 gang',
      'Replaces the plate, not the wiring. Still works by hand if the internet drops.',
      'Replaces the existing plate, not the wiring. Still works by hand if the internet drops.'],
  ar:['مفتاح جداري ٣ أزرار',
      'يستبدل الغطاء، مو التمديدات. ويشتغل باليد لو انقطع النت.',
      'يستبدل الغطاء الحالي، مو التمديدات. ويشتغل باليد عادي لو انقطع النت.'],
  opts:[{en:'Gangs',ar:'عدد الأزرار',items:[{en:'1 gang',ar:'زر واحد',price:129,extra:'129 SAR'},{en:'2 gang',ar:'زرّين',price:159,extra:'159 SAR'},{en:'3 gang',ar:'٣ أزرار'}]}],
  spec:[['fits','86mm back box'],['neutral','Required'],['load','10A per gang'],['manual','Yes, always works'],['net','Wi-Fi 2.4GHz']]},

 {id:'dimmer',g:'◐',c:'lighting',price:229,
  en:['Dimmer switch',
      'For the majlis. Warm and full at Maghrib, low after Isha, untouched.',
      'For the majlis. Warm and full at Maghrib, low after Isha, without anyone touching it.'],
  ar:['مفتاح تعتيم',
      'للمجلس. دافي وكامل عند المغرب، وخافت بعد العشاء، بدون ما أحد يلمسه.',
      'للمجلس. دافي وكامل عند المغرب، وخافت بعد العشاء، بدون ما أحد يلمسه.'],
  opts:[],
  spec:[['fits','86mm back box'],['load','300W dimmable LED'],['neutral','Required'],['range','1 – 100%'],['net','Wi-Fi 2.4GHz']]},

 {id:'plug',g:'◈',c:'power',price:89,was:129,flag:'pop',featured:true,demo:'plug',
  en:['Smart plug 16A',
      'Switches from your phone and counts every watt. Handles a freezer or window AC.',
      'A Type-G plug that switches from your phone and counts every watt behind it. Handles a freezer or a window AC, not just a lamp.'],
  ar:['فيشة ذكية ١٦ أمبير',
      'تتحكم فيها من جوالك وتحسب كل واط. تتحمّل فريزر أو مكيف شباك.',
      'فيشة بريطانية تتحكم فيها من جوالك وتحسب كل واط خلفها. تتحمّل فريزر أو مكيف شباك، مو بس لمبة.'],
  opts:[{en:'Pack',ar:'العبوة',items:[{en:'Single',ar:'حبة'},{en:'Pack of 4',ar:'٤ حبات',price:299,extra:'299 SAR'},{en:'Pack of 8',ar:'٨ حبات',price:549,extra:'549 SAR'}]}],
  spec:[['rating','16A / 3680W, Type G'],['metering','Yes, ±1%'],['schedule','On/off, countdown, sunset'],['offline','Schedules keep running'],['cutoff','Automatic at 16A'],['size','54 × 54 × 72 mm'],['cert','SASO marked']],
  faq:{en:[['Can I run a water heater on it?','Only if the heater is under 3680W and plugs in rather than being wired into the wall. Most Saudi wall-mounted heaters are hardwired — those need an electrician and a different device.'],
           ['What happens to my schedules if the internet drops?','They keep running. The plug stores them on the device; you only lose remote control until the connection comes back.'],
           ['Will it actually save me money?','It shows consumption honestly, which is not the same thing. Most people save by finding one appliance they did not know was running, not from the plug itself.']],
       ar:[['أقدر أشغّل عليها سخّان؟','فقط لو السخان أقل من ٣٦٨٠ واط وله فيشة، مو موصّل مباشرة بالجدار. أغلب السخانات الجدارية في السعودية موصّلة مباشرة وتحتاج كهربائي وجهاز ثاني.'],
           ['وش يصير للجدولة لو انقطع النت؟','تستمر تشتغل. الفيشة تحفظها داخلياً، وتفقد بس التحكم عن بعد لين يرجع الاتصال.'],
           ['فعلاً بتوفّر علي؟','هي تعرض الاستهلاك بصدق، وهذا شي ثاني عن التوفير. أغلب الناس يوفّرون لأنهم يكتشفون جهاز شغّال وهم ما يدرون.']]}},

 {id:'leak',g:'◌',c:'power',price:79,featured:true,
  en:['Water leak sensor',
      'Sits flat under the sink or behind the washing machine. Alerts on the first drop.',
      'Sits flat under the sink or behind the washing machine. Two-year battery, messages you on the first drop.'],
  ar:['حساس تسريب المياه',
      'يوضع تحت المغسلة أو خلف الغسالة. ينبّهك من أول قطرة.',
      'يوضع تحت المغسلة أو خلف الغسالة. بطارية سنتين، ويرسل لك من أول قطرة.'],
  opts:[{en:'Pack',ar:'العبوة',items:[{en:'Single',ar:'حبة'},{en:'Pack of 3',ar:'٣ حبات',price:199,extra:'199 SAR'}]}],
  spec:[['battery','CR2032, ~2 years'],['alarm','75dB local + app'],['height','13 mm'],['net','Bluetooth to hub']]},

 {id:'hub',g:'⬡',c:'power',price:299,
  en:['Hub',
      'One per home. Keeps every routine running locally when the connection drops.',
      'One per home. Keeps every routine running locally when the connection drops, and it is what everything else talks to.'],
  ar:['الوحدة المركزية',
      'وحدة واحدة للبيت. تخلي كل الروتينات تشتغل محلياً لو انقطع الاتصال.',
      'وحدة واحدة للبيت. تخلي كل الروتينات تشتغل محلياً لو انقطع الاتصال، وهي اللي تتكلم معها بقية الأجهزة.'],
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
