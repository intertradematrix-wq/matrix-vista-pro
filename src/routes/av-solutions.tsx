import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";

export const Route = createFileRoute("/av-solutions")({
  head: () => ({
    meta: [
      { title: "AV Solutions — Matrix Intertrade" },
      { name: "description", content: "ออกแบบและติดตั้งระบบภาพและเสียงครบวงจรสำหรับองค์กร" },
      {
        property: "og:title",
        content: "Kramer AV Solutions ครบวงจรสำหรับ Boardroom และ Control Room",
      },
      {
        property: "og:description",
        content: "AV over IP, Matrix Switcher, Video Wall และระบบควบคุมโดยทีม CTS-certified",
      },
      { property: "og:url", content: "/av-solutions" },
    ],
    links: [{ rel: "canonical", href: "/av-solutions" }],
  }),
  component: () => (
    <SolutionDetailTemplate
      slug="av-solutions"
      title="AV Solutions"
      iconName="Cable"
      intro="ออกแบบ ติดตั้ง และดูแลระบบภาพและเสียงครบวงจร พร้อมอุปกรณ์ Kramer AV ระดับ Enterprise"
      bullets={[
        "AV over IP ส่งสัญญาณภาพและเสียงผ่านระบบเครือข่าย",
        "Matrix Switcher และ Video Wall Processor",
        "ระบบ Conference / Microphone / Audio DSP",
        "Control System สั่งงานทั้งห้องผ่าน Touch Panel",
        "ออกแบบโดยทีม Sales Engineer ที่ผ่าน CTS",
        "Commissioning & Training ครบวงจร",
      ]}
      applications={[
        "Boardroom",
        "Control Room",
        "Auditorium",
        "Smart Hospital",
        "Command Center",
        "Broadcast Studio",
      ]}
    />
  ),
});
