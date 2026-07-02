import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";
import {
  loadSolutionDetailContent,
  type SolutionDetailContent,
} from "@/lib/content/site";

const interactiveDisplayContent: SolutionDetailContent = {
  slug: "interactive-display",
  title: "Interactive Display",
  iconName: "Hand",
  intro: "จอสัมผัสอัจฉริยะระดับมืออาชีพจาก Persona รองรับการเรียนการสอน Active Learning และห้องประชุม Hybrid Meeting",
  introEn: "Professional smart touch displays from Persona, supporting Active Learning and Hybrid Meetings.",
  bullets: [
    "Google EDLA Certified รองรับ Google Play อย่างเป็นทางการ",
    "Multi-touch สูงสุด 40 จุด ตอบสนองทันที",
    "Whiteboard ในตัว พร้อม Cloud Storage",
    "รองรับ Wireless Casting จากทุกอุปกรณ์",
    "DMS+ ระบบบริหารจัดการจอจากระยะไกล",
    "ขนาด 65 / 75 / 86 / 98 นิ้ว",
  ],
  bulletsEn: [
    "Google EDLA Certified with official Google Play support",
    "Up to 40-point Multi-touch with instant response",
    "Built-in Whiteboard with Cloud Storage",
    "Supports Wireless Casting from all devices",
    "DMS+ remote display management system",
    "Available in 65 / 75 / 86 / 98 inches",
  ],
  applications: ["Smart Classroom", "ห้องประชุมองค์กร", "ห้องอบรม", "Training Room", "ห้องผู้บริหาร", "Innovation Lab"],
  applicationsEn: [
    "Smart Classrooms",
    "Corporate Meeting Rooms",
    "Training Rooms",
    "Lecture Halls",
    "Executive Boardrooms",
    "Innovation Labs",
  ],
};

export const Route = createFileRoute("/interactive-display")({
  loader: async () => loadSolutionDetailContent("interactive-display", interactiveDisplayContent),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? interactiveDisplayContent.title} — Matrix Intertrade` },
      {
        name: "description",
        content: loaderData?.intro ?? interactiveDisplayContent.intro,
      },
      {
        property: "og:title",
        content: loaderData?.title ?? interactiveDisplayContent.title,
      },
      {
        property: "og:description",
        content: loaderData?.intro ?? interactiveDisplayContent.intro,
      },
      { property: "og:url", content: "/interactive-display" },
    ],
    links: [{ rel: "canonical", href: "/interactive-display" }],
  }),
  component: InteractiveDisplayPage,
});

function InteractiveDisplayPage() {
  const content = Route.useLoaderData();
  return <SolutionDetailTemplate {...content} />;
}
