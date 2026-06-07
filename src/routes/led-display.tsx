import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";

export const Route = createFileRoute("/led-display")({
  head: () => ({
    meta: [
      { title: "LED Display Solutions — Matrix Intertrade" },
      {
        name: "description",
        content: "จอ LED Indoor / Outdoor / All-in-One ระดับมืออาชีพสำหรับองค์กรไทย",
      },
      { property: "og:title", content: "Unilumin LED Display — Indoor, Outdoor และ All-in-One" },
      {
        property: "og:description",
        content:
          "จอ LED Pixel Pitch P0.9–P10 ความสว่างถึง 6,000 nits พร้อมทีมออกแบบโครงสร้างและบริการหลังการขาย",
      },
      { property: "og:url", content: "/led-display" },
    ],
    links: [{ rel: "canonical", href: "/led-display" }],
  }),
  component: () => (
    <SolutionDetailTemplate
      slug="led-display"
      title="LED Display"
      iconName="Monitor"
      intro="จอ LED Display คุณภาพระดับโลกจาก Unilumin สำหรับใช้งานทั้ง Indoor และ Outdoor รองรับขนาดและ Pixel Pitch ที่หลากหลาย"
      bullets={[
        "เลือก Pixel Pitch ได้ตั้งแต่ P0.9 ถึง P10 สำหรับทุกระยะการมอง",
        "รองรับการใช้งาน Indoor / Outdoor / Rental / All-in-One",
        "ความสว่างสูงสุดถึง 6,000 nits สำหรับใช้งานกลางแจ้ง",
        "ระบบจัดการเนื้อหาและการควบคุมจากระยะไกล",
        "ทีมออกแบบโครงสร้างและ Power ครบวงจร",
        "รับประกันและบริการหลังการขายในประเทศ",
      ]}
      applications={[
        "ห้องประชุมผู้บริหาร",
        "Lobby & Showroom",
        "Control Room",
        "Outdoor DOOH",
        "Auditorium",
        "Convention Hall",
      ]}
    />
  ),
});
