"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleCategories = exports.industries = exports.solutions = exports.brands = exports.nav = void 0;
exports.nav = [
    { label: "หน้าแรก", href: "/" },
    {
        label: "เกี่ยวกับเรา",
        href: "/aboutus",
        submenu: [
            { label: "โรงเรียน และสถาบันการศึกษา", href: "/industry/education" },
            { label: "โรงแรมและห้องประชุมขนาดใหญ่", href: "/industry/hotel" },
            { label: "สำนักงานและองค์กรธุรกิจ", href: "/industry/corporate" },
            { label: "ระบบวิดีโอคอนเฟอเร้นซ์ เพื่อทุกหน่วยงาน", href: "/industry/video-conference" },
        ],
    },
    {
        label: "โซลูชั่นของเรา",
        href: "/solutions",
        submenu: [
            {
                label: "LED Display",
                href: "/led-display",
                desc: "จอ LED ระดับมืออาชีพสำหรับองค์กร",
                image: "https://sefxaafqvjpmjmewsfuw.supabase.co/storage/v1/object/public/admin-media/legacy-imports/www.matrixintertrade.com/a6492e1dbcf9-led_display1.png",
            },
            {
                label: "Interactive Display",
                href: "/interactive-display",
                desc: "จอสัมผัสอัจฉริยะสำหรับการเรียนและประชุม",
                image: "https://sefxaafqvjpmjmewsfuw.supabase.co/storage/v1/object/public/admin-media/legacy-imports/www.matrixintertrade.com/f7c323982191-interactive_display12.png",
            },
            {
                label: "Projector",
                href: "/projector",
                desc: "โปรเจกเตอร์ความสว่างสูง",
                image: "https://sefxaafqvjpmjmewsfuw.supabase.co/storage/v1/object/public/admin-media/legacy-imports/www.matrixintertrade.com/3ddadb3d3dff-projector11.png",
            },
            {
                label: "Wireless Presentation",
                href: "/wireless-presentation",
                desc: "ระบบนำเสนอไร้สาย",
                image: "https://sefxaafqvjpmjmewsfuw.supabase.co/storage/v1/object/public/admin-media/legacy-imports/www.matrixintertrade.com/55c7fda91436-wireless_presentation1.png",
            },
            {
                label: "AV Solutions",
                href: "/av-solutions",
                desc: "ออกแบบระบบภาพและเสียงครบวงจร",
                image: "https://sefxaafqvjpmjmewsfuw.supabase.co/storage/v1/object/public/admin-media/legacy-imports/www.matrixintertrade.com/7b9fc0dd456f-av_solutions1.png",
            },
        ],
    },
    {
        label: "ผลงาน",
        href: "/brands",
        submenu: [
            { label: "Unilumin", href: "/brands/unilumin" },
            { label: "KramerAV", href: "/brands/kramerav" },
            { label: "Grandview", href: "/brands/grandview" },
            { label: "Persona", href: "/brands/persona" },
            { label: "tranScreen", href: "/brands/transcreen" },
        ],
    },
    {
        label: "สินค้า",
        href: "/category/0",
        submenu: [
            { label: "Unilumin", href: "/category/288194" },
            { label: "Kramer", href: "/category/235610" },
            { label: "Persona", href: "/category/288209" },
            { label: "tranScreen", href: "/category/288210" },
            { label: "Grandview", href: "/category/237068" },
            { label: "HDMI Cable", href: "/category/237477" },
            { label: "Product Line", href: "/product-line" },
        ],
    },
    { label: "ติดต่อเรา", href: "/contactus" },
    { label: "บทความ", href: "/blog" },
];
exports.brands = [
    {
        slug: "unilumin",
        name: "Unilumin",
        category: "LED Display",
        desc: "ผู้นำระดับโลกด้านจอ LED Display คุณภาพสูง สำหรับ Indoor และ Outdoor",
        color: "from-blue-500 to-cyan-500",
    },
    {
        slug: "kramerav",
        name: "KramerAV",
        category: "AV / Switching",
        desc: "อุปกรณ์ AV และระบบ switching ระดับมืออาชีพจากอิสราเอล",
        color: "from-indigo-500 to-blue-500",
    },
    {
        slug: "grandview",
        name: "Grandview",
        category: "Projector Screen",
        desc: "จอรับภาพระดับพรีเมียมสำหรับห้องประชุมและโฮมเธียเตอร์",
        color: "from-slate-500 to-slate-700",
    },
    {
        slug: "persona",
        name: "Persona",
        category: "Interactive Display",
        desc: "จอสัมผัสอัจฉริยะอันดับ 1 จากไต้หวัน รับรอง Google EDLA",
        color: "from-cyan-500 to-teal-500",
    },
    {
        slug: "transcreen",
        name: "tranScreen",
        category: "Wireless Presentation",
        desc: "ระบบนำเสนอไร้สายสำหรับห้องประชุมยุคใหม่",
        color: "from-sky-500 to-blue-600",
    },
];
exports.solutions = [
    {
        slug: "led-display",
        title: "LED Display",
        icon: "Monitor",
        desc: "จอ LED Indoor / Outdoor / All-in-One สำหรับองค์กร ห้องประชุม และงานอีเวนต์",
    },
    {
        slug: "interactive-display",
        title: "Interactive Display",
        icon: "Hand",
        desc: "จอสัมผัสอัจฉริยะ รองรับการเรียนการสอนและการประชุมแบบ Active",
    },
    {
        slug: "projector",
        title: "Projector",
        icon: "Projector",
        desc: "โปรเจกเตอร์ความสว่างสูง คมชัด พร้อมจอรับภาพคุณภาพ",
    },
    {
        slug: "wireless-presentation",
        title: "Wireless Presentation",
        icon: "Wifi",
        desc: "ระบบนำเสนอไร้สาย รองรับ BYOD ทุกอุปกรณ์",
    },
    {
        slug: "av-solutions",
        title: "AV Solutions",
        icon: "Cable",
        desc: "ออกแบบและติดตั้งระบบภาพและเสียงครบวงจรสำหรับองค์กร",
    },
];
exports.industries = [
    {
        slug: "education",
        title: "โรงเรียน และสถาบันการศึกษา",
        icon: "GraduationCap",
        desc: "Smart Classroom พร้อมจอ Interactive และระบบนำเสนอ",
    },
    {
        slug: "hotel",
        title: "โรงแรมและห้องประชุมขนาดใหญ่",
        icon: "Building2",
        desc: "ระบบ AV ครบวงจรสำหรับ Ballroom และห้องสัมมนา",
    },
    {
        slug: "corporate",
        title: "สำนักงานและองค์กรธุรกิจ",
        icon: "Briefcase",
        desc: "Smart Meeting Room รองรับ Hybrid Meeting",
    },
    {
        slug: "government",
        title: "หน่วยงานรัฐ",
        icon: "Landmark",
        desc: "จอ LED Outdoor และห้องประชุมระดับองค์กรรัฐ",
    },
    {
        slug: "hospital",
        title: "โรงพยาบาล / Smart Hospital",
        icon: "HeartPulse",
        desc: "ระบบจัดการข้อมูลและประชุมทางการแพทย์",
    },
    {
        slug: "video-conference",
        title: "ห้องประชุม Hybrid Meeting",
        icon: "Video",
        desc: "ระบบ Video Conference เพื่อทุกหน่วยงาน",
    },
];
exports.articleCategories = [
    { slug: "led-display", label: "LED Display" },
    { slug: "interactive-display", label: "Interactive Display" },
    { slug: "smart-classroom", label: "Smart Classroom" },
    { slug: "meeting-room", label: "Meeting Room & AV" },
    { slug: "knowledge", label: "Technology Knowledge" },
    { slug: "case-study", label: "Case Study / News" },
];
