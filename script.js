// ==========================================================================
// CV BÉNINWENDÉ SERGE LIONEL NIKIEMA - SCRIPT BILINGUE (EN / FR) & THÈME CLAIR
// ==========================================================================

const translations = {
  en: {
    page_title: "Béninwendé Serge Lionel NIKIEMA | Resume - AI & Cybersecurity",
    brand_status: "PhD Candidate in AI & Cybersecurity",
    btn_print: "Print / PDF",
    btn_download: "Download CV",
    badge_phd: "PhD Researcher",
    badge_eng: "Digital Systems Engineer",
    badge_nat: "Burkinabè",
    headline_prefix: "PhD Candidate in",
    headline_field: "Artificial Intelligence applied to Cybersecurity",
    headline_uni: "University of Luxembourg",
    subrole_1: "Design Engineer",
    subrole_2: "Higher Education Lecturer",
    subrole_3: "Researcher",
    subrole_4: "Elite IT Mentor",
    label_phone: "Phone",
    label_location: "Location",
    title_profile: "Profile & Overview",
    profile_html: `Digital systems engineer and researcher, currently pursuing a <strong>PhD at the University of Luxembourg</strong> specializing in <strong>Artificial Intelligence applied to Cybersecurity</strong>. Proven track record in software engineering, network administration, penetration testing, higher academic lecturing, and executive mentorship. Deeply committed to the digital sovereignty of Burkina Faso and training the next generation of top-tier African experts in AI and cybersecurity.`,
    hl_1: "Univ. of Luxembourg (AI & Cyber)",
    hl_2: "National Mentor for IT Talents",
    hl_3_title: "Engineer",
    hl_3: "ISGE-BF Digital Systems",
    hl_4_title: "Lecturer",
    hl_4: "Engineering (5th Yr) & BSc",
    title_experiences: "Professional Experience",
    
    // Exp 1
    exp1_title: "Mentor – Elite IT Program",
    exp1_org: "Ministry of Digital Transition, Posts and Electronic Communications",
    exp1_date: "2026 – Present",
    exp1_loc: "Burkina Faso",
    exp1_tasks_html: `
      <li>Mentorship of engineers and experts in <strong>cybersecurity and artificial intelligence</strong> within the flagship national initiative <em>Elite IT</em>.</li>
      <li>Sovereign program designed to train ~100 top-tier specialists to spearhead Burkina Faso’s digital resilience and technological sovereignty.</li>
      <li>Hands-on guidance and coaching for candidates following their patriotic immersion phase at the Armed Forces Training Group (GIFA).</li>
    `,

    // Exp 2
    exp2_title: "Adjunct Lecturer – Cybersecurity & AI",
    exp2_org: "Higher Institute of Electrical Engineering (ISGE-BF)",
    exp2_date: "2023 – Present",
    exp2_loc: "Ouagadougou",
    exp2_tasks_html: `
      <li>Delivering comprehensive courses and practical lab sessions in <strong>cybersecurity and penetration testing</strong> to <strong>5th-year Engineering</strong> students.</li>
      <li>Advanced introduction to <strong>Artificial Intelligence</strong> applied to automated threat detection, cyberdefense, and network telemetry analysis.</li>
    `,

    // Exp 3
    exp3_title: "Adjunct Lecturer – Flutter Mobile Development",
    exp3_org: "Higher Education Institution",
    exp3_date: "2023 – 2026",
    exp3_loc: "Burkina Faso",
    exp3_tasks_html: `
      <li>Lectures and labs on cross-platform mobile development with <strong>Flutter & Dart</strong> for 3rd-year Bachelor (Licence 3) students.</li>
      <li>Curriculum design, technical assessments, code reviews, and supervision of production-ready capstone mobile apps.</li>
    `,

    // Exp 4
    exp4_title: "Research Intern – Illicit Smartphone Data Leak Detection (AI)",
    exp4_org: "Interdisciplinary Center of Excellence in AI for Development",
    exp4_date: "May 2021 – Feb. 2022",
    exp4_loc: "Ouagadougou",
    exp4_tasks_html: `
      <li>Applied Machine Learning research and Python programming for automated anomaly detection.</li>
      <li>Engineered and deployed an automated, real-time <strong>data leak detection engine</strong> on Raspberry Pi embedded hardware.</li>
    `,

    // Exp 5
    exp5_title: "Trainer – Robotics & Drone Piloting",
    exp5_org: "Academy of Creative & Scientific Awakening",
    exp5_date: "May 2019 – Aug. 2019",
    exp5_loc: "Ouagadougou",
    exp5_tasks_html: `
      <li>Conducted hands-on training workshops in <strong>Arduino</strong> embedded programming, Scratch algorithmic thinking, robotics, and safe drone piloting.</li>
    `,

    // Exp 6
    exp6_title: "Industrial Methods & Web Engineering Internships",
    exp6_tasks_html: `
      <li><strong>SAHELYS (2019):</strong> Odoo ERP customization and corporate web integration.</li>
      <li><strong>Brasserie du Burkina (2018):</strong> FMECA / AMDEC analysis, equipment criticality study, and production line optimization.</li>
    `,

    // Education
    title_education: "Academic Education",
    edu1_title: "PhD in Artificial Intelligence applied to Cybersecurity",
    edu1_org: "University of Luxembourg",
    edu1_date: "2024 – Present",
    edu1_loc: "Luxembourg",
    edu1_detail_html: `
      Doctoral research exploring Machine Learning and AI methodologies applied to cybersecurity and cyber resilience.
      <br><strong>Supervision:</strong> Dr. Tégawendé Bissyândé, Interdisciplinary Center in AI for Development.
    `,

    edu2_title: "Design Engineer Degree in Digital Systems (Master's level)",
    edu2_org: "Higher Institute of Electrical Engineering (ISGE-BF)",
    edu2_date: "2019 – 2022",
    edu2_loc: "Ouagadougou",
    edu2_detail_html: `
      Systems & network administration, penetration testing, cyberdefense, SpringBoot, Angular, Python frameworks, telecommunications, and IT project management.
      <br><em>Key Project:</em> Automated smart parking system engineered with Arduino microcontrollers.
    `,

    edu3_title: "Higher National Diploma (DTS) in Industrial Maintenance",
    edu3_detail_html: `Industrial maintenance, Assembly & C programming, CMMS (GMAO), and industrial automation.`,

    edu4_title: "Scientific Baccalaureate (Series D)",

    // Skills
    title_cyber: "Cybersecurity & Networks",
    cat_sec: "Offensive Security & Cyberdefense",
    skill_pentest: "Penetration Testing",
    skill_cyberdef: "Cyberdefense",
    skill_leak: "Data Leak Detection",
    cat_net: "Networks & Infrastructure",
    skill_netadmin: "Network Administration",
    skill_sysadmin: "System Administration",
    skill_itplan: "IT Master Plan",

    title_ai_dev: "AI & Software Engineering",
    cat_ai_lang: "AI & Core Languages",
    skill_asm: "Assembly",
    cat_frameworks: "Frameworks, Mobile & Web",
    cat_embedded: "Embedded Systems & IoT",
    skill_micro: "Microcontrollers",

    title_languages: "Languages",
    lang_fr_name: "French",
    lang_fr_level: "Native language",
    lang_en_name: "English",
    lang_en_level: "B2 Level (Professional / Academic)",

    title_references: "References",
    ref1_title: "Associate Professor / Researcher, Interdisciplinary Center in AI for Development",
    ref2_title: "Managing Director, Higher Institute of Electrical Engineering (ISGE-BF)",

    footer_text: "© 2026 Béninwendé Serge Lionel NIKIEMA • Professional Resume • Engineered for excellence in AI & Cybersecurity",
    copied_toast: "Copied to clipboard: ",
    mode_toast_light: "Light mode enabled",
    mode_toast_dark: "Dark mode enabled"
  },

  fr: {
    page_title: "Béninwendé Serge Lionel NIKIEMA | CV - IA & Cybersécurité",
    brand_status: "Doctorant en IA & Cybersécurité",
    btn_print: "Imprimer / PDF",
    btn_download: "Télécharger CV",
    badge_phd: "Doctorant Chercheur",
    badge_eng: "Ingénieur Systèmes Numériques",
    badge_nat: "Burkinabè",
    headline_prefix: "Doctorant en",
    headline_field: "Intelligence Artificielle appliquée à la Cybersécurité",
    headline_uni: "Université du Luxembourg",
    subrole_1: "Ingénieur de Conception",
    subrole_2: "Enseignant Supérieur",
    subrole_3: "Chercheur",
    subrole_4: "Mentor Elite IT",
    label_phone: "Téléphone",
    label_location: "Localisation",
    title_profile: "Profil & Vision",
    profile_html: `Ingénieur et chercheur en <strong>systèmes numériques</strong>, actuellement en <strong>doctorat à l’Université du Luxembourg</strong> avec une spécialisation en <strong>intelligence artificielle appliquée à la cybersécurité</strong>. Solide expérience en développement logiciel, administration réseau, tests de pénétration, enseignement académique supérieur et mentorat de haut niveau. Pleinement engagé dans la souveraineté numérique du Burkina Faso et la formation d’une nouvelle génération d’experts d'élite en IA et cybersécurité.`,
    hl_1: "Univ. du Luxembourg (IA & Cyber)",
    hl_2: "Mentor National de Talents SI",
    hl_3_title: "Ingénieur",
    hl_3: "ISGE-BF Systèmes Numériques",
    hl_4_title: "Enseignement",
    hl_4: "Cycle Ingénieur (5eA) & Licence",
    title_experiences: "Expériences Professionnelles",

    // Exp 1
    exp1_title: "Mentor – Programme Elite IT",
    exp1_org: "Ministère de la Transition Digitale, des Postes et des Communications Électroniques",
    exp1_date: "2026 – En cours",
    exp1_loc: "Burkina Faso",
    exp1_tasks_html: `
      <li>Mentorat d’ingénieurs et d’experts en <strong>cybersécurité et intelligence artificielle</strong> dans le cadre de l’initiative stratégique nationale <em>Elite IT</em>.</li>
      <li>Programme régalien visant à former une centaine de profils d’élite hautement qualifiés pour soutenir la souveraineté et la transformation numérique du pays.</li>
      <li>Accompagnement rigoureux de participants issus de la phase d’immersion patriotique au Groupement d’Instruction des Forces Armées (GIFA).</li>
    `,

    // Exp 2
    exp2_title: "Enseignant Vacataire – Cybersécurité & IA",
    exp2_org: "Institut Supérieur de Génie Électrique du Burkina Faso (ISGE-BF)",
    exp2_date: "2023 – En cours",
    exp2_loc: "Ouagadougou",
    exp2_tasks_html: `
      <li>Cours magistraux et travaux dirigés en <strong>cybersécurité et tests d’intrusion (pentest)</strong> pour les étudiants de niveau <strong>Ingénieur (5e année)</strong>.</li>
      <li>Initiation avancée à l'<strong>intelligence artificielle</strong> appliquée à la détection et remédiation de cyberattaques.</li>
    `,

    // Exp 3
    exp3_title: "Enseignant Vacataire – Développement Flutter",
    exp3_org: "Établissement d’Enseignement Supérieur",
    exp3_date: "2023 – 2026",
    exp3_loc: "Burkina Faso",
    exp3_tasks_html: `
      <li>Cours de développement mobile multiplateforme avec <strong>Flutter & Dart</strong> (niveau Licence 3).</li>
      <li>Conception pédagogique de programmes, évaluation pratique et encadrement de projets applicatifs.</li>
    `,

    // Exp 4
    exp4_title: "Stagiaire – Détection de fuite de données illicites sur smartphones (IA)",
    exp4_org: "Centre d’Excellence Interdisciplinaire en IA pour le Développement",
    exp4_date: "Mai 2021 – Fév. 2022",
    exp4_loc: "Ouagadougou",
    exp4_tasks_html: `
      <li>Recherche appliquée en Machine Learning et programmation Python.</li>
      <li>Implémentation concrète d’un système de <strong>détection automatisée de fuites de données</strong> déployé sur nano-ordinateur Raspberry Pi.</li>
    `,

    // Exp 5
    exp5_title: "Formateur – Robotique & Pilotage de Drone",
    exp5_org: "Académie de Création et d’Éveil Scientifique",
    exp5_date: "Mai 2019 – Août 2019",
    exp5_loc: "Ouagadougou",
    exp5_tasks_html: `
      <li>Animation d'ateliers en programmation embarquée <strong>Arduino</strong>, logique algorithmique Scratch, robotique éducative et pilotage sécurisé de drones.</li>
    `,

    // Exp 6
    exp6_title: "Stages d'Initiation & Méthodes Industrielles",
    exp6_tasks_html: `
      <li><strong>SAHELYS (2019) :</strong> Intégration ERP Odoo et refonte du site web institutionnel.</li>
      <li><strong>Brasserie du Burkina (2018) :</strong> Analyse AMDEC, criticité et optimisation de ligne de production.</li>
    `,

    // Education
    title_education: "Formation Académique",
    edu1_title: "Doctorat en Intelligence Artificielle appliquée à la Cybersécurité",
    edu1_org: "Université du Luxembourg",
    edu1_date: "2024 – En cours",
    edu1_loc: "Luxembourg",
    edu1_detail_html: `
      Travaux de recherche doctorale sur l’application de l’IA aux problématiques de cybersécurité.
      <br><strong>Encadrement :</strong> Dr. Tégawendé Bissyândé, Centre Interdisciplinaire en IA pour le Développement.
    `,

    edu2_title: "Ingénieur de Conception en Systèmes Numériques",
    edu2_org: "Institut Supérieur de Génie Électrique du Burkina Faso (ISGE-BF)",
    edu2_date: "2019 – 2022",
    edu2_loc: "Ouagadougou",
    edu2_detail_html: `
      Administration systèmes & réseaux, tests d’intrusion, cyberdéfense, frameworks SpringBoot, Angular, Python, télécoms et gestion de projet SI.
      <br><em>Projet marquant :</em> Système de parking intelligent automatisé via microcontrôleur Arduino.
    `,

    edu3_title: "Diplôme de Technicien Supérieur (DTS) en Maintenance Industrielle",
    edu3_detail_html: `Maintenance industrielle, programmation assembleur & C, GMAO, automatisme.`,

    edu4_title: "Baccalauréat Scientifique (Série D)",

    // Skills
    title_cyber: "Cybersécurité & Réseaux",
    cat_sec: "Sécurité Offensive & Défense",
    skill_pentest: "Test de pénétration",
    skill_cyberdef: "Cyberdéfense",
    skill_leak: "Détection de fuites de données",
    cat_net: "Réseaux & Infrastructures",
    skill_netadmin: "Administration Réseaux",
    skill_sysadmin: "Administration Systèmes",
    skill_itplan: "Schéma Directeur SI",

    title_ai_dev: "IA & Programmation",
    cat_ai_lang: "IA & Langages",
    skill_asm: "Assembleur",
    cat_frameworks: "Frameworks & Mobile / Web",
    cat_embedded: "Systèmes Embarqués & IoT",
    skill_micro: "Microcontrôleurs",

    title_languages: "Langues",
    lang_fr_name: "Français",
    lang_fr_level: "Langue maternelle",
    lang_en_name: "Anglais",
    lang_en_level: "Niveau B2 (Courant / Académique)",

    title_references: "Références",
    ref1_title: "Enseignant-chercheur, Centre Interdisciplinaire en IA pour le Développement",
    ref2_title: "Directeur Général, Institut Supérieur de Génie Électrique (ISGE-BF)",

    footer_text: "© 2026 Béninwendé Serge Lionel NIKIEMA • CV Professionnel • Conçu pour l'excellence et la recherche en IA & Cyberdéfense",
    copied_toast: "Copié dans le presse-papier : ",
    mode_toast_light: "Mode Clair activé",
    mode_toast_dark: "Mode Sombre activé"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const htmlRoot = document.documentElement;
  let currentLang = localStorage.getItem('cv_lang') || 'en'; // English par défaut

  // 1. Gestion de la Langue (EN / FR)
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('cv_lang', lang);
    htmlRoot.setAttribute('lang', lang);

    const dict = translations[lang];

    // Page title
    document.title = dict.page_title;

    // Direct text replacements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Rich HTML replacements
    const profileText = document.getElementById('profileText');
    if (profileText && dict.profile_html) profileText.innerHTML = dict.profile_html;

    const exp1Tasks = document.getElementById('exp1_tasks');
    if (exp1Tasks && dict.exp1_tasks_html) exp1Tasks.innerHTML = dict.exp1_tasks_html;

    const exp2Tasks = document.getElementById('exp2_tasks');
    if (exp2Tasks && dict.exp2_tasks_html) exp2Tasks.innerHTML = dict.exp2_tasks_html;

    const exp3Tasks = document.getElementById('exp3_tasks');
    if (exp3Tasks && dict.exp3_tasks_html) exp3Tasks.innerHTML = dict.exp3_tasks_html;

    const exp4Tasks = document.getElementById('exp4_tasks');
    if (exp4Tasks && dict.exp4_tasks_html) exp4Tasks.innerHTML = dict.exp4_tasks_html;

    const exp5Tasks = document.getElementById('exp5_tasks');
    if (exp5Tasks && dict.exp5_tasks_html) exp5Tasks.innerHTML = dict.exp5_tasks_html;

    const exp6Tasks = document.getElementById('exp6_tasks');
    if (exp6Tasks && dict.exp6_tasks_html) exp6Tasks.innerHTML = dict.exp6_tasks_html;

    const edu1Detail = document.getElementById('edu1_detail');
    if (edu1Detail && dict.edu1_detail_html) edu1Detail.innerHTML = dict.edu1_detail_html;

    const edu2Detail = document.getElementById('edu2_detail');
    if (edu2Detail && dict.edu2_detail_html) edu2Detail.innerHTML = dict.edu2_detail_html;

    const edu3Detail = document.getElementById('edu3_detail');
    if (edu3Detail && dict.edu3_detail_html) edu3Detail.innerHTML = dict.edu3_detail_html;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Language switch buttons event listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
      showToast(selectedLang === 'en' ? 'English selected' : 'Français sélectionné');
    });
  });

  // Initial language setup
  setLanguage(currentLang);

  // 2. Thème Fond Blanc par Défaut (Light Mode Default)
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme ? savedTheme : 'light'; // Light par défaut
  htmlRoot.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      const dict = translations[currentLang] || translations.en;
      showToast(newTheme === 'dark' ? dict.mode_toast_dark : dict.mode_toast_light);
    });
  }

  // 3. Copie dans le presse-papier
  const copyButtons = document.querySelectorAll('.copy-mini-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        copyToClipboard(textToCopy);
      }
    });
  });

  // 5. Toast Notification
  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  function copyToClipboard(text) {
    const dict = translations[currentLang] || translations.en;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => showToast(`${dict.copied_toast}${text}`))
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const dict = translations[currentLang] || translations.en;
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`${dict.copied_toast}${text}`);
    } catch (err) {
      showToast(text);
    }
    document.body.removeChild(tempInput);
  }
});
