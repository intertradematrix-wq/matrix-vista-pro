import { Breadcrumb } from "./Breadcrumb";

export function PageHeader({
  eyebrow,
  title,
  desc,
  breadcrumbs,
  bgImage,
  variant = "default",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
  variant?: "default" | "clean";
}) {
  const clean = variant === "clean";
  return (
    <section
      className={`relative overflow-hidden border-b border-border ${
        clean ? "bg-white" : bgImage ? "bg-navy" : "bg-gradient-subtle"
      }`}
    >
      {clean ? (
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      ) : bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />
        </>
      )}
      <div
        className={`relative mx-auto min-w-0 max-w-7xl px-4 md:px-6 ${
          clean ? "py-8 sm:py-10 md:py-14" : "py-10 sm:py-14 md:py-20"
        }`}
      >
        {breadcrumbs && (
          <div
            className={`mb-6 ${
              bgImage && !clean
                ? "[&_*]:!text-white [&_a]:!text-white/90 [&_a:hover]:!text-cyan [&_a:hover]:underline [&_span.font-semibold]:!text-white [&_svg]:!text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                : ""
            }`}
          >
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <div
            className={`mb-4 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase leading-snug tracking-[0.14em] ${
              bgImage && !clean
                ? "bg-accent/20 ring-1 ring-accent/40 text-accent"
                : "bg-secondary text-primary ring-1 ring-border"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="min-w-0 break-words">{eyebrow}</span>
          </div>
        )}
        <h1
          className={`max-w-4xl break-words text-[28px] font-bold leading-tight tracking-tight text-balance sm:text-3xl md:text-5xl lg:text-6xl ${
            bgImage && !clean ? "text-white drop-shadow-lg" : "text-primary"
          }`}
        >
          {title}
        </h1>
        {desc && (
          <p
            className={`mt-4 max-w-3xl break-words text-sm leading-relaxed text-pretty sm:mt-5 sm:text-base md:text-lg ${
              bgImage && !clean
                ? "text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]"
                : "text-muted-foreground"
            }`}
          >
            {desc}
          </p>
        )}
      </div>
    </section>
  );
}
