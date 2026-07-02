import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate } from "@/components/site/SolutionDetailTemplate";
import {
  loadSolutionDetailContent,
  type SolutionDetailContent,
} from "@/lib/content/site";

const projectorContent: SolutionDetailContent = {
  slug: "projector",
  title: "Projector",
  iconName: "Projector",
  intro: "ระบบโปรเจกเตอร์ความสว่างสูงพร้อมจอรับภาพ Grandview สำหรับห้องประชุม Auditorium และโฮมเธียเตอร์",
  introEn: "High-brightness projector systems paired with Grandview screens for meeting rooms, auditoriums, and home theaters.",
  bullets: [
    "ความสว่างตั้งแต่ 3,000 ถึง 20,000 lumens",
    "เทคโนโลยี Laser Light Source อายุการใช้งานยาวนาน",
    "รองรับ 4K UHD และ HDR",
    "จอรับภาพ Grandview ทั้งแบบ Fixed / Motorized / ALR",
    "ติดตั้งโดยทีมเทคนิคพร้อม Color Calibration",
  ],
  bulletsEn: [
    "Brightness ranging from 3,000 to 20,000 lumens",
    "Laser Light Source technology for long-lasting performance",
    "Supports 4K UHD and HDR content",
    "Grandview screens available in Fixed / Motorized / ALR formats",
    "Installed by technical teams with professional Color Calibration",
  ],
  applications: ["ห้องประชุมใหญ่", "Auditorium", "ห้องอบรม", "Boardroom", "โรงเรียน", "Home Theater"],
  applicationsEn: ["Large Meeting Rooms", "Auditoriums", "Training Rooms", "Boardrooms", "Schools", "Home Theaters"],
};

export const Route = createFileRoute("/projector")({
  loader: async () => loadSolutionDetailContent("projector", projectorContent),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? projectorContent.title} — Matrix Intertrade` },
      { name: "description", content: loaderData?.intro ?? projectorContent.intro },
      { property: "og:title", content: loaderData?.title ?? projectorContent.title },
      {
        property: "og:description",
        content: loaderData?.intro ?? projectorContent.intro,
      },
      { property: "og:url", content: "/projector" },
    ],
    links: [{ rel: "canonical", href: "/projector" }],
  }),
  component: ProjectorPage,
});

function ProjectorPage() {
  const content = Route.useLoaderData();
  return <SolutionDetailTemplate {...content} />;
}
