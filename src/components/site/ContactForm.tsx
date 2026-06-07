import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      topic: String(fd.get("topic") || ""),
      message: String(fd.get("message") || ""),
    };
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      setDone(true);
      toast.success("ส่งคำขอเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.error("ส่งคำขอไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="rounded-2xl border border-border bg-card shadow-card p-6 md:p-8 space-y-4"
      onSubmit={onSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="ชื่อ-นามสกุล *">
          <Input name="name" required placeholder="คุณ..." />
        </Field>
        <Field label="บริษัท / องค์กร">
          <Input name="company" placeholder="ชื่อองค์กร" />
        </Field>
        <Field label="อีเมล *">
          <Input name="email" required type="email" placeholder="you@company.com" />
        </Field>
        <Field label="โทรศัพท์ *">
          <Input name="phone" required placeholder="0xx-xxx-xxxx" />
        </Field>
      </div>
      <Field label="หัวข้อที่สนใจ">
        <select
          name="topic"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option>LED Display</option>
          <option>Interactive Display</option>
          <option>Projector</option>
          <option>Wireless Presentation</option>
          <option>AV Solutions</option>
          <option>อื่นๆ</option>
        </select>
      </Field>
      <Field label="รายละเอียดความต้องการ">
        <Textarea
          name="message"
          rows={5}
          placeholder="กรุณาระบุขนาดพื้นที่ จำนวน และรายละเอียดงาน..."
        />
      </Field>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full bg-gradient-accent text-white hover:opacity-90 shadow-glow"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> กำลังส่ง...
          </>
        ) : done ? (
          <>
            <CheckCircle2 className="mr-2 h-4 w-4" /> ส่งคำขอเรียบร้อย
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> ส่งคำขอใบเสนอราคา
          </>
        )}
      </Button>
      <p className="text-[11px] text-muted-foreground text-center">
        ทีมงานจะติดต่อกลับภายใน 1 วันทำการ
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-semibold text-foreground/80">{label}</Label>
      {children}
    </div>
  );
}
