import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  // ---------- gsap context
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- selecting all horizontal sections
      const horizontalSections = gsap.utils.toArray(".horizontal-section");

      // ---------- applying horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          markers: true,
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="container">
      {/* ---------- section 01 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">Horizontal Scroll</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">01</h1>
      </section>

      {/* ---------- section 02 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">02</h1>
      </section>

      {/* ---------- section 03 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">03</h1>
      </section>
      {/* ---------- section 04 ---------- */}
      <section className="horizontal-section">
        <h1 className="heading">04</h1>
      </section>
      {/* //section4 */}
      
    </main>
  );
}
