document.addEventListener("DOMContentLoaded", () => {
  // --- Translations Object ---
  const translations = {
    en: {
      pageTitle: "CV — Mahmoud Mohamed Abdallah",
      name: "Mahmoud Mohamed Abdallah",
      jobTitle: "Flutter Developer | Python Developer | Innovative Software Solutions",
      contactBtn: "Get in Touch",
      aboutTitle: "💡 About Me",
      aboutText: `Software developer specializing in mobile application development using <strong>Flutter</strong> with one year of practical experience, and over 3 years of experience in <strong>Python</strong>. I have deep expertise with various operating systems (Windows, Linux, macOS), web scraping solutions, and the ability to analyze problems and find effective solutions quickly. Passionate about continuous learning and self-development in the programming field.`,
      skillsTitle: "🛠 Skills",
      experienceTitle: "📌 Key Expertise",
      exp1: "Developing cross-platform applications (Android & iOS) with Flutter for one year.",
      exp2: "3 years of experience in Python: automation, data analysis, software development.",
      exp3: "Extensive experience in web scraping using Python libraries (BeautifulSoup, Selenium, Scrapy).",
      exp4: "Solving complex technical problems and developing innovative software solutions.",
      projectsTitle: "🚀 Featured Projects",
      proj1Title: "All-in-One Movie & Series Finder",
      proj1Desc: "A mobile application built with Flutter that aggregates content from various streaming sites. It features an advanced scraping engine to find and provide users with direct links to movies and series, offering a centralized and seamless viewing experience.",
      proj2Title: "Live Football Scores App",
      proj2Desc: "A comprehensive football companion app, similar to Yalla Shoot, developed using Flutter. It provides real-time match schedules, live scores, team standings, and detailed statistics for football enthusiasts.",
      proj3Title: "Advanced Telegram Bots",
      proj3Desc: "Developed a diverse range of intelligent Telegram bots using Python. These bots perform various automated tasks, including data retrieval from APIs, user interaction management, and providing customized information on demand.",
      contactTitle: "📬 Get in Touch",
      footerText: "© 2025 — Mahmoud Mohamed Abdallah. All rights reserved.",
      switcherText: "العربية",
    },
    ar: {
      pageTitle: "السيرة الذاتية — محمود محمد عبدالله",
      name: "محمود محمد عبدالله",
      jobTitle: "مبرمج Flutter | مطور بايثون | حلول برمجية مبتكرة",
      contactBtn: "تواصل معي",
      aboutTitle: "💡 نبذة عني",
      aboutText: `مطور برمجيات متخصص في تطوير تطبيقات الهاتف باستخدام <strong>Flutter</strong> بخبرة عملية سنة، وخبرة أكثر من 3 سنوات في <strong>بايثون</strong>. لدي خبرة عميقة مع أنظمة التشغيل المختلفة (Windows, Linux, macOS)، وحلول الويب سكراب، بالإضافة إلى القدرة على تحليل المشكلات وإيجاد حلول فعالة بسرعة. شغوف بالتعلم المستمر وتطوير نفسي في مجال البرمجة.`,
      skillsTitle: "🛠 المهارات",
      experienceTitle: "📌 الخبرات العملية",
      exp1: "تطوير تطبيقات متعددة المنصات (Android & iOS) باستخدام Flutter بخبرة سنة.",
      exp2: "3 سنوات خبرة في Python: أتمتة، تحليل بيانات، تطوير برمجيات.",
      exp3: "خبرة كبيرة في الويب سكراب باستخدام مكتبات Python (BeautifulSoup, Selenium, Scrapy).",
      exp4: "حل مشكلات تقنية معقدة وتطوير حلول برمجية مبتكرة.",
      projectsTitle: "🚀 مشاريع بارزة",
      proj1Title: "تطبيق بحث عن الأفلام والمسلسلات",
      proj1Desc: "تطبيق هاتف مصنوع بـ Flutter يقوم بالبحث في مختلف مواقع البث. يتميز بمحرك سكراب متقدم لجلب روابط مباشرة للأفلام والمسلسلات، مما يوفر تجربة مشاهدة مركزية وسلسة.",
      proj2Title: "تطبيق جداول ومباريات كرة القدم",
      proj2Desc: "تطبيق شامل مشابه لتطبيق يلا شوت، تم تطويره باستخدام Flutter. يوفر جداول المباريات، نتائج مباشرة، ترتيب الفرق، وإحصائيات مفصلة لعشاق كرة القدم.",
      proj3Title: "بوتات تيليجرام متقدمة",
      proj3Desc: "تطوير مجموعة متنوعة من بوتات تيليجرام الذكية باستخدام Python. تقوم هذه البوتات بمهام آلية مختلفة، بما في ذلك جلب البيانات من APIs، إدارة تفاعل المستخدمين، وتقديم معلومات مخصصة حسب الطلب.",
      contactTitle: "📬 تواصل معي",
      footerText: "© 2025 — محمود محمد عبدالله. جميع الحقوق محفوظة.",
      switcherText: "English",
    },
  };

  const langSwitcher = document.getElementById("lang-switcher");

  // --- Functions ---
  const setLanguage = (lang) => {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-key");
      element.innerHTML = translations[lang][key];
    });

    document.documentElement.lang = lang;
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl");
    } else {
      document.documentElement.dir = "ltr";
      document.body.classList.remove("rtl");
    }
    
    // Update switcher button text
    langSwitcher.innerText = translations[lang].switcherText;
    
    // Save preference to local storage
    localStorage.setItem("language", lang);
  };
  
  const toggleLanguage = () => {
      const currentLang = localStorage.getItem("language") || "en";
      const newLang = currentLang === "en" ? "ar" : "en";
      setLanguage(newLang);
  };

  // --- Initial animations and language setup ---
  
  // Skills animation effect
  const skills = document.querySelectorAll(".skills-grid span");
  skills.forEach((skill, index) => {
    skill.style.opacity = 0;
    skill.style.transform = "translateY(20px)"; // Start from bottom
    setTimeout(() => {
      skill.style.transition = "all 0.5s ease-out";
      skill.style.opacity = 1;
      skill.style.transform = "translateY(0)";
    }, 150 * index);
  });
  
  // Event listener for the switcher
  langSwitcher.addEventListener("click", toggleLanguage);

  // Set initial language based on storage or default to English
  const initialLang = localStorage.getItem("language") || "en";
  setLanguage(initialLang);
});