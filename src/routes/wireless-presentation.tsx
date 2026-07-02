import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";
import {
  loadSolutionDetailContent,
  type SolutionDetailContent,
} from "@/lib/content/site";

const wirelessPresentationContent: SolutionDetailContent = {
  slug: "wireless-presentation",
  title: "Wireless Presentation",
  iconName: "Wifi",
  intro: "tranScreen ระบบนำเสนอไร้สายระดับองค์กร รองรับ BYOD ทุกอุปกรณ์ Windows / Mac / iOS / Android",
  introEn: "tranScreen Enterprise-grade wireless presentation system, supporting BYOD for all devices (Windows / Mac / iOS / Android)",
  bullets: [
    "ส่งภาพไร้สายแบบ Real-time ไม่มี Lag",
    "รองรับการแชร์พร้อมกันสูงสุด 4 หน้าจอ",
    "Plug-and-Play ใช้งานง่าย ไม่ต้องลง Driver",
    "ระบบความปลอดภัยระดับองค์กร",
    "รองรับ AirPlay / Miracast / Google Cast",
  ],
  bulletsEn: [
    "Real-time wireless screen casting with no lag",
    "Supports up to 4 simultaneous screen shares",
    "Plug-and-Play, easy to use without driver installation",
    "Enterprise-grade security systems",
    "Supports AirPlay / Miracast / Google Cast",
  ],
  applications: ["ห้องประชุม Huddle Room", "Boardroom", "Training Room", "Hybrid Meeting", "Innovation Lab"],
  applicationsEn: ["Huddle Rooms", "Boardrooms", "Training Rooms", "Hybrid Meetings", "Innovation Labs"],
};

export const Route = createFileRoute("/wireless-presentation")({
  loader: async () => loadSolutionDetailContent("wireless-presentation", wirelessPresentationContent),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? wirelessPresentationContent.title} — Matrix Intertrade` },
      { name: "description", content: loaderData?.intro ?? wirelessPresentationContent.intro },
      { property: "og:title", content: loaderData?.title ?? wirelessPresentationContent.title },
      {
        property: "og:description",
        content: loaderData?.intro ?? wirelessPresentationContent.intro,
      },
      { property: "og:url", content: "/wireless-presentation" },
    ],
    links: [{ rel: "canonical", href: "/wireless-presentation" }],
  }),
  component: WirelessPresentationPage,
});

function WirelessPresentationPage() {
  const content = Route.useLoaderData();
  return <SolutionDetailTemplate {...content} />;
}
