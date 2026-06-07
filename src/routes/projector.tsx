import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";

export const Route = createFileRoute("/projector")({
  head: () => ({
    meta: [
      { title: "Projector Solutions — Matrix Intertrade" },
      { name: "description", content: "โปรเจกเตอร์ความสว่างสูงและจอรับภาพคุณภาพระดับมืออาชีพ" },
      { property: "og:title", content: "โปรเจกเตอร์ Laser และจอ Grandview สำหรับห้องประชุม" },
      {
        property: "og:description",
        content:
          "โปรเจกเตอร์ 3,000–20,000 lumens รองรับ 4K HDR พร้อมจอ Grandview Fixed / Motorized / ALR",
      },
      { property: "og:url", content: "/projector" },
    ],
    links: [{ rel: "canonical", href: "/projector" }],
  }),
  component: () => (
    <SolutionDetailTemplate
      slug="projector"
      title="Projector"
      iconName="Projector"
      intro="ระบบโปรเจกเตอร์ความสว่างสูงพร้อมจอรับภาพ Grandview สำหรับห้องประชุม Auditorium และโฮมเธียเตอร์"
      bullets={[
        "ความสว่างตั้งแต่ 3,000 ถึง 20,000 lumens",
        "เทคโนโลยี Laser Light Source อายุการใช้งานยาวนาน",
        "รองรับ 4K UHD และ HDR",
        "จอรับภาพ Grandview ทั้งแบบ Fixed / Motorized / ALR",
        "ติดตั้งโดยทีมเทคนิคพร้อม Color Calibration",
      ]}
      applications={[
        "ห้องประชุมใหญ่",
        "Auditorium",
        "ห้องอบรม",
        "Boardroom",
        "โรงเรียน",
        "Home Theater",
      ]}
    />
  ),
});
