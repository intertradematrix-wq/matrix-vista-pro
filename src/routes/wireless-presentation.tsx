import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";

export const Route = createFileRoute("/wireless-presentation")({
  head: () => ({
    meta: [
      { title: "Wireless Presentation — Matrix Intertrade" },
      { name: "description", content: "ระบบนำเสนอไร้สายรองรับ BYOD ทุกอุปกรณ์" },
      { property: "og:title", content: "tranScreen Wireless Presentation สำหรับห้องประชุมยุคใหม่" },
      {
        property: "og:description",
        content:
          "นำเสนอไร้สาย Real-time แชร์พร้อมกัน 4 หน้าจอ รองรับ AirPlay, Miracast และ Google Cast",
      },
      { property: "og:url", content: "/wireless-presentation" },
    ],
    links: [{ rel: "canonical", href: "/wireless-presentation" }],
  }),
  component: () => (
    <SolutionDetailTemplate
      slug="wireless-presentation"
      title="Wireless Presentation"
      iconName="Wifi"
      intro="tranScreen ระบบนำเสนอไร้สายระดับองค์กร รองรับ BYOD ทุกอุปกรณ์ Windows / Mac / iOS / Android"
      bullets={[
        "ส่งภาพไร้สายแบบ Real-time ไม่มี Lag",
        "รองรับการแชร์พร้อมกันสูงสุด 4 หน้าจอ",
        "Plug-and-Play ใช้งานง่าย ไม่ต้องลง Driver",
        "ระบบความปลอดภัยระดับองค์กร",
        "รองรับ AirPlay / Miracast / Google Cast",
      ]}
      applications={[
        "ห้องประชุม Huddle Room",
        "Boardroom",
        "Training Room",
        "Hybrid Meeting",
        "Innovation Lab",
      ]}
    />
  ),
});
