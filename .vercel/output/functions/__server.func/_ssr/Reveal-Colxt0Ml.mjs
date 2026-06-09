import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as cn } from "./router-BERCXs_H.mjs";
function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
  once = true
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  const Comp = as;
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [once]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      className: cn(
        variant === "scale" ? "reveal-scale" : variant === "slide" ? "reveal-slide" : "reveal",
        visible && "is-visible",
        className
      ),
      style: delay ? { transitionDelay: `${delay}ms` } : void 0,
      children
    }
  );
}
function RevealStagger({
  children,
  className,
  step = 90
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: children.map((child, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * step, children: child }, i)) });
}
export {
  Reveal as R,
  RevealStagger as a
};
