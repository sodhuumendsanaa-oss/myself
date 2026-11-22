/* =========================================================
   MENDSANAA PORTFOLIO — INTERACTIVE & MULTILINGUAL ENGINE
   - English Hacker / NASA Loading Screen (First Visit)
   - Japanese (Default) / English / Mongolian Switcher
   - Soft Floating Particles, Lightbox & Copy Toast
   ========================================================= */

(() => {
    'use strict';

    /* =====================================================
       1. MULTILINGUAL TRANSLATIONS (MAIN DEFAULT: JA)
       ===================================================== */
    const TRANSLATIONS = {
        ja: {
            page_title_home: 'Mendsanaa - ホーム',
            page_title_profile: 'Mendsanaa - プロフィール',
            page_title_contact: 'お問い合わせ - Mendsanaa',

            nav_home: 'ホーム',
            nav_profile: 'プロフィール',
            nav_contact: 'お問い合わせ',

            toast_copied: 'コピーしました！',
            replay_intro: '起動演出を再生',

            /* HOME */
            home_subtitle: 'モンゴル出身 🇲🇳 ・ 東京在住 🇯🇵',
            home_role: '東京国際工科専門職大学 AIコース在籍',
            home_desc_1: '東京国際工科専門職大学のAIコースに在籍しています。',
            home_desc_2: 'AI・クラウド・ソフトウェア開発を中心に、世界とつながる技術を日々学んでいます。',
            home_btn_profile: 'プロフィールを見る',
            home_btn_contact: 'お問い合わせ',

            home_about_title: '私について',
            home_about_sub: '世界を巡りながら、情熱を持って学び・創る',

            home_story_1_title: '旅の始まり',
            home_story_1_text: '2020年に高校を卒業し、コロナ禍の影響で1年半のギャップイヤーを過ごしました。その期間を有意義に活かし、次の一歩へ向けて準備しました。',
            home_story_2_title: '日本への挑戦',
            home_story_2_text: '2022年に来日し、北九州YMCA学院で日本語と文化を学びました。日本での生活は新しい視点と大きな成長をもたらしてくれました。',
            home_story_3_title: 'AIを集中的に習得',
            home_story_3_text: '日本電子専門学校でAIについて2年間集中的に学び、プログラミングと機械学習の基礎・実践スキルを習得しました。',
            home_story_4_title: 'さらなる高みへ',
            home_story_4_text: '現在、東京国際工科専門職大学のAIコースに在籍し、より高度なAI技術とクラウド・開発力を追求しています。',
            home_full_bio: '私は2020年にモンゴルの高校を卒業し、コロナの影響で来日まで1年半のギャップイヤーを過ごしました。2022年に来日して北九州YMCA学院を卒業後、日本電子専門学校でAIを2年間学び、さらに深く追求するため現在は東京国際工科専門職大学のAIコースに在籍しています。',

            home_hl_title: 'ハイライト',
            home_hl_1: '高校卒業',
            home_hl_2: '来日・留学開始',
            home_hl_3: 'AI専門課程修了',
            home_hl_4: '学び続ける姿勢',

            home_cta_title: 'もっと詳しく知る',
            home_cta_sub: 'スキル・取得資格・これまでの歩みをご覧ください',
            home_cta_btn: 'プロフィールへ進む',
            home_footer: 'Mendsanaa デジタルポートフォリオ • 2024-2026',

            /* PROFILE */
            prof_location: '📍 モンゴル出身 ・ 東京在住',
            prof_role: '🎓 AI専攻学生 | テクノロジー愛好家',
            prof_bio_1: '東京国際工科専門職大学（IPUT）のAIコースに在籍中。',
            prof_bio_2: '機械学習、クラウド、開発技術を日々磨いています。',
            prof_email_label: 'メール',
            prof_btn_contact: 'お問い合わせ',
            prof_btn_home: '詳しく見る',

            prof_skills_title: 'スキル・関心分野',
            prof_skill_1: 'AI・機械学習',
            prof_skill_2: 'Web開発',
            prof_skill_3: 'グローバル視点',
            prof_skill_4: 'イノベーション',

            prof_certs_title: '取得資格・検定',
            cert_1: 'AWS Solutions Architect Associate',
            cert_2: 'AWS Cloud Practitioner',
            cert_3: 'Java SE 11 Silver',
            cert_4: 'GitHub Foundations',
            cert_5: 'Python 3 基礎試験',
            cert_6: 'Python データ分析試験',
            cert_7: 'Python 実践試験',
            cert_8: 'Google Gemini 認定',
            cert_9: 'AI検定',
            cert_10: '日本語能力試験 N1',
            cert_11: 'TOEIC 850',

            prof_edu_title: '学歴・歩み',
            prof_edu_1_year: '2020',
            prof_edu_1_text: 'モンゴルの高校を卒業',
            prof_edu_2_year: '2020 – 2022',
            prof_edu_2_text: 'ギャップイヤー（コロナ禍での自己研鑽期間）',
            prof_edu_3_year: '2022',
            prof_edu_3_text: '来日・北九州YMCA学院にて日本語を習得',
            prof_edu_4_year: '2022 – 2024',
            prof_edu_4_text: '日本電子専門学校 — AIシステム科（2年課程）',
            prof_edu_5_year: '2024 – 現在',
            prof_edu_5_text: '東京国際工科専門職大学 — AIコース在籍',
            prof_footer: 'QRコード デジタルプロフィール • 2024-2026',

            /* CONTACT */
            contact_title: 'お問い合わせ',
            contact_sub: '下記のいずれの連絡先からでもお気軽にご連絡ください',

            contact_school_email: '大学メール',
            contact_personal_email: '個人メール',
            contact_github_note: '※ 日々成長を目指して開発中',
            contact_fb_detail: 'Facebookでつながる',
            contact_avail: '連絡可能な時間帯',
            contact_avail_1: '日中のお問い合わせがスムーズです',
            contact_avail_2: '日中（日本時間 JST）',

            contact_btn_email: 'メールを送る',
            contact_btn_visit: 'プロフィールを見る',
            contact_btn_copy: 'コピー',

            contact_form_title: 'メッセージを送る',
            contact_label_name: 'お名前',
            contact_ph_name: '山田 太郎',
            contact_label_email: 'メールアドレス',
            contact_ph_email: 'you@example.com',
            contact_label_subject: '件名',
            contact_ph_subject: 'お問い合わせの件名',
            contact_label_msg: 'メッセージ',
            contact_ph_msg: 'メッセージをご記入ください...',
            contact_btn_submit: 'メッセージを送信',
            contact_btn_sent: '✓ メール作成画面を開きました！',

            contact_back_home: '← ホームへ戻る',
            contact_view_prof: 'プロフィールを見る →',
            contact_footer: 'ご覧いただきありがとうございます • 2024-2026'
        },

        en: {
            page_title_home: 'Mendsanaa - Home',
            page_title_profile: 'Mendsanaa - Profile',
            page_title_contact: 'Contact Me - Mendsanaa',

            nav_home: 'Home',
            nav_profile: 'Profile',
            nav_contact: 'Contact',

            toast_copied: 'Copied to clipboard!',
            replay_intro: 'Replay Intro',

            /* HOME */
            home_subtitle: 'From Mongolia 🇲🇳 • Based in Tokyo 🇯🇵',
            home_role: 'International Professional University of Technology in Tokyo',
            home_desc_1: 'I am currently studying AI at International Professional University of Technology in Tokyo.',
            home_desc_2: 'Exploring artificial intelligence, cloud architecture, and modern software engineering.',
            home_btn_profile: 'View Profile',
            home_btn_contact: 'Get in Touch',

            home_about_title: 'About Me',
            home_about_sub: 'Developing with passion while exploring the world',

            home_story_1_title: 'Journey Started',
            home_story_1_text: 'Graduated high school in 2020 and spent a 1.5-year gap year during the pandemic, using that time meaningfully to prepare for the next chapter.',
            home_story_2_title: 'Came to Japan',
            home_story_2_text: 'Moved to Japan in 2022 and studied Japanese language and culture at Kitakyushu YMCA Academy, gaining fresh perspectives.',
            home_story_3_title: 'Studied AI',
            home_story_3_text: 'Studied AI intensively for 2 years at Japan Electronics College, mastering programming and machine learning fundamentals.',
            home_story_4_title: 'Pursuing Excellence',
            home_story_4_text: 'Currently enrolled in the AI course at International Professional University of Technology in Tokyo, pushing my skills even further.',
            home_full_bio: 'I graduated high school in Mongolia in 2020 and spent a 1.5-year gap year due to COVID-19 before coming to Japan. In 2022, I moved to Japan and graduated from Kitakyushu YMCA Academy. After studying AI for two years at Japan Electronics College, I am now pursuing advanced AI studies at International Professional University of Technology in Tokyo.',

            home_hl_title: 'Highlights',
            home_hl_1: 'High School Graduate',
            home_hl_2: 'Moved to Japan',
            home_hl_3: 'AI Specialist',
            home_hl_4: 'Keep Learning',

            home_cta_title: 'Ready to Know More?',
            home_cta_sub: 'Explore my skills, certifications, and education journey',
            home_cta_btn: 'Visit My Profile',
            home_footer: 'Welcome to my digital portfolio • 2024-2026',

            /* PROFILE */
            prof_location: '📍 From Mongolia • Based in Tokyo',
            prof_role: '🎓 AI Student | Tech Enthusiast',
            prof_bio_1: 'Currently studying AI at International Professional University of Technology in Tokyo (IPUT).',
            prof_bio_2: 'Sharpening my skills in machine learning, cloud, and software development every day.',
            prof_email_label: 'Email',
            prof_btn_contact: 'Contact Me',
            prof_btn_home: 'Learn More',

            prof_skills_title: 'Skills & Interests',
            prof_skill_1: 'AI & Machine Learning',
            prof_skill_2: 'Web Development',
            prof_skill_3: 'Global Perspective',
            prof_skill_4: 'Innovation',

            prof_certs_title: 'Certifications',
            cert_1: 'AWS Solutions Architect Associate',
            cert_2: 'AWS Cloud Practitioner',
            cert_3: 'Oracle Java SE 11 Silver',
            cert_4: 'GitHub Foundations',
            cert_5: 'Python 3 Fundamentals',
            cert_6: 'Python Data Analysis',
            cert_7: 'Python Practical Exam',
            cert_8: 'Google Gemini Certified',
            cert_9: 'AI Certification',
            cert_10: 'JLPT N1',
            cert_11: 'TOEIC 850',

            prof_edu_title: 'Education Journey',
            prof_edu_1_year: '2020',
            prof_edu_1_text: 'Completed High School Education in Mongolia',
            prof_edu_2_year: '2020 – 2022',
            prof_edu_2_text: 'Gap Year — COVID-19 Pandemic Period',
            prof_edu_3_year: '2022',
            prof_edu_3_text: 'Moved to Japan — Kitakyushu YMCA Academy',
            prof_edu_4_year: '2022 – 2024',
            prof_edu_4_text: 'Japan Electronics College — 2-Year AI Program',
            prof_edu_5_year: '2024 – Present',
            prof_edu_5_text: 'International Professional University of Technology in Tokyo — AI Specialization',
            prof_footer: 'QR Code Digital Profile • 2024-2026',

            /* CONTACT */
            contact_title: 'Get in Touch',
            contact_sub: 'Feel free to reach out to me through any of these channels',

            contact_school_email: 'School Email',
            contact_personal_email: 'Personal Email',
            contact_github_note: '※ Trying to be better every day',
            contact_fb_detail: 'Connect on Facebook',
            contact_avail: 'Availability',
            contact_avail_1: 'Best to contact during',
            contact_avail_2: 'Daytime Hours (JST)',

            contact_btn_email: 'Send Email',
            contact_btn_visit: 'Visit Profile',
            contact_btn_copy: 'Copy',

            contact_form_title: 'Send me a Message',
            contact_label_name: 'Your Name',
            contact_ph_name: 'John Doe',
            contact_label_email: 'Your Email',
            contact_ph_email: 'you@example.com',
            contact_label_subject: 'Subject',
            contact_ph_subject: 'What is this about?',
            contact_label_msg: 'Message',
            contact_ph_msg: 'Write your message here...',
            contact_btn_submit: 'Send Message',
            contact_btn_sent: '✓ Message Ready to Send!',

            contact_back_home: '← Back to Home',
            contact_view_prof: 'View Profile →',
            contact_footer: 'Thank you for reaching out • 2024-2026'
        },

        mn: {
            page_title_home: 'Mendsanaa - Нүүр',
            page_title_profile: 'Mendsanaa - Профайл',
            page_title_contact: 'Холбоо барих - Mendsanaa',

            nav_home: 'Нүүр',
            nav_profile: 'Профайл',
            nav_contact: 'Холбоо барих',

            toast_copied: 'Хууллаа!',
            replay_intro: 'Эхлэл дахин үзэх',

            /* HOME */
            home_subtitle: 'Монгол улсаас 🇲🇳 • Токиод амьдарч байна 🇯🇵',
            home_role: 'Токиогийн Олон улсын технологийн их сургуулийн AI анги',
            home_desc_1: 'Одоо Токиогийн Олон улсын технологийн их сургуулийн (IPUT) хиймэл оюун ухааны ангид суралцаж байна.',
            home_desc_2: 'Хиймэл оюун ухаан, үүлэн технологи болон програм хангамж хөгжүүлэлтийг гүнзгийрүүлэн судалж байна.',
            home_btn_profile: 'Профайл үзэх',
            home_btn_contact: 'Холбоо барих',

            home_about_title: 'Миний тухай',
            home_about_sub: 'Дэлхийтэй танилцаж, хүсэл тэмүүлэлтэйгээр суралцаж, бүтээж байна',

            home_story_1_title: 'Аяллын эхлэл',
            home_story_1_text: '2020 онд ахлах сургуулиа төгсөж, цар тахлын улмаас 1.5 жилийн хугацааг өөрийгөө хөгжүүлж, дараагийн алхамдаа бэлтгэхэд үр бүтээлтэй зарцуулсан.',
            home_story_2_title: 'Японд ирсэн нь',
            home_story_2_text: '2022 онд Японд ирж, Китакюшүгийн YMCA академид япон хэл, соёлд суралцан шинэ харах өнцөг, туршлага хуримтлуулсан.',
            home_story_3_title: 'AI судалгаа',
            home_story_3_text: 'Японы Электроникийн коллежид 2 жилийн турш хиймэл оюун ухааны чиглэлээр эрчимтэй суралцаж, програмчлал болон машин сургалтын суурийг эзэмшсэн.',
            home_story_4_title: 'Илүү өндөр оргил руу',
            home_story_4_text: 'Одоо Токиогийн Олон улсын технологийн их сургуулийн AI ангид суралцаж, AI болон үүлэн технологийн мэдлэгээ гүнзгийрүүлж байна.',
            home_full_bio: 'Би 2020 онд Монголд ахлах сургуулиа төгсөж, цар тахлын улмаас Япон руу ирэх хүртлээ 1.5 жилийг өөрийгөө хөгжүүлэхэд зарцуулсан. 2022 онд Японд ирж Китакюшүгийн YMCA академийг төгссөний дараа Японы Электроникийн коллежид 2 жил хиймэл оюун ухааны чиглэлээр суралцсан бөгөөд одоо Токиогийн Олон улсын технологийн их сургуулийн AI ангид гүнзгийрүүлэн суралцаж байна.',

            home_hl_title: 'Онцлох амжилтууд',
            home_hl_1: 'Ахлах сургууль төгссөн',
            home_hl_2: 'Японд суралцаж эхэлсэн',
            home_hl_3: 'AI мэргэжилтэн',
            home_hl_4: 'Тасралтгүй суралцах',

            home_cta_title: 'Дэлгэрэнгүй танилцах уу?',
            home_cta_sub: 'Миний ур чадвар, сертификатууд болон боловсролын замналыг үзээрэй',
            home_cta_btn: 'Профайл руу орох',
            home_footer: 'Mendsanaa дижитал портфолио • 2024-2026',

            /* PROFILE */
            prof_location: '📍 Монгол улсаас • Токиод амьдарч байна',
            prof_role: '🎓 AI Оюутан | Технологи сонирхогч',
            prof_bio_1: 'Токиогийн Олон улсын технологийн их сургуулийн (IPUT) AI ангид суралцаж байна.',
            prof_bio_2: 'Машин сургалт, үүлэн технологи болон програмчлалын ур чадвараа өдөр бүр хөгжүүлж байна.',
            prof_email_label: 'Имэйл',
            prof_btn_contact: 'Холбоо барих',
            prof_btn_home: 'Дэлгэрэнгүй',

            prof_skills_title: 'Ур чадвар ба сонирхол',
            prof_skill_1: 'AI ба Машин сургалт',
            prof_skill_2: 'Вэб хөгжүүлэлт',
            prof_skill_3: 'Олон улсын харах өнцөг',
            prof_skill_4: 'Инноваци ба шинэ санаа',

            prof_certs_title: 'Сертификат ба шалгалтууд',
            cert_1: 'AWS Solutions Architect Associate',
            cert_2: 'AWS Cloud Practitioner',
            cert_3: 'Oracle Java SE 11 Silver',
            cert_4: 'GitHub Foundations',
            cert_5: 'Python 3 Үндсэн шалгалт',
            cert_6: 'Python Өгөгдлийн шинжилгээ',
            cert_7: 'Python Практик шалгалт',
            cert_8: 'Google Gemini Сертификат',
            cert_9: 'AI Шалгалт',
            cert_10: 'Япон хэлний JLPT N1',
            cert_11: 'TOEIC 850',

            prof_edu_title: 'Боловсролын замнал',
            prof_edu_1_year: '2020',
            prof_edu_1_text: 'Монголд ахлах сургуулиа төгссөн',
            prof_edu_2_year: '2020 – 2022',
            prof_edu_2_text: 'Завсарлагааны жил — Цар тахлын үеийн бэлтгэл',
            prof_edu_3_year: '2022',
            prof_edu_3_text: 'Японд ирсэн — Китакюшү YMCA Академи',
            prof_edu_4_year: '2022 – 2024',
            prof_edu_4_text: 'Японы Электроникийн коллеж — 2 жилийн AI хөтөлбөр',
            prof_edu_5_year: '2024 – Одоо',
            prof_edu_5_text: 'Токиогийн Олон улсын технологийн их сургууль — AI мэргэшил',
            prof_footer: 'QR Код Дижитал Профайл • 2024-2026',

            /* CONTACT */
            contact_title: 'Холбоо барих',
            contact_sub: 'Доорх сувгуудын аль нэгээр надтай чөлөөтэй холбогдоорой',

            contact_school_email: 'Сургуулийн имэйл',
            contact_personal_email: 'Хувийн имэйл',
            contact_github_note: '※ Өдөр бүр илүү сайжрахыг зорьж байна',
            contact_fb_detail: 'Facebook-ээр холбогдох',
            contact_avail: 'Холбогдох боломжтой цаг',
            contact_avail_1: 'Холбогдоход тохиромжтой цаг',
            contact_avail_2: 'Өдрийн цагаар (JST)',

            contact_btn_email: 'Имэйл илгээх',
            contact_btn_visit: 'Профайл үзэх',
            contact_btn_copy: 'Хуулах',

            contact_form_title: 'Мессеж илгээх',
            contact_label_name: 'Таны нэр',
            contact_ph_name: 'Нэрээ оруулна уу',
            contact_label_email: 'Таны имэйл',
            contact_ph_email: 'you@example.com',
            contact_label_subject: 'Гарчиг',
            contact_ph_subject: 'Ямар сэдвээр холбогдож байна вэ?',
            contact_label_msg: 'Мессеж',
            contact_ph_msg: 'Мессежээ энд бичнэ үү...',
            contact_btn_submit: 'Мессеж илгээх',
            contact_btn_sent: '✓ Имэйл илгээхэд бэлэн боллоо!',

            contact_back_home: '← Нүүр рүү буцах',
            contact_view_prof: 'Профайл үзэх →',
            contact_footer: 'Холбогдсонд баярлалаа • 2024-2026'
        }
    };

    const LANG_STORAGE_KEY = 'mendsanaa_lang';
    const BOOT_SESSION_KEY = 'mendsanaa_boot_done';

    function getCurrentLang() {
        const saved = localStorage.getItem(LANG_STORAGE_KEY);
        return (saved && TRANSLATIONS[saved]) ? saved : 'ja';
    }

    function applyLanguage(lang) {
        if (!TRANSLATIONS[lang]) lang = 'ja';
        const dict = TRANSLATIONS[lang];

        document.documentElement.lang = lang;
        localStorage.setItem(LANG_STORAGE_KEY, lang);

        const page = document.body.dataset.page || 'home';
        const titleKey = 'page_title_' + page;
        if (dict[titleKey]) {
            document.title = dict[titleKey];
        }

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            const isMatch = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isMatch);
            btn.setAttribute('aria-pressed', String(isMatch));
        });
    }

    /* =====================================================
       2. CLEAN ENGLISH LOADING SCREEN (TEXT + LOADING BAR)
          (ALWAYS IN ENGLISH)
       ===================================================== */
    const BOOT_STAGES = [
        { at: 0, text: 'Getting your face picture...' },
        { at: 12, text: 'Getting your location...' },
        { at: 25, text: 'Hacking NASA...' },
        { at: 38, text: 'Going to Mars to fetch data...' },
        { at: 52, text: 'Hacking NVIDIA to get a new GPU...' },
        { at: 65, text: 'Downloading data from databases...' },
        { at: 78, text: 'Borrowing Wi-Fi from Area 51...' },
        { at: 90, text: 'Just kidding 😄 Opening portfolio...' },
        { at: 100, text: 'Welcome!' }
    ];

    function ensureBootMarkup() {
        let overlay = document.getElementById('bootOverlay');
        if (overlay) return overlay;

        overlay = document.createElement('div');
        overlay.id = 'bootOverlay';
        overlay.className = 'boot-overlay';
        overlay.setAttribute('aria-live', 'polite');
        overlay.innerHTML = `
            <div class="boot-minimal">
                <div class="boot-headline" id="bootHeadline">Getting your face picture...</div>
                <div class="boot-progress-wrap">
                    <div class="boot-bar-track">
                        <div class="boot-bar-fill" id="bootBarFill"></div>
                    </div>
                    <div class="boot-percent" id="bootPercent">0%</div>
                </div>
            </div>
            <button type="button" class="boot-skip-btn" id="bootSkipBtn">Skip</button>
        `;
        document.body.prepend(overlay);
        return overlay;
    }

    function runBootSequence(forceReplay = false) {
        const params = new URLSearchParams(window.location.search);
        const shouldShow = forceReplay || params.get('intro') === '1' || !sessionStorage.getItem(BOOT_SESSION_KEY);

        if (!shouldShow) {
            document.documentElement.classList.remove('boot-active');
            return;
        }

        const overlay = ensureBootMarkup();
        document.documentElement.classList.add('boot-active', 'boot-mounted');
        overlay.classList.remove('is-exiting');
        overlay.classList.add('is-visible');

        const headlineEl = document.getElementById('bootHeadline');
        const barFillEl = document.getElementById('bootBarFill');
        const percentEl = document.getElementById('bootPercent');
        const skipBtn = document.getElementById('bootSkipBtn');

        headlineEl.classList.remove('is-granted', 'is-swapping');
        headlineEl.textContent = BOOT_STAGES[0].text;
        barFillEl.style.width = '0%';
        percentEl.textContent = '0%';

        let running = true;
        let progress = 0;
        let lastStageIndex = 0;
        let finishTimer = null;
        let swapTimer = null;
        let progressRaf = null;
        const totalDurationMs = 9000;
        const startTime = performance.now();

        function setHeadline(nextText, isDone) {
            clearTimeout(swapTimer);
            headlineEl.classList.add('is-swapping');
            swapTimer = setTimeout(() => {
                headlineEl.textContent = nextText;
                headlineEl.classList.toggle('is-granted', isDone);
                headlineEl.classList.remove('is-swapping');
            }, 140);
        }

        function finishBoot() {
            if (!running) return;
            running = false;
            if (progressRaf) cancelAnimationFrame(progressRaf);
            clearTimeout(finishTimer);
            clearTimeout(swapTimer);

            sessionStorage.setItem(BOOT_SESSION_KEY, '1');
            overlay.classList.add('is-exiting');
            setTimeout(() => {
                overlay.classList.remove('is-visible', 'is-exiting');
                document.documentElement.classList.remove('boot-active');
            }, 520);
        }

        skipBtn.onclick = finishBoot;

        function tickProgress(now) {
            if (!running) return;
            const elapsed = now - startTime;
            const raw = Math.min(1, elapsed / totalDurationMs);
            const eased = raw < 1 ? Math.min(99, raw * 100) : 100;
            progress = Math.max(progress, Math.round(eased));

            barFillEl.style.width = progress + '%';
            percentEl.textContent = progress + '%';

            for (let i = lastStageIndex + 1; i < BOOT_STAGES.length; i++) {
                if (progress >= BOOT_STAGES[i].at) {
                    lastStageIndex = i;
                    setHeadline(BOOT_STAGES[i].text, BOOT_STAGES[i].at === 100);
                }
            }

            if (raw < 1) {
                progressRaf = requestAnimationFrame(tickProgress);
            } else {
                finishTimer = setTimeout(finishBoot, 900);
            }
        }

        progressRaf = requestAnimationFrame(tickProgress);
    }

    /* =====================================================
       3. SOFT FLOATING PARTICLES (CLEAN & SUBTLE)
       ===================================================== */
    function initParticlesCanvas() {
        const canvas = document.getElementById('particlesCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width = 0;
        let height = 0;
        let dpr = 1;
        let particles = [];

        function setup() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = width < 640 ? 22 : 34;
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                r: Math.random() * 1.8 + 0.8,
                alpha: Math.random() * 0.38 + 0.14
            }));
        }

        setup();
        window.addEventListener('resize', setup);

        function render() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                if (!prefersReduced) {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0 || p.x > width) p.vx *= -1;
                    if (p.y < 0 || p.y > height) p.vy *= -1;
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha.toFixed(2)})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            if (!prefersReduced) {
                requestAnimationFrame(render);
            }
        }

        render();
    }

    /* =====================================================
       4. INTERACTIVE UI HELPERS
       ===================================================== */
    function initMouseGlow() {
        const glow = document.getElementById('mouseGlow');
        if (!glow) return;
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        }, { passive: true });
    }

    function initScrollReveal() {
        const items = document.querySelectorAll('.reveal');
        if (!items.length) return;

        if (!('IntersectionObserver' in window)) {
            items.forEach((el) => el.classList.add('is-in'));
            return;
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

        items.forEach((el) => io.observe(el));

        setTimeout(() => {
            items.forEach((el) => el.classList.add('is-in'));
        }, 1500);
    }

    function initRipples() {
        document.querySelectorAll('.btn, .mini-btn').forEach((btn) => {
            btn.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const circle = document.createElement('span');
                circle.className = 'ripple-circle';
                circle.style.width = circle.style.height = size + 'px';
                circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
                circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
                this.appendChild(circle);
                setTimeout(() => circle.remove(), 560);
            });
        });
    }

    let toastTimer = null;
    function showToast(message) {
        let toast = document.getElementById('cyberToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'cyberToast';
            toast.className = 'cyber-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 2100);
    }

    function initCopyButtons() {
        document.querySelectorAll('[data-copy]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const value = btn.getAttribute('data-copy');
                const lang = getCurrentLang();
                const msg = TRANSLATIONS[lang].toast_copied;

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(value).then(() => showToast(msg)).catch(() => fallbackCopy(value, msg));
                } else {
                    fallbackCopy(value, msg);
                }
            });
        });
    }

    function fallbackCopy(text, msg) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (_) {}
        ta.remove();
        showToast(msg);
    }

    function initLightbox() {
        const triggers = document.querySelectorAll('[data-lightbox-src]');
        if (!triggers.length) return;

        let modal = document.getElementById('lightboxModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'lightboxModal';
            modal.className = 'lightbox-modal';
            modal.innerHTML = `
                <div class="lightbox-stage">
                    <button type="button" class="lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>
                    <img id="lightboxImg" alt="">
                    <p class="lightbox-caption" id="lightboxCaption"></p>
                </div>
            `;
            document.body.appendChild(modal);
        }

        const imgEl = document.getElementById('lightboxImg');
        const capEl = document.getElementById('lightboxCaption');
        const closeBtn = document.getElementById('lightboxClose');

        function closeModal() {
            modal.classList.remove('is-open');
        }

        triggers.forEach((el) => {
            el.addEventListener('click', () => {
                const labelEl = el.querySelector('.cert-name');
                const caption = labelEl ? labelEl.textContent : (el.getAttribute('data-lightbox-alt') || '');
                imgEl.src = el.getAttribute('data-lightbox-src');
                imgEl.alt = caption;
                capEl.textContent = caption;
                modal.classList.add('is-open');
            });
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            const mailto = `mailto:mmendsanaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
            window.location.href = mailto;

            const submitBtn = this.querySelector('button[type="submit"]');
            const lang = getCurrentLang();
            submitBtn.textContent = TRANSLATIONS[lang].contact_btn_sent;

            setTimeout(() => {
                const currentLang = getCurrentLang();
                submitBtn.textContent = TRANSLATIONS[currentLang].contact_btn_submit;
                this.reset();
            }, 3000);
        });
    }

    /* =====================================================
       5. INITIALIZE ON DOM READY
       ===================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        applyLanguage(getCurrentLang());

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                applyLanguage(btn.getAttribute('data-lang'));
            });
        });

        document.querySelectorAll('.replay-intro-btn').forEach((btn) => {
            btn.addEventListener('click', () => runBootSequence(true));
        });

        runBootSequence(false);
        initParticlesCanvas();
        initMouseGlow();
        initScrollReveal();
        initRipples();
        initCopyButtons();
        initLightbox();
        initContactForm();
    });
})();
