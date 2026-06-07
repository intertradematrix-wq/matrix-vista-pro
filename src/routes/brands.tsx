import { createFileRoute } from "@tanstack/react-router";
import { IndustriesShowcase } from "@/components/site/IndustriesShowcase";
import { CTASection } from "@/components/site/CTASection";
import { useSiteContent } from "@/lib/content/use-site-content";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "ผลงาน - Matrix Intertrade" },
      {
        name: "description",
        content:
          "ตัวอย่างผลงานและกลุ่มการใช้งานจริงของ Matrix Intertrade ครอบคลุมองค์กร โรงเรียน หน่วยงานรัฐ โรงพยาบาล และงาน hospitality",
      },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  const { industries } = useSiteContent();

  return (
    <>
      <IndustriesShowcase industries={industries} />
      <CTASection />
    </>
  );
}
