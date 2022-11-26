import { gsap } from "gsap"
import { useEffect, useRef } from "react";

export default function SectionTwo() {
  const designTitleRef = useRef(null);
  const designDescriptionRef = useRef(null);
  const engeneeringTitleRef = useRef(null);
  const engeneeringDescriptionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      designTitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: designTitleRef.current,
          start: "center 70%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      designDescriptionRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: designDescriptionRef.current,
          start: "center 70%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      engeneeringTitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: engeneeringTitleRef.current,
          start: "center 70%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      engeneeringDescriptionRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: engeneeringDescriptionRef.current,
          start: "center 70%",
          end: "center 30%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <section className="app__section_two">
      <h1 ref={designTitleRef} className="app__section_two__title_one">
        Design
      </h1>
      <p
        ref={designDescriptionRef}
        className="app__section_two__description_one"
      >
        I&apos;m probably not the typical designer positioned<br></br>
        behind an Illustrator artboard adjusting pixels, but I<br></br>
        design. Immersed in stylesheets tweaking font sizes<br></br> and
        contemplating layouts is where you&apos;ll find me<br></br> (~_^).
        I&apos;m committed to creating fluent user<br></br>
        experiences while staying fashionable.
      </p>

      <h1 ref={engeneeringTitleRef} className="app__section_two__title_two">
        Engeneering
      </h1>
      <p
        ref={engeneeringDescriptionRef}
        className="app__section_two__description_two"
      >
        In building JavaScript applications, I&apos;m equipped with just the
        <br></br> right tools, and can absolutely function independently of them
        <br></br> to deliver fast, resilient solutions optimized for scale —
        <br></br> performance and scalabilty are priorities on my radar.
      </p>
    </section>
  );
}
