import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { I as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { s as supabase } from "./client-gV3vm9Ey.mjs";
import { R as Root, P as Portal, a as Content, C as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { a2 as Phone, aa as Sparkles, k as ChevronDown, b as ArrowUpRight, W as MapPin, V as Mail, F as Facebook, aq as Youtube, _ as Music2, a7 as Send, a3 as PhoneCall, t as FilePlusCorner, a as ArrowUp, ap as X, S as LoaderCircle, E as ExternalLink, m as ChevronRight, l as ChevronLeft, f as Bot, X as MessageCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, a as arrayType, r as recordType, u as unknownType, e as enumType } from "../_libs/zod.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const matrixLogo = "/assets/matrix-logo-CfrBMaz2.png";
const LanguageContext = reactExports.createContext(null);
const STORAGE_KEY$1 = "mxi.lang";
function LanguageProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("TH");
  reactExports.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY$1);
      if (saved === "TH" || saved === "EN") setLangState(saved);
    } catch {
    }
  }, []);
  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY$1, l);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LanguageContext.Provider,
    {
      value: { lang, setLang, toggle: () => setLang(lang === "TH" ? "EN" : "TH") },
      children
    }
  );
}
function useLanguage() {
  const ctx = reactExports.useContext(LanguageContext);
  if (!ctx) return { lang: "TH", setLang: () => {
  }, toggle: () => {
  } };
  return ctx;
}
function t(lang, th, en) {
  return lang === "EN" ? en : th;
}
const nav = [
  { label: "หน้าแรก", labelEn: "Home", href: "/" },
  {
    label: "เกี่ยวกับเรา",
    labelEn: "About Us",
    href: "/aboutus",
    submenu: [
      { label: "โรงเรียน และสถาบันการศึกษา", labelEn: "Schools & Education", href: "/industry/education" },
      { label: "โรงแรมและห้องประชุมขนาดใหญ่", labelEn: "Hotels & Convention Centers", href: "/industry/hotel" },
      { label: "สำนักงานและองค์กรธุรกิจ", labelEn: "Corporate Offices", href: "/industry/corporate" },
      { label: "ระบบวิดีโอคอนเฟอเร้นซ์ เพื่อทุกหน่วยงาน", labelEn: "Video Conferencing Systems", href: "/industry/video-conference" }
    ]
  },
  {
    label: "โซลูชั่นของเรา",
    labelEn: "Our Solutions",
    href: "/solutions",
    submenu: [
      {
        label: "LED Display",
        labelEn: "LED Display",
        href: "/led-display",
        desc: "จอ LED ระดับมืออาชีพสำหรับองค์กร",
        descEn: "Professional LED Displays for Enterprises",
        image: "/legacy-imports/a6492e1dbcf9-led_display1.png"
      },
      {
        label: "Interactive Display",
        labelEn: "Interactive Display",
        href: "/interactive-display",
        desc: "จอสัมผัสอัจฉริยะสำหรับการเรียนและประชุม",
        descEn: "Smart Touch Displays for Active Learning & Meetings",
        image: "/legacy-imports/f7c323982191-interactive_display12.png"
      },
      {
        label: "Projection Screen",
        labelEn: "Projection Screen",
        href: "/projector",
        desc: "โปรเจกเตอร์ความสว่างสูง",
        descEn: "High Brightness Projectors",
        image: "/legacy-imports/3ddadb3d3dff-projector11.png"
      },
      {
        label: "Wireless Presentation",
        labelEn: "Wireless Presentation",
        href: "/wireless-presentation",
        desc: "ระบบนำเสนอไร้สาย",
        descEn: "Wireless Presentation Systems",
        image: "/legacy-imports/55c7fda91436-wireless_presentation1.png"
      },
      {
        label: "AV Solutions",
        labelEn: "AV Solutions",
        href: "/av-solutions",
        desc: "ออกแบบระบบภาพและเสียงครบวงจร",
        descEn: "Complete Audio & Visual System Integration",
        image: "/legacy-imports/7b9fc0dd456f-av_solutions1.png"
      }
    ]
  },
  {
    label: "ผลงาน",
    labelEn: "Our Brands",
    href: "/brands"
  },
  {
    label: "สินค้า",
    labelEn: "Products",
    href: "/category/0",
    submenu: [
      { label: "Unilumin", labelEn: "Unilumin", href: "/category/288194" },
      { label: "Kramer", labelEn: "Kramer", href: "/category/235610" },
      { label: "Persona", labelEn: "Persona", href: "/category/288209" },
      { label: "tranScreen", labelEn: "tranScreen", href: "/category/288210" },
      { label: "Grandview", labelEn: "Grandview", href: "/category/237068" },
      { label: "HDMI Cable", labelEn: "HDMI Cable", href: "/category/237477" },
      { label: "Product Line", labelEn: "Product Line", href: "/product-line" }
    ]
  },
  { label: "ติดต่อเรา", labelEn: "Contact Us", href: "/contactus" },
  { label: "บทความ", labelEn: "Articles", href: "/blog" }
];
const brands = [
  {
    slug: "unilumin",
    name: "Unilumin",
    category: "LED Display",
    desc: "ผู้นำระดับโลกด้านจอ LED Display คุณภาพสูง สำหรับ Indoor และ Outdoor",
    descEn: "Global leader in high-quality Indoor and Outdoor LED Displays",
    color: "from-blue-500 to-cyan-500"
  },
  {
    slug: "kramerav",
    name: "KramerAV",
    category: "AV / Switching",
    desc: "อุปกรณ์ AV และระบบ switching ระดับมืออาชีพจากอิสราเอล",
    descEn: "Professional AV equipment and switching systems from Israel",
    color: "from-indigo-500 to-blue-500"
  },
  {
    slug: "grandview",
    name: "Grandview",
    category: "Projector Screen",
    desc: "จอรับภาพระดับพรีเมียมสำหรับห้องประชุมและโฮมเธียเตอร์",
    descEn: "Premium projector screens for meeting rooms and home theaters",
    color: "from-slate-500 to-slate-700"
  },
  {
    slug: "persona",
    name: "Persona",
    category: "Interactive Display",
    desc: "จอสัมผัสอัจฉริยะอันดับ 1 จากไต้หวัน รับรอง Google EDLA",
    descEn: "No.1 Interactive Display from Taiwan with Google EDLA certification",
    color: "from-cyan-500 to-teal-500"
  },
  {
    slug: "transcreen",
    name: "tranScreen",
    category: "Wireless Presentation",
    desc: "ระบบนำเสนอไร้สายสำหรับห้องประชุมยุคใหม่",
    descEn: "Wireless presentation systems for modern meeting rooms",
    color: "from-sky-500 to-blue-600"
  }
];
const solutions = [
  {
    slug: "led-display",
    title: "LED Display",
    titleEn: "LED Display",
    icon: "Monitor",
    desc: "จอ LED Indoor / Outdoor / All-in-One สำหรับองค์กร ห้องประชุม และงานอีเวนต์",
    descEn: "Indoor / Outdoor / All-in-One LED Displays for enterprises, meeting rooms, and events"
  },
  {
    slug: "interactive-display",
    title: "Interactive Display",
    titleEn: "Interactive Display",
    icon: "Hand",
    desc: "จอสัมผัสอัจฉริยะ รองรับการเรียนการสอนและการประชุมแบบ Active",
    descEn: "Smart touch displays supporting active learning and meetings"
  },
  {
    slug: "projector",
    title: "Projection Screen",
    titleEn: "Projection Screen",
    icon: "Projector",
    desc: "โปรเจกเตอร์ความสว่างสูง คมชัด พร้อมจอรับภาพคุณภาพ",
    descEn: "High brightness, clear projectors with quality screens"
  },
  {
    slug: "wireless-presentation",
    title: "Wireless Presentation",
    titleEn: "Wireless Presentation",
    icon: "Wifi",
    desc: "ระบบนำเสนอไร้สาย รองรับ BYOD ทุกอุปกรณ์",
    descEn: "Wireless presentation systems supporting BYOD on all devices"
  },
  {
    slug: "av-solutions",
    title: "AV Solutions",
    titleEn: "AV Solutions",
    icon: "Cable",
    desc: "ออกแบบและติดตั้งระบบภาพและเสียงครบวงจรสำหรับองค์กร",
    descEn: "Complete audio and visual system design and installation for enterprises"
  }
];
const industries = [
  {
    slug: "education",
    title: "โรงเรียน และสถาบันการศึกษา",
    titleEn: "Schools & Education",
    icon: "GraduationCap",
    desc: "Smart Classroom พร้อมจอ Interactive และระบบนำเสนอ",
    descEn: "Smart Classrooms with Interactive Displays and presentation systems"
  },
  {
    slug: "hotel",
    title: "โรงแรมและห้องประชุมขนาดใหญ่",
    titleEn: "Hotels & Convention Centers",
    icon: "Building2",
    desc: "ระบบ AV ครบวงจรสำหรับ Ballroom และห้องสัมมนา",
    descEn: "Comprehensive AV systems for Ballrooms and seminar rooms"
  },
  {
    slug: "corporate",
    title: "สำนักงานและองค์กรธุรกิจ",
    titleEn: "Corporate Offices",
    icon: "Briefcase",
    desc: "Smart Meeting Room รองรับ Hybrid Meeting",
    descEn: "Smart Meeting Rooms supporting Hybrid Meetings"
  },
  {
    slug: "government",
    title: "หน่วยงานรัฐ",
    titleEn: "Government Agencies",
    icon: "Landmark",
    desc: "จอ LED Outdoor และห้องประชุมระดับองค์กรรัฐ",
    descEn: "Outdoor LED Displays and enterprise-grade meeting rooms for government"
  },
  {
    slug: "hospital",
    title: "โรงพยาบาล / Smart Hospital",
    titleEn: "Smart Hospitals",
    icon: "HeartPulse",
    desc: "ระบบจัดการข้อมูลและประชุมทางการแพทย์",
    descEn: "Data management and medical conferencing systems"
  },
  {
    slug: "video-conference",
    title: "ห้องประชุม Hybrid Meeting",
    titleEn: "Hybrid Meeting Rooms",
    icon: "Video",
    desc: "ระบบ Video Conference เพื่อทุกหน่วยงาน",
    descEn: "Video Conference systems for all departments"
  }
];
const articleCategories = [
  { slug: "led-display", label: "LED Display", labelEn: "LED Display" },
  { slug: "interactive-display", label: "Interactive Display", labelEn: "Interactive Display" },
  { slug: "smart-classroom", label: "Smart Classroom", labelEn: "Smart Classroom" },
  { slug: "meeting-room", label: "Meeting Room & AV", labelEn: "Meeting Room & AV" },
  { slug: "knowledge", label: "Technology Knowledge", labelEn: "Technology Knowledge" },
  { slug: "case-study", label: "Case Study / News", labelEn: "Case Study / News" }
];
const brandIntrosByCategoryId = {
  "288194": {
    brandSlug: "unilumin",
    tagline: "จอ LED Display อันดับ 1 ของโลก | ความเชี่ยวชาญระดับ Broadcast",
    description: "Unilumin — ผู้ผลิตและผู้นำจอ LED Display ระดับโลกจากเมืองเซินเจิ้น ประเทศจีน ก่อตั้งมาตั้งแต่ปี 2004 ด้วยประสบการณ์กว่า 20 ปี ศรัทธาเลือกโดยองค์กรชั้นนำกว่า 100 ประเทศทั่วโลก\n\nUnilumin ขึ้นชื่อในการสร้างสรรค์โซลูชันจอ LED ที่นำเสนอมาตรฐาน Broadcast กับความหลากหลายของการใช้งาน ตั้งแต่:\n• จอ LED Indoor ความละเอียดสูง (Fine Pitch P0.9–P2.5) สำหรับห้องประชุมและ Auditorium\n• จอ LED Outdoor ความสว่างสูง (High Brightness) สำหรับสนามกีฬาและสถานที่สาธารณะ\n• จอ All-in-One ครบชุด สำหรับห้องประชุมยุคใหม่\n• จอ LED Rental & Staging สำหรับงานอีเวนต์และ Virtual Production\n• จอ LED Creative & Transparent สำหรับงานตกแต่งและ Retail\n\nMatrix Intertrade เป็นผู้จำหน่าย Unilumin ที่ได้รับอนุญาตอย่างเป็นทางการ (Authorized Distributor) ในประเทศไทย พร้อมให้บริการครบวงจร: ให้คำปรึกษา → ออกแบบโซลูชัน → ติดตั้งอย่างมืออาชีพ → บำรุงรักษาและสนับสนุนระยะยาว",
    highlights: [
      "ผู้นำตลาด LED Display ระดับโลก: ปฏิบัติการใน 100+ ประเทศ",
      "คุณภาพ Broadcast-Grade: ความสว่างและสีทรูถึง Cinema Standards",
      "Pixel Pitch เลือกได้ P0.9 ถึง P10 สำหรับทุกระยะการมองและการใช้งาน",
      "โซลูชันครบขัด: ให้คำปรึกษา + ออกแบบ + ติดตั้ง + บำรุงรักษา",
      "รับประกันยาวนาน + สนับสนุนหลังการขายในประเทศไทย"
    ],
    bestFor: [
      "ห้องประชุมและ Auditorium ขององค์กร",
      "ห้องโถงด้านล่างและ Showroom",
      "ป้าย Digital Signage / โฆษณากลางแจ้ง (DOOH)",
      "สนามกีฬา, Event Venue, คอนเสิร์ต",
      "Studio Virtual Production & Broadcast",
      "ห้องเรียนอัจฉริยะและสถาบันการศึกษา"
    ],
    origin: "Shenzhen, China (Est. 2004)",
    productCategories: [
      {
        name: "LED Indoor Fine Pitch (P0.9–P2.5)",
        desc: "จอ LED ความละเอียดสูงสุด สำหรับห้องประชุม, Lobby, Showroom, Theater ให้ภาพคมชัดระดับ 4K/8K นั่งชิดจอได้ ความสว่าง 400–600 nits ทั่วไป สีคมชัดระดับ Broadcast"
      },
      {
        name: "LED Outdoor High Brightness",
        desc: "จอ LED กลางแจ้งความสว่างสูง (1200–3000 nits) ทนแดด ทนฝน ทนอากาศเค็ม เหมาะสำหรับป้ายโฆษณา DOOH, งานอีเวนต์, สนามกีฬา"
      },
      {
        name: "LED All-in-One Meeting Display (UMini)",
        desc: 'จอ LED ประชุมแบบครบชุด ไม่ต้องต่ออุปกรณ์เพิ่ม Controller ในตัว ขนาด 108"–163" รองรับ 9 อุปกรณ์เชื่อมต่อพร้อมกัน ทดแทนโปรเจกเตอร์ได้เลย'
      },
      {
        name: "LED Rental & Staging (Modular)",
        desc: "จอ LED แบบถอดประกอบง่าย สำหรับงานอีเวนต์, คอนเสิร์ต, Virtual Production มีให้เลือกหลายเบอร์และ Configuration, ติดตั้งรวดเร็ว น้ำหนักเบา"
      },
      {
        name: "LED Creative & Transparent (Decorative)",
        desc: "จอ LED โปร่งใสและรูปทรงพิเศษ สำหรับงานตกแต่ง Retail, Showroom, Exhibition, Shopping Mall กลมกลืนสถาปัตยกรรม"
      }
    ]
  },
  "235610": {
    brandSlug: "kramerav",
    tagline: "ผู้นำด้านอุปกรณ์ AV ระดับมืออาชีพ | 40+ ปีของนวัตกรรม",
    description: "Kramer AV — ผู้บุกเบิกในอุตสาหกรรมภาพและเสียงระดับมืออาชีพจากประเทศอิสราเอล ด้วยประสบการณ์กว่า 40 ปี ตั้ง​แต่ ค.ศ. 1981 Kramer สร้างสรรค์ผลิตภัณฑ์และโซลูชันที่เชื่อถือได้ ตอบโจทย์ความต้องการของทุกธุรกิจและอุตสาหกรรม\n\nKramer นำเสนออุปกรณ์ AV ที่ครบวงจร ตั้งแต่:\n• Switcher & Scaler — อุปกรณ์สลับและปรับสัญญาณ 4K/8K\n• AV over IP (KDS) — ระบบส่งสัญญาณคุณภาพสูงผ่านเครือข่าย IP\n• Wireless Presentation (VIA) — โซลูชันแชร์เนื้อหาไร้สาย BYOD\n• Control System — ระบบควบคุมอัจฉริยะแบบคลาวด์\n• Audio DSP & Amplifier — ระบบเสียงระดับมืออาชีพ\n• KVM Solutions — การควบคุมคอมพิวเตอร์จากระยะไกล\n\nMatrix Intertrade เป็น Master Distributor of Kramer Thailand พร้อมให้ความเชี่ยวชาญด้านระบบ AV คำปรึกษา ออกแบบโซลูชัน และบริการติดตั้ง + บำรุงรักษาอย่างเป็นมืออาชีพ",
    highlights: [
      "ผู้บุกเบิกระบบ AV มืออาชีพ กว่า 40 ปี",
      "รองรับ 4K60 4:4:4 HDR และ 8K ทุก Pipeline",
      "ระบบ AV over IP (KDS) มาตรฐานสำหรับขยายระยะและปรับขนาด",
      "Kramer Control: ระบบควบคุม Cloud-based ที่ยืดหยุ่นและง่ายต่อการใช้งาน",
      "Kramer VIA: Wireless Presentation ที่รองรับทุกอุปกรณ์ (BYOD)",
      "รับประกันสินค้าสูงสุด 7 ปี + บริการบำรุงรักษาในประเทศไทย"
    ],
    bestFor: [
      "ห้องประชุมองค์กรขนาดเล็ก-ใหญ่",
      "Smart Classroom / Lecture Hall / สถาบันการศึกษา",
      "Control Room / Command Center / Data Center",
      "Hybrid Meeting Room / Video Conference",
      "โรงแรมและห้องประชุมขนาดใหญ่",
      "สำนักงานและระบบ Enterprise AV"
    ],
    origin: "Israel (Est. 1981)",
    productCategories: [
      {
        name: "Switcher & Scaler",
        desc: "อุปกรณ์สลับและปรับสัญญาณภาพ/เสียง รองรับ 4K/8K HDR ให้ประสิทธิภาพสูงสำหรับห้องประชุม Auditorium และงาน Presentation ระดับโลก"
      },
      {
        name: "AV over IP (KDS)",
        desc: "ระบบส่งสัญญาณ AV คุณภาพระดับ Broadcast ผ่านเครือข่าย IP มาตรฐาน รองรับ 4K60 HDR ส่งได้ระยะไกลไม่จำกัด ผ่านสาย LAN ธรรมดา สามารถปรับขนาดระบบได้อย่างยืดหยุ่น"
      },
      {
        name: "Wireless Presentation (VIA)",
        desc: "ระบบนำเสนอไร้สาย BYOD ที่รองรับ Windows, macOS, iOS, Android เชื่อมต่อด้วยปุ่มเดียวหรือผ่านแอป แชร์หน้าจอ 4K ได้พร้อมกันหลายเครื่อง สำหรับห้องประชุม Smart Classroom และ Collaboration"
      },
      {
        name: "Extender & Distribution",
        desc: "อุปกรณ์ขยายและกระจายสัญญาณ HDMI / HDBaseT / USB ระยะไกลสูงสุด 100+ เมตร รองรับ 4K/8K มีตัวเลือก Fiber Optic สำหรับระยะทางไกล"
      },
      {
        name: "Control System (Kramer Control)",
        desc: "ระบบควบคุม AV ที่ใช้งานง่ายและยืดหยุ่น บนแพลตฟอร์มคลาวด์ สั่งงานอุปกรณ์ AV ทั้งหมดจาก Touch Panel หรือ Mobile App ลด​ความยุ่งยากในการจัดการห้องประชุม"
      },
      {
        name: "Audio DSP & Amplifier",
        desc: "ระบบเสียงระดับมืออาชีพ ทั้ง DSP Processor, Mixer, Digital Amplifier สำหรับห้องประชุม Auditorium และ Large Venue โดยรายละเอียดและความชัดของเสียง"
      },
      {
        name: "KVM Solutions",
        desc: "ระบบควบคุมคอมพิวเตอร์หลายเครื่องจากระยะไกล ด้วยชุดคีย์บอร์ด เมาส์ จอภาพเพียงชุดเดียว เหมาะสำหรับ Control Room, Data Center, Security Center, Broadcast Studio"
      }
    ]
  },
  "288209": {
    brandSlug: "persona",
    tagline: "ผู้นำจอสัมผัสอัจฉริยะ #1 จากไต้หวัน | เทคโนโลยีล้ำสมัยสำหรับการศึกษาและธุรกิจยุคใหม่",
    description: "Persona — แบรนด์จอ Interactive อันดับ 1 จากประเทศไต้หวัน ผู้บุกเบิกจอสัมผัสอัจฉริยะด้วยเทคโนโลยีที่ล้ำสมัยและคุณภาพที่เชื่อถือได้ Persona มอบประสบการณ์การใช้งานที่ราบรื่น มีประสิทธิภาพ และตอบโจทย์การใช้งานที่หลากหลาย ทั้งด้านการศึกษา ธุรกิจ และความบันเทิง\n\nจอ Persona Interactive ออกแบบมาเพื่อห้องเรียนยุคใหม่ (Smart Classroom) และห้องประชุม Hybrid Meeting โดยเฉพาะ มาพร้อม:\n• ความละเอียด 4K UHD (3840 x 2160) — ภาพคมชัด สดใส รายละเอียดครบถ้วน\n• ระบบปฏิบัติการ Android ในตัว (Android 11/14 EDLA) — ติดตั้ง Apps หลากหลายได้\n• MiraAir Screen Mirroring — แชร์หน้าจอจาก 9 อุปกรณ์พร้อมกัน บวก Touch-Back\n• DMS+ (Classroom Management) — บริหารจัดการจอจากระยะไกลผ่านเครือข่าย\n• AI Quiz Generator — เครื่องมือสำหรับสร้างแบบทดสอบและระบบจัดการห้องเรียนอินเตอร์แอคทีฟ\n• ดีไซน์ขอบจอบาง — มอบพื้นที่การแสดงผลสูงสุดพร้อมรูปลักษณ์ทันสมัยและสวยงาม\n\nMatrix Intertrade เป็นตัวแทนจำหน่าย Persona อย่างเป็นทางการในประเทศไทย พร้อมให้บริการจอสัมผัสอัจฉริยะที่ครบวงจร ตั้งแต่คำปรึกษา ติดตั้ง จนถึงบำรุงรักษาแบบมืออาชีพ",
    highlights: [
      "ผู้นำด้านจอสัมผัสอัจฉริยะจากไต้หวัน ด้วยนวัตกรรมเทคโนโลยีสมัยใหม่",
      "รับรอง Google EDLA — ใช้ Google Workspace, Classroom, Meet ได้แบบ Native",
      "ความละเอียด 4K UHD — ภาพคมชัด สดใส ถนอมสายตา Anti-glare",
      "Multi-touch 40 จุด พร้อม MiraAir (9 อุปกรณ์ พร้อมกัน) — ไร้สายหรือ USB",
      "DMS+ & AI Quiz Generator — บริหารจัดการห้องเรียนจากระยะไกล",
      'ขนาดหลากหลาย: 70", 75", 86", 110" — เลือกเหมาะกับพื้นที่'
    ],
    bestFor: [
      "ห้องเรียน K-12 / มหาวิทยาลัย / Smart Classroom",
      "ห้องประชุม Hybrid Meeting ขององค์กร",
      "ห้อง Training / Lecture Hall / Auditorium",
      "ห้องประชุมองค์กรขนาดกลาง-ใหญ่",
      "ห้อง Brainstorming & Creative Workshop",
      "สถาบันการศึกษาและศูนย์ฝึกอบรม"
    ],
    origin: "Taiwan",
    productCategories: [
      {
        name: "Interactive Flat Panel 4K (KTA-PRO-FULL)",
        desc: 'จอสัมผัส 4K UHD ขนาด 70", 75", 86", 110" รองรับ Multi-touch 40 จุด เขียนลื่นเหมือนกระดาษ มาพร้อม Android 14 EDLA ใช้ Google Workspace / Classroom / Meet ได้แบบ Native พร้อมซอฟต์แวร์ Whiteboard และ Screen Share ในตัว'
      },
      {
        name: "DMS+ (Classroom Management System)",
        desc: "ระบบจัดการห้องเรียนอินเตอร์แอคทีฟ บริหารจัดการจอจากระยะไกลผ่านเครือข่าย ดูแลสถานะจอทั้งหมด ปรับปรุงฟิร์มแวร์ และจัดการแอปพลิเคชัน ทั่วทั้งองค์กรได้ง่าย"
      },
      {
        name: "MiraAir Screen Mirroring",
        desc: "ระบบแชร์หน้าจอไร้สาย BYOD รองรับทุกระบบปฏิบัติการ (Windows/macOS/iOS/Android) แชร์ได้พร้อมกัน 9 อุปกรณ์ เมาส์/คีย์บอร์ดควบคุมได้จากจอ Touch-Back, USB Plug & Play ที่ไม่ต้องซอฟต์แวร์"
      },
      {
        name: "AI Quiz Generator & Interactive Tools",
        desc: "เครื่องมือสร้างแบบทดสอบ Quiz ด้วย AI, Whiteboard, Annotation Tools, Polling & Voting, Recording Video Lecture สำหรับการสอนแบบ Active Learning ที่มีประสิทธิภาพ"
      },
      {
        name: "OPS PC & Advanced Connectivity",
        desc: "รองรับการต่ออุปกรณ์ภายนอก ท่า USB ที่ครบครัน (USB-C, HDMI, Audio, LAN) Slot-in PC ขนาดเล็ก ต่ออย่างยืดหยุ่นกับสิ่งแวดล้อม"
      }
    ]
  },
  "288210": {
    brandSlug: "transcreen",
    tagline: "ระบบ Wireless Presentation สำหรับห้องประชุมยุคใหม่",
    description: "tranScreen — ยกระดับการทำงานร่วมกันและการนำเสนอของคุณด้วยโซลูชันการแชร์หน้าจอไร้สายที่พัฒนาโซลูชันฮาร์ดแวร์และซอฟต์แวร์เอง เพื่อการเชื่อมต่อที่ราบรื่น รองรับทุกระบบปฏิบัติการ (BYOD) ทั้ง Windows, macOS, iOS และ Android เชื่อมต่อได้ง่ายทั้งแบบปุ่มเดียวหรือผ่านแอป แชร์หน้าจอได้พร้อมกันหลายเครื่อง และรองรับ Video Conference ด้วยกล้อง USB ที่ต่อกับจอประชุม",
    highlights: [
      "แชร์หน้าจอไร้สายได้ราบรื่นจากทุกอุปกรณ์",
      "รองรับ Windows / macOS / iOS / Android และอุปกรณ์อัจฉริยะ",
      "แชร์หน้าจอพร้อมกันได้หลายเครื่อง โดยไม่ต้องติดตั้งซอฟต์แวร์",
      "รองรับ Video Conference และ USB Camera สำหรับ Hybrid Meeting",
      "ติดตั้งง่าย ใช้งานได้ทันที ลดเวลาเตรียมการก่อนการประชุม"
    ],
    bestFor: [
      "ห้องประชุมขนาดเล็ก-กลาง",
      "Huddle Room",
      "ห้อง Training",
      "Co-working Space",
      "Hybrid Meeting Room",
      "ห้องเรียนยุคใหม่"
    ],
    productCategories: [
      {
        name: "Wireless Presentation System",
        desc: "ตัวรับ-ส่งสัญญาณไร้สาย BYOD แชร์จอจาก Laptop / มือถือ ไปยังจอห้องประชุม รองรับ 4K และ Video Conference"
      },
      {
        name: "Wireless Video Collaboration",
        desc: "ระบบ Video Conference ไร้สาย รองรับ USB Camera และไมค์ ช่วยให้การประชุม Hybrid เป็นเรื่องง่ายและสะดวก"
      },
      {
        name: "Transmitter & Dongle",
        desc: "ตัวส่งสัญญาณ USB-C / HDMI Plug & Play กดปุ่มเดียวเพื่อแชร์หน้าจอ ไม่ต้องติดตั้งซอฟต์แวร์"
      }
    ]
  },
  "237068": {
    brandSlug: "grandview",
    tagline: "ผู้นำด้านจอโปรเจคเตอร์และจอฉายภาพคุณภาพสูง | นวัตกรรมจากไต้หวัน",
    description: "Grandview — ผู้บุกเบิกจอโปรเจคเตอร์ระดับโลกจากไต้หวัน ด้วยการเชี่ยวชาญในการผลิตจอฉายภาพและนวัตกรรมเทคโนโลยีสมัยใหม่ Grandview มอบประสบการณ์การรับชมภาพที่เหนือระดับ ตั้งแต่โฮมเธียเตอร์ระดับพรีเมียมไปจนถึงระบบการนำเสนอระดับมืออาชีพสำหรับองค์กร\n\nจอ Grandview ออกแบบมาเพื่อความยืดหยุ่นและประสิทธิภาพสูงสุด ด้วยหลากหลายประเภทที่ครอบคลุมทุกความต้องการ:\n• จอ Fixed Frame — ติดตั้งถาวร ภาพตึงสมบูรณ์แบบสำหรับ Home Theater\n• จอ Electric/Motorized — ม้วนเก็บอัตโนมัติ ประหยัดพื้นที่สำหรับห้องประชุม\n• จอ Manual — ดึงมือง่ายและทนทาน ประหยัดราคา\n• จอ Portable — น้ำหนักเบา พกพาสะดวก เหมาะสำหรับการนำเสนอเคลื่อนที่\n• จอ ALR (Ambient Light Rejecting) — เฉพาะตัวสะท้อนแสงแวดล้อม คมชัดแม้มีแสงสว่าง\n\nMatrix Intertrade เป็นตัวแทนจำหน่าย Grandview อย่างเป็นทางการในประเทศไทย พร้อมให้คำปรึกษา ออกแบบโซลูชัน และบริการติดตั้ง รวมทั้งสนับสนุนหลังการขายอย่างเป็นมืออาชีพ",
    highlights: [
      "ผู้นำตลาดจอโปรเจคเตอร์ระดับโลก ด้วยนวัตกรรมเทคโนโลยีสมัยใหม่",
      "เทคโนโลยี ALR (Ambient Light Rejecting) — ภาพคมชัดแม้ห้องมีแสงสว่าง",
      "วิศวกรรมความแม่นยำและการผลิต — ผ้าจอตึงเรียบสมบูรณ์แบบ มอเตอร์เงียบและทนทาน",
      "ความยืดหยุ่นในเลือกประเภท — Fixed Frame, Motorized, Manual, Portable, ALR",
      "บริการครบวงจร: ปรึกษา → ออกแบบ → ติดตั้ง → บำรุงรักษาในประเทศไทย"
    ],
    bestFor: [
      "โฮมเธียเตอร์ระดับพรีเมียม",
      "ห้องประชุมขององค์กรขนาดเล็ก-ใหญ่",
      "ห้องเรียน / ห้อง Training / Lecture Hall",
      "Auditorium และสถาบันการศึกษา",
      "โรงแรมและห้องสัมมนา",
      "การนำเสนอเคลื่อนที่และงานอีเวนต์"
    ],
    origin: "Taiwan",
    productCategories: [
      {
        name: "จอ Fixed Frame",
        desc: "จอติดตั้งถาวรบนผนัง ผ้าจอตึงเรียบสมบูรณ์แบบ ให้ภาพสมมาตรคงที่จากทุกมุมมอง มีอัตราส่วน 16:9 / 16:10 / 2.35:1 เหมาะสำหรับ Home Theater Premium และห้องประชุมถาวร"
      },
      {
        name: "จอ Electric/Motorized",
        desc: "จอม้วนเก็บอัตโนมัติด้วยมอเตอร์ไฟฟ้าที่เงียบและทนทาน ควบคุมด้วยรีโมท หรือ Trigger 12V ประหยัดพื้นที่สำหรับห้องประชุม ห้องสัมมนา และสนามฝึกอบรม"
      },
      {
        name: "จอ Manual (ดึงมือ)",
        desc: "จอดึงมือแบบง่าย ใช้งานง่ายและทนทาน ประหยัดราคา เหมาะสำหรับห้องประชุม Small Meeting Room และห้องฝึกอบรมที่มีงบประมาณจำกัด"
      },
      {
        name: "จอ Portable (พกพา)",
        desc: "จอน้ำหนักเบา พับเก็บและพกพาได้สะดวก เหมาะสำหรับการนำเสนอเคลื่อนที่ Road Show งานอีเวนต์ และการศึกษา โดยไม่ต้องติดตั้งถาวร"
      },
      {
        name: "จอ ALR (Ambient Light Rejecting)",
        desc: "จอเฉพาะตัวด้วยเทคโนโลยีสะท้อนแสงแวดล้อม ผ้าจอออกแบบพิเศษดูดซับแสงรบกวน ให้ภาพคมชัดและสีสันสดใสแม้ในห้องที่มีแสงสว่าง เหมาะสำหรับห้องประชุมที่ไม่สามารถปิดไฟได้"
      }
    ]
  },
  "237477": {
    brandSlug: "hdmi-cable",
    tagline: "สาย HDMI คุณภาพสูง รองรับ 4K / 8K",
    description: "สาย HDMI คัดสรรเกรดมืออาชีพ รองรับการใช้งานตั้งแต่ห้องประชุม Smart Classroom ไปจนถึงระบบ AV ครบวงจร ทนทาน สัญญาณเสถียร ผ่านการทดสอบกับอุปกรณ์จริงทุกเส้น พร้อมความยาวให้เลือกหลากหลาย",
    highlights: [
      "รองรับ 4K60 HDR และ 8K (ตามรุ่น)",
      "หัวต่อชุบทอง สัญญาณสูญเสียต่ำ",
      "มีทั้งสายทองแดงและ Fiber Optic",
      "ทดสอบทุกเส้นก่อนส่งมอบ"
    ],
    bestFor: [
      "ห้องประชุมและ Smart Classroom",
      "ระบบ AV ระยะไกล (Fiber)",
      "Home Theater",
      "Digital Signage"
    ],
    productCategories: [
      {
        name: "HDMI Copper Cable",
        desc: "สาย HDMI ทองแดง ความยาว 1–15 เมตร รองรับ 4K60 HDR เหมาะกับการเชื่อมต่อระยะสั้นถึงปานกลาง"
      },
      {
        name: "HDMI Fiber Optic Cable",
        desc: "สาย HDMI ไฟเบอร์ออปติก ความยาว 10–100 เมตร รองรับ 4K60 / 8K สัญญาณไม่สูญเสียแม้ระยะไกล"
      },
      {
        name: "HDMI Adapter & Converter",
        desc: "หัวแปลงและตัวแปลง HDMI เป็น USB-C, DisplayPort, VGA สำหรับเชื่อมต่ออุปกรณ์ที่หลากหลาย"
      }
    ]
  },
  "237677": {
    brandSlug: "newline",
    tagline: "จอ Interactive Display สำหรับการทำงานร่วมกันอย่างมืออาชีพ",
    description: "Newline Interactive — จอ Interactive Display ระดับองค์กร ออกแบบมาเพื่อห้องประชุมและการทำงานร่วมกันแบบ Hybrid ด้วยเทคโนโลยี Non-proprietary ไม่ผูกขาดซอฟต์แวร์ รองรับ Windows, Android และ Cloud มาพร้อม Whiteboard, Screen Share และ Video Conference ในตัว เหมาะกับองค์กรที่ต้องการจอประชุมคุณภาพสูงพร้อมความยืดหยุ่นในการใช้งาน",
    highlights: [
      "หน้าจอ 4K UHD Anti-glare ถนอมสายตา",
      "รองรับ Multi-touch 20 จุด ตอบสนองเร็ว",
      "มี Whiteboard และ Screen Share ในตัว",
      "ใช้งานได้ทั้ง Android, Windows และ Cloud-based Apps"
    ],
    bestFor: [
      "ห้องประชุมองค์กร",
      "Hybrid Meeting Room",
      "ห้อง Training และ Workshop",
      "สถาบันการศึกษา"
    ],
    productCategories: [
      {
        name: "Interactive Flat Panel",
        desc: 'จอสัมผัส 4K ขนาด 55"–98" สำหรับห้องประชุม มาพร้อม Android ในตัว และ Whiteboard App'
      },
      {
        name: "Unified Collaboration Display",
        desc: "จอประชุมแบบ All-in-One พร้อม Camera, Mic, Speaker ในตัว สำหรับ Video Conference"
      }
    ]
  },
  "237467": {
    brandSlug: "enewave",
    tagline: "อุปกรณ์จัดการสัญญาณ AV คุณภาพสูง",
    description: "Enewave — ผู้ผลิตอุปกรณ์จัดการสัญญาณ AV ที่มุ่งเน้นความเสถียรและประสิทธิภาพ ครอบคลุม HDMI Splitter, Switcher, Extender และ AV Converter สำหรับงานระบบ AV ทั้งขนาดเล็กและขนาดใหญ่ ราคาคุ้มค่า ใช้งานง่าย ทนทาน เป็นตัวเลือกที่ดีสำหรับโปรเจกต์ที่ต้องการอุปกรณ์ Signal Management ที่มีคุณภาพในราคาสมเหตุสมผล",
    highlights: [
      "HDMI Splitter / Switcher / Extender ครบครัน",
      "รองรับ 4K60 HDR ทุกรุ่น",
      "ติดตั้งง่าย ใช้งานเสถียร",
      "ราคาคุ้มค่าสำหรับงาน System Integration"
    ],
    bestFor: [
      "ห้องประชุมขนาดเล็ก-กลาง",
      "ระบบ Digital Signage",
      "ห้องเรียน Smart Classroom",
      "ระบบ AV สำหรับร้านค้า / โชว์รูม"
    ],
    productCategories: [
      { name: "HDMI Splitter", desc: "แยกสัญญาณ HDMI จาก 1 แหล่ง ไปยังหลายจอพร้อมกัน รองรับ 4K60" },
      { name: "HDMI Switcher", desc: "สลับสัญญาณ HDMI จากหลายแหล่งไปยังจอเดียว พร้อมรีโมท" },
      { name: "HDMI Extender", desc: "ขยายสัญญาณ HDMI ผ่านสาย LAN ระยะไกลสูงสุด 70–150 เมตร" },
      {
        name: "AV Converter",
        desc: "ตัวแปลงสัญญาณ SDI-to-HDMI, VGA-to-HDMI และอื่นๆ สำหรับเชื่อมต่ออุปกรณ์เดิม"
      }
    ]
  },
  "237596": {
    brandSlug: "poly",
    tagline: "อุปกรณ์ Video Conference สำหรับห้องประชุมทุกขนาด",
    description: "Poly (เดิมคือ Polycom + Plantronics) — ผู้นำด้านอุปกรณ์ Video Conference และ Unified Communication ระดับโลก นำเสนอ Smart Camera ที่มี AI Auto-framing, Speaker-tracking และไมค์ที่ตัดเสียงรบกวนอัจฉริยะ รองรับ Microsoft Teams, Zoom และแพลตฟอร์มอื่นๆ เหมาะกับห้องประชุมตั้งแต่ Huddle Room ไปจนถึง Boardroom ขนาดใหญ่",
    highlights: [
      "AI Camera: Auto-framing & Speaker-tracking",
      "ไมค์ตัดเสียงรบกวน NoiseBlock AI",
      "รองรับ Microsoft Teams / Zoom Certified",
      "ระบบ Poly Lens จัดการอุปกรณ์ทั้งหมดจากส่วนกลาง"
    ],
    bestFor: [
      "ห้องประชุม Hybrid / Video Conference",
      "Microsoft Teams Room",
      "Huddle Room / Focus Room",
      "ห้องประชุมผู้บริหาร"
    ],
    origin: "USA",
    productCategories: [
      {
        name: "Video Conference Camera",
        desc: "กล้อง 4K พร้อม AI Auto-framing, Speaker-tracking สำหรับห้องประชุมทุกขนาด"
      },
      {
        name: "Conference Speaker & Phone",
        desc: "ลำโพงประชุมและโทรศัพท์สำหรับห้องประชุม เสียงชัด 360° Pickup"
      },
      {
        name: "Teams Room System",
        desc: "ระบบ Video Conference แบบครบชุด (Camera + Mic + Speaker + Controller) สำหรับ Microsoft Teams Room"
      }
    ]
  },
  "237676": {
    brandSlug: "yealink",
    tagline: "ระบบ Video Conference & IP Phone ระดับองค์กร",
    description: "Yealink — ผู้นำด้านอุปกรณ์ Unified Communications ระดับโลก ครอบคลุม Video Conference Camera, IP Phone, USB Speakerphone และ Smart Room System มีผลิตภัณฑ์ที่ได้รับการ Certified จาก Microsoft Teams และ Zoom อย่างครบถ้วน รองรับการใช้งานตั้งแต่ห้องประชุมขนาดเล็กไปจนถึง Boardroom ขนาดใหญ่",
    highlights: [
      "Microsoft Teams & Zoom Certified ทุกรุ่น",
      "กล้อง AI Auto-framing & Speaker-tracking",
      "IP Phone ระดับองค์กร เสียงชัด HD",
      "ระบบจัดการอุปกรณ์จากส่วนกลาง (YDMP)"
    ],
    bestFor: [
      "ห้องประชุม Video Conference",
      "Microsoft Teams / Zoom Room",
      "ห้องประชุมขนาดเล็ก - ใหญ่",
      "สำนักงานและ Call Center"
    ],
    origin: "China",
    productCategories: [
      {
        name: "Video Conference System",
        desc: "ระบบ Video Conference แบบครบชุดสำหรับห้องประชุม พร้อม Camera, Mic, Speaker รองรับ Teams/Zoom"
      },
      {
        name: "USB Camera & Soundbar",
        desc: "กล้อง USB 4K และ Soundbar สำหรับห้องประชุมขนาดเล็ก-กลาง ต่อกับ Laptop ใช้ได้ทันที"
      },
      {
        name: "IP Phone",
        desc: "โทรศัพท์ IP สำหรับสำนักงาน เสียง HD, หน้าจอสี, รองรับ PoE และ Teams/Zoom"
      },
      {
        name: "Room System (MeetingBoard)",
        desc: "จอประชุม All-in-One พร้อม Camera, Mic, Speaker ในตัว สำหรับ Microsoft Teams Room"
      }
    ]
  },
  "237678": {
    brandSlug: "vissonic",
    tagline: "ระบบ Conference & Discussion สำหรับห้องประชุมอัจฉริยะ",
    description: "Vissonic — ผู้เชี่ยวชาญด้านระบบไมโครโฟนประชุม (Conference System) และระบบอภิปราย (Discussion System) ทั้งแบบ Wired และ Wireless ออกแบบมาสำหรับงานประชุมอย่างเป็นทางการ เช่น สภา ศาล หน่วยงานรัฐ และห้องประชุมขนาดใหญ่ รองรับระบบลงคะแนน การแปลภาษา และการบันทึกเสียง",
    highlights: [
      "ระบบไมค์ประชุมดิจิทัล Full Digital / IP-based",
      "รองรับระบบลงคะแนน (Voting) และแปลภาษา",
      "เชื่อมต่อไมค์ได้สูงสุดหลายร้อยจุด",
      "รองรับการประชุมแบบ Paperless (ไร้กระดาษ)"
    ],
    bestFor: [
      "ห้องประชุมสภา / ศาล",
      "หน่วยงานรัฐและราชการ",
      "ห้องประชุมผู้บริหาร",
      "Convention Hall / ห้องสัมมนาขนาดใหญ่"
    ],
    origin: "China",
    productCategories: [
      {
        name: "ไมค์ประชุมดิจิทัล (Conference Unit)",
        desc: "ชุดไมค์ประชุมแบบ Chairman / Delegate พร้อมลำโพงในตัว เชื่อมต่อด้วยสาย CAT5 หรือ Wireless"
      },
      {
        name: "ระบบ Discussion & Voting",
        desc: "ระบบอภิปรายพร้อมระบบลงคะแนนอิเล็กทรอนิกส์ แสดงผลแบบ Real-time"
      },
      {
        name: "ระบบแปลภาษาพร้อมกัน (Interpretation)",
        desc: "ระบบแปลภาษาสำหรับการประชุมนานาชาติ รองรับหลายภาษาพร้อมกัน"
      },
      {
        name: "Central Control Unit",
        desc: "เครื่องควบคุมระบบไมค์ประชุมส่วนกลาง จัดการสิทธิ์การพูด บันทึกเสียง และเชื่อมต่อระบบ AV"
      }
    ]
  },
  "237468": {
    brandSlug: "audiopressbox",
    tagline: "ระบบกระจายสัญญาณเสียงสำหรับงาน Press Conference",
    description: "AudioPressBox — ผู้เชี่ยวชาญด้านระบบกระจายสัญญาณเสียง (Audio Distribution) สำหรับงานแถลงข่าว งาน Press Conference และงาน Broadcast ส่งสัญญาณเสียงจากแหล่งเดียวไปยังอุปกรณ์บันทึกของสื่อมวลชนหลายสิบช่อง พร้อมกัน สัญญาณสะอาด ไม่มี Interference เป็นมาตรฐานสากลที่ใช้ในงานแถลงข่าวของรัฐบาลและองค์กรระดับโลก",
    highlights: [
      "กระจายสัญญาณเสียงจาก 1 แหล่ง ไปยัง 16–124 ช่อง",
      "สัญญาณเสียง Line-level สะอาด ไม่มี Noise",
      "มีทั้งแบบ Portable และ Rack Mount",
      "ใช้ในงานแถลงข่าวของรัฐบาลและสื่อระดับสากล"
    ],
    bestFor: [
      "งานแถลงข่าว (Press Conference)",
      "งาน Broadcast / สื่อมวลชน",
      "งานสัมมนาและงานอีเวนต์",
      "หน่วยงานรัฐ / ทำเนียบรัฐบาล"
    ],
    origin: "Lithuania",
    productCategories: [
      {
        name: "Portable Press Box",
        desc: "กล่องกระจายสัญญาณเสียงแบบพกพา 8–16 ช่อง สำหรับงานแถลงข่าวเคลื่อนที่"
      },
      {
        name: "Rack Mount Press Box",
        desc: "ระบบกระจายสัญญาณแบบติดตั้งในตู้ Rack รองรับ 32–124 ช่อง สำหรับห้องแถลงข่าวถาวร"
      }
    ]
  },
  "237069": {
    brandSlug: "avlink",
    tagline: "อุปกรณ์ AV Connectivity & Distribution",
    description: "AVlink — ผู้ผลิตอุปกรณ์เชื่อมต่อและกระจายสัญญาณ AV (AV Connectivity) ครอบคลุม HDMI Matrix, Video Wall Controller, KVM Extender และอุปกรณ์ AV over IP ราคาสมเหตุสมผล คุณภาพระดับมืออาชีพ เหมาะกับงาน Digital Signage, Control Room และระบบ AV ในองค์กรที่ต้องการกระจายสัญญาณภาพและเสียงไปยังหลายจุด",
    highlights: [
      "HDMI Matrix / Video Wall Controller ครบครัน",
      "รองรับ 4K60 HDR",
      "AV over IP ราคาคุ้มค่า",
      "เหมาะกับงาน Digital Signage และ Control Room"
    ],
    bestFor: [
      "ระบบ Digital Signage",
      "Control Room / Command Center",
      "Video Wall",
      "ระบบ AV สำหรับองค์กร"
    ],
    productCategories: [
      {
        name: "HDMI Matrix Switcher",
        desc: "สลับและกระจายสัญญาณ HDMI จากหลายแหล่งไปยังหลายจอ (4x4, 8x8, 16x16)"
      },
      {
        name: "Video Wall Controller",
        desc: "ตัวควบคุม Video Wall แสดงภาพเดียวข้ามหลายจอ รองรับหลาย Layout"
      },
      {
        name: "KVM Extender",
        desc: "ขยายสัญญาณ Keyboard, Video, Mouse ระยะไกลผ่านสาย CAT/Fiber สำหรับ Control Room"
      },
      {
        name: "AV over IP",
        desc: "ระบบส่งสัญญาณ AV ผ่านเครือข่าย LAN รองรับ 4K60 ส่งได้ไม่จำกัดระยะ"
      }
    ]
  }
};
const contentClient$2 = supabase;
const fallbackSiteContent = {
  nav,
  brands,
  solutions,
  industries,
  articleCategories,
  brandIntrosByCategoryId,
  source: "files"
};
function asStringArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}
function asProductCategories(value) {
  if (!value || typeof value !== "object" || !("productCategories" in value)) return void 0;
  const productCategories = value.productCategories;
  if (!Array.isArray(productCategories)) return void 0;
  return productCategories.map((item) => {
    if (!item || typeof item !== "object") return null;
    const maybe = item;
    if (typeof maybe.name !== "string" || typeof maybe.desc !== "string") return null;
    return { name: maybe.name, desc: maybe.desc };
  }).filter((item) => item !== null);
}
function orderBySort(rows) {
  return [...rows].sort((a, b) => {
    const left = a.sort_order ?? Number.MAX_SAFE_INTEGER;
    const right = b.sort_order ?? Number.MAX_SAFE_INTEGER;
    if (left !== right) return left - right;
    return String(a.slug ?? a.id ?? "").localeCompare(String(b.slug ?? b.id ?? ""));
  });
}
function mapNav(rows) {
  if (!rows?.length) return nav;
  const sorted = orderBySort(rows);
  const childrenByParent = /* @__PURE__ */ new Map();
  for (const row of sorted) {
    if (!row.parent_id) continue;
    const bucket = childrenByParent.get(row.parent_id) ?? [];
    bucket.push(row);
    childrenByParent.set(row.parent_id, bucket);
  }
  const topLevel = sorted.filter((row) => !row.parent_id || row.depth === 0);
  if (topLevel.length === 0) return nav;
  const dbNav = topLevel.map((row) => {
    const submenu = (childrenByParent.get(row.id) ?? []).map((child) => ({
      label: child.label === "Projector" ? "Projection Screen" : child.label,
      href: child.href,
      desc: child.description ?? void 0,
      image: child.image_url ?? void 0
    }));
    return {
      label: row.label,
      href: row.href,
      submenu: submenu.length > 0 && row.href !== "/brands" ? submenu : void 0
    };
  });
  const dbByHref = new Map(dbNav.map((item) => [item.href, item]));
  const merged = nav.map((fallbackItem) => {
    const dbItem = dbByHref.get(fallbackItem.href);
    if (!dbItem) return fallbackItem;
    return {
      ...fallbackItem,
      ...dbItem,
      submenu: dbItem.submenu && dbItem.submenu.length > 0 ? mergeSubmenu(fallbackItem.submenu, dbItem.submenu) : fallbackItem.submenu
    };
  });
  const fallbackHrefs = new Set(nav.map((item) => item.href));
  return [...merged, ...dbNav.filter((item) => !fallbackHrefs.has(item.href))];
}
function mergeSubmenu(fallbackItems, dbItems) {
  const dbByHref = new Map(dbItems.map((item) => [item.href, item]));
  const merged = (fallbackItems ?? []).map((fallbackItem) => ({
    ...fallbackItem,
    ...dbByHref.get(fallbackItem.href) ?? {},
    image: dbByHref.get(fallbackItem.href)?.image || fallbackItem.image,
    desc: dbByHref.get(fallbackItem.href)?.desc || fallbackItem.desc
  }));
  const fallbackHrefs = new Set((fallbackItems ?? []).map((item) => item.href));
  return [...merged, ...dbItems.filter((item) => !fallbackHrefs.has(item.href))];
}
function mapBrands(rows) {
  if (!rows?.length) return brands;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = brands.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    if (!row) return fallback;
    return {
      slug: row.slug,
      name: row.name || fallback.name,
      category: row.category || fallback.category,
      desc: row.description || fallback.desc,
      descEn: fallback.descEn,
      color: row.color || fallback.color,
      imageUrl: row.image_url || void 0,
      logoUrl: row.logo_url || void 0,
      accent: row.accent
    };
  });
  const fallbackSlugs = new Set(brands.map((brand) => brand.slug));
  const additions = rows.filter((row) => !fallbackSlugs.has(row.slug)).map((row) => {
    const fallback = brands.find((brand) => brand.slug === row.slug);
    return {
      slug: row.slug,
      name: row.name,
      category: row.category ?? fallback?.category ?? "",
      desc: row.description ?? fallback?.desc ?? "",
      descEn: fallback?.descEn,
      color: row.color ?? fallback?.color ?? "from-blue-500 to-cyan-500",
      imageUrl: row.image_url,
      logoUrl: row.logo_url,
      accent: row.accent
    };
  });
  return [...mapped, ...additions];
}
function mapSolutions(rows) {
  if (!rows?.length) return solutions;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = solutions.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    if (!row) return fallback;
    return {
      slug: row.slug,
      title: row.title || fallback.title,
      titleEn: fallback?.titleEn,
      icon: row.icon || fallback.icon,
      desc: row.description || fallback.desc,
      descEn: fallback?.descEn,
      imageUrl: row.image_url || void 0
    };
  });
  const fallbackSlugs = new Set(solutions.map((solution) => solution.slug));
  const additions = rows.filter((row) => !fallbackSlugs.has(row.slug)).map((row) => {
    const fallback = solutions.find((solution) => solution.slug === row.slug);
    return {
      slug: row.slug,
      title: row.title,
      titleEn: fallback?.titleEn,
      icon: row.icon ?? fallback?.icon ?? "Monitor",
      desc: row.description ?? fallback?.desc ?? "",
      descEn: fallback?.descEn,
      imageUrl: row.image_url
    };
  });
  return [...mapped, ...additions];
}
function mapIndustries(rows) {
  if (!rows?.length) return industries;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = industries.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    if (!row) return fallback;
    return {
      slug: row.slug,
      title: row.title || fallback.title,
      titleEn: fallback?.titleEn,
      icon: row.icon || fallback.icon,
      desc: row.description || fallback.desc,
      descEn: fallback?.descEn,
      imageUrl: row.image_url || void 0
    };
  });
  const fallbackSlugs = new Set(industries.map((industry) => industry.slug));
  const additions = rows.filter((row) => !fallbackSlugs.has(row.slug)).map((row) => {
    const fallback = industries.find((industry) => industry.slug === row.slug);
    return {
      slug: row.slug,
      title: row.title,
      titleEn: fallback?.titleEn,
      icon: row.icon ?? fallback?.icon ?? "Building2",
      desc: row.description ?? fallback?.desc ?? "",
      descEn: fallback?.descEn,
      imageUrl: row.image_url
    };
  });
  return [...mapped, ...additions];
}
function mapArticleCategories(rows) {
  if (!rows?.length) return articleCategories;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = articleCategories.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    return {
      slug: fallback.slug,
      label: row?.label || fallback.label,
      labelEn: fallback.labelEn,
      imageUrl: row?.image_url || void 0
    };
  });
  const fallbackSlugs = new Set(articleCategories.map((category) => category.slug));
  return [
    ...mapped,
    ...rows.filter((row) => !fallbackSlugs.has(row.slug)).map((row) => ({ slug: row.slug, label: row.label, labelEn: row.label, imageUrl: row.image_url || void 0 }))
  ];
}
function mapBrandIntros(rows, brands2) {
  if (!rows?.length) return brandIntrosByCategoryId;
  const dbIntros = Object.fromEntries(
    rows.map((row) => {
      const fallback = brandIntrosByCategoryId[row.category_id];
      const brand = brands2.find((item) => item.slug === row.brand_slug);
      const payload = row.payload && typeof row.payload === "object" ? row.payload : null;
      return [
        row.category_id,
        {
          brandSlug: row.brand_slug,
          tagline: row.tagline ?? fallback?.tagline ?? "",
          description: row.description ?? fallback?.description ?? "",
          highlights: asStringArray(row.highlights).length ? asStringArray(row.highlights) : fallback?.highlights ?? [],
          bestFor: asStringArray(row.best_for).length ? asStringArray(row.best_for) : fallback?.bestFor ?? [],
          origin: row.origin ?? fallback?.origin,
          productCategories: asProductCategories(payload) ?? fallback?.productCategories,
          imageUrl: brand?.imageUrl,
          logoUrl: brand?.logoUrl,
          payload
        }
      ];
    })
  );
  return {
    ...brandIntrosByCategoryId,
    ...dbIntros
  };
}
async function loadSiteContent() {
  try {
    const [
      navResult,
      brandsResult,
      solutionsResult,
      industriesResult,
      articleCategoriesResult,
      brandIntrosResult
    ] = await Promise.all([
      contentClient$2.from("content_nav_items").select("id,parent_id,depth,sort_order,label,href,description,image_url").order("sort_order", { ascending: true }),
      contentClient$2.from("content_brands").select("slug,name,category,description,color,image_url,logo_url,accent").order("slug", { ascending: true }),
      contentClient$2.from("content_solutions").select("slug,title,icon,description,image_url").order("slug", { ascending: true }),
      contentClient$2.from("content_industries").select("slug,title,icon,description,image_url").order("slug", { ascending: true }),
      contentClient$2.from("content_article_categories").select("slug,label,image_url").order("slug", { ascending: true }),
      contentClient$2.from("content_brand_category_intros").select("category_id,brand_slug,tagline,description,highlights,best_for,origin,payload").order("category_id", { ascending: true })
    ]);
    const firstError = navResult.error ?? brandsResult.error ?? solutionsResult.error ?? industriesResult.error ?? articleCategoriesResult.error ?? brandIntrosResult.error;
    if (firstError) throw firstError;
    const brands2 = mapBrands(brandsResult.data);
    return {
      nav: mapNav(navResult.data),
      brands: brands2,
      solutions: mapSolutions(solutionsResult.data),
      industries: mapIndustries(industriesResult.data),
      articleCategories: mapArticleCategories(
        articleCategoriesResult.data
      ),
      brandIntrosByCategoryId: mapBrandIntros(
        brandIntrosResult.data,
        brands2
      ),
      source: "supabase"
    };
  } catch (error) {
    console.warn("[content] Falling back to file-based site content", error);
    return fallbackSiteContent;
  }
}
async function loadBrandDetailContent(slug) {
  const content = await loadSiteContent();
  return content.brands.find((brand) => brand.slug === slug);
}
async function loadIndustryDetailContent(slug) {
  const content = await loadSiteContent();
  return content.industries.find((industry) => industry.slug === slug);
}
async function loadBrandIntroContent(categoryId) {
  const content = await loadSiteContent();
  return content.brandIntrosByCategoryId[categoryId];
}
function useSiteContent() {
  const [content, setContent] = reactExports.useState(fallbackSiteContent);
  reactExports.useEffect(() => {
    let isCurrent = true;
    loadSiteContent().then((nextContent) => {
      if (!isCurrent) return;
      reactExports.startTransition(() => setContent(nextContent));
    });
    return () => {
      isCurrent = false;
    };
  }, []);
  return content;
}
const articleImages = {
  "led-display": "/legacy-imports/ed250072c6ef-crop-1751960721283.png",
  "interactive-display": "/legacy-imports/a6e77a1db96d-crop-1755832392467.png",
  "smart-classroom": "/legacy-imports/bd9dfa44b8d0-crop-1671007714983.png",
  "meeting-room": "/legacy-imports/04f4b86eff4d-crop-1671007732725.png",
  knowledge: "/legacy-imports/8adbfe6be5f6-crop-1664272008966.jpg",
  "case-study": "/legacy-imports/7abc119253a3-crop-1671007744739.png"
};
const brandImages = {
  unilumin: "/legacy-imports/6b2785b3dc72-crop-1751441846240.jpg",
  kramerav: "/legacy-imports/53aa84128a4c-crop-1664270486366.jpg",
  grandview: "/legacy-imports/84c6dde0fa04-crop-1664192588573.jpg",
  persona: "/legacy-imports/8a1957ba9a56-crop-1773024256470.jpg",
  transcreen: "/legacy-imports/7611e6f76df0-crop-1751514312395.jpg",
  poly: "https://shop-image.readyplanet.com/1JP8W7LJ-JOXokXJ4P1KHNjdWwg=/500x500/2a7128f73a3245c2a32cae55aac5b120",
  newline: "https://shop-image.readyplanet.com/g8DaehX9M6W4eQr4L8Wh4wEFoq0=/500x500/7e2245c75c104f639c1f221ea82c395f",
  audiopressbox: "https://shop-image.readyplanet.com/Ieil-LtbKQLkgGVBmwoAamoiSL8=/500x500/ed7593f624624c9fa16003678e3d676e",
  enewave: "https://shop-image.readyplanet.com/3fbbqs25YMIR14Hei_UU7yxeT08=/500x500/c42e82d5f49c472eb296d588a4bf87e1",
  avlink: "https://shop-image.readyplanet.com/u6uNub_BfRzlZPQu7yK3klPUJOM=/500x500/ed863ab0680443ce8d4be2ec7d44990a",
  kramer: "https://shop-image.readyplanet.com/_D2F2YWYK8XYfx-fZX3H9xkJZq0=/500x500/3da16c1ea07b40a59fbb90a62ec4c1c6",
  "hdmi-cable": "https://shop-image.readyplanet.com/x3QSPru37lj5-x9gu6VFylhk-nw=/500x500/8cf7bac285554c46a6b469e027993450",
  yealink: "https://shop-image.readyplanet.com/Cl_JxMliKwvGRLvl6cNrTfKNHB0=/500x500/ccc4effff0064cd2a805395292ff894b",
  vissonic: "https://shop-image.readyplanet.com/UQMDO_hcgVVt2OQz_tEmC2nRriw=/500x500/6c93481d03a94e38807bb192ce671bd8"
};
const imgLed = "/assets/solution-led-display-Dj2cXy0M.jpg";
const imgInteractive = "/assets/solution-interactive-display-e1F3L9Zj.jpg";
const imgProjector = "/assets/solution-projector-CeH-371-.jpg";
const imgWireless = "/assets/solution-wireless-presentation-Bh5zO_j5.jpg";
const imgAV = "/assets/solution-av-solutions-Bfa7DEA9.jpg";
const solutionImages = {
  "led-display": imgLed,
  "interactive-display": imgInteractive,
  projector: imgProjector,
  "wireless-presentation": imgWireless,
  "av-solutions": imgAV
};
const heroProductLine = "/assets/hero-productline-C8D_ww12.jpg";
const industryEducation = "/assets/education-CJgVAfCV.jpg";
const industryHotel = "/assets/hotel-events-CED_hg5J.jpg";
const industryOffice = "/assets/office-business-DdbinE3e.jpg";
const industryVC = "/assets/video-conference-GbBA4S07.jpg";
const submenuImagesByHref = {
  "/led-display": solutionImages["led-display"],
  "/interactive-display": solutionImages["interactive-display"],
  "/projector": solutionImages.projector,
  "/wireless-presentation": solutionImages["wireless-presentation"],
  "/av-solutions": solutionImages["av-solutions"],
  "/industry/education": industryEducation,
  "/industry/hotel": industryHotel,
  "/industry/corporate": industryOffice,
  "/industry/video-conference": industryVC,
  "/brands/unilumin": brandImages.unilumin,
  "/brands/kramerav": brandImages.kramerav,
  "/brands/grandview": brandImages.grandview,
  "/brands/persona": brandImages.persona,
  "/brands/transcreen": brandImages.transcreen,
  "/category/288194": brandImages.unilumin,
  "/category/235610": brandImages.kramerav,
  "/category/288209": brandImages.persona,
  "/category/288210": brandImages.transcreen,
  "/category/237068": brandImages.grandview,
  "/category/237477": solutionImages["av-solutions"],
  "/product-line": heroProductLine
};
function getSubmenuImage(item) {
  return item.image ?? submenuImagesByHref[item.href];
}
function Header() {
  const [openMobile, setOpenMobile] = reactExports.useState(false);
  const { lang, setLang } = useLanguage();
  const [hover, setHover] = reactExports.useState(null);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const { location } = useRouterState();
  const { nav: navItems } = useSiteContent();
  reactExports.useEffect(() => {
    setOpenMobile(false);
    setHover(null);
  }, [location.pathname]);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/90 backdrop-blur-2xl shadow-card" : "bg-background/70 backdrop-blur-xl border-b border-border/40"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block bg-navy text-navy-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 opacity-80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-cyan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "02-129-6193" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-cyan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AV Solution Specialist • LED Display • Smart Classroom" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aboutus", className: "hover:text-cyan transition-colors", children: t(lang, "เกี่ยวกับเรา", "About Us") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-cyan transition-colors", children: t(lang, "บทความ", "Articles") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contactus", className: "hover:text-cyan transition-colors", children: t(lang, "ติดต่อเรา", "Contact Us") })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 transition-all",
              scrolled ? "h-16" : "h-20"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-3 shrink-0 group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: matrixLogo,
                  alt: "Matrix Intertrade Co., Ltd.",
                  className: cn("w-auto transition-all", scrolled ? "h-10" : "h-12")
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex items-center gap-1", onMouseLeave: () => setHover(null), children: navItems.map((item) => {
                const active = location.pathname === item.href || item.href !== "/" && location.pathname.startsWith(item.href);
                const hasDropdown = !!item.submenu || item.label === "บทความ";
                const isOpen = hover === item.label;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", onMouseEnter: () => setHover(item.label), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: item.href,
                      className: cn(
                        "group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[14px] font-bold tracking-tight text-foreground/80 transition-all duration-300 whitespace-nowrap",
                        "hover:text-accent hover:-translate-y-0.5",
                        (isOpen || active) && "text-accent"
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                          t(lang, item.label, item.labelEn || item.label),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: cn(
                                "pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-accent transition-all duration-300",
                                isOpen || active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                              )
                            }
                          )
                        ] }),
                        hasDropdown && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: cn(
                              "h-3.5 w-3.5 opacity-50 transition-all duration-300",
                              isOpen && "rotate-180 opacity-100 text-accent"
                            )
                          }
                        )
                      ]
                    }
                  ),
                  isOpen && item.label === "บทความ" && /* @__PURE__ */ jsxRuntimeExports.jsx(BlogMegaMenu, {}),
                  isOpen && item.submenu && item.label !== "บทความ" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SubmenuPanel,
                    {
                      items: item.submenu,
                      parentHref: item.href,
                      parentLabel: t(lang, item.label, item.labelEn || item.label)
                    }
                  )
                ] }, item.label);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden xl:flex items-center rounded-full border border-border/60 bg-muted/30 p-1 shadow-inner backdrop-blur-md", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: cn(
                        "absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#ffd24a] shadow-[0_2px_10px_rgba(255,204,25,0.4)] transition-transform duration-300 ease-out",
                        lang === "EN" ? "translate-x-full" : "translate-x-0"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setLang("TH"),
                      className: cn(
                        "relative z-10 flex w-16 items-center justify-center gap-1.5 rounded-full py-1 text-[11px] font-bold transition-colors duration-300",
                        lang === "TH" ? "text-[#0a1b3d]" : "text-muted-foreground hover:text-foreground"
                      ),
                      "aria-label": "เปลี่ยนภาษาเป็นไทย",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://flagcdn.com/w20/th.png", alt: "ภาษาไทย (Thai)", className: "w-[14px] rounded-[2px] shadow-sm" }),
                        "TH"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setLang("EN"),
                      className: cn(
                        "relative z-10 flex w-16 items-center justify-center gap-1.5 rounded-full py-1 text-[11px] font-bold transition-colors duration-300",
                        lang === "EN" ? "text-[#0a1b3d]" : "text-muted-foreground hover:text-foreground"
                      ),
                      "aria-label": "Change language to English",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://flagcdn.com/w20/gb.png", alt: "English (UK)", className: "w-[14px] rounded-[2px] shadow-sm" }),
                        "EN"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    className: "hidden lg:inline-flex bg-gradient-accent text-white hover:opacity-90 shadow-glow font-semibold",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
                      t(lang, "ขอใบเสนอราคา", "Request Quote"),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    className: "group relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#0a1b3d] via-[#13294b] to-[#020816] text-white shadow-[0_18px_38px_-18px_rgba(2,8,22,0.85),0_0_0_1px_rgba(255,210,74,0.35)_inset] ring-1 ring-[#ffd24a]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-20px_rgba(255,207,36,0.55),0_0_0_1px_rgba(255,210,74,0.6)_inset] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ffd24a]/40 xl:hidden",
                    onClick: () => setOpenMobile(true),
                    "aria-label": "เปิดเมนู",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,210,74,0.28),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_50%)]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -right-4 -top-4 h-10 w-10 rounded-full bg-[#ffd24a]/35 blur-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-[#ffd24a]/60 to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-[18px] w-5 flex-col justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[2px] w-5 rounded-full bg-gradient-to-r from-[#ffe6a0] via-[#ffcc19] to-[#e0a800] shadow-[0_0_8px_rgba(255,204,25,0.6)] transition-all duration-300 group-hover:w-4 group-hover:translate-x-1" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[2px] w-5 rounded-full bg-gradient-to-r from-[#ffe6a0] via-[#ffcc19] to-[#e0a800] shadow-[0_0_8px_rgba(255,204,25,0.6)] transition-all duration-300 group-hover:scale-x-90" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[2px] w-5 rounded-full bg-gradient-to-r from-[#ffe6a0] via-[#ffcc19] to-[#e0a800] shadow-[0_0_8px_rgba(255,204,25,0.6)] transition-all duration-300 group-hover:w-3.5 group-hover:translate-x-1.5" })
                      ] })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          MobileDrawer,
          {
            open: openMobile,
            onClose: () => setOpenMobile(false),
            lang,
            setLang,
            navItems
          }
        )
      ]
    }
  );
}
function SubmenuPanel({
  items,
  parentHref,
  parentLabel
}) {
  const { lang } = useLanguage();
  const hasDesc = items.some((i) => i.desc);
  const hasImage = items.some((i) => getSubmenuImage(i));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 max-w-[calc(100vw-2rem)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "dropdown-enter overflow-hidden rounded-2xl border border-border/80 bg-popover/95 backdrop-blur-xl shadow-elev",
        hasImage ? "w-[min(520px,calc(100vw-2rem))]" : hasDesc ? "w-[min(420px,calc(100vw-2rem))]" : "min-w-[min(300px,calc(100vw-2rem))]"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-to-r from-navy via-navy/95 to-navy px-5 py-3 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-black uppercase tracking-[0.22em] text-cyan", children: "Explore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-sm font-extrabold text-white", children: parentLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: parentHref,
                className: "inline-flex items-center gap-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-white transition-colors",
                children: [
                  t(lang, "ดูทั้งหมด", "View All"),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: items.map((s, idx) => {
          const image = getSubmenuImage(s);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: s.href,
              className: "group/item flex items-center gap-4 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-secondary/75",
              children: [
                image ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-muted ring-1 ring-border transition-all duration-300 group-hover/item:ring-accent/45 group-hover/item:shadow-[0_10px_24px_-16px_rgba(0,173,238,0.9)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: image,
                      alt: "",
                      loading: "lazy",
                      className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-white/10" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-[11px] font-black text-muted-foreground transition-all group-hover/item:border-accent group-hover/item:bg-accent group-hover/item:text-accent-foreground group-hover/item:shadow-glow", children: String(idx + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[14px] font-extrabold text-foreground leading-snug break-words group-hover/item:text-accent transition-colors", children: t(lang, s.label, s.labelEn || s.label) }),
                  s.desc && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[12px] text-muted-foreground leading-snug line-clamp-2", children: t(lang, s.desc, s.descEn || s.desc) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-accent transition-all" })
              ]
            },
            s.href
          );
        }) })
      ]
    }
  ) });
}
function BlogMegaMenu() {
  const { articleCategories: articleCategories2 } = useSiteContent();
  const { lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-full pt-3 z-50 max-w-[calc(100vw-2rem)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-enter w-[min(680px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-popover shadow-elev", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.4fr_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground", children: t(lang, "หมวดหมู่บทความ", "Article Categories") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: articleCategories2.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          search: { category: c.slug },
          className: "group flex items-center gap-3 rounded-xl px-2.5 py-2.5 hover:bg-secondary transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-border transition-all group-hover:ring-accent/45", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: c.imageUrl || articleImages[c.slug],
                  alt: "",
                  loading: "lazy",
                  className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 text-sm font-semibold leading-snug text-foreground group-hover:text-accent", children: t(lang, c.label, c.labelEn || c.label) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" })
          ]
        },
        c.slug
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-gradient-hero p-5 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-cyan", children: "Knowledge Hub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-bold leading-snug", children: t(lang, "บทความและคู่มือ AV Solutions สำหรับองค์กร", "AV Solutions Articles & Guides for Enterprises") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-white/70 leading-relaxed", children: t(lang, "รวมความรู้และ Case Study จากทีมผู้เชี่ยวชาญ", "Knowledge and Case Studies from our Experts") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "mt-4 inline-flex items-center gap-1 rounded-lg bg-white text-navy px-3 py-2 text-xs font-bold hover:bg-cyan transition-colors",
            children: [
              t(lang, "ดูบทความทั้งหมด", "View All Articles"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] })
    ] })
  ] }) }) });
}
function MobileDrawer({
  open,
  onClose,
  lang,
  setLang,
  navItems
}) {
  const [expanded, setExpanded] = reactExports.useState(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open || !mounted) return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[100] xl:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-navy/50 backdrop-blur-sm animate-in fade-in duration-200",
          onClick: onClose
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute right-0 top-0 h-full w-[min(92vw,26rem)] bg-background shadow-elev overflow-y-auto animate-in slide-in-from-right duration-300",
          style: { paddingBottom: "env(safe-area-inset-bottom)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4 sticky top-0 bg-background/95 backdrop-blur z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: matrixLogo, alt: "Matrix Intertrade", className: "h-9 w-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "ปิดเมนู",
                  className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-3", children: navItems.map((item) => {
              const expandedOpen = expanded === item.label;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/50 last:border-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: item.href,
                      onClick: onClose,
                      className: "min-w-0 flex-1 break-words px-3 py-3.5 text-sm font-semibold leading-snug text-foreground hover:text-accent",
                      children: t(lang, item.label, item.labelEn || item.label)
                    }
                  ),
                  item.submenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "px-4 text-muted-foreground hover:text-accent",
                      onClick: () => setExpanded(expandedOpen ? null : item.label),
                      "aria-label": "ขยายเมนู",
                      "aria-expanded": expandedOpen,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ChevronDown,
                        {
                          className: cn(
                            "h-4 w-4 transition-transform duration-200",
                            expandedOpen && "rotate-180"
                          )
                        }
                      )
                    }
                  )
                ] }),
                item.submenu && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "grid transition-all duration-300 ease-out",
                      expandedOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pl-3 pb-3 pt-1 space-y-1", children: item.submenu.map((s) => {
                      const image = getSubmenuImage(s);
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: s.href,
                          onClick: onClose,
                          className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:text-accent hover:bg-secondary transition-colors",
                          children: [
                            image && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative h-11 w-14 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-border", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: image,
                                  alt: "",
                                  loading: "lazy",
                                  className: "absolute inset-0 h-full w-full object-cover"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 break-words font-semibold leading-snug", children: t(lang, s.label, s.labelEn || s.label) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 shrink-0 opacity-50" })
                          ]
                        },
                        s.href
                      );
                    }) }) })
                  }
                )
              ] }, item.label);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 border-t border-border bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: t(lang, "โหมดสี", "Color Mode") }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-2 rounded-xl border border-border/80 bg-muted/30 p-1 shadow-inner", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-lg bg-[#ffd24a] shadow-[0_2px_10px_rgba(255,204,25,0.4)] transition-transform duration-300 ease-out",
                      lang === "EN" ? "translate-x-full" : "translate-x-0"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setLang("TH");
                      onClose();
                    },
                    className: cn(
                      "relative z-10 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition-colors duration-300",
                      lang === "TH" ? "text-[#0a1b3d]" : "text-muted-foreground hover:text-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://flagcdn.com/w20/th.png", alt: "ภาษาไทย (Thai)", className: "w-4 rounded-[2px] shadow-sm" }),
                      "ภาษาไทย"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setLang("EN");
                      onClose();
                    },
                    className: cn(
                      "relative z-10 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition-colors duration-300",
                      lang === "EN" ? "text-[#0a1b3d]" : "text-muted-foreground hover:text-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://flagcdn.com/w20/gb.png", alt: "English (UK)", className: "w-4 rounded-[2px] shadow-sm" }),
                      "English"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "w-full bg-gradient-accent text-white shadow-glow h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", onClick: onClose, children: [
                t(lang, "ขอใบเสนอราคา", "Request Quote"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", onClick: onClose, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-1.5 h-4 w-4" }),
                t(lang, "ติดต่อฝ่ายขาย", "Contact Sales")
              ] }) })
            ] })
          ]
        }
      )
    ] }),
    document.body
  );
}
function Footer() {
  const { solutions: solutions2, brands: brands2, articleCategories: articleCategories2 } = useSiteContent();
  const { lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-24 overflow-hidden bg-navy text-navy-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-8 md:flex-row md:items-center md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "break-words text-xl font-bold tracking-tight md:text-2xl", children: t(lang, "พร้อมเริ่มโปรเจ็คของคุณแล้วหรือยัง?", "Ready to start your project?") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 break-words text-sm text-white/80", children: t(lang, "ขอใบเสนอราคา หรือนัด Site Survey ฟรีจากทีมผู้เชี่ยวชาญ", "Request a quote or schedule a free site survey with our experts") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            className: "min-h-11 w-full bg-gradient-accent font-semibold text-white shadow-glow hover:opacity-90 sm:w-auto",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
              t(lang, "ขอใบเสนอราคา", "Request Quote"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            className: "min-h-11 w-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:w-auto",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:021296193", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-1.5 h-4 w-4" }),
              "02-129-6193"
            ] })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:py-12 md:grid-cols-2 md:px-6 lg:grid-cols-12 lg:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: matrixLogo, alt: "Matrix Intertrade Co., Ltd.", className: "h-14 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md break-words text-sm leading-relaxed text-white/80", children: t(lang, "บจก.แมทริกซ์ อินเตอร์เทรด — ผู้เชี่ยวชาญด้าน AV Solutions, LED Display, Interactive Display, Projector, Wireless Presentation และ Smart Classroom สำหรับองค์กรในประเทศไทย", "Matrix Intertrade Co., Ltd. — Experts in AV Solutions, LED Display, Interactive Display, Projector, Wireless Presentation, and Smart Classroom for enterprises in Thailand.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-sm text-white/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-cyan" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words pt-1", children: t(lang, "111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000", "111/51 Moo 8, Bang Krang, Mueang, Nonthaburi 11000") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-cyan" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words", children: "02-129-6193 / 094-888-7041" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-cyan" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-all", children: "matrixintertrade2026@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold text-[#06C755]", children: "LINE" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words", children: "@MatrixIntertrade" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 pt-1", children: [
          {
            Icon: Facebook,
            href: "https://www.facebook.com/MatrixIntertrade",
            label: "Facebook"
          },
          {
            Icon: Youtube,
            href: "https://www.youtube.com/@matrixintertrade",
            label: "Youtube"
          },
          { Icon: Music2, href: "https://www.tiktok.com/@matrixintertrade", label: "TikTok" }
        ].map(({ Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-gradient-accent hover:border-transparent hover:shadow-glow transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          className: "lg:col-span-2",
          title: t(lang, "โซลูชั่น", "Solutions"),
          items: solutions2.map((s) => ({ label: t(lang, s.title, s.titleEn || s.title), href: `/${s.slug}` }))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          className: "lg:col-span-2",
          title: t(lang, "แบรนด์สินค้า", "Brands"),
          items: brands2.filter((b) => !["Enewave", "Newline", "Poly", "Vissonic", "Yealink"].includes(b.name)).map((b) => ({ label: b.name, href: `/brands/${b.slug}` }))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FooterCol,
        {
          className: "lg:col-span-2",
          title: t(lang, "บทความ", "Articles"),
          items: articleCategories2.slice(0, 6).map((c) => ({ label: t(lang, c.label, c.labelEn || c.label), href: "/blog" }))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-[0.15em] text-white", children: "Newsletter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80 leading-relaxed", children: t(lang, "รับบทความและคู่มือเลือก AV ใหม่ก่อนใคร", "Get the latest AV articles and guides before anyone else") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            className: "flex min-w-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 transition-colors focus-within:border-cyan",
            onSubmit: (e) => e.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: lang === "EN" ? "Your email" : "อีเมลของคุณ",
                  className: "min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/60"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  "aria-label": lang === "EN" ? "Subscribe" : "สมัคร",
                  className: "grid h-11 w-11 shrink-0 place-items-center bg-gradient-accent transition-opacity hover:opacity-90",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/75 md:flex-row md:px-6 md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Matrix Intertrade Co., Ltd. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-5 gap-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aboutus", className: "hover:text-cyan transition-colors", children: t(lang, "เกี่ยวกับเรา", "About Us") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contactus", className: "hover:text-cyan transition-colors", children: t(lang, "ติดต่อเรา", "Contact Us") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-cyan transition-colors", children: t(lang, "บทความ", "Articles") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(lang, "นโยบายความเป็นส่วนตัว", "Privacy Policy") })
      ] })
    ] }) })
  ] });
}
function FooterCol({
  title,
  items,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-[0.15em] mb-4 text-white", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm text-white/80", children: items.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: i.href,
        className: "group inline-flex min-w-0 items-center gap-1 break-words transition-colors hover:text-cyan",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: i.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" })
        ]
      }
    ) }, i.label + idx)) })
  ] });
}
const LineIcon$1 = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" }) });
const iconBtn = "group grid h-10 w-10 place-items-center rounded-full bg-white/8 ring-1 ring-white/15 text-white/85 active:scale-[0.92] active:bg-white/15 transition-all shrink-0 sm:h-11 sm:w-11";
const socialIconBtn = "group hidden h-9 w-9 place-items-center rounded-full bg-white/7 ring-1 ring-white/12 text-white/80 active:scale-[0.92] active:bg-white/15 transition-all shrink-0 min-[360px]:grid sm:h-10 sm:w-10";
function MobileCTABar() {
  const [hidden, setHidden] = reactExports.useState(false);
  const lastY = reactExports.useRef(0);
  reactExports.useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY.current;
        if (y < 80) {
          setHidden(false);
        } else if (dy > 6) {
          setHidden(true);
        } else if (dy < -6) {
          setHidden(false);
        }
        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "xl:hidden fixed bottom-0 inset-x-0 z-40 will-change-transform transform-gpu",
        "transition-[transform,opacity] duration-[450ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
        "motion-reduce:transition-none",
        hidden ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      ),
      style: { paddingBottom: "env(safe-area-inset-bottom)", backfaceVisibility: "hidden" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-white/10 bg-navy/95 backdrop-blur-2xl shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.5)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-2 py-1.5 sm:py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:021296193", "aria-label": "โทร", className: iconBtn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-[15px] w-[15px] sm:h-[16px] sm:w-[16px]", strokeWidth: 2.25 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://lin.ee/hMrlrvH",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LINE",
              className: cn(iconBtn, "hover:text-[#06C755]"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LineIcon$1, { className: "h-[15px] w-[15px] text-[#06C755] sm:h-[16px] sm:w-[16px]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-0.5 hidden h-6 w-px bg-white/10 min-[360px]:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.facebook.com/MatrixIntertrade",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Facebook",
              className: socialIconBtn,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-[13.5px] w-[13.5px] text-[#1877F2] sm:h-[15px] sm:w-[15px]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.tiktok.com/@matrixintertrade",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "TikTok",
              className: socialIconBtn,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "h-[13.5px] w-[13.5px] sm:h-[15px] sm:w-[15px]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.youtube.com/@matrixintertrade",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "YouTube",
              className: socialIconBtn,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-[13.5px] w-[13.5px] text-[#FF0000] sm:h-[15px] sm:w-[15px]" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contactus",
              className: "relative ml-auto inline-flex h-10 min-w-0 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-accent px-2 text-[10.5px] font-bold text-white shadow-glow transition-all active:scale-[0.97] sm:h-11 sm:px-3.5 sm:text-[12px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 to-white/15 opacity-80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FilePlusCorner,
                  {
                    className: "relative h-[14px] w-[14px] sm:h-[15px] sm:w-[15px]",
                    strokeWidth: 2.4
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative truncate tracking-wide", children: "ขอใบเสนอราคา" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "aria-label": "กลับขึ้นด้านบน",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: cn(
        "fixed bottom-[4.75rem] right-3 z-40 grid h-10 w-10 place-items-center rounded-full bg-gradient-accent text-white shadow-[0_8px_20px_-10px_rgba(0,173,238,0.9)] transition-all duration-500 btn-press sm:bottom-20 sm:right-4 sm:h-12 sm:w-12 sm:shadow-glow xl:bottom-6",
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-4 w-4 sm:h-5 sm:w-5" })
    }
  );
}
const chatbotCircle = "/assets/chatbot-circle-CAHjeiiG.png";
const quickPrompts = [
  "แนะนำจอ LED สำหรับห้องประชุม",
  "ช่วยเลือก Interactive Display สำหรับโรงเรียน",
  "ขอใบเสนอราคา Persona",
  "มีงบประมาณจำกัด ควรเริ่มจากโซลูชันไหน"
];
const initialMessage = {
  id: "welcome",
  role: "assistant",
  text: "สวัสดีครับ ผมคือ AI ผู้ช่วยฝ่ายขาย Matrix บอกประเภทงาน ขนาดห้อง หรือสินค้าที่สนใจได้เลย ผมจะช่วยค้นข้อมูลจากเว็บไซต์และคัดตัวเลือกให้ครับ"
};
function ProductResultCard({ item }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: item.href,
      className: "group flex min-w-0 gap-3 rounded-xl border border-slate-200 bg-white p-2.5 transition hover:border-red-200 hover:bg-red-50/40",
      children: [
        item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.image,
            alt: "",
            className: cn(
              "h-full w-full",
              item.type === "product" ? "object-contain p-1" : "object-cover"
            ),
            loading: "lazy"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-sm font-bold leading-snug text-slate-950", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 line-clamp-1 text-xs font-medium text-slate-500", children: item.subtitle }),
          item.price ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-bold text-red-600", children: item.price }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-bold text-sky-700", children: item.cta })
        ] })
      ]
    }
  );
}
function ChatMessageBubble({ message }) {
  const isUser = message.role === "user";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex gap-2", isUser ? "justify-end" : "justify-start"), children: [
    !isUser && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red-600 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("max-w-[88%] sm:max-w-[82%]", isUser && "flex flex-col items-end"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
            isUser ? "rounded-br-md bg-slate-950 text-white" : "rounded-bl-md border border-slate-200 bg-white text-slate-800"
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-line break-words", children: message.text })
        }
      ),
      !isUser && message.results?.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid gap-2", children: message.results.slice(0, 3).map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductResultCard, { item }, `${item.type}-${item.id}`)) }) : null
    ] })
  ] });
}
function AiSalesChatbot() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([initialMessage]);
  const messagesEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => setMounted(true), []);
  reactExports.useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open]);
  const compactHistory = reactExports.useMemo(
    () => messages.slice(-6).map((message) => `${message.role === "user" ? "Customer" : "Assistant"}: ${message.text}`),
    [messages]
  );
  if (!mounted) return null;
  async function submitMessage(nextMessage = input.trim()) {
    const text = nextMessage.trim();
    if (!text || loading) return;
    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/public/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: compactHistory })
      });
      if (!response.ok) throw new Error(`Chatbot failed: ${response.status}`);
      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          text: data.answer,
          results: data.results,
          source: data.source
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          text: "ขออภัยครับ ระบบแชตกำลังขัดข้องชั่วคราว กดคุยกับฝ่ายขายทาง LINE หรือโทรหาเราได้เลย ทีมงานพร้อมช่วยเลือกสินค้าให้ครับ"
        }
      ]);
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-[4.75rem] left-3 z-50 sm:bottom-20 sm:left-4 xl:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-label": "เปิด AI ผู้ช่วยฝ่ายขาย",
        "aria-expanded": open,
        onClick: () => setOpen((value) => !value),
        className: "ai-chatbot-button group relative grid h-10 w-10 place-items-center rounded-full outline-none focus-visible:ring-4 focus-visible:ring-red-300 sm:h-12 sm:w-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ai-chatbot-button__halo", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ai-chatbot-button__pulse", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: chatbotCircle,
              alt: "",
              className: "relative h-full w-full rounded-full object-cover",
              draggable: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ai-chatbot-button__shine", "aria-hidden": "true" }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-white bg-slate-950 text-white shadow-sm sm:h-5 sm:w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-2.5 w-2.5 sm:h-3 sm:w-3" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.85)] sm:h-3.5 sm:w-3.5 sm:shadow-[0_0_14px_rgba(34,211,238,0.9)]" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        role: "dialog",
        "aria-label": "AI ผู้ช่วยฝ่ายขาย Matrix",
        className: cn(
          "fixed z-50 overflow-hidden border border-slate-200 bg-slate-50 shadow-2xl transition-all duration-300",
          "bottom-24 left-3 right-3 max-h-[calc(100dvh-7.5rem)] max-w-[calc(100vw-1.5rem)] rounded-2xl",
          "md:bottom-24 md:left-5 md:right-auto md:h-[min(720px,calc(100dvh-7rem))] md:w-[430px]",
          open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-[0.98] opacity-0"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-slate-950 px-4 py-4 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(248,113,113,0.45),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.28),transparent_32%)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-red-600 shadow-[0_10px_22px_rgba(220,38,38,0.38)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-black", children: "AI ผู้ช่วยฝ่ายขาย" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-xs text-slate-300", children: "ค้นสินค้าและโซลูชันจากเว็บไซต์ Matrix" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "ปิดแชต",
                  onClick: () => setOpen(false),
                  className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
            messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChatMessageBubble, { message }, message.id)),
            messages.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-500", children: "ลองถามเรื่องนี้ได้เลย" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: quickPrompts.map((prompt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => submitMessage(prompt),
                  className: "min-h-10 rounded-full border border-red-100 bg-white px-3 py-2 text-left text-xs font-bold leading-snug text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700",
                  children: prompt
                },
                prompt
              )) })
            ] }),
            loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-red-600" }),
              "กำลังค้นข้อมูลจากเว็บไซต์..."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-200 bg-white p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/contactus",
                  className: "inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-2 text-center text-xs font-black leading-snug text-white transition hover:bg-red-700",
                  children: [
                    "ขอใบเสนอราคา ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://lin.ee/hMrlrvH",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl bg-[#06C755] px-3 py-2 text-center text-xs font-black leading-snug text-white transition hover:brightness-95",
                  children: [
                    "คุย LINE ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                className: "flex items-end gap-2",
                onSubmit: (event) => {
                  event.preventDefault();
                  submitMessage();
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "sr-only", htmlFor: "ai-sales-chatbot-input", children: "พิมพ์คำถามถึง AI ผู้ช่วยฝ่ายขาย" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "ai-sales-chatbot-input",
                      value: input,
                      onChange: (event) => setInput(event.target.value),
                      onKeyDown: (event) => {
                        if (event.key === "Enter" && !event.shiftKey) {
                          event.preventDefault();
                          submitMessage();
                        }
                      },
                      rows: 1,
                      placeholder: "พิมพ์สินค้าหรือหน้างานที่ต้องการ...",
                      className: "max-h-28 min-h-11 min-w-0 flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-red-300 focus:bg-white focus:ring-4 focus:ring-red-100"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: !input.trim() || loading,
                      className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-600 text-white shadow-[0_8px_18px_rgba(220,38,38,0.28)] transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none",
                      "aria-label": "ส่งข้อความ",
                      children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[11px] font-medium text-slate-500", children: "AI อ้างอิงข้อมูลจากเว็บไซต์ หากต้องการราคาสุดท้ายให้ทีมขายยืนยันอีกครั้ง" })
          ] })
        ] })
      }
    )
  ] });
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const lineQr = "/assets/line-qr-DzRhGIE-.png";
const LineIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" }) });
const socials = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/MatrixIntertrade",
    label: "Facebook",
    color: "text-[#1877F2]",
    ring: "hover:ring-[#1877F2]/40"
  },
  {
    Icon: LineIcon,
    href: "https://lin.ee/hMrlrvH",
    label: "LINE",
    color: "text-[#06C755]",
    ring: "hover:ring-[#06C755]/40",
    qr: true
  },
  {
    Icon: Music2,
    href: "https://www.tiktok.com/@matrixintertrade",
    label: "TikTok",
    color: "text-foreground",
    ring: "hover:ring-foreground/30"
  },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@matrixintertrade",
    label: "YouTube",
    color: "text-[#FF0000]",
    ring: "hover:ring-[#FF0000]/40"
  }
];
function FloatingSocial() {
  const [openDesktop, setOpenDesktop] = reactExports.useState(true);
  const [mounted, setMounted] = reactExports.useState(false);
  const [lineOpen, setLineOpen] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex flex-col gap-2 rounded-l-2xl border border-r-0 border-border bg-background/90 backdrop-blur-xl shadow-elev p-2 transition-all duration-300 ${openDesktop ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`,
          children: socials.map(({ Icon, href, label, color, ring, qr }) => {
            const cls = `grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card hover:ring-2 ${ring}`;
            if (qr) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": label,
                  onClick: () => setLineOpen(true),
                  className: cls,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 ${color}` })
                },
                label
              );
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": label,
                className: cls,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 ${color}` })
              },
              label
            );
          })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": openDesktop ? "ซ่อนโซเชียล" : "แสดงโซเชียล",
          onClick: () => setOpenDesktop((v) => !v),
          className: "grid h-10 w-6 place-items-center rounded-l-lg border border-r-0 border-border bg-background/90 backdrop-blur-xl shadow-elev text-muted-foreground hover:text-foreground transition-colors -ml-px",
          children: openDesktop ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: lineOpen, onOpenChange: setLineOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LineIcon, { className: "h-5 w-5 text-[#06C755]" }),
          "เพิ่มเพื่อนทาง LINE"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "สแกน QR Code เพื่อเพิ่ม Matrix Intertrade เป็นเพื่อนใน LINE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-white p-4 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lineQr, alt: "LINE QR Code", className: "h-56 w-56 object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://lin.ee/hMrlrvH",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 rounded-full bg-[#06C755] px-5 py-2.5 text-sm font-bold text-white shadow-card hover:opacity-90",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LineIcon, { className: "h-4 w-4" }),
              " เปิดใน LINE"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const ThemeContext = reactExports.createContext(null);
const STORAGE_KEY = "matrix-theme";
function getInitial() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const initial = getInitial();
    setThemeState(initial);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
    }
  }, [theme]);
  const setTheme = (t2) => setThemeState(t2);
  const toggle = () => setThemeState((t2) => t2 === "dark" ? "light" : "dark");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, toggle, setTheme }, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeContext);
  if (!ctx) return { theme: "light", toggle: () => {
  }, setTheme: (_) => {
  } };
  return ctx;
}
const appCss = "/assets/styles-DLJvy5k3.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-primary", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "ไม่พบหน้าที่คุณค้นหา" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "หน้านี้อาจถูกย้ายหรือไม่มีอยู่จริง" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-gradient-accent px-4 py-2 text-sm font-medium text-white",
        children: "กลับหน้าแรก"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "เกิดข้อผิดพลาด" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "ลองรีโหลดหรือกลับสู่หน้าแรก" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-md bg-gradient-accent px-4 py-2 text-sm font-medium text-white",
          children: "ลองอีกครั้ง"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-input px-4 py-2 text-sm font-medium", children: "หน้าแรก" })
    ] })
  ] }) });
}
const Route$o = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Matrix Intertrade — AV Solutions Specialist" },
      {
        name: "description",
        content: "ตัวแทน AV Solutions ครบวงจรในประเทศไทย — ออกแบบ ติดตั้ง และดูแลระบบภาพ-เสียงระดับองค์กร"
      },
      { property: "og:site_name", content: "Matrix Intertrade" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600;700&family=Schibsted+Grotesk:wght@400;500;600;700;800;900&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Matrix Intertrade",
          description: "AV Solution Specialist — LED Display, Interactive Display, Projector, Wireless Presentation, AV Solutions",
          url: "/",
          sameAs: []
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "th", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$o.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pb-16 xl:pb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileCTABar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AiSalesChatbot, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingSocial, {})
  ] }) }) }) });
}
const $$splitComponentImporter$i = () => import("./wireless-presentation-_gux_4QU.mjs");
const Route$n = createFileRoute("/wireless-presentation")({
  head: () => ({
    meta: [{
      title: "Wireless Presentation — Matrix Intertrade"
    }, {
      name: "description",
      content: "ระบบนำเสนอไร้สายรองรับ BYOD ทุกอุปกรณ์"
    }, {
      property: "og:title",
      content: "tranScreen Wireless Presentation สำหรับห้องประชุมยุคใหม่"
    }, {
      property: "og:description",
      content: "นำเสนอไร้สาย Real-time แชร์พร้อมกัน 4 หน้าจอ รองรับ AirPlay, Miracast และ Google Cast"
    }, {
      property: "og:url",
      content: "/wireless-presentation"
    }],
    links: [{
      rel: "canonical",
      href: "/wireless-presentation"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./theme-preview-JgtL9_h4.mjs");
const Route$m = createFileRoute("/theme-preview")({
  head: () => ({
    meta: [{
      title: "Theme Preview — Contrast Checker"
    }, {
      name: "description",
      content: "ตรวจสอบสี ไอคอน และข้อความในโหมด Light / Dark"
    }, {
      name: "robots",
      content: "noindex,nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./solutions-BtXulyHA.mjs");
const Route$l = createFileRoute("/solutions")({
  head: () => ({
    meta: [{
      title: "โซลูชั่นของเรา — Matrix Intertrade"
    }, {
      name: "description",
      content: "LED Display, Interactive Display, Projector, Wireless Presentation, AV Solutions สำหรับองค์กรไทย"
    }, {
      property: "og:title",
      content: "โซลูชั่นของเรา — Matrix Intertrade"
    }, {
      property: "og:description",
      content: "โซลูชั่น AV ครบวงจรสำหรับองค์กร"
    }, {
      property: "og:url",
      content: "/solutions"
    }],
    links: [{
      rel: "canonical",
      href: "/solutions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const titles = [
  "ติดตั้งจอ LED คุณกำลังจ่ายเพื่อ “ราคา” หรือ “คุณภาพการใช้งานระยะยาว”",
  "กำลังจะติดตั้งจอ LED ถ้ายังดูแค่ราคา คุณอาจกำลังตัดสินใจผิด",
  "งบเท่านี้ซื้อจอ LED ได้แบบไหน? คู่มือวางงบ LED Display สำหรับองค์กร",
  "Hybrid Meeting ยังไม่เวิร์ก แก้ได้ด้วย Persona Interactive และระบบที่องค์กรต้องมี",
  "จอ LED 1 จอ ต้องมีอะไรบ้าง? คู่มือระบบ LED Display สำหรับองค์กรที่มือใหม่ก็เข้าใจ",
  "Active Learning ด้วย Persona ยกระดับห้องเรียนสู่ Smart Classroom",
  "Case Study อัปเกรดห้องเรียนด้วย Persona Interactive",
  "10 คำถามเชิงกลยุทธ์ที่องค์กรต้องรู้ ก่อนตัดสินใจติดตั้งจอ LED",
  "7 เหตุผลที่หน่วยงานรัฐควรติดตั้งจอ LED กลางแจ้ง แทนป้ายไวนิลแบบเดิม ๆ",
  "ทำไมจอ Persona ถึงเป็นจอสัมผัสอัจฉริยะอันดับ 1 จากไต้หวัน",
  "การดูแลและบำรุงรักษาจอ LED เพื่อให้ใช้งานได้ยาวนานในองค์กร",
  "5 เหตุผลที่จออินเตอร์แอคทีฟ กำลังเป็นมาตรฐานของห้องเรียนอัจฉริยะ",
  "Whiteboard บนจอ Persona ดีกว่าจออินเตอร์แอคทีฟทั่วไปอย่างไร",
  "LED Display vs LCD Display เลือกแบบไหนให้เหมาะกับองค์กรของคุณ",
  "จอ Persona vs Projector ต่างกันอย่างไร เลือกให้ถูกก่อนตัดสินใจซื้อ",
  "จอ Persona vs TV ทั่วไป ต่างกันแค่ไหน เทียบชัดทุกจุดแบบมืออาชีพ",
  "6 เหตุผลที่หน่วยงานรัฐควรใช้จอ LED แทนโปรเจคเตอร์",
  "ClassCraft โซลูชั่นห้องเรียนอัจฉริยะจาก Persona",
  "เลือกจอ Interactive ปี 2026 ทำไม Persona คือคำตอบ",
  "7 Checklists ที่องค์กรต้องรู้ ก่อนตัดสินใจติดตั้งจอ LED",
  "DMS+ ระบบจัดการจอจากระยะไกล ที่โรงเรียนยุคใหม่ต้องมี",
  "5 แนวทางวางระบบจอ LED สำหรับห้องประชุมองค์กรในปี 2026",
  "Google EDLA Certified คืออะไร? และทำไมจอ Persona ถึงเหนือกว่าคู่แข่ง",
  "โซลูชั่นห้องเรียนอัจฉริยะด้วย Persona Interactive",
  "อยากติดตั้งจอ LED ในองค์กร ต้องเริ่มต้นอย่างไรบ้าง?",
  "Persona Interactive ใช้สอนออนไลน์ได้ไหม? รองรับโปรแกรมอะไรบ้าง",
  "10 คำถามที่โรงเรียน-องค์กรถามบ่อยก่อนซื้อ จอ Persona",
  "9 ฟีเจอร์เด่นของ Persona Interactive Display",
  "จอ LED แบบ SMD | COB | GOB ต่างกันอย่างไร?",
  "ติดตั้งจอ LED แบบไหนดี? Indoor หรือ Outdoor - เลือกอย่างไรให้เหมาะกับธุรกิจคุณ",
  "5 ปัจจัยที่ต้องรู้ก่อนสั่งซื้อ “จอ LED” เพื่อใช้งานจริงในองค์กร",
  "ทำไมธุรกิจยุคใหม่ถึงเลือกใช้จอ LED แทนโปรเจกเตอร์แบบเดิม",
  "สิ่งที่ควรรู้ก่อนตัดสินใจ “ติดตั้งจอ LED” สำหรับองค์กรของคุณ",
  "Umate SF จาก Unilumin – จอ LED กลางแจ้งระดับพรีเมียม ที่ตอบโจทย์ DOOH ทุกโปรเจกต์",
  "Persona Interactive KTA-Pro-Full | จอสัมผัสอัจฉริยะที่ตอบโจทย์การศึกษาและธุรกิจยุคใหม่",
  "UsurfaceⅢ จาก Unilumin – จอ LED Outdoor ที่ยกระดับโฆษณากลางแจ้งสู่มาตรฐานใหม่",
  "U-Natural จาก Unilumin – จอ LED ที่ยกระดับความสมจริงสู่มิติใหม่",
  "UTV SC จาก Unilumin – จอ All In One ที่เปลี่ยนห้องประชุมให้เหนือกว่าที่เคย",
  "UMini P จาก Unilumin — จอ LED ที่สร้างประสบการณ์เหนือการแสดงผล",
  "Umate LM จาก Unilumin — จอ LED ที่ตอบโจทย์ทุกภาคธุรกิจ",
  "มาทำความรู้จักกับ Screen Resolution คืออะไร?",
  "ความแตกต่างระหว่าง Module LED และ Cabinet LED",
  "รู้หรือไม่? Pixel Pitch คืออะไร และสำคัญอย่างไรกับจอ LED!",
  "จอ LED All-in-one ครองตลาดห้องประชุม ยุค LCD กำลังจะล้าสมัย?",
  "What Is AVoverIP",
  "Smart Hospital",
  "5 เทคโนโลยีสุดล้ำ เปลี่ยนห้องประชุมธรรมดาให้กลายเป็นห้องประชุมยุคใหม่",
  "5 เหตุผลว่าทำไมจอ Newline Q series เหมาะกับโรงเรียนของคุณ!",
  "Matrix Intertrade ประสบความสำเร็จอย่างยิ่งใหญ่กับงาน Smart Solutions & Smart AV Technologies For Smart Southern People",
  "HDBaseT คืออะไร? เทคโนโลยีนี้ทำงานอย่างไร?"
];
function categorize(t2) {
  const s = t2.toLowerCase();
  if (s.includes("persona") && s.includes("classroom")) return "smart-classroom";
  if (s.includes("classroom") || s.includes("ห้องเรียน") || s.includes("โรงเรียน") || s.includes("newline"))
    return "smart-classroom";
  if (s.includes("interactive") || s.includes("persona") || s.includes("whiteboard"))
    return "interactive-display";
  if (s.includes("hybrid") || s.includes("meeting") || s.includes("ห้องประชุม") || s.includes("avoverip") || s.includes("hdbaset") || s.includes("kramer"))
    return "meeting-room";
  if (s.includes("case study") || s.includes("smart solutions") || s.includes("ประสบความสำเร็จ") || s.includes("smart hospital"))
    return "case-study";
  if (s.includes("pixel") || s.includes("resolution") || s.includes("module") || s.includes("cabinet") || s.includes("คืออะไร") || s.includes("ต่างกัน"))
    return "knowledge";
  return "led-display";
}
const articles = titles.map((title, i) => {
  const id = i + 1;
  return {
    id,
    title,
    slug: `article-${id}`,
    category: categorize(title),
    excerpt: title.slice(0, 110) + (title.length > 110 ? "…" : ""),
    date: `2025-${String(i * 3 % 12 + 1).padStart(2, "0")}-${String(i * 7 % 27 + 1).padStart(2, "0")}`,
    readMin: 4 + i % 6
  };
});
function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}
const products = [
  {
    id: "1290605",
    name: "KTA-PRO-FULLขนาด 100 นิ้ว",
    image: "https://shop-image.readyplanet.com/68oOllSLXljOXrUuWz50VUf7DlE=/500x500/b8d682176a8e4dc19b522bc22bcf59a7",
    price: "329,000.00",
    url: "https://www.matrixintertrade.com/product/1290605",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1290604",
    name: "KTA-PRO-FULLขนาด 86 นิ้ว",
    image: "https://shop-image.readyplanet.com/UqEF6AwNNRrZu4NZtCasi6JJpgk=/500x500/829ad20fdda44e7eb612c27a198bb552",
    price: "229,000.00",
    url: "https://www.matrixintertrade.com/product/1290604",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1290601",
    name: "KTA-PRO-FULLขนาด 75 นิ้ว",
    image: "https://shop-image.readyplanet.com/nq_savgioCVCWMbB5jdLkll8mvg=/500x500/87a0b9df30a94016978fb6f21c2a215b",
    price: "190,000.00",
    url: "https://www.matrixintertrade.com/product/1290601",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1254956",
    name: "4K UHD AI-Powered Webcam",
    image: "https://shop-image.readyplanet.com/s_4gJdcxI55rylVvDki8vmseZPo=/500x500/18c125cd5f05493cb0f587c26ef0ab2f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1254956",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1254937",
    name: "4K OPS Mini PC",
    image: "https://shop-image.readyplanet.com/jqlLTM4gEOnwLLlweUkzPrdEghM=/500x500/1e7ae8ae36fc4c08bebb9ff859d1c54d",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1254937",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1246900",
    name: "FCQ",
    image: "https://shop-image.readyplanet.com/o2g8bmEUSjkQkwXsHRdrJNNNfDI=/500x500/e5932f940af342f3bab356fc62dd69a3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1246900",
    brand: "Unilumin",
    brandSlug: "unilumin",
    brandCategoryId: "288194"
  },
  {
    id: "1245861",
    name: "Movable Stand",
    image: "https://shop-image.readyplanet.com/w-FAnxiBEOPHpl0xScL_KxqkZY4=/500x500/26dbb2388d3147c298babf8e36ae7982",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245861",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1245290",
    name: "Presentation Remote Devices",
    image: "https://shop-image.readyplanet.com/UfFde_UMt4eI41kSxXrnHql7DA8=/500x500/cc4eef1b1a8143f28aca4cb07115e5df",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245290",
    brand: "tranScreen",
    brandSlug: "transcreen",
    brandCategoryId: "288210"
  },
  {
    id: "1245288",
    name: "PTM6302",
    image: "https://shop-image.readyplanet.com/Z4qaWLTrSgV1iUCKnCWR4yQYddY=/500x500/247d08141a5d4ee4a5b0ab534f1ceb77",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245288",
    brand: "tranScreen",
    brandSlug: "transcreen",
    brandCategoryId: "288210"
  },
  {
    id: "1245285",
    name: "PTB3219",
    image: "https://shop-image.readyplanet.com/ga16M2a-tXOznTuWYwmUQ1d4FMQ=/500x500/4ccd5137e2f044d38924f09ea4198980",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245285",
    brand: "tranScreen",
    brandSlug: "transcreen",
    brandCategoryId: "288210"
  },
  {
    id: "1245281",
    name: "PTB4615",
    image: "https://shop-image.readyplanet.com/lLfyDDErgLF5KSgx9wWOELVKLYw=/500x500/ba5dd3bcbff24d59b8ca1e3ab1487306",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245281",
    brand: "tranScreen",
    brandSlug: "transcreen",
    brandCategoryId: "288210"
  },
  {
    id: "1245165",
    name: "KTA-PRO-FULLขนาด 70 นิ้ว",
    image: "https://shop-image.readyplanet.com/guv8Ki2WGIC470w3Bj8v29vHAMI=/500x500/7112a9222f724fdd9eedc48e8682883c",
    price: "120,000.00",
    url: "https://www.matrixintertrade.com/product/1245165",
    brand: "Persona",
    brandSlug: "persona",
    brandCategoryId: "288209"
  },
  {
    id: "1245024",
    name: "U-Natural",
    image: "https://shop-image.readyplanet.com/fnsgLTDEokhYLB4qQIbjGJl6EF8=/500x500/8c295300be824884950145f3676f27b1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245024",
    brand: "Unilumin",
    brandSlug: "unilumin",
    brandCategoryId: "288194"
  },
  {
    id: "1245006",
    name: "UMini P",
    image: "https://shop-image.readyplanet.com/LWpyolxhUbGae3y8Lwu1TYs-CcA=/500x500/b817d58d0f4842b695cdef918ce0a0ef",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1245006",
    brand: "Unilumin",
    brandSlug: "unilumin",
    brandCategoryId: "288194"
  },
  {
    id: "1244937",
    name: "UTV SC Series - All In One",
    image: "https://shop-image.readyplanet.com/iqasuZYoK2F1tzgevXyOHkc1ovw=/500x500/3910758e425f417287a188e61aa443e1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1244937",
    brand: "Unilumin",
    brandSlug: "unilumin",
    brandCategoryId: "288194"
  },
  {
    id: "1244829",
    name: "Umate LM",
    image: "https://shop-image.readyplanet.com/K_adKAFEpnwKvp9uFJfCpxoxhQM=/500x500/f94e3bc6146c49e582e1ebf12bf8bed1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/1244829",
    brand: "Unilumin",
    brandSlug: "unilumin",
    brandCategoryId: "288194"
  },
  {
    id: "929632",
    name: "POLY STUDIO E70",
    image: "https://shop-image.readyplanet.com/1JP8W7LJ-JOXokXJ4P1KHNjdWwg=/500x500/2a7128f73a3245c2a32cae55aac5b120",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929632",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "929541",
    name: "Cyber Series Motorized Screen 2.35 : 1",
    image: "https://shop-image.readyplanet.com/G88MssRYkb3875HeUaBMYrLwWqo=/500x500/4efd1486518e4548b9bb9beeb22ac993",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929541",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929535",
    name: "Cyber Series Motorized Screen 16 : 10",
    image: "https://shop-image.readyplanet.com/iyS5eGLbFlaYAf-2e_9CuHrisHY=/500x500/0172e3a15bbe4bcbb84ac285472e9592",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929535",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929526",
    name: "Cyber Series Motorized Screen 16 :9",
    image: "https://shop-image.readyplanet.com/GTkPbLVsRCKIl0VvFWzUZTBJxBo=/500x500/6d24879e8d234563b07f82c08504624d",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929526",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929525",
    name: "Cyber Series Motorized Screen 4 :3",
    image: "https://shop-image.readyplanet.com/gVRP3sV12E9_Zh6eUGq2hsBa-_A=/500x500/419b8df1996e43558788447890c67c86",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929525",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929524",
    name: "Cyber Series Motorized Screen 1: 1",
    image: "https://shop-image.readyplanet.com/aNuBUfCJMZRcmxwd2kr_miVnjUE=/500x500/010468628dc3489b8fc54d1265c41b9a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929524",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929471",
    name: "Edge Series Fixed Frame Screen - R1 16 :10",
    image: "https://shop-image.readyplanet.com/B7vNjsTTZXwoIEhj3AI2Sa3Xx30=/500x500/f7f2bc2c84e14bd5a60d10c3e5a46b4c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929471",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929470",
    name: "Edge Series Fixed Frame Screen - R1 16 : 9",
    image: "https://shop-image.readyplanet.com/oVpPOsjonDOWQNvzFZo8B0Fm82I=/500x500/2cae36e5989c42e9b277fa49e46d42f5",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929470",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929467",
    name: "Large Stage Series Motorized Screen-Model MB 2.35 : 1",
    image: "https://shop-image.readyplanet.com/audxChhrXy_Te1bajLLVe0r_z54=/500x500/56a61d2697e649f89142310c3c3094f9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929467",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929466",
    name: "Large Stage Series Motorized Screen-Model MB 16 : 10",
    image: "https://shop-image.readyplanet.com/Xy5IUHQyNexBc20D1JJNDyXJwmI=/500x500/72b3f6539e154154b621f2fd87bb5814",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929466",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929464",
    name: "Large Stage Series Motorized Screen-Model MB 16 :9",
    image: "https://shop-image.readyplanet.com/ATzjm9f804GTWtWEI9ZsblEl7sQ=/500x500/ef0f68a2dde74ee89582956abbf607f5",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929464",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929460",
    name: "Large Stage Series Motorized Screen-Model MB 4 : 3",
    image: "https://shop-image.readyplanet.com/N2VBG1sGEtzAY1psFGRDo9kIjvo=/500x500/9125e1c7cbd54a94bb9936f7a1b68469",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929460",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929454",
    name: "Large Stage Series Motorized Screen-Model MA 2.35 : 1",
    image: "https://shop-image.readyplanet.com/eAg3gLKfjiw5i6padcwEXuWEZbs=/500x500/ec90cf30858649a59b4e7058002051db",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929454",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929453",
    name: "Large Stage Series Motorized Screen-Model MA 16 :10",
    image: "https://shop-image.readyplanet.com/FdFCydWfuZRjpPtuMWHMuEUmfuU=/500x500/68da4af452674da5a58995a462e4ee57",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929453",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929450",
    name: "Large Stage Series Motorized Screen-Model MA 16 : 9",
    image: "https://shop-image.readyplanet.com/8vGPZiBaJALWWHY-6UJ2uM9P_3g=/500x500/0462b50f58ad439c9e52bf4ac980dbb9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929450",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929449",
    name: "Large Stage Series Motorized Screen-Model MA 4 : 3",
    image: "https://shop-image.readyplanet.com/FpyZtrBeYtbBBNGTFxS-hyEq3lo=/500x500/9ed5d598bd184591a9538664fef120d8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929449",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929420",
    name: "Large Stage Series 2.35 : 1",
    image: "https://shop-image.readyplanet.com/GmRp-TxtEfDpoe-lrCG1dWGyHkY=/500x500/76b25ebd9c3741ba8b6d534d4653fddf",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929420",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929419",
    name: "Large Stage Series 16 :10",
    image: "https://shop-image.readyplanet.com/1CMM5z9KTcMgx91IXKWiLhlHrGo=/500x500/fe0bc0bfa24842d4b24f9df4dfae3c81",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929419",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929406",
    name: "Large Stage Series 16 : 9",
    image: "https://shop-image.readyplanet.com/7TnH8Kpr-FFEwhW3GxmXmMmf6Is=/500x500/a8ec8f93bfb449e9be00202ee48080a0",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929406",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "929400",
    name: "Large Stage Series 4 : 3",
    image: "https://shop-image.readyplanet.com/QfpG7cBaOHRlQCDhZwpPCcvdoA0=/500x500/c6b39aed395d44a39fe5c802608f58ed",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/929400",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "928374",
    name: "Tab-Tension Series 2.35 : 1",
    image: "https://shop-image.readyplanet.com/LtB17QOlgZABDouzHmqzGi_OyVA=/500x500/461f000b235840cfadaa89b6bfa7c5ca",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/928374",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "928373",
    name: "Tab-Tension Series 16 : 9",
    image: "https://shop-image.readyplanet.com/Bai7bwWyPlCoe0ULWwNbwiM_-08=/500x500/f1f4dda879034d3bae7b5c0a4325e075",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/928373",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "928372",
    name: "Tab-Tension Series 4 :3",
    image: "https://shop-image.readyplanet.com/N6ZqrFtyrYMRiYw-ia1lCPwgK6Q=/500x500/3dccad5ae4bb41deab9ed42240d136fd",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/928372",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "925963",
    name: "MCore Pro-ZR",
    image: "https://shop-image.readyplanet.com/Cl_JxMliKwvGRLvl6cNrTfKNHB0=/500x500/ccc4effff0064cd2a805395292ff894b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925963",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925961",
    name: "MCore Pro-MS",
    image: "https://shop-image.readyplanet.com/kjkH6D0oVlLmiZln_bNhoLdRxHw=/500x500/a4915219323f470a9fa29d949d4368f1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925961",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925384",
    name: "ZVC840-C3-000",
    image: "https://shop-image.readyplanet.com/tKsm0paPIpauOpvTQ-YYClQpPbU=/500x500/6992bdac520a4922b8e199014afbf719",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925384",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925380",
    name: "ZVC860-C3-000",
    image: "https://shop-image.readyplanet.com/5Ig3yKnqqV1r8LAwW6_7Jid--Dc=/500x500/db13cf67e87c4970b3d10f315395db69",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925380",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925359",
    name: "ZVC400-C3-000",
    image: "https://shop-image.readyplanet.com/hZ_iM4yjk0QbiB0HybSHpB_94TE=/500x500/5c3cee657d1743feb0fca775aa853c6b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925359",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925357",
    name: "ZVC840-C3-310",
    image: "https://shop-image.readyplanet.com/SVi8LdA2z-MFqBdNegmWpxPXgKE=/500x500/91fb37f788094dffb61cc782420bcaf4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925357",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925354",
    name: "VCM38",
    image: "https://shop-image.readyplanet.com/r66nOikdPJWnJCas-F0hJfSz38w=/500x500/c8b4a0703eb742e7b783e17fd86884f9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925354",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925353",
    name: "VCR20",
    image: "https://shop-image.readyplanet.com/h3gakZSi-ZeiQIsMkhYzMGTg1X8=/500x500/42951e7c261d40d491af80b7cc456cdf",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925353",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925352",
    name: "Camera-Hub",
    image: "https://shop-image.readyplanet.com/JUX8c5WmXktutIK7rY5atYG1YpI=/500x500/9fc6479d53374613bdd81ffe60f40e12",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925352",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925328",
    name: "UVC34",
    image: "https://shop-image.readyplanet.com/9zCD6flgjA7BJrCmqVH6UPzrjXo=/500x500/1b22315709ca45f78d0ff9fe2e2a8165",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925328",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925297",
    name: "UVC86",
    image: "https://shop-image.readyplanet.com/LgLYH7zjxFX14E_RMvhEyXr1Ylo=/500x500/19c39174b7374638b4a6aa384c435cb9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925297",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925296",
    name: "MSPEAKER II",
    image: "https://shop-image.readyplanet.com/qRHQ0A_rA_idWlNiBSg1tQUGdqo=/500x500/55ade9db56014c8e8c9edd34f61dd7e7",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925296",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925295",
    name: "CP960",
    image: "https://shop-image.readyplanet.com/s1h2F8v0kkQ22wKE1K_g8YWTrF8=/500x500/8aec00701d8e480eb39118653e203680",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925295",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925294",
    name: "VCM34",
    image: "https://shop-image.readyplanet.com/xzQVHOXoDwTgNem0MpbQQ6G4-Fw=/500x500/8e85b85c5f9443dabe2de567af918341",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925294",
    brand: "Yealink",
    brandSlug: "yealink",
    brandCategoryId: "237676"
  },
  {
    id: "925288",
    name: "VIS-WBTY2",
    image: "https://shop-image.readyplanet.com/UQMDO_hcgVVt2OQz_tEmC2nRriw=/500x500/6c93481d03a94e38807bb192ce671bd8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925288",
    brand: "Vissonic",
    brandSlug: "vissonic",
    brandCategoryId: "237678"
  },
  {
    id: "925287",
    name: "VIS-AP4C",
    image: "https://shop-image.readyplanet.com/GErI1KFp_3D3k0wMTV_M-ubxLLs=/500x500/e751ea6c884947f492351532d16175c8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925287",
    brand: "Vissonic",
    brandSlug: "vissonic",
    brandCategoryId: "237678"
  },
  {
    id: "925286",
    name: "VIS-MAW-T",
    image: "https://shop-image.readyplanet.com/z28pFjD1ABqNxvrZmsBuALVqwL8=/500x500/afe5e1a90406441f8aba3ec4a506b6b8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925286",
    brand: "Vissonic",
    brandSlug: "vissonic",
    brandCategoryId: "237678"
  },
  {
    id: "925281",
    name: "VIS-DCP2000-W",
    image: "https://shop-image.readyplanet.com/EmKkndMfzJ-FP_wkAcgQnUWLXiU=/500x500/8250f23fc7a64c4bb6c833a6ceee62ac",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925281",
    brand: "Vissonic",
    brandSlug: "vissonic",
    brandCategoryId: "237678"
  },
  {
    id: "925273",
    name: "VIS-DCP2000-D",
    image: "https://shop-image.readyplanet.com/Ku6nPeX60QMxnvm69TNhBEIlPPA=/500x500/d7edaaf2c32e470e9f842d08ea93f818",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/925273",
    brand: "Vissonic",
    brandSlug: "vissonic",
    brandCategoryId: "237678"
  },
  {
    id: "908481",
    name: "LF-WB79(4:3)RM8(10.8)",
    image: "https://shop-image.readyplanet.com/fdr4Q695XrRxprCkcAz9qQbaG0U=/500x500/211ad1627cd647c793fb26403ef3056f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908481",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908472",
    name: "LF-WB65(4:3)RM8(10.8)",
    image: "https://shop-image.readyplanet.com/adCq2IUeqA3IZmNrQYihE6sluCM=/500x500/7b2ca76272914142a59c76840cbaa3eb",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908472",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908468",
    name: "LF-WB50(4:3)RM8(10.8)",
    image: "https://shop-image.readyplanet.com/DG9VY8PrqjXw_SOo8OxYY2fhvV0=/500x500/b17a66b705444b11980e797415855594",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908468",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908462",
    name: "LF-WB106(2:1)RM8(10.8)",
    image: "https://shop-image.readyplanet.com/z6b2I8HDoAE3dZUWeTEf7g2MOuE=/500x500/33517f54e45749dfb2c68273378f4bc1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908462",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908449",
    name: "LF-WB87(2:1)RM8(10.8)",
    image: "https://shop-image.readyplanet.com/ny57o30LihtV7dnHq6q4npUFaF8=/500x500/fb85e9ada077412982a5ef6ca39c0ca0",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908449",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908267",
    name: "Y-Press CB-UX/Y60WM4(4:3)",
    image: "https://shop-image.readyplanet.com/MGsIXRkMQyCaIaotgril2Cmc2zc=/500x500/015d601a660b4981bed8b0ffa671077a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908267",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908255",
    name: "X-Press CB-UX/Y92WM4(16:9)",
    image: "https://shop-image.readyplanet.com/uBr6aGfSSiaDjSmRQVXkfu0jtLo=/500x500/e5aeb14c3b0a4b9b977a595249b382c9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908255",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908253",
    name: "X-Press CB-UX/Y80WM4(16:9)",
    image: "https://shop-image.readyplanet.com/7CVwMv87h9HOzUuJkeLviBZXzxQ=/500x500/ec5a338ab5824c85b0012184390e087c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908253",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908242",
    name: "X-Press CB-UX/Y70WM4(16:9)",
    image: "https://shop-image.readyplanet.com/H2gg0DqvU3pxEXEJ1lykrcHXBqE=/500x500/cdc033a41b6c4a569432ecfd8e6cd567",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908242",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908240",
    name: "X-Press CB-UX/Y60WM4(16:9)",
    image: "https://shop-image.readyplanet.com/FtSpGJonFKvAclSUSCQcERTnv6o=/500x500/2aadb7668160499cb223984e037d838f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908240",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908237",
    name: "X-Press CB-UX/Y100WM4(4:3)",
    image: "https://shop-image.readyplanet.com/kYGbCcyk3t2cUBA9libr3r3eLfc=/500x500/b4931fd503194f76a278a2722b9bbae8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908237",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908235",
    name: "X-Press CB-UX/Y84WM4(4:3)",
    image: "https://shop-image.readyplanet.com/V8RfdnBXi7xqXfPs_eX847HV4nA=/500x500/d308dbfb1d9245dc81f8b8299c68e940",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908235",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908231",
    name: "X-Press CB-UX/Y72WM4(4:3)",
    image: "https://shop-image.readyplanet.com/1mX-kFmrgPJIpJMQ37zrw4VdIZA=/500x500/50310fb82ea04f7da92057744a0b93c4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908231",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908224",
    name: "X-Press CB-UX/Y60WM4(4:3)",
    image: "https://shop-image.readyplanet.com/-kiWyE1_1lZruL92kuxPdjy_o8o=/500x500/1b2bcedc79de498bbef3d013b2260531",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908224",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908119",
    name: "GPCK-ME 4000",
    image: "https://shop-image.readyplanet.com/jApDGLDJZEbcBrA9MlLorfbA0u8=/500x500/73d9d7f43e75488694620c831e004786",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908119",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908117",
    name: "GPCK-ME 3000",
    image: "https://shop-image.readyplanet.com/uQIIj1-F4IInNs6llusEVdRIfE8=/500x500/c51e5adbe61e4b42b7b875145d831394",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908117",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908107",
    name: "GPCK-ME 2000",
    image: "https://shop-image.readyplanet.com/8yq1rl2N3U0IerV-EYYr7TQlx6k=/500x500/0858688d5f15419da49db7d70f073d1b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908107",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908105",
    name: "GPCK-ME 1000",
    image: "https://shop-image.readyplanet.com/pz43Y8TODtepE-H_bxypPtDynvA=/500x500/34f2cc2265904977a025fd5a9c86f6eb",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908105",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908101",
    name: "GPCK-ME 500",
    image: "https://shop-image.readyplanet.com/ZXukcyGmtORV11Q8RyNkczGceTY=/500x500/cfa00f0b4c30457289942c494f68124b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908101",
    brand: "Grandview",
    brandSlug: "grandview",
    brandCategoryId: "237068"
  },
  {
    id: "908052",
    name: "TT-9821Q ( Q Series )",
    image: "https://shop-image.readyplanet.com/g8DaehX9M6W4eQr4L8Wh4wEFoq0=/500x500/7e2245c75c104f639c1f221ea82c395f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908052",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "908049",
    name: "TT-8621Q ( Q Series )",
    image: "https://shop-image.readyplanet.com/YvhqKhzuPR_5KGho1JOV7z2ADj8=/500x500/d56134298def4fbfa598a9c95e2ab80e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908049",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "908047",
    name: "TT-7521Q ( Q Series )",
    image: "https://shop-image.readyplanet.com/kHsypC8W5Ib_S_Hefj_YuBOIbwg=/500x500/4b851aa5f84f47ba92e0ef694262f290",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908047",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "908042",
    name: "TT-6521Q ( Q Series )",
    image: "https://shop-image.readyplanet.com/12n18giRHKBnJzvldVN42LrMp8Q=/500x500/f0144f2670c54a8ab66c50edfc44efd4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/908042",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "906428",
    name: "TT-8621Z ( Z Series )",
    image: "https://shop-image.readyplanet.com/ETmAGoAvTGiHopGK33GX4IwKA6s=/500x500/506a9e1f5cb24f0a9a80d7e6c36e2a94",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/906428",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "906426",
    name: "TT-7521Z ( Z Series )",
    image: "https://shop-image.readyplanet.com/NvKCxKG3cIFUg6JDk2TYJMKPbIw=/500x500/cae5aa82033842a08f65b5fe85b1041a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/906426",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "906404",
    name: "TT-6521Z ( Z Series )",
    image: "https://shop-image.readyplanet.com/HWm-CI58aMj5ogOWmMI_7uBgJdo=/500x500/dcfc0e0e962049209264b84e1f828b50",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/906404",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901179",
    name: "TT-8622Q (Q+ Series)",
    image: "https://shop-image.readyplanet.com/IzceCKgsHLUrGZWh0n0N9m5ZjNM=/500x500/b92863dd4a8f4793ac5d181393a98a66",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901179",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901163",
    name: "TT-7522Q (Q+ Series)",
    image: "https://shop-image.readyplanet.com/hqY9Ldm-1JMQpU1KEmA4VHZdwow=/500x500/3d63561520d84973b8c195e63f25e9d1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901163",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901134",
    name: "TT-6522Q (Q+ Series)",
    image: "https://shop-image.readyplanet.com/JKj-RY1bM6o4nAARMKKFTLH4mwQ=/500x500/f3643dc7283f424cb793030999d1b688",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901134",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901125",
    name: "Newline Flex",
    image: "https://shop-image.readyplanet.com/cA7M6hFhcJOl0cU4mbnfEbFhAiU=/500x500/b29a5c2c06a3493d9d5371ba9549c70e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901125",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901117",
    name: "WB7W820W ( OPS Computer )",
    image: "https://shop-image.readyplanet.com/Xa3KS_eOCYgoWqtPqobaGjcccO4=/500x500/e033c96351ff4c3bac76707dda5134d6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901117",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901072",
    name: "WB5W820W ( OPS Computer )",
    image: "https://shop-image.readyplanet.com/O8U7Q7w4UmSXy1aTCr-HfDq-Ccw=/500x500/2c0df985de354051b8375d1b35c38f73",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901072",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "901054",
    name: "WH3310",
    image: "https://shop-image.readyplanet.com/PtsqOnnEiKgQY1cU-umeJ0SEX9s=/500x500/5ef0e4adf2b2490197698b0dce26158f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/901054",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "900976",
    name: "IFPI-19X",
    image: "https://shop-image.readyplanet.com/BlDAs5uvkBW3j8rUtKcVpX6BwH0=/500x500/0d8e4caa6b96418e9b65be9155bed865",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900976",
    brand: "Newline",
    brandSlug: "newline",
    brandCategoryId: "237677"
  },
  {
    id: "900118",
    name: "BLACKWIRE 3300 SERIES",
    image: "https://shop-image.readyplanet.com/QE5tbmlmYiS4QvzQSnZaLLIAo9M=/500x500/94692e51c0904a29b1aa3beee2dc1768",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900118",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "900087",
    name: "VOYAGER 4320 UC SERIES",
    image: "https://shop-image.readyplanet.com/iKvJoDMAdje60PKpQ2yRWmy3ipA=/500x500/20cfaab7553e44aba01c213c00500e7c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900087",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "900082",
    name: "VOYAGER FOCUS 2",
    image: "https://shop-image.readyplanet.com/0wLUL8JNMWvyAWEYCRcT38AeYEc=/500x500/4078e00a9d7e47569f16b205f71f8d6c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900082",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "900077",
    name: "SYNC 20+",
    image: "https://shop-image.readyplanet.com/lR1XAdk0fsEU07GCvEn1AoxizDM=/500x500/5dd4d08d101042d0a870cf405a27c4e3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900077",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "900076",
    name: "SYNC 40+",
    image: "https://shop-image.readyplanet.com/MRCqtxZ0IFYpgZug8tNgKn4fwuU=/500x500/d9519de2d9ec471cb872b4ad4f900222",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900076",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "900069",
    name: "POLY STUDIO USB",
    image: "https://shop-image.readyplanet.com/LU4MAyW4_tYZ0blF2Us7r-1ohf0=/500x500/64eb1e41117d4e74953012510ae090cb",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/900069",
    brand: "Poly",
    brandSlug: "poly",
    brandCategoryId: "237596"
  },
  {
    id: "899577",
    name: "APB-400 R-RPS",
    image: "https://shop-image.readyplanet.com/Ieil-LtbKQLkgGVBmwoAamoiSL8=/500x500/ed7593f624624c9fa16003678e3d676e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899577",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899574",
    name: "APB-208 R-RPS",
    image: "https://shop-image.readyplanet.com/VSgR-RiDCZxTycTfX0V9NfsrpjY=/500x500/1704e0da7e884888bb84be68c52e6b09",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899574",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899519",
    name: "APB-400 R",
    image: "https://shop-image.readyplanet.com/ircG5P89iNRHyIt64EwLM2kx4rM=/500x500/caa91a3ac8c144a88fb9815ce63f9e5e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899519",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899489",
    name: "APB-208 R",
    image: "https://shop-image.readyplanet.com/j5TR-toko9aCIzJ_Z5l3_n65gdA=/500x500/0b20980308124a5280e05e55c86f4a8d",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899489",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899477",
    name: "APB-D200 R-D",
    image: "https://shop-image.readyplanet.com/ohLNUR2Hgo50Lu3X2UxG9qH5y_Y=/500x500/c415d1f460c9446183d653ff9dc6fad7",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899477",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899475",
    name: "APB-D216 R-D",
    image: "https://shop-image.readyplanet.com/9wm9No6udPxMxsfH0gluUmzA_TU=/500x500/6f392feaf3a041b5bf1f687a200e0dff",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899475",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899470",
    name: "APB-D116 R-D",
    image: "https://shop-image.readyplanet.com/Lfj5ZkgbaTKXb2yklUIjPh7oxOA=/500x500/ca3f37beb7b34a17b433bdc1ad2934d6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899470",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899469",
    name: "APB-116 R-RPS",
    image: "https://shop-image.readyplanet.com/iH9MQuwOXW1ZmSZP5NOlaT0gUXA=/500x500/494eabe8827a4f6ab213785444f510f3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899469",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899467",
    name: "APB-116 R",
    image: "https://shop-image.readyplanet.com/MtBuWIcbCg3g4EPlhcNkktM-rdA=/500x500/0fadfd1adf72477e9e5c8cfcc33ad7ac",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899467",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899466",
    name: "APB-D200 R",
    image: "https://shop-image.readyplanet.com/2l3jBuzTBd9cV-WG2KuU7y0fu0o=/500x500/9e3982ea46604214b0821704b8ab3b50",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899466",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899461",
    name: "APB-D100 R",
    image: "https://shop-image.readyplanet.com/wxNKOEtzAqOSBKO8BW8znUYSbVo=/500x500/00872581855247c28395a880476f4e96",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899461",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899456",
    name: "APB-112 OW-D",
    image: "https://shop-image.readyplanet.com/SZUy8lHLncgaa8MrCwxs-619mcs=/500x500/1a06536b63a9454b97484cdfd7be4faf",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899456",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899455",
    name: "APB-112 IW-D",
    image: "https://shop-image.readyplanet.com/UROFqOFnXVWEdluUn9m9kTykGs4=/500x500/f7fb5c0f4b8f45be876a2d2ac47ff5f3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899455",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899450",
    name: "APB-216 C-D",
    image: "https://shop-image.readyplanet.com/8Vopocgk7CxK6UUTyypJwA0AJp0=/500x500/b3992d2db3fe4537b8ab0ba95bee5b65",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899450",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899447",
    name: "APB-216 C",
    image: "https://shop-image.readyplanet.com/J4iNJAJO74EpXSwBle50IeApcAQ=/500x500/5b2d036583094ba1aaaa53a8d6665435",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899447",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899446",
    name: "APB-112 SB-D",
    image: "https://shop-image.readyplanet.com/5C4ljRxqeSOYtQLfKZpOeHzYiE8=/500x500/1008413ded9948868271decaa3db09be",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899446",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899444",
    name: "APB-P112 SB",
    image: "https://shop-image.readyplanet.com/rgH7X_D28qLh4aVGz3DnT-LTlDQ=/500x500/fde757053d5e4900ad1c230becbcff86",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899444",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899442",
    name: "APB-116 P",
    image: "https://shop-image.readyplanet.com/VibqEsB6_kCYO_vr1owRzZrphw8=/500x500/d558ada0ced54b06b688394ed38ec51b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899442",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899440",
    name: "APB-116 SB",
    image: "https://shop-image.readyplanet.com/t9dHAdeB26L0eINx3Pu2ZeOxhh8=/500x500/1b23b0af46e94132b1a381ae5ff3348b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899440",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899439",
    name: "APB-124 SB",
    image: "https://shop-image.readyplanet.com/tdH0oL90UFhsMZ8YOMSBJSJKLTA=/500x500/db76122ead7148ca989daf8773ade65c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899439",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899438",
    name: "APB-224 C",
    image: "https://shop-image.readyplanet.com/olS6786ZFf_pmnYxX2c9lsPQ3I8=/500x500/daa519d4d1fd48e1b2718096892e63e4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899438",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899339",
    name: "APB-416 C",
    image: "https://shop-image.readyplanet.com/acG-BDrdnCPU2Es0NnOy62ck25c=/500x500/1b6042ee1d2a49c39a060fba15783144",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899339",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899167",
    name: "APB-D100",
    image: "https://shop-image.readyplanet.com/0ydSy3IFl5Gks6WG93C-CAd9UQg=/500x500/6220b5a76a9b43e3b48b78af210afaf4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899167",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899132",
    name: "APB-008 SB-EX",
    image: "https://shop-image.readyplanet.com/OQ8aiEzN1qBaDSgYPyibPCzhGLs=/500x500/529e5e6d568445b9abd7a520370c455b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899132",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899129",
    name: "APB-1.32 CB",
    image: "https://shop-image.readyplanet.com/2nHFomeOzSJznyHDnvjMh5756gE=/500x500/481f113f231048ad8778bbf91638ae93",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899129",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899127",
    name: "APB-448 SB",
    image: "https://shop-image.readyplanet.com/iKJkb4t8kQdO22TohUhONeIbH-8=/500x500/26b5f2a0ae4b44d6a06377f192c1b8aa",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899127",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899126",
    name: "APB-008 SB E-X",
    image: "https://shop-image.readyplanet.com/_2_-AcgYK9cMYRzy-kr11xX7l6U=/500x500/da4c5aa633b84a6a9d21014363954f61",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899126",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899124",
    name: "APB-024 R-EX",
    image: "https://shop-image.readyplanet.com/bBn8pYyKZsVIgfTVDGO1NIHLe-g=/500x500/75b7e83c4e1749be82f2b89c396eef3c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899124",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899065",
    name: "APB-008 FB-EX",
    image: "https://shop-image.readyplanet.com/GN-89HEajH_SNI3CQ7hpjOLWTaU=/500x500/49f35803438e4a2d98220d7610f9d749",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899065",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899060",
    name: "APB-P008 OW-EX",
    image: "https://shop-image.readyplanet.com/qli6YeL-RK0pC3fUVVgFsayeJ5M=/500x500/78743fe248ec4468a52ffb3e30c8e795",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899060",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899057",
    name: "APB-P008 IW-EX",
    image: "https://shop-image.readyplanet.com/KMhUXrVUwv89UGKs_l63nylNIO4=/500x500/5ff04dcfdb514a12bed84c030091dad3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899057",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899056",
    name: "RC 3,5-1",
    image: "https://shop-image.readyplanet.com/_r7mbXkq62Ly2se8X59JyPp1YW4=/500x500/a8ae6b389fc146a38c894cef0c77cf0e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899056",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899055",
    name: "RC 3,5-8",
    image: "https://shop-image.readyplanet.com/xw6P13njdR9hIJoQyaab_4LAQPY=/500x500/95ae7282b7d74087a1602d6c84232c3c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899055",
    brand: "AudioPressBox",
    brandSlug: "audiopressbox",
    brandCategoryId: "237468"
  },
  {
    id: "899052",
    name: "DA-3000.2",
    image: "https://shop-image.readyplanet.com/3fbbqs25YMIR14Hei_UU7yxeT08=/500x500/c42e82d5f49c472eb296d588a4bf87e1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899052",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "899051",
    name: "DA-2000.4",
    image: "https://shop-image.readyplanet.com/r4qKdA6aHoZzNYOtrt0fnsPcukw=/500x500/b5651b95dcb44317a67d407ebba244a8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899051",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "899045",
    name: "DA-1000.4",
    image: "https://shop-image.readyplanet.com/Nggedo7cxUGD4qIAV5f0jCxxrLA=/500x500/d7f498410e734daab7406daa16f0febd",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899045",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "899042",
    name: "DA-650.4",
    image: "https://shop-image.readyplanet.com/qeiSa5x_ugr5ee5yC52MiNbQyj4=/500x500/0b856962c18043ad9760781b59254a7c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899042",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "899038",
    name: "X-Pad Pro",
    image: "https://shop-image.readyplanet.com/5stqKD1MhqA4IQ0MvVQUNOKi0B4=/500x500/57c1215e4b864a8f9cf6c378f3057779",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/899038",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898904",
    name: "X-Pad",
    image: "https://shop-image.readyplanet.com/eVjFIE6km0ciro3S-u3F-ZcAeQ8=/500x500/3860656392664d5b8598d9407f0b3057",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898904",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898902",
    name: "X-Cube",
    image: "https://shop-image.readyplanet.com/tILwCu-bYBvIo1wIjTKpw39GozE=/500x500/59026e50952c4852a501543f4512d1a6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898902",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898899",
    name: "X-BASS",
    image: "https://shop-image.readyplanet.com/t-hZztCCIDz0ttQdo60zc1WduQs=/500x500/a61b7c09d21b45eaa7e82257c9edb80a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898899",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898895",
    name: "X-Sub",
    image: "https://shop-image.readyplanet.com/g2eJc8bSfvfoP0oK5jU3yckBR_Y=/500x500/375501056f95454fba8834bd81176301",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898895",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898886",
    name: "AS-18",
    image: "https://shop-image.readyplanet.com/V6-TWSUGzwhF2aa0Brayg1ZQ20w=/500x500/f9397630ebad467e850b5e6111a269e4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898886",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898884",
    name: "AS-15",
    image: "https://shop-image.readyplanet.com/YuqSOH_KNvKe1ODxqhaa-ksvDNQ=/500x500/e36a141d15b4404f96399dceeaa407e0",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898884",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898882",
    name: "AS-12",
    image: "https://shop-image.readyplanet.com/lOVbVNW4NUEjDuT4wctwZHT7l7A=/500x500/ed30438bbff94fae8d564ff453f538ed",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898882",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898876",
    name: "Shirke-16",
    image: "https://shop-image.readyplanet.com/qm82c3OivamVMpNLM6NpccthFsU=/500x500/08ca88c9d6024052ae1c220bdf66e4cc",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898876",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898875",
    name: "Shirke-8",
    image: "https://shop-image.readyplanet.com/JwUvlsj_2LXI79tcM3hYaw1mnH8=/500x500/192c22e00e16425c8c4d0582449a68dd",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898875",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898872",
    name: "Lark-16",
    image: "https://shop-image.readyplanet.com/YzALQ06sCgb_fNPtA1TSioeuh44=/500x500/e05ac98eb6fc46e9b1a7f3a645824ba7",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898872",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898869",
    name: "Lark-8",
    image: "https://shop-image.readyplanet.com/uOSV3AVm4jNBkxgTU4klc4oMoa0=/500x500/c1b4e31d26de4848aea09b9e79348646",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898869",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898866",
    name: "CS-84S",
    image: "https://shop-image.readyplanet.com/qnC3TZNxNNvdqXfjlldhfRO-DtY=/500x500/ce73bcc8f93f483eb09b85680678a386",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898866",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898864",
    name: "CS-8C",
    image: "https://shop-image.readyplanet.com/gcHmGBVfF5swC2Q3N1P1J9INkQg=/500x500/1cff465453c9462aaf05eba8fd774dc1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898864",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898861",
    name: "CS-6C",
    image: "https://shop-image.readyplanet.com/t_OQ5LNdml6lILXOxeKcbErDYag=/500x500/a0adc91d48454dc7a7b2e367dbab410e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898861",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898859",
    name: "CS-4C",
    image: "https://shop-image.readyplanet.com/fVQkvpMFeAzg4Cad7XSL0LSPvMw=/500x500/bda460487da14782b996f29b75762247",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898859",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898854",
    name: "ENERGY COMBO",
    image: "https://shop-image.readyplanet.com/w3FfkfaS07EK6PApj9_cuhFYZR0=/500x500/9c2055be54ad47c491e9ec6cb3bcf011",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898854",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898849",
    name: "AMAZING COMBO",
    image: "https://shop-image.readyplanet.com/5UJK0ktGmpwA1VjVYPwSw2hAY-Y=/500x500/ce59b697b8814d08a0906a85d27a43df",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898849",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898844",
    name: "FEATURED COMBO",
    image: "https://shop-image.readyplanet.com/LhSUJDyRyazr0px9xjZxuTHuyRk=/500x500/a9413946d61f4ae9a168ee31e1f41b68",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898844",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898842",
    name: "VLA-132",
    image: "https://shop-image.readyplanet.com/yhTRuKpIKndi7bP_Su0XPA7uaaE=/500x500/9762b121980f46328ea40c3a4fc41194",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898842",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898841",
    name: "VLA-210SUB",
    image: "https://shop-image.readyplanet.com/TLFgzL7NUmZ6llOh7Dzgt_QitXk=/500x500/427fd15e66da482e8b7fedc7cec66629",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898841",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898839",
    name: "VLA-210",
    image: "https://shop-image.readyplanet.com/efK0q0UJMbO7UMj8aC40HyRshnk=/500x500/4669d33252f74c6e9ec9614d5ba1937f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898839",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898837",
    name: "VLA-208SUB",
    image: "https://shop-image.readyplanet.com/dCiAlug2Qo5WcBY1lbsZdA8gDI0=/500x500/a020b5b377b240bc890074577469ab9f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898837",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898831",
    name: "VLA-208",
    image: "https://shop-image.readyplanet.com/RRI9ow-T-VA-O3HrGFQtg_Zpb3E=/500x500/a6e54fb8646c41bd9627b00b4f5d6623",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898831",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898826",
    name: "SW-218II",
    image: "https://shop-image.readyplanet.com/6zL-npYFnsZ8xk--EsTXGvDgPP0=/500x500/070ac8b7e37d422aae848967874264b3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898826",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898821",
    name: "SW-118II",
    image: "https://shop-image.readyplanet.com/OBaHvsoqr4ndAPVlI-DVbJDw0GE=/500x500/5fb573ab24af4fdf9c0dc4661790e229",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898821",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898792",
    name: "VS-15",
    image: "https://shop-image.readyplanet.com/Yd8PMSKCmtOHdgawT5Vlyg_HR_o=/500x500/c26959cef86c40c79148e2e3237b979e",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898792",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898788",
    name: "VS-12",
    image: "https://shop-image.readyplanet.com/PWjMX3welZM5T2UeU6yWcsTqyv0=/500x500/6dfaa63f3aad4d669b6de63a0b8d85bb",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898788",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898785",
    name: "VS-10",
    image: "https://shop-image.readyplanet.com/knMkfOvqJIjUMdB5_uDT1XvKkBs=/500x500/736a78797d9e4db0b83dc889ceeaa180",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898785",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898778",
    name: "VS-8",
    image: "https://shop-image.readyplanet.com/Edjc8vGhPhwY-Yv_hG7d9nWg04g=/500x500/67cdc3ef35f249b38fddbfc9bb301fac",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898778",
    brand: "Enewave",
    brandSlug: "enewave",
    brandCategoryId: "237467"
  },
  {
    id: "898768",
    name: "HX-2562",
    image: "https://shop-image.readyplanet.com/u6uNub_BfRzlZPQu7yK3klPUJOM=/500x500/ed863ab0680443ce8d4be2ec7d44990a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898768",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898767",
    name: "HX-2544",
    image: "https://shop-image.readyplanet.com/9bd4I3LNVOXzXVMq5S-bBiGzHg8=/500x500/e59e2c31fb974999b8790718048b0ad2",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898767",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898765",
    name: "HX-1542W",
    image: "https://shop-image.readyplanet.com/iNn4sim-S-4mO0RhrzkYcZsAc0c=/500x500/eb7829214b5445adabd249fee9976303",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898765",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898764",
    name: "HX-1522W",
    image: "https://shop-image.readyplanet.com/CRxq9BGbrfW6-ZGGvvCqBVeNW4g=/500x500/87e767b268cc42c19293348e5f0f0fa0",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898764",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898763",
    name: "HX-1422W",
    image: "https://shop-image.readyplanet.com/eFtutCWADpk1GqC4DxM_z9nzV5s=/500x500/2c0d64b558934e1591800bb8645c86c5",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898763",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898762",
    name: "HRM-2518",
    image: "https://shop-image.readyplanet.com/iG2DIxyjTj0tKAjcaZigxsYTsDA=/500x500/298bee55b05e443cb23ef16301975fe1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898762",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898756",
    name: "HRM-2514",
    image: "https://shop-image.readyplanet.com/BAxmcnVF1Y7S0YXvPhD173RvrFc=/500x500/5db09439456f49218d630d616a6698e4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898756",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898754",
    name: "WVH-EPX",
    image: "https://shop-image.readyplanet.com/IwQ0Hu4O20FgxwF2yBCisztWbmg=/500x500/1acb1b29eaf64debab3fbc0be7fac6b8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898754",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898752",
    name: "HDM-3EXCU",
    image: "https://shop-image.readyplanet.com/t2iDdYvvGUtnP9jipVfe5obDRJw=/500x500/6d4e96df70db40d59697c2b33e30c6b6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898752",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898748",
    name: "HDM-EXC",
    image: "https://shop-image.readyplanet.com/jDGilLCOrW0VCt3MnpsejeXvGIs=/500x500/6f1f905013d24ed8a23ab5daefcc960b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898748",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898741",
    name: "HDM-SXC",
    image: "https://shop-image.readyplanet.com/FBVwCjJw97waovuMHnKRdkSVi8I=/500x500/72abefd22d1e4f83be2a12bab5b84bd8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898741",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898739",
    name: "HDMI-EXW",
    image: "https://shop-image.readyplanet.com/DmQBqVGJ3LHfxhQwd0a5JL1556E=/500x500/4a6d370396b74881bc8212aea4f622c0",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898739",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898735",
    name: "HDMI-SXW",
    image: "https://shop-image.readyplanet.com/NcHjowm_bWy4PnaiwkYIrKDJUuA=/500x500/f4aa45f3851d46a0905cb132770ccc05",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898735",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898724",
    name: "RM-7U",
    image: "https://shop-image.readyplanet.com/8UjFxWtTF9J_yskwsYkiKJ2eGQk=/500x500/b8cd1354d7c6419a8a2839f2b95be036",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898724",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898640",
    name: "IPS-M",
    image: "https://shop-image.readyplanet.com/79CsDAyra86vgihQUpD8taHy1ec=/500x500/72f1d1d96158405ead49b5618472bacf",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898640",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898638",
    name: "IPS AF",
    image: "https://shop-image.readyplanet.com/rYEIwe7zRwRPbtac8_0Jnyiysi0=/500x500/f94b9e7cf5dc4d8589bb16f26aa21775",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898638",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898629",
    name: "IPS-AC",
    image: "https://shop-image.readyplanet.com/KO_O3QfseXhBAhiHlJ9WYz5T-wk=/500x500/f5349201b4d4436581940d2495ef5c69",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898629",
    brand: "AVlink",
    brandSlug: "avlink",
    brandCategoryId: "237069"
  },
  {
    id: "898600",
    name: "K-Speak",
    image: "https://shop-image.readyplanet.com/_D2F2YWYK8XYfx-fZX3H9xkJZq0=/500x500/3da16c1ea07b40a59fbb90a62ec4c1c6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898600",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898598",
    name: "K-CamHD",
    image: "https://shop-image.readyplanet.com/nkXCUuJQdMw_jfATqCsKi1BeRZA=/500x500/3e0258549fdb4fad8e79837ca012f6be",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898598",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898596",
    name: "K-Cam4K",
    image: "https://shop-image.readyplanet.com/26-MUDZmGY5-ns13H0ltzrXPE68=/500x500/988250b3d74341bd9fccbe0d896ff2c9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898596",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898593",
    name: "K-Bar Camera Bracket",
    image: "https://shop-image.readyplanet.com/hb1mcD97mN7EluDHtvDBpSskqdM=/500x500/772b94da3a6b4292a3050596d3345107",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898593",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898589",
    name: "K-Bar",
    image: "https://shop-image.readyplanet.com/xIuUzy5iR_hZ9koPvketuKSzAZ8=/500x500/f1b59b8b9dc64748a56c45dd8f1bb110",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898589",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898580",
    name: "K-180Mini",
    image: "https://shop-image.readyplanet.com/PkcjSnJBoBfP5coswebfTrprtF4=/500x500/145bf096be9a43bab01b8d6a68cb87f3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898580",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898578",
    name: "Galil 6-O",
    image: "https://shop-image.readyplanet.com/vUBXoMZ2PFju8-K2FN6UgUb6S3U=/500x500/3e0649c4fe234f85b565f68820781c4b",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898578",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898577",
    name: "Galil 5-O",
    image: "https://shop-image.readyplanet.com/oZngUnJd5H1zt8jT7YHXFysoyUs=/500x500/11e1c63df2c146bdab62b1cd09300acd",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898577",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898576",
    name: "Galil 4-O",
    image: "https://shop-image.readyplanet.com/w-iPRSRH_EsEwCX9Wqw2a0Re0cU=/500x500/1c7e77212d364dc1b26a7a356789d555",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898576",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898575",
    name: "Galil 8-C",
    image: "https://shop-image.readyplanet.com/jIh6J8fDmweNjqQczRo-lYdxCGA=/500x500/ee5ebbfd63ad4abcbdf1f65561561c06",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898575",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898574",
    name: "Galil 6-C",
    image: "https://shop-image.readyplanet.com/iQ1v0TLMWz4woNDxWdBS-m0gdFk=/500x500/eb535b463ad14ea08d1744fe46b4d6d4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898574",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898573",
    name: "Galil 4-C",
    image: "https://shop-image.readyplanet.com/1gEflJU_FY9blPeLpQtP6WUgRto=/500x500/1507e0544ffa48b6bf6a5bc1ec99bee9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898573",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898572",
    name: "Galil 2-C",
    image: "https://shop-image.readyplanet.com/56rrTdFFDtWEKkqGrNvazvZCZOY=/500x500/b70781b794b74957a5972987ded9f718",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898572",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898569",
    name: "KDock-4",
    image: "https://shop-image.readyplanet.com/CN0SEmDYaQK5xMBeCUNPm9vN8f8=/500x500/4e167005745b4be4a70243d0460a1ce8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898569",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898564",
    name: "KDock-3",
    image: "https://shop-image.readyplanet.com/YJoO8YSGnipmjB5hBO6q12rPRDA=/500x500/3be3d5af89ee4073a17b8d69f0d513fc",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898564",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898560",
    name: "KDock-2",
    image: "https://shop-image.readyplanet.com/4DOH1-hWFinBy83yyc4bdHIzjPI=/500x500/d9db0cd9ec5a419791dcdb2d92395501",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898560",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898558",
    name: "KDock-1",
    image: "https://shop-image.readyplanet.com/YkqjeSULrs5whfWq8sv7iB3BGw0=/500x500/3678c2dc018a4ab2842024c8b361d5a6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898558",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "898550",
    name: "C-HM/HM",
    image: "https://shop-image.readyplanet.com/x3QSPru37lj5-x9gu6VFylhk-nw=/500x500/8cf7bac285554c46a6b469e027993450",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898550",
    brand: "HDMI Cable",
    brandSlug: "hdmi-cable",
    brandCategoryId: "237477"
  },
  {
    id: "898537",
    name: "VIA Campus² PLUS",
    image: "https://shop-image.readyplanet.com/r7mXRcQizpNYN_NwSX0Xybcrv74=/500x500/c3de1257161a40e0859471b9c0c73fca",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/898537",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897949",
    name: "VIA Campus²",
    image: "https://shop-image.readyplanet.com/NTW0DyzJM1On10iif4StTrHIXTE=/500x500/6039e21090c344c1aa9b68b789924379",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897949",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897948",
    name: "VIA Connect²",
    image: "https://shop-image.readyplanet.com/7rWjPkzjfrADBuIzbeuGbUgE7kc=/500x500/eaa022cc4ea14f9c8145cabe06ccc263",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897948",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897946",
    name: "VIA GO²",
    image: "https://shop-image.readyplanet.com/XHOtC0_QrAxwfno-8iE3KRDptF4=/500x500/e90862c4214045ec92f777d58b8cee4d",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897946",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897942",
    name: "KDS-USB2-EN",
    image: "https://shop-image.readyplanet.com/UlWgK5ou8yg74D-eHzi4kfVGSI0=/500x500/0709e56c2d63469987fb1e0a2b164e6f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897942",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897941",
    name: "KDS-USB2-DEC",
    image: "https://shop-image.readyplanet.com/aNPo_4tbgo6iLoJ6A-ODEc4-gMI=/500x500/6d5362f8036349328d001ca190088ce5",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897941",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897938",
    name: "KDS-USB2",
    image: "https://shop-image.readyplanet.com/rCkcsYeooDJgyi5rlHvFO6XhdEg=/500x500/98a9e39a4b624e3b94402978ef3e7f96",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897938",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897934",
    name: "KDS-8F",
    image: "https://shop-image.readyplanet.com/K53DLm3z_SbLB9xA3O8BXC8CEo0=/500x500/318cac0418204ae3942213754748d310",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897934",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897933",
    name: "KDS-8",
    image: "https://shop-image.readyplanet.com/qgWipBZSyjcVSdwppnKtTBpfdhA=/500x500/d832188ef0874453afda99d6ced43198",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897933",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897932",
    name: "KDS-8-MNGR",
    image: "https://shop-image.readyplanet.com/n_gpYJ88MDGzqVw4bR1AZmFfmeA=/500x500/94c804ed462d4ee7a2869672a5a7ab8a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897932",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897924",
    name: "KDS-7-MNGR",
    image: "https://shop-image.readyplanet.com/8UMlXLFc4vO5dPUyLQojtkhSHyU=/500x500/b3040f30780342ed97a392c4ba75f47c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897924",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897920",
    name: "KDS-SW2-EN7",
    image: "https://shop-image.readyplanet.com/tZiGFPgON1c1MmovTd3FarWQSXo=/500x500/1bf914eccd1c4198a8a521e726628836",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897920",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897917",
    name: "WP-SW2-EN7",
    image: "https://shop-image.readyplanet.com/foWXEBIxNOtGcXGXNVxGviBRFAE=/500x500/5736e1b3cb8543afbb2d648966830266",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897917",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897916",
    name: "WP-DEC7",
    image: "https://shop-image.readyplanet.com/_or2ppiCjHbaarE0iVo0AjxLVSs=/500x500/708a44b2762f4d36a1876f92d02b1158",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897916",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897908",
    name: "WP-EN6",
    image: "https://shop-image.readyplanet.com/wr-BFOCIubpRCPVb0srgu3sECIA=/500x500/dc22e2ef0a2a4b94a79734e301341133",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897908",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897907",
    name: "KDS-DEC7",
    image: "https://shop-image.readyplanet.com/WTlC7ZL9bwz4FcBm5sW8qLXmuio=/500x500/a7d039b29dc34b30a68142a93e563c79",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897907",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897906",
    name: "KDS-EN7",
    image: "https://shop-image.readyplanet.com/Ylg7T3tMaofSjbWr8SKvbL1Jpcc=/500x500/84f864e8d99648339dcb33ba2dc81b7a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897906",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897905",
    name: "KDS-DEC6",
    image: "https://shop-image.readyplanet.com/ipi4XijhkN1xj2ODEpP5uxfWP10=/500x500/b570a193c79f4f92ba6826bbb649e083",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897905",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897904",
    name: "KDS-EN6",
    image: "https://shop-image.readyplanet.com/PcwSuByVhg3hLZ6ZBgdIdPVzDtc=/500x500/d94388838b05479aab0a8f4c3ef4e2e6",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897904",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897903",
    name: "VP-427X",
    image: "https://shop-image.readyplanet.com/gMUnwAM8GPq1PhOnQwu-ZL7WR7Q=/500x500/ad66bc21f6484ac0b725112824ec6963",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897903",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897398",
    name: "VP-551X",
    image: "https://shop-image.readyplanet.com/RKjZxfbLIAtkjY7fjwYK1PCs8Ao=/500x500/b9d38b3ec98d4aa081a6cb34421551f3",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897398",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897397",
    name: "VP-426C",
    image: "https://shop-image.readyplanet.com/NpRYXy21iJnw8OinodyflFtRtXU=/500x500/0f28780a196d40e68913bf29fe1f25e8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897397",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897391",
    name: "VP-440X",
    image: "https://shop-image.readyplanet.com/GfQgoQyfBw76VfFCjIGnH6ChkZg=/500x500/00572bb741594875b60fee15555f5306",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897391",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897384",
    name: "KT-1010",
    image: "https://shop-image.readyplanet.com/rtgfjIjcZN4wy3xCzzghl0o0qIY=/500x500/259bf789faa6499e89ed7bf86d46482f",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897384",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897381",
    name: "KT-107",
    image: "https://shop-image.readyplanet.com/TGYnQw9-QpxmjD9UTkifbJAU4K8=/500x500/eb002a9dcc264b8097f67295adc20524",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897381",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897369",
    name: "RC-74DL",
    image: "https://shop-image.readyplanet.com/w-2-XTpqwSlNT-mOWBKJ9QVueyw=/500x500/ddca108aa9224d53a6448017bb70ed9a",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897369",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897357",
    name: "RC-308",
    image: "https://shop-image.readyplanet.com/saUO7lGK5Y9qeF8nGMgMoQaUh7I=/500x500/33ec90d203f345bcbdbe3ef2dbbf86d1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897357",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "897352",
    name: "RC-208",
    image: "https://shop-image.readyplanet.com/gaHP4sbOl9tNIMyRsSsJQWMpxhc=/500x500/6be952868bc640dea389341999259d1c",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/897352",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896964",
    name: "SL-280",
    image: "https://shop-image.readyplanet.com/eMW06jVKL7iq7xslSAbRsGqykM8=/500x500/210e7238345a433bbf8ec59c0dba9293",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896964",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896962",
    name: "SL-240C",
    image: "https://shop-image.readyplanet.com/BeZ4k9RunC7UM2FbQsB1ITgXGb4=/500x500/f6aac76d4f554ce094b1952db3a414d8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896962",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896957",
    name: "DSP-62-AEC",
    image: "https://shop-image.readyplanet.com/c0Y5OqPmDjgW3u65LQKmXd000vY=/500x500/34f3b6c9ff98492f985e058825c8d708",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896957",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896952",
    name: "FC-69",
    image: "https://shop-image.readyplanet.com/3eFHFTMsJhZylbfLcf0GTCmFU_M=/500x500/6582e955a07c4a378533437cf2a7ff77",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896952",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896950",
    name: "FC-46H2",
    image: "https://shop-image.readyplanet.com/sM7B7CecFizdlZ6orp1U4JcKI84=/500x500/c9ba0b2278e6464ca94043ccda2ec4ee",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896950",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896949",
    name: "VS-3232DN-EM",
    image: "https://shop-image.readyplanet.com/yDFtVu1BC4MK7oSY7pme-zPsHjg=/500x500/aef5a62707d14652af1ea1a82d068fa8",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896949",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896948",
    name: "VS-1616DN-EM",
    image: "https://shop-image.readyplanet.com/gNXSYaPm_k45f1DSfYnwjOAMR4w=/500x500/57daa09019c24f6e93c83f3680f313b1",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896948",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896945",
    name: "VS-88H2A",
    image: "https://shop-image.readyplanet.com/_IDyRn5q7nbPaKiVhgk2FAeJCdY=/500x500/3a870acd327e49dcaae02b3ca5711378",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896945",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896943",
    name: "VS-88H2",
    image: "https://shop-image.readyplanet.com/E8DLV3ipfYpvuEFxJH0FW-Fx14o=/500x500/d95c412b2c4a4950a8c9fc44b9f465ec",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896943",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896940",
    name: "VS-84H2",
    image: "https://shop-image.readyplanet.com/UM6QydMI2bXxQgwy7y_s0tGaQJ4=/500x500/db22eea9601b4ba996d8d88cbf13b211",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896940",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896935",
    name: "VS-66H2",
    image: "https://shop-image.readyplanet.com/nPKSqARGxl7NtsCtKJ9mGXkHU7A=/500x500/7f444ee1285c44518a33c6ba61002872",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896935",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896934",
    name: "VS-62HA",
    image: "https://shop-image.readyplanet.com/NWdpVixf-HfT8sdxS0yvCJi28m0=/500x500/72beeeb451b349309e628561282500e7",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896934",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896932",
    name: "VS-62H",
    image: "https://shop-image.readyplanet.com/Vm--VzH95MR047Gu7mPnWt0GVfo=/500x500/5475e0a39b024b45a583237cf0e6cd37",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896932",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896929",
    name: "VS-48H2",
    image: "https://shop-image.readyplanet.com/BRyV0JO938nGbtJDMVfNbfMdi2Q=/500x500/8ab009edf8794ffaae7ded23357d10ba",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896929",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896927",
    name: "VS-42H2",
    image: "https://shop-image.readyplanet.com/nNzyIE8FtVamE3EQZjWOv9jPfec=/500x500/f647bb767c7c4dd595c10fedff06bd61",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896927",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896924",
    name: "VS-44H2A",
    image: "https://shop-image.readyplanet.com/NbMXNoX7UE1NJ9cvhc4ITYsnssU=/500x500/a7bbe342bbaa488e967a7fd7669e20d4",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896924",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896923",
    name: "VS-44H2",
    image: "https://shop-image.readyplanet.com/5oKrk9e05RF82trd5Wo4mdw7YVs=/500x500/02eb5606853d4c81a8c97dd97809aabf",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896923",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896915",
    name: "WP-20CT",
    image: "https://shop-image.readyplanet.com/Yrr6BNBtUcXY_pXIOuCPvOW0xXI=/500x500/1e0dc1aa1f934a4c84e056092f1255a9",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896915",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896911",
    name: "WP-20",
    image: "https://shop-image.readyplanet.com/cP049SfefP6Waz4H8oU1ZurX3EY=/500x500/5244eab789074b548a9d91aea31f4456",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896911",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896904",
    name: "WP-789R",
    image: "https://shop-image.readyplanet.com/ZF9RXsREt-GxKdabCHQdyl87WOI=/500x500/98a028719a704bd4b5bd70ba399e8074",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896904",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896899",
    name: "WP-789T",
    image: "https://shop-image.readyplanet.com/YCDqB-ErXH-ucc2bvntwo9AngpM=/500x500/8b08b9c378cd4a4b8ce4e410cad28799",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896899",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896896",
    name: "TP-789R",
    image: "https://shop-image.readyplanet.com/d62bQUb0zbKJvtPPVszWrvWLpwI=/500x500/b851dac39da7482eabba6db185dbceab",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896896",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896895",
    name: "TP-580Rxr",
    image: "https://shop-image.readyplanet.com/OVP7Dgn-JPFt81zgNDp3CDKxLDE=/500x500/5766df890c2541c3a922c4e0cee71253",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896895",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896893",
    name: "TP-580Txr",
    image: "https://shop-image.readyplanet.com/mFXVA4_W9F4uQnRSzSZpCV79dn8=/500x500/f138aea6ed4c40418d4f24ff55958d51",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896893",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896891",
    name: "TP-580T",
    image: "https://shop-image.readyplanet.com/fp9qc6xvBbxrtk5zT_9H6EPrWrE=/500x500/752d1bba51c34920bcf11cb8de60aedd",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896891",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  },
  {
    id: "896884",
    name: "TP-580R",
    image: "https://shop-image.readyplanet.com/b-hoYAGxlNDmuqd3bkbpZLT_i0Q=/500x500/bed5e0def51c4e26bef2a28dc9047818",
    price: "0.00",
    url: "https://www.matrixintertrade.com/product/896884",
    brand: "Kramer",
    brandSlug: "kramer",
    brandCategoryId: "235610"
  }
];
function productsByCategoryId(id) {
  if (id === "0" || !id) return products;
  return products.filter((p) => p.brandCategoryId === id);
}
function productById(id) {
  return products.find((p) => p.id === id);
}
const BASE_URL = "https://www.matrixintertrade.com";
const Route$k = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/aboutus", changefreq: "monthly", priority: "0.7" },
          { path: "/solutions", changefreq: "monthly", priority: "0.8" },
          { path: "/led-display", changefreq: "monthly", priority: "0.8" },
          { path: "/interactive-display", changefreq: "monthly", priority: "0.8" },
          { path: "/projector", changefreq: "monthly", priority: "0.8" },
          { path: "/wireless-presentation", changefreq: "monthly", priority: "0.8" },
          { path: "/av-solutions", changefreq: "monthly", priority: "0.8" },
          { path: "/brands", changefreq: "monthly", priority: "0.7" },
          { path: "/product-line", changefreq: "monthly", priority: "0.6" },
          { path: "/category/0", changefreq: "weekly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contactus", changefreq: "monthly", priority: "0.6" }
        ];
        const entries = [
          ...staticPaths,
          ...brands.map((b) => ({
            path: `/brands/${b.slug}`,
            changefreq: "monthly",
            priority: "0.6"
          })),
          ...industries.map((i) => ({
            path: `/industry/${i.slug}`,
            changefreq: "monthly",
            priority: "0.6"
          })),
          ...articles.map((a) => ({
            path: `/blog/${a.slug}`,
            changefreq: "monthly",
            priority: "0.5"
          })),
          ...products.map((p) => ({
            path: `/product/${p.id}`,
            changefreq: "monthly",
            priority: "0.5"
          }))
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$f = () => import("./projector-sw-CnW2K.mjs");
const Route$j = createFileRoute("/projector")({
  head: () => ({
    meta: [{
      title: "Projector Solutions — Matrix Intertrade"
    }, {
      name: "description",
      content: "โปรเจกเตอร์ความสว่างสูงและจอรับภาพคุณภาพระดับมืออาชีพ"
    }, {
      property: "og:title",
      content: "โปรเจกเตอร์ Laser และจอ Grandview สำหรับห้องประชุม"
    }, {
      property: "og:description",
      content: "โปรเจกเตอร์ 3,000–20,000 lumens รองรับ 4K HDR พร้อมจอ Grandview Fixed / Motorized / ALR"
    }, {
      property: "og:url",
      content: "/projector"
    }],
    links: [{
      rel: "canonical",
      href: "/projector"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./product-line-CxgJfxmi.mjs");
const Route$i = createFileRoute("/product-line")({
  head: () => ({
    meta: [{
      title: "Product Line — Matrix Intertrade"
    }, {
      name: "description",
      content: "ภาพรวมไลน์สินค้าทั้งหมดของ Matrix Intertrade"
    }, {
      property: "og:url",
      content: "/product-line"
    }],
    links: [{
      rel: "canonical",
      href: "/product-line"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./led-display-B-87R6fx.mjs");
const Route$h = createFileRoute("/led-display")({
  head: () => ({
    meta: [{
      title: "LED Display Solutions — Matrix Intertrade"
    }, {
      name: "description",
      content: "จอ LED Indoor / Outdoor / All-in-One ระดับมืออาชีพสำหรับองค์กรไทย"
    }, {
      property: "og:title",
      content: "Unilumin LED Display — Indoor, Outdoor และ All-in-One"
    }, {
      property: "og:description",
      content: "จอ LED Pixel Pitch P0.9–P10 ความสว่างถึง 6,000 nits พร้อมทีมออกแบบโครงสร้างและบริการหลังการขาย"
    }, {
      property: "og:url",
      content: "/led-display"
    }],
    links: [{
      rel: "canonical",
      href: "/led-display"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./interactive-display-DwmVjx-q.mjs");
const Route$g = createFileRoute("/interactive-display")({
  head: () => ({
    meta: [{
      title: "Interactive Display Solutions — Matrix Intertrade"
    }, {
      name: "description",
      content: "จอสัมผัสอัจฉริยะ Persona รองรับการเรียนการสอนและประชุมแบบ Active"
    }, {
      property: "og:title",
      content: "Persona Interactive Display สำหรับห้องเรียนและห้องประชุม"
    }, {
      property: "og:description",
      content: "จอสัมผัส Multi-touch 40 จุด รองรับ Google EDLA, Whiteboard และ Wireless Casting"
    }, {
      property: "og:url",
      content: "/interactive-display"
    }],
    links: [{
      rel: "canonical",
      href: "/interactive-display"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./contactus-rBWVg4-j.mjs");
const Route$f = createFileRoute("/contactus")({
  head: () => ({
    meta: [{
      title: "ติดต่อเรา — Matrix Intertrade"
    }, {
      name: "description",
      content: "ขอใบเสนอราคา หรือปรึกษาผู้เชี่ยวชาญด้าน AV Solutions ฟรี"
    }, {
      property: "og:title",
      content: "ติดต่อเรา — Matrix Intertrade"
    }, {
      property: "og:description",
      content: "ติดต่อทีมขายและฝ่ายเทคนิคของ Matrix Intertrade"
    }, {
      property: "og:url",
      content: "/contactus"
    }],
    links: [{
      rel: "canonical",
      href: "/contactus"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Matrix Intertrade Co., Ltd.",
        image: "https://matrix-vista-pro.lovable.app/og-image.jpg",
        url: "https://matrix-vista-pro.lovable.app/contactus",
        telephone: "+66-2-129-6193",
        email: "matrixintertrade2026@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "111/51 หมู่ที่ 8 ต.บางกร่าง",
          addressLocality: "อ.เมือง",
          addressRegion: "จ.นนทบุรี",
          postalCode: "11000",
          addressCountry: "TH"
        },
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "17:30"
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./brands--yLlmVOl.mjs");
const Route$e = createFileRoute("/brands")({
  head: () => ({
    meta: [{
      title: "ผลงาน - Matrix Intertrade"
    }, {
      name: "description",
      content: "ตัวอย่างผลงานและกลุ่มการใช้งานจริงของ Matrix Intertrade ครอบคลุมองค์กร โรงเรียน หน่วยงานรัฐ โรงพยาบาล และงาน hospitality"
    }, {
      property: "og:url",
      content: "/brands"
    }],
    links: [{
      rel: "canonical",
      href: "/brands"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./av-solutions-BLL2tEsl.mjs");
const Route$d = createFileRoute("/av-solutions")({
  head: () => ({
    meta: [{
      title: "AV Solutions — Matrix Intertrade"
    }, {
      name: "description",
      content: "ออกแบบและติดตั้งระบบภาพและเสียงครบวงจรสำหรับองค์กร"
    }, {
      property: "og:title",
      content: "Kramer AV Solutions ครบวงจรสำหรับ Boardroom และ Control Room"
    }, {
      property: "og:description",
      content: "AV over IP, Matrix Switcher, Video Wall และระบบควบคุมโดยทีม CTS-certified"
    }, {
      property: "og:url",
      content: "/av-solutions"
    }],
    links: [{
      rel: "canonical",
      href: "/av-solutions"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./aboutus-DLAVxXdz.mjs");
const Route$c = createFileRoute("/aboutus")({
  head: () => ({
    meta: [{
      title: "เกี่ยวกับเรา — Matrix Intertrade"
    }, {
      name: "description",
      content: "บริษัท แมทริกซ์ อินเตอร์เทรด จำกัด ผู้นำเข้าและจัดจำหน่ายระบบภาพแบรนด์ชั้นนำของโลก ประสบการณ์มากกว่า 20 ปี"
    }, {
      property: "og:title",
      content: "เกี่ยวกับเรา — Matrix Intertrade"
    }, {
      property: "og:description",
      content: "ผู้นำเข้าและจัดจำหน่ายระบบภาพแบรนด์ชั้นนำของโลก ด้วยประสบการณ์มากกว่า 20 ปี"
    }, {
      property: "og:url",
      content: "/aboutus"
    }],
    links: [{
      rel: "canonical",
      href: "/aboutus"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-CYuk81FC.mjs");
const Route$b = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Matrix Intertrade — ผู้เชี่ยวชาญ LED & AV ครบวงจร"
    }, {
      name: "description",
      content: "LED Display, Interactive Display, Projector, Wireless Presentation และ AV Solutions สำหรับองค์กรไทย พร้อมทีมออกแบบและติดตั้ง"
    }, {
      property: "og:title",
      content: "Matrix Intertrade — ผู้เชี่ยวชาญ LED & AV ครบวงจร"
    }, {
      property: "og:description",
      content: "ออกแบบ ติดตั้ง และดูแลระบบ LED Display, Interactive Display และ AV Solutions ให้องค์กรไทย"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./blog.index-DNkpkZ5b.mjs");
const search = objectType({
  category: stringType().optional()
});
const Route$a = createFileRoute("/blog/")({
  validateSearch: search,
  head: () => ({
    meta: [{
      title: "บทความ — Matrix Intertrade"
    }, {
      name: "description",
      content: "บทความและคู่มือเลือก LED Display, Interactive Display, AV และ Smart Classroom"
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin.index-BVFy-0YA.mjs");
const Route$9 = createFileRoute("/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const productDetails = {};
const productDetailById = (id) => productDetails[id];
const contentClient$1 = supabase;
const fileProductOrder = new Map(products.map((product, index) => [product.id, index]));
function mapProduct(row) {
  return {
    id: row.product_id,
    name: row.name,
    image: row.image_url ?? "",
    price: row.price_text ?? "0.00",
    url: row.source_url ?? "",
    brand: row.brand,
    brandSlug: row.brand_slug,
    brandCategoryId: row.brand_category_id ?? "",
    descriptionText: row.description_text ?? void 0,
    descriptionHtml: row.description_html ?? void 0
  };
}
function sortLikeFiles(products2) {
  return [...products2].sort((a, b) => {
    const aIndex = fileProductOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = fileProductOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex || a.id.localeCompare(b.id);
  });
}
function fromFiles$1(products$1 = products, error) {
  return {
    products: products$1,
    source: "files",
    error
  };
}
function fallbackProductsByCategoryId(categoryId) {
  return fromFiles$1(productsByCategoryId(categoryId));
}
async function loadProductListContent() {
  try {
    const { data, error } = await contentClient$1.from("content_products").select(
      "product_id,name,image_url,price_text,source_url,brand,brand_slug,brand_category_id,description_text,description_html"
    );
    if (error) throw error;
    const products2 = sortLikeFiles(data?.map(mapProduct) ?? []);
    if (products2.length === 0) throw new Error("Supabase product snapshot is empty.");
    return {
      products: products2,
      source: "supabase"
    };
  } catch (error) {
    console.warn("[content] Falling back to file-based product content.", error);
    return fromFiles$1(products, error);
  }
}
async function loadProductsByCategoryContent(categoryId) {
  const listContent = await loadProductListContent();
  const products2 = categoryId === "0" || !categoryId ? listContent.products : listContent.products.filter((product) => product.brandCategoryId === categoryId);
  return {
    ...listContent,
    products: products2
  };
}
async function loadProductDetailContent(productId) {
  const listContent = await loadProductListContent();
  let product = listContent.products.find((item) => item.id === productId);
  if (!product && listContent.source === "supabase") {
    product = productById(productId);
  }
  const sourceProducts = product && listContent.products.some((item) => item.id === product.id) ? listContent.products : products;
  return {
    ...listContent,
    product,
    relatedProducts: product ? sourceProducts.filter(
      (item) => item.brandCategoryId === product.brandCategoryId && item.id !== product.id
    ).slice(0, 4) : []
  };
}
const $$splitComponentImporter$4 = () => import("./product._id-DdpQCBEv.mjs");
const $$splitNotFoundComponentImporter$3 = () => import("./product._id-BC3wE0bl.mjs");
const Route$8 = createFileRoute("/product/$id")({
  head: (ctx) => {
    const {
      loaderData,
      params
    } = ctx;
    const p = loaderData?.product ?? productById(params.id);
    const detail = productDetailById(params.id);
    const title = p ? `${p.name} - Matrix Intertrade` : "สินค้า - Matrix Intertrade";
    const desc = p?.descriptionText?.slice(0, 200) || detail?.descriptionText?.slice(0, 200) || (p ? `${p.name}${p.brand ? ` โดย ${p.brand}` : ""} - สอบถามและขอใบเสนอราคาจาก Matrix Intertrade` : "รายละเอียดสินค้า");
    const hasPrice = p?.price && p.price !== "0.00";
    const productLd = p ? {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      ...p.image ? {
        image: p.image
      } : {},
      ...p.brand ? {
        brand: {
          "@type": "Brand",
          name: p.brand
        }
      } : {},
      description: desc,
      offers: {
        "@type": "Offer",
        priceCurrency: "THB",
        ...hasPrice ? {
          price: p.price
        } : {
          price: "0",
          availability: "https://schema.org/InStock"
        },
        url: `https://matrix-vista-pro.lovable.app/product/${params.id}`
      }
    } : null;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "product"
      }, ...p?.image ? [{
        property: "og:image",
        content: p.image
      }] : []],
      links: [{
        rel: "canonical",
        href: `/product/${params.id}`
      }],
      ...productLd ? {
        scripts: [{
          type: "application/ld+json",
          children: JSON.stringify(productLd)
        }]
      } : {}
    };
  },
  loader: async ({
    params
  }) => {
    const content = await loadProductDetailContent(params.id);
    const product = content.product;
    if (!product) throw notFound();
    return {
      product,
      relatedProducts: content.relatedProducts
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitErrorComponentImporter$2 = () => import("./industry._slug-C2IACwMI.mjs");
const $$splitNotFoundComponentImporter$2 = () => import("./industry._slug-DXsIBuFi.mjs");
const $$splitComponentImporter$3 = () => import("./industry._slug-H__vjVZ3.mjs");
const Route$7 = createFileRoute("/industry/$slug")({
  loader: async ({
    params
  }) => {
    const ind = await loadIndustryDetailContent(params.slug);
    if (!ind) throw notFound();
    return {
      ind
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.ind.title} — Matrix Intertrade`
    }, {
      name: "description",
      content: loaderData?.ind.desc
    }, {
      property: "og:url",
      content: `/industry/${loaderData?.ind.slug}`
    }],
    links: [{
      rel: "canonical",
      href: `/industry/${loaderData?.ind.slug}`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent")
});
const catMap = {
  "0": "สินค้าทั้งหมด",
  "288194": "Unilumin",
  "235610": "Kramer",
  "288209": "Persona",
  "288210": "tranScreen",
  "237068": "Grandview",
  "237477": "HDMI Cable",
  "237677": "Newline",
  "237467": "Enewave",
  "237596": "Poly",
  "237676": "Yealink",
  "237678": "Vissonic",
  "237468": "AudioPressBox",
  "237069": "AVlink"
};
const $$splitComponentImporter$2 = () => import("./category._id-BGVe3I-J.mjs");
const Route$6 = createFileRoute("/category/$id")({
  head: ({
    params
  }) => {
    const name = catMap[params.id] ?? "หมวดสินค้า";
    return {
      meta: [{
        title: `${name} - สินค้า - Matrix Intertrade`
      }, {
        name: "description",
        content: `เลือกชม ${name} จาก Matrix Intertrade`
      }, {
        property: "og:url",
        content: `/category/${params.id}`
      }],
      links: [{
        rel: "canonical",
        href: `/category/${params.id}`
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitErrorComponentImporter$1 = () => import("./brands._slug-C2IACwMI.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./brands._slug-FDCq28fM.mjs");
const $$splitComponentImporter$1 = () => import("./brands._slug-CWqagZjK.mjs");
const Route$5 = createFileRoute("/brands/$slug")({
  loader: async ({
    params
  }) => {
    const brand = await loadBrandDetailContent(params.slug);
    if (!brand) throw notFound();
    return {
      brand
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.brand.name} — Matrix Intertrade`
    }, {
      name: "description",
      content: loaderData?.brand.desc
    }, {
      property: "og:url",
      content: `/brands/${loaderData?.brand.slug}`
    }],
    links: [{
      rel: "canonical",
      href: `/brands/${loaderData?.brand.slug}`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent")
});
const contentClient = supabase;
function fromFiles(error) {
  return {
    articles,
    articleCategories,
    source: "files",
    error
  };
}
async function loadArticleListContent() {
  try {
    const [categoriesResult, articlesResult] = await Promise.all([
      contentClient.from("content_article_categories").select("slug,label").order("slug"),
      contentClient.from("content_articles").select(
        "article_id,title,slug,category,excerpt,published_date,read_min,canonical_url,cover_image_url,blocks"
      ).order("article_id", { ascending: true })
    ]);
    if (categoriesResult.error) throw categoriesResult.error;
    if (articlesResult.error) throw articlesResult.error;
    const articleCategories2 = categoriesResult.data?.map((row) => ({
      slug: row.slug,
      label: row.label,
      labelEn: row.label
    })) ?? [];
    const articles2 = articlesResult.data?.map((r) => {
      const row = r;
      return {
        id: row.article_id,
        title: row.title,
        slug: row.slug,
        category: row.category,
        excerpt: row.excerpt,
        date: row.published_date,
        readMin: row.read_min,
        canonicalUrl: row.canonical_url ?? void 0,
        coverImageUrl: row.cover_image_url ?? void 0,
        blocks: row.blocks ?? void 0
      };
    }) ?? [];
    if (articleCategories2.length === 0 || articles2.length === 0) {
      throw new Error("Supabase content snapshot is empty.");
    }
    return {
      articles: articles2,
      articleCategories: articleCategories2,
      source: "supabase"
    };
  } catch (error) {
    console.warn("[content] Falling back to file-based article content.", error);
    return fromFiles(error);
  }
}
async function loadArticleDetailContent(slug) {
  const listContent = await loadArticleListContent();
  let article = listContent.articles.find((item) => item.slug === slug);
  if (!article && listContent.source === "supabase") {
    article = getArticle(slug);
  }
  const sourceArticles = article && listContent.articles.some((item) => item.slug === article.slug) ? listContent.articles : articles;
  const sourceCategories = listContent.articleCategories.length > 0 ? listContent.articleCategories : articleCategories;
  return {
    ...listContent,
    article,
    category: article ? sourceCategories.find((item) => item.slug === article.category) : void 0,
    relatedArticles: article ? sourceArticles.filter((item) => item.category === article.category && item.id !== article.id).slice(0, 3) : []
  };
}
const fallbackArticleListContent = fromFiles();
const $$splitErrorComponentImporter = () => import("./blog._slug-C2IACwMI.mjs");
const $$splitNotFoundComponentImporter = () => import("./blog._slug-CqiiIV9J.mjs");
const $$splitComponentImporter = () => import("./blog._slug-B5AmBOzh.mjs");
const Route$4 = createFileRoute("/blog/$slug")({
  loader: async ({
    params
  }) => {
    const content = await loadArticleDetailContent(params.slug);
    const article = content.article;
    if (!article) throw notFound();
    return {
      article,
      category: content.category,
      relatedArticles: content.relatedArticles
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.article.title} — Matrix Intertrade`
    }, {
      name: "description",
      content: loaderData?.article.excerpt
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:title",
      content: loaderData?.article.title
    }, {
      property: "og:description",
      content: loaderData?.article.excerpt
    }, {
      property: "og:url",
      content: `/blog/${loaderData?.article.slug}`
    }],
    links: [{
      rel: "canonical",
      href: loaderData?.article.canonicalUrl || `/blog/${loaderData?.article.slug}`
    }],
    scripts: loaderData?.article ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: loaderData.article.title,
        description: loaderData.article.excerpt,
        datePublished: loaderData.article.date,
        author: {
          "@type": "Organization",
          name: "Matrix Intertrade"
        },
        publisher: {
          "@type": "Organization",
          name: "Matrix Intertrade"
        },
        mainEntityOfPage: `https://matrix-vista-pro.lovable.app/blog/${loaderData.article.slug}`
      })
    }] : []
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
const Schema = objectType({
  name: stringType().min(1).max(200),
  company: stringType().max(200).optional().default(""),
  email: stringType().email().max(200),
  phone: stringType().min(1).max(50),
  topic: stringType().max(100).optional().default(""),
  message: stringType().max(5e3).optional().default("")
});
const TO_EMAIL = "matrixintertrade2026@gmail.com";
const Route$3 = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "Email service not configured" }, { status: 500 });
        }
        let body;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = Schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", details: parsed.error.flatten() },
            { status: 400 }
          );
        }
        const d = parsed.data;
        const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const html = `
          <h2>คำขอใบเสนอราคาใหม่จากเว็บไซต์</h2>
          <table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
            <tr><td><b>ชื่อ-นามสกุล</b></td><td>${esc(d.name)}</td></tr>
            <tr><td><b>บริษัท / องค์กร</b></td><td>${esc(d.company || "-")}</td></tr>
            <tr><td><b>อีเมล</b></td><td>${esc(d.email)}</td></tr>
            <tr><td><b>โทรศัพท์</b></td><td>${esc(d.phone)}</td></tr>
            <tr><td><b>หัวข้อที่สนใจ</b></td><td>${esc(d.topic || "-")}</td></tr>
            <tr><td valign="top"><b>รายละเอียด</b></td><td><pre style="white-space:pre-wrap;margin:0;font-family:inherit">${esc(d.message || "-")}</pre></td></tr>
          </table>
        `;
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            from: "Matrix Intertrade <noreply@matrixintertrade.com>",
            to: [TO_EMAIL],
            reply_to: d.email,
            subject: `[คำขอใบเสนอราคา] ${d.name}${d.topic ? " - " + d.topic : ""}`,
            html
          })
        });
        if (!res.ok) {
          const errText = await res.text();
          console.error("Resend error:", res.status, errText);
          return Response.json({ error: "Failed to send email" }, { status: 502 });
        }
        return Response.json({ ok: true });
      }
    }
  }
});
const ChatbotSchema = objectType({
  message: stringType().min(1).max(1e3),
  history: arrayType(stringType().max(1200)).max(8).optional().default([])
});
const Route$2 = createFileRoute("/api/public/chatbot")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = ChatbotSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", details: parsed.error.flatten() },
            { status: 400 }
          );
        }
        const { answerChatbot } = await import("./knowledge-BOxnTRZf.mjs");
        const result = await answerChatbot(parsed.data.message, parsed.data.history);
        return Response.json(result);
      }
    }
  }
});
function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Connect Supabase in Lovable Cloud.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
let _supabaseAdmin;
const supabaseAdmin = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  }
});
function jsonError$1(message, status, details) {
  return Response.json({ error: message, details }, { status });
}
function getAdminEmails$1() {
  return (process.env.ADMIN_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
}
async function requireAdmin$1(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { response: jsonError$1("Unauthorized: missing Bearer token", 401) };
  }
  const token = authHeader.substring(7);
  const {
    data: { user },
    error
  } = await supabaseAdmin.auth.getUser(token);
  const email = user?.email?.toLowerCase();
  const adminEmails = getAdminEmails$1();
  if (error || !email) {
    return { response: jsonError$1("Unauthorized: invalid session", 401) };
  }
  if (!adminEmails.includes(email)) {
    return { response: jsonError$1("Forbidden: this user is not an admin", 403) };
  }
  return { email };
}
const Route$1 = createFileRoute("/api/admin/upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const admin = await requireAdmin$1(request);
        if ("response" in admin) return admin.response;
        try {
          const formData = await request.formData();
          const file = formData.get("file");
          if (!file) {
            return jsonError$1("No file provided", 400);
          }
          try {
            await supabaseAdmin.storage.createBucket("admin-media", { public: true });
          } catch (e) {
          }
          const ext = file.name.split(".").pop() || "png";
          const path = `uploads/${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`;
          const { data, error } = await supabaseAdmin.storage.from("admin-media").upload(path, file);
          if (error) {
            console.error("Storage upload error:", error);
            return jsonError$1("Failed to upload file to storage", 500, error);
          }
          const { data: publicUrlData } = supabaseAdmin.storage.from("admin-media").getPublicUrl(path);
          return Response.json({ url: publicUrlData.publicUrl });
        } catch (err) {
          console.error("Upload handler error:", err);
          return jsonError$1("Internal Server Error", 500, err);
        }
      }
    }
  }
});
const CONTENT_CONFIG = {
  products: {
    table: "content_products",
    key: "product_id",
    select: "product_id,name,image_url,price_text,source_url,brand,brand_slug,brand_category_id,description_text,description_html,payload,updated_at",
    order: "product_id",
    fields: [
      "name",
      "image_url",
      "price_text",
      "source_url",
      "brand",
      "brand_slug",
      "brand_category_id",
      "description_text",
      "description_html",
      "payload"
    ]
  },
  articles: {
    table: "content_articles",
    key: "slug",
    select: "slug,article_id,title,category,excerpt,published_date,read_min,canonical_url,cover_image_url,blocks,payload,updated_at",
    order: "article_id",
    fields: [
      "title",
      "category",
      "excerpt",
      "published_date",
      "read_min",
      "canonical_url",
      "cover_image_url",
      "blocks",
      "payload"
    ]
  },
  articleCategories: {
    table: "content_article_categories",
    key: "slug",
    select: "slug,label,image_url,payload,updated_at",
    order: "slug",
    fields: ["label", "image_url", "payload"]
  },
  brands: {
    table: "content_brands",
    key: "slug",
    select: "slug,name,category,description,color,image_url,logo_url,accent,payload,updated_at",
    order: "slug",
    fields: [
      "name",
      "category",
      "description",
      "color",
      "image_url",
      "logo_url",
      "accent",
      "payload"
    ]
  },
  brandIntros: {
    table: "content_brand_category_intros",
    key: "category_id",
    select: "category_id,brand_slug,tagline,description,highlights,best_for,origin,payload,updated_at",
    order: "category_id",
    fields: ["brand_slug", "tagline", "description", "highlights", "best_for", "origin", "payload"]
  },
  solutions: {
    table: "content_solutions",
    key: "slug",
    select: "slug,title,icon,description,image_url,payload,updated_at",
    order: "slug",
    fields: ["title", "icon", "description", "image_url", "payload"]
  },
  industries: {
    table: "content_industries",
    key: "slug",
    select: "slug,title,icon,description,image_url,payload,updated_at",
    order: "slug",
    fields: ["title", "icon", "description", "image_url", "payload"]
  },
  navItems: {
    table: "content_nav_items",
    key: "id",
    select: "id,parent_id,depth,sort_order,label,href,description,image_url,payload,updated_at",
    order: "sort_order",
    fields: [
      "parent_id",
      "depth",
      "sort_order",
      "label",
      "href",
      "description",
      "image_url",
      "payload"
    ]
  }
};
const UpdateSchema = objectType({
  kind: enumType([
    "products",
    "articles",
    "articleCategories",
    "brands",
    "brandIntros",
    "solutions",
    "industries",
    "navItems"
  ]),
  id: stringType().min(1),
  values: recordType(unknownType())
});
function jsonError(message, status, details) {
  return Response.json({ error: message, details }, { status });
}
function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
}
function normalizeValue(value) {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
}
async function requireAdmin(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { response: jsonError("Unauthorized: missing bearer token", 401) };
  }
  const adminEmails = getAdminEmails();
  if (adminEmails.length === 0) {
    return {
      response: jsonError(
        "Admin access is not configured. Set ADMIN_EMAILS to a comma-separated allow-list.",
        403
      )
    };
  }
  const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return { response: jsonError("Supabase auth environment is not configured", 500) };
  }
  const token = authHeader.replace("Bearer ", "");
  const authClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } }
  });
  const { data, error } = await authClient.auth.getUser(token);
  const email = data.user?.email?.toLowerCase();
  if (error || !email) {
    return { response: jsonError("Unauthorized: invalid session", 401) };
  }
  if (!adminEmails.includes(email)) {
    return { response: jsonError("Forbidden: this user is not an admin", 403) };
  }
  return { email };
}
async function loadKind(config) {
  const result = await supabaseAdmin.from(config.table).select(config.select).order(config.order, {
    ascending: true
  });
  if (result.error && config.select.includes("image_url")) {
    const fallbackSelect = config.select.split(",").filter((col) => col.trim() !== "image_url").join(",");
    const fallbackResult = await supabaseAdmin.from(config.table).select(fallbackSelect).order(config.order, { ascending: true });
    if (!fallbackResult.error) {
      console.warn(`[admin] Column image_url missing from ${config.table}, loaded without it`);
      return fallbackResult;
    }
  }
  return result;
}
const Route = createFileRoute("/api/admin/content")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const admin = await requireAdmin(request);
        if ("response" in admin) return admin.response;
        const entries = await Promise.all(
          Object.entries(CONTENT_CONFIG).map(async ([kind, config]) => {
            const result = await loadKind(config);
            return [kind, result];
          })
        );
        const payload = { ok: true, userEmail: admin.email };
        for (const [kind, result] of entries) {
          if (result.error) return jsonError(`Failed to load ${kind}`, 500, result.error);
          payload[kind] = result.data ?? [];
        }
        return Response.json(payload);
      },
      POST: async ({ request }) => {
        const admin = await requireAdmin(request);
        if ("response" in admin) return admin.response;
        let body;
        try {
          body = await request.json();
        } catch {
          return jsonError("Invalid JSON body", 400);
        }
        const parsed = UpdateSchema.safeParse(body);
        if (!parsed.success)
          return jsonError("Invalid content payload", 400, parsed.error.flatten());
        const config = CONTENT_CONFIG[parsed.data.kind];
        const values = Object.fromEntries(
          Object.entries(parsed.data.values).filter(([field]) => config.fields.includes(field)).map(([field, value]) => [field, normalizeValue(value)])
        );
        if (Object.keys(values).length === 0) {
          return jsonError("No supported fields to update", 400);
        }
        const { data, error } = await supabaseAdmin.from(config.table).update(values).eq(config.key, parsed.data.id).select(config.select).single();
        if (error) {
          if (config.select.includes("image_url")) {
            const fallbackValues = Object.fromEntries(
              Object.entries(values).filter(([field]) => field !== "image_url")
            );
            const fallbackSelect = config.select.split(",").filter((col) => col.trim() !== "image_url").join(",");
            if (Object.keys(fallbackValues).length > 0) {
              const retry = await supabaseAdmin.from(config.table).update(fallbackValues).eq(config.key, parsed.data.id).select(fallbackSelect).single();
              if (!retry.error) {
                return Response.json({ ok: true, kind: parsed.data.kind, item: retry.data });
              }
            }
          }
          return jsonError(`Failed to update ${parsed.data.kind}`, 500, error);
        }
        return Response.json({ ok: true, kind: parsed.data.kind, item: data });
      }
    }
  }
});
const WirelessPresentationRoute = Route$n.update({
  id: "/wireless-presentation",
  path: "/wireless-presentation",
  getParentRoute: () => Route$o
});
const ThemePreviewRoute = Route$m.update({
  id: "/theme-preview",
  path: "/theme-preview",
  getParentRoute: () => Route$o
});
const SolutionsRoute = Route$l.update({
  id: "/solutions",
  path: "/solutions",
  getParentRoute: () => Route$o
});
const SitemapDotxmlRoute = Route$k.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$o
});
const ProjectorRoute = Route$j.update({
  id: "/projector",
  path: "/projector",
  getParentRoute: () => Route$o
});
const ProductLineRoute = Route$i.update({
  id: "/product-line",
  path: "/product-line",
  getParentRoute: () => Route$o
});
const LedDisplayRoute = Route$h.update({
  id: "/led-display",
  path: "/led-display",
  getParentRoute: () => Route$o
});
const InteractiveDisplayRoute = Route$g.update({
  id: "/interactive-display",
  path: "/interactive-display",
  getParentRoute: () => Route$o
});
const ContactusRoute = Route$f.update({
  id: "/contactus",
  path: "/contactus",
  getParentRoute: () => Route$o
});
const BrandsRoute = Route$e.update({
  id: "/brands",
  path: "/brands",
  getParentRoute: () => Route$o
});
const AvSolutionsRoute = Route$d.update({
  id: "/av-solutions",
  path: "/av-solutions",
  getParentRoute: () => Route$o
});
const AboutusRoute = Route$c.update({
  id: "/aboutus",
  path: "/aboutus",
  getParentRoute: () => Route$o
});
const IndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$o
});
const BlogIndexRoute = Route$a.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$o
});
const AdminIndexRoute = Route$9.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$o
});
const ProductIdRoute = Route$8.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$o
});
const IndustrySlugRoute = Route$7.update({
  id: "/industry/$slug",
  path: "/industry/$slug",
  getParentRoute: () => Route$o
});
const CategoryIdRoute = Route$6.update({
  id: "/category/$id",
  path: "/category/$id",
  getParentRoute: () => Route$o
});
const BrandsSlugRoute = Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BrandsRoute
});
const BlogSlugRoute = Route$4.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$o
});
const ApiPublicContactRoute = Route$3.update({
  id: "/api/public/contact",
  path: "/api/public/contact",
  getParentRoute: () => Route$o
});
const ApiPublicChatbotRoute = Route$2.update({
  id: "/api/public/chatbot",
  path: "/api/public/chatbot",
  getParentRoute: () => Route$o
});
const ApiAdminUploadRoute = Route$1.update({
  id: "/api/admin/upload",
  path: "/api/admin/upload",
  getParentRoute: () => Route$o
});
const ApiAdminContentRoute = Route.update({
  id: "/api/admin/content",
  path: "/api/admin/content",
  getParentRoute: () => Route$o
});
const BrandsRouteChildren = {
  BrandsSlugRoute
};
const BrandsRouteWithChildren = BrandsRoute._addFileChildren(BrandsRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutusRoute,
  AvSolutionsRoute,
  BrandsRoute: BrandsRouteWithChildren,
  ContactusRoute,
  InteractiveDisplayRoute,
  LedDisplayRoute,
  ProductLineRoute,
  ProjectorRoute,
  SitemapDotxmlRoute,
  SolutionsRoute,
  ThemePreviewRoute,
  WirelessPresentationRoute,
  BlogSlugRoute,
  CategoryIdRoute,
  IndustrySlugRoute,
  ProductIdRoute,
  AdminIndexRoute,
  BlogIndexRoute,
  ApiAdminContentRoute,
  ApiAdminUploadRoute,
  ApiPublicChatbotRoute,
  ApiPublicContactRoute
};
const routeTree = Route$o._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  productDetailById as A,
  Button as B,
  productDetails as C,
  router as D,
  solutionImages as E,
  t as F,
  useLanguage as G,
  useSiteContent as H,
  useTheme as I,
  Route$a as R,
  Route$8 as a,
  Route$7 as b,
  Route$6 as c,
  Route$5 as d,
  Route$4 as e,
  articleCategories as f,
  articleImages as g,
  articles as h,
  brandImages as i,
  brandIntrosByCategoryId as j,
  brands as k,
  catMap as l,
  cn as m,
  fallbackArticleListContent as n,
  fallbackProductsByCategoryId as o,
  heroProductLine as p,
  industries as q,
  industryEducation as r,
  industryHotel as s,
  industryOffice as t,
  industryVC as u,
  loadArticleListContent as v,
  loadBrandIntroContent as w,
  loadProductListContent as x,
  loadProductsByCategoryContent as y,
  loadSiteContent as z
};
