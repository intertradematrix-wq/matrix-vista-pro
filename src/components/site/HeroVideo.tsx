import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroVideo({ src }: { src: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      tx = nx * 14; // px max shift
      ty = ny * 10;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      video.style.setProperty("--px", `${cx.toFixed(2)}px`);
      video.style.setProperty("--py", `${cy.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };
    wrap.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Try to play with sound immediately; fall back to unmuting on first user gesture.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryUnmute = async () => {
      try {
        v.muted = false;
        v.volume = 1;
        await v.play();
        setMuted(false);
      } catch {
        v.muted = true;
        await v.play().catch(() => {});
      }
    };

    void tryUnmute();

    const onGesture = async () => {
      if (!v.muted) return;
      v.muted = false;
      v.volume = 1;
      try {
        await v.play();
        setMuted(false);
      } catch {
        v.muted = true;
      }
    };
    const opts: AddEventListenerOptions = { once: true, passive: true };
    window.addEventListener("pointerdown", onGesture, opts);
    window.addEventListener("keydown", onGesture, opts);
    window.addEventListener("touchstart", onGesture, opts);
    window.addEventListener("scroll", onGesture, opts);
    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("scroll", onGesture);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-navy">
      <video
        ref={videoRef}
        className="video-pan absolute inset-0 h-full w-full object-contain sm:object-cover"
        style={{ translate: "var(--px, 0) var(--py, 0)" }}
        src={src}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => {
          const v = videoRef.current;
          if (!v) return;
          const next = !muted;
          v.muted = next;
          if (!next) {
            v.volume = 1;
            v.play().catch(() => {});
          }
          setMuted(next);
        }}
        aria-label={muted ? "เปิดเสียง" : "ปิดเสียง"}
        className="absolute top-4 right-4 z-20 grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-black/50 text-white ring-1 ring-white/20 backdrop-blur hover:bg-black/70 transition-colors"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </div>
  );
}
