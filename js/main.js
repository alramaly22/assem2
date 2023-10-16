/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      const themeButton = document.getElementById('theme-button');
      const logoImage = document.getElementById('logo');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
/*=============== DARK LIGHT THEME ===============*/
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const video = document.getElementById("myVideo");

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});






/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 

// let lang = {
//     ar: {
//         subscribe : "لا تنسي الاستراك"
//     }, 
//     en:{
//         subscribe :"dont' forget to subscribe "
//     }
// }
// let selector = document.getElementById('language-selector') ;
// selector.onchange - UpdateLanguage();

// function UpdateLanguage (){
//     let language = selector.options[selector.selectedIndex].value;
//     let nodes = document.querySelectorAll('[data-lang]');
//     let i = nodes.length
//     while(i--){
//         let key = nodes[i].getAttribute('data-lang');
//         nodes[i].innerHTML = lang[language][key]; // lang['ar']['subscribe']
//     }
// }
let lang = {
    ar: {
        subscribe: "اكتشف إمكانياتك الكاملة-",
        subscrib: "انضم إلى ثورتنا في مجال اللياقة",
        subscri: "استعد لتحويل حياتك مع كابتن عاصم التميمي، الخبير المعتمد في مجال اللياقة والتغذية. سنساعدك في بناء عادات صحية قوية وتحقيق أهدافك الصحية",
        subscr: "انضم الآن",
        home2h3: "اطلق العنان للرياضي الداخلي فيك-",
        home2h1: "انضم إلينا لتحقيق صحة أفضل",
        home2p: "ابدأ رحلة نحو حياة أكثر صحة مع كابتن عاصم التميمي. بفضل خبرته التي تزيد عن 9 سنوات، سيكون هنا ليوجهك نحو أسلوب حياة أكثر نشاطًا ولياقة",
        questionh2:"لماذا تختار الكابتن عاصم التميمي؟",
        q1:"ما هي أهمية اللياقة البدنية في حياتنا؟",
        q2:" كيف يمكنني بناء عادات صحية دائمة؟",
        q3:"هل يمكنني الحصول على خطة تدريب مخصصة لأهدافي الشخصية؟",
        q4:"كيف يمكنني تحسين نظامي الغذائي؟",
        q5:"            كيف يعمل نظام الغذاء الخاص بك وما هو التفصيل البسيط له؟        ",
        q6:"مين اللي بيتابع معايا؟",
        q7:"            هل النظام الغذائي يتغير بانتظام؟        ",
        q8:"ما هي قصص النجاح التي حققها عملاؤك؟",
        q9:" ما هي استراتيجيات الكابتن عاصم التميمي لتحقيق أهداف اللياقة؟",
        q10:"كيف يمكنني الانضمام والبدء؟",
        a1:"اللياقة البدنية تسهم في تحسين الصحة العامة، زيادة مستوى الطاقة، وتقوية الجسم والعقل",
        a2:"من خلال التوجيه الشخصي والتحفيز المستمر، سنساعدك في تطوير عادات صحية قائمة على التمرين والتغذية السليمة",
        a3:"نعم، سنقوم بتقديم خطة تدريب مصممة خصيصًا لتحقيق أهدافك الفردية في اللياقة",
        a4:"سنقدم لك نصائح وخطط تغذية مخصصة لضمان تناولك للمواد الغذائية الصحية والمناسبة",
        a5:"            نحن نقدم نظام غذائي مخصص وسهل يناسب نمط حياتك اليومي. سنقوم بمتابعتك يوميًا لتحسين علاقتك مع الطعام. سوف تكون قادرًا على الاستمتاع بحياتك والسفر دون قلق بشأن نظامك الغذائي. سنقدم لك بدائل صحية للأكل وسنعلمك كيفية تحضير الوجبات بشكل صحي لتتمكن من تناول أطعمتك المفضلة بطريقة صحية       ",
        a6:"             التواصل و الشغل بيكون من خلالي انا مش مع اي تيم عشان ابقي متابع كل حاجه بنفسي.اي سؤال بتبقي عايز تسأله بتبعتلي علي الواتساب و برد عليك و بيبقي معاك رقمي ممكن تكلمني في اي وقت ",
        a7:"            نعم، لدينا مجموعة متنوعة من البرامج وجلسات التدريب التي تتغير بانتظام لتلبية الاحتياجات والأهداف المختلفة. النظام الغذائي يتغير بشكل دوري، سواء كل أسبوع أو كل ١٤ يومًا، لأن جسمك يتغير باستمرار، ونقوم بتعديل الدايت بناءً على تقدمك بالصور والوزن والمقاسات لضمان تحقيق النتائج المرجوة        ",
        a8:"نحن فخورون بقصص نجاح عملائنا الذين حققوا تحسينًا كبيرًا في صحتهم ولياقتهم من خلال برامجنا",
        a9:"يعتمد الكابتن عاصم التميمي على مزج التمارين البدنية المتنوعة مع تخصيص برامج تدريبية شخصية تناسب احتياجات وأهداف كل فرد. كما يوفر الدعم والتحفيز المستمر لضمان استمرارية التحسين وتطوير العادات الصحية الدائمة",
        a10:"انقر على زر 'انضم الآن' أعلى الصفحة للانضمام إلى رحلتك نحو اللياقة والصحة",
        meh2:"حولنا",
        men1:"+7 سنوات",
        meex:"خبرة",
        men2:"+5000",
        meov:"تم إعداد أكثر من برنامج",
        men3:"+5000",
        meclient:"العملاء",
        mehp:"عاصم التميمي ليس مدرب لياقة بدنية وخبير تغذية عادي. بخبرته التي تزيد عن تسع سنوات في صناعة اللياقة البدنية وحصوله على شهادات متعددة، أصبح شخصية بارزة في عالم الصحة والعافية. يقود رحلة أسام شغفه بمساعدة الأفراد على تحويل حياتهم من خلال اللياقة البدنية والتغذية. من خلال برامج مخصصة واهتمامه بتمكين عملائه، اكتسب عاصم  سمعة كمحفز ومرشد، ملهمًا الناس لعيش حياة أكثر صحة وسعادة",
        serh2:"كيف تستطيع أن تبدأ و تغير حياتك؟",
        ser1:"انضم الآن",
        ser2:"سجّل",
        ser3:"خطة النظام الغذائي والتمارين",
        ser4:"كتاب الطهي الإلكتروني",
        ser5:"تحديثات التقدم",
        ser6:"الدعم اليومي",
        serp1:"انقر 'انضم الآن' وابدأ رحلتك نحو اللياقة البدنية",
        serp2:"املأ استمارة التسجيل بمعلوماتك",
        serp3:"احصل على خطة غذائية وتمارين مخصصة تتناسب مع أهدافك",
        serp4:"احصل على كتاب إلكتروني للطهي يحتوي على وصفات صحية",
        serp5:"قم بإرسال صور تقدمك كل 14 يومًا للحصول على تحديثات في خطتك الغذائية",
        serp6:"استلم الدعم اليومي والتوجيه، مع استجابة خلال 24 ساعة",
        proh1:"ماذا يتضمن البرنامج؟",
        prop:"ستحصل على نهج شامل للصحة والعافية. نحن نعتبر تحديثات منتظمة ومتابعة وثيقة لتوجيهك بفعالية. خططنا الغذائية تركز على تحقيق تحسينات مستدامة وتدريجية. نقدم المكملات الغذائية عند الحاجة بناءً على احتياجاتك الخاصة. استراتيجيات تدريبنا تمزج بين رؤية طويلة الأمد وتنفيذ مفصل لنجاحك",
        proh31:"المراجعة والمتابعة",
        proh32:"التغذية",
        proh33:"خطة المكملات الغذائية",
        proh34:"التدريب",
        prop1:"نحن هنا معك طوال الطريق لمساعدتك في تحقيق أهدافك. ستقدم لنا تحديثات منتظمة. طوال رحلتك، سنعمل أيضًا على تعزيز العادات التي تحسن جودة حياتك العامة، بما في ذلك النوم والتنفس والاستراحة والصحة البيئية والصحة الميكانيكية",
        prop2:"نركز على إعداد خطط غذائية تضمن تحسينات صغيرة وثابتة مع مرور الوقت. هذه التغييرات التدريجية تؤدي إلى نتائج كبيرة. تنفيذ هذه العادات الجديدة في روتينك اليومي سيساعدك على تجنب التراجع",
        prop3:"نحن نتبنى رؤية متوازنة للاستخدام الأمثل للمكملات الغذائية. لا نوزعها بشكل عشوائي. نهجنا هو تقديم المكملات الغذائية عند الضرورة، استنادًا إلى احتياجاتك الخاصة وما هو ضروري بالفعل لك",
        prop4:"نقوم بإعداد استراتيجيات التدريب باعتبار الرؤية العامة. نصيغ خطة لمدة عام واحد، ولكن تركيزنا الأساسي يبقى على الأسبوعين القادمين. هذه هي نهجنا - رؤية واسعة النطاق مع تنفيذ مفصل",
        poph2:"نجاح قصص العملاء",
        prih2:" أسعارنا",
        pris1:"٦٠٠/ج.م",
        pris2:"12/أسبوعًا",
        pris3:"٢٠٠٠/ج.م",
        pris4:"12/أسبوعًا",
        pris5:"٢٥٠٠/ج.م",
        pris6:"12/أسبوعًا",

         prisbr:"أساسي",
        prisbas:"توفير",
        prisp1:"خطة تغذية مخصصة",
        prisp2:"كتاب تمارين مصحوب بشرح فيديوهات",
        prisp3:"كتاب الطهي",
        prisp4:"فحوصات وتغيير الخطط شهريًا عبر البريد الإلكتروني",
        prisp5:"لا متابعة",

        prisilv:"احترافي",
        pripr:"فضي",
        prisilvep1:"خطة تغذية مخصصة",
        prisilvep2:"كتاب تمارين مصحوب بشرح فيديوهات",
        prisilvep3:"كتاب الطهي",
        prisilvep4:"فحوصات وتغيير الخطط كل 14 يومًا",
        prisilvep5:"متابعة يوم بيوم مع الكابتن عاصم التميمي",

        prigold:"اسطوري",
        prient:" ذهبي",
        prisgold1:"خطة تغذية مخصصة",
        prisgold2:"كتاب تمارين مصحوب بشرح فيديوهات",
        prisgold3:"كتاب الطهي",
        prisgold4:"فحوصات وتغيير الخطط أسبوعيًا",
        prisgold5:"متابعة يومية مع الكابتن عاصم التميمي",
        prisgold6:"5 مكالمات هاتفية في الأسبوع مع الكابتن عاصم التميمي",
        tran:"تغيرات عملائنا",
        footp:"عاصم التميمي هو مدرب لياقة بدنية وخبير تغذية معتمد يمثل رمزاً للتحفيز والتغيير الإيجابي. بفضل خبرته الطويلة في مجال اللياقة البدنية والتغذية، يعمل عاصم  جاهداً على مساعدة الأشخاص في تحقيق أهدافهم الصحية واللياقية. برامجه المخصصة تتيح للعملاء فرصة تحسين صحتهم وتحقيق توازن أفضل في حياتهم. انضموا إليه واستعدوا لبناء نمط حياة أكثر صحة ونشاطًا",

        footh31:"القائمة الرئيسية",
        footha311:"الصفحة الرئيسية",
        footha312:"الفيديوهات",
        footah313:"الأسعار",
        footah314:"التحول",
        footah315:"التذييل",
        footh32:"المعلومات",
        footh321:"الأسئلة الشائعة",
        footh322:"حولنا",
        footh323:"البداية",
        footh324:"البرنامج",
        footh34:"قائمة التواصل الاجتماعي"
    },
    en: {
        subscribe: "-Discover Your Full Potential",
        subscrib: "Join Our Fitness Revolution",
        subscri: "Get ready to transform your life with Captain Assem altamimy, a certified fitness and nutrition expert. We'll help you build strong healthy habits and achieve your wellness goals",
        subscr: "Join Now",
        home2h3: "-Unleash Your Inner Athlete",
        home2h1: "Join us for a healthier you",
        home2p: "Embark on a journey to a healthier you with Captain Gym Assem altamimy. With over 9 years of experience, he's here to guide you towards a fitter, more active lifestyle",
        questionh2:"Why Choose Captain Assem altamimy?",
        q1:"What is the importance of fitness in our lives?",
        q2:" How can I build lasting healthy habits?",
        q3:"Can I get a customized training plan for my individual goals?",
        q4:"How can I improve my dietary habits?",
        q5:"How does your dietary plan work, and what is the simple breakdown of it?",
        q6:"Who will be supporting me in my journey?",
        q7:"            Does the diet plan change regularly?        ",
        q8:"What are the success stories achieved by your clients?",
        q9:"What are Coach Assem altamimy's strategies for achieving fitness goals?",
        q10:" How can I join and get started?",
        a1:"Fitness contributes to improving overall health, increasing energy levels, and strengthening the body and mind",
        a2:"Through personal guidance and ongoing motivation, we'll help you develop healthy habits based on exercise and proper nutrition",
        a3:"Yes, we will provide you with a training plan tailored specifically to achieve your fitness goals",
        a4:"We will offer you tips and customized nutrition plans to ensure you consume healthy and suitable food items",
        a5:"We provide a customized and straightforward dietary plan tailored to your daily lifestyle. We'll be monitoring you daily to improve your relationship with food. You'll be able to enjoy your life and travel without worrying about your diet. We'll offer you healthy alternatives for eating, and we'll teach you how to prepare meals in a healthy way, so you can indulge in your favorite foods healthily",
        a6:"You can contact me directly via WhatsApp for any questions you have. I'll provide you with my number, and you can reach out to me at any time        ",
        a7:"            Yes, we offer a variety of programs, and the diet plan changes regularly, either weekly or every 14 days. This ensures that your diet adapts to your changing body, and we adjust it based on your progress, photos, weight, and measurements to achieve the desired results        ",
        a8:"We are proud of the success stories of our clients who have made significant improvements in their health and fitness through our programs",
        a9:" Coach Assem altamimy relies on a mix of diverse physical exercises while providing personalized training programs tailored to meet each individual's needs and objectives. He also offers continuous support and motivation to ensure the development of lasting healthy habits",
        a10:" Click on the 'Join Now' button at the top of the page to start your journey towards fitness and health",
        meh2:"About Us",
        men1:"+7 Years",
        meex:"Experience",
        men2:"+5000",
        meov:"Over programs made",
        men3:"+5000",
        meclient:"clients",
        mehp:"Assem Eltamimy is not your typical fitness trainer and nutrition expert. With over nine years of experience in the fitness industry and multiple certifications, he has become a leading figure in the world of health and wellness. Assem's journey is driven by his passion for helping individuals transform their lives through fitness and nutrition. Through personalized programs and a dedication to empowering his clients, Assem has earned a reputation as a motivator and mentor, inspiring people to live healthier and happier lives",
        serh2:"How can you start and change your life?",
        ser1:"Join Now",
        ser2:"Register",
        ser3:"Diet & Workout Plan",
        ser4:"Cooking E-Book",
        ser5:"Progress Updates",
        ser6:"Daily Support",
        serp1:"Click 'Join Now' and start your fitness journey",
        serp2:"Fill out the registration form with your information",
        serp3:"Receive a customized diet and workout plan tailored to your goals",
        serp4:"Receive a cooking e-book with healthy recipes",
        serp5:"Send your progress photos every 14 days for diet plan updates",
        serp6:"Receive daily support and guidance, with responses within 24 hours",
        proh1:"What Does the Program Include?",
        prop:"you'll receive a holistic approach to health and wellness. We prioritize regular updates and close monitoring to guide you effectively. Our nutrition plans focus on sustainable, gradual improvements. We provide supplements when necessary based on your specific needs. Our training strategies blend a long-term vision with detailed execution for your success",
        proh31:"Review and Monitoring",
        proh32:"Nutrition",
        proh33:"Supplement Plan",
        proh34:"Training",
        prop1:"We're here with you all the way to help you reach your goals. You'll provide regular updates. Throughout your journey, we'll also work on enhancing habits that improve your overall quality of life, including sleep, breathing, recovery, and biomechanical correctness.",
        prop2:"We focus on creating meal plans that incorporate small, consistent improvements over time. These gradual changes lead to substantial results. Implementing these new habits into your daily routine will help you avoid setbacks.",
        prop3:"We have a balanced view of supplements. We don't distribute them indiscriminately. Our approach is to provide supplements when necessary, based on your specific requirements and what is genuinely essential for you.",
        prop4:"We create your training strategies by considering the larger perspective. We formulate a one-year plan, but our primary focus remains on the upcoming two weeks. This is our approach – A broad vision with detailed execution.",
        poph2:"Client Success Stories",
        prih2:"Pricing & Plans",
        pris1:"£/600",
        pris2:"12/weeks",
        pris3:"£/2000",
        pris4:"12/weeks",
        pris5:"£/2500",
        pris6:"12/weeks",


        prisbr:"Basic ",
        prisbas:"Saved",
        prisp1:"Custom nutrition plan",
        prisp2:"Workout e-book explained by videos",
        prisp3:"Cooking e-book",
        prisp4:"Check ins & change plans monthly with email",
        prisp5:"No follow up",

        prisilv:"Professional ",
        pripr:"Silver",
        prisilvep1:"Custom nutrition plan",
        prisilvep2:"Workout e-book explained by videos",
        prisilvep3:"Cooking e-book",
        prisilvep4:"Check ins & change plans 14 days",
        prisilvep5:"Day by day follow up with Captain Assem",

        prigold:"legendary",
        prient:" Gold",
        prisgold1:"Custom nutrition plan",
        prisgold2:"Workout e-book explained by videos",
        prisgold3:"Cooking e-book",
        prisgold4:"Check ins & change plans weekly",
        prisgold5:"Daily follow up with captain Assem",
        prisgold6:"5 times per week phone call with captain Assem",
        tran:"Transforamtion",
        footp:"Meet Assem altamimy, a certified fitness trainer and nutrition expert who embodies motivation and positive change. With his extensive experience in the fitness and nutrition field, Qasim is dedicated to helping individuals achieve their health and fitness goals. His personalized programs offer clients the opportunity to improve their health and find better balance in their lives. Join him and get ready to build a healthier, more active lifestyle.",
        footh31:"Main Menu",
        footha311:"Home",
        footha312:"Videos",
        footah313:"Pricing",
        footah314:"Transforamtion",
        footah315:"Footer",
        footh32:"Information",
        footh321:"Faq",
        footh322:"About",
        footh323:"Start",
        footh324:"Program", 
        footh34:"Socail Menu"
    }
};

let selector = document.getElementById('language-selector');

// استدعاء الدالة عند تغيير اللغة
selector.addEventListener('change', updateLanguage);

function updateLanguage() {
    let language = selector.value; // اللغة المختارة
    let nodes = document.querySelectorAll('[data-lang]');

    // تحديث نصوص العناصر باستخدام اللغة المناسبة
    nodes.forEach(node => {
        let key = node.getAttribute('data-lang');
        if (lang[language] && lang[language][key]) {
            node.textContent = lang[language][key];
        }
    });
}

// استدعاء الدالة لتعيين اللغة الافتراضية عند تحميل الصفحة
updateLanguage();

function updateLanguage() {
    let language = selector.value; // اللغة المختارة
    let nodes = document.querySelectorAll('[data-lang]');

    // تحديث نصوص العناصر وتبديل الفئات الخاصة بـ font-family
    nodes.forEach(node => {
        let key = node.getAttribute('data-lang');
        if (lang[language] && lang[language][key]) {
            node.textContent = lang[language][key];
        }

        if (language === 'ar') {
            node.classList.remove('english-font');
            node.classList.add('arabic-font');
        } else {
            node.classList.remove('arabic-font');
            node.classList.add('english-font');
        }

        // إضافة الفئة الإضافية هنا (مثل 'second-arabic-font') إذا كان ذلك مطلوبًا
        // وتبديلها بناءً على اللغة المحددة بنفس الطريقة
        if (language === 'ar') {
            node.classList.remove('english-font');
            node.classList.add('second-arabic-font');
        } else {
            node.classList.remove('second-arabic-font');
            node.classList.add('english-font');
        }
        if (language === 'ar') {
            node.classList.remove('english-font');
            node.classList.add('se-arab');
        } else {
            node.classList.remove('se-arab');
            node.classList.add('english-font');
        }
    });
}


/*=============== swiper ===============*/
   // Define the background image paths
   const backgroundImages = [
  ];

  // Configure Swiper
  const homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        // Get the current slide index
        const currentSlideIndex = this.activeIndex;

        // Calculate the new background position based on the current slide
        const newBackgroundPosition = currentSlideIndex * 100;

        // Set the new background position for the ".try" section
        const trySection = document.querySelector('.try');
        trySection.style.backgroundPosition = `${newBackgroundPosition}% 50%`;
      },
    },
  });
/*=============== FAQ ===============*/
const accordionItems = document.querySelectorAll('.questions__item')
accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector('.questions__header')
    accordionHeader.addEventListener('click',()=>{
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if(openItem && openItem!==item){
            toggleItem(openItem)
        }
    })
})
const toggleItem =(item)=>{
    const accordionContent =item.querySelector('.questions__content')
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
 
}



var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 4,
        },
    },
});





/*=============== DARK LIGHT THEME ===============*/
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    if (loader) {
      loader.classList.add("loader-hidden");
      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
      });
    }
  });