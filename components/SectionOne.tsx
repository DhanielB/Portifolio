import { gsap } from "gsap";
import Image from "next/image"
import { useEffect, useRef } from "react";
import user from "../images/user.png";

export default function SectionOne() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionOneRef = useRef(null);
  const descriptionTwoRef = useRef(null);
  const descriptionThreeRef = useRef(null);
  
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      titleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
      }
    );

    timeline.fromTo(
      subtitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
      }
    );

    timeline.fromTo(
      descriptionOneRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
      }
    );

    timeline.add("start");

    timeline.fromTo(
      descriptionTwoRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
      },
      "start"
    );

    timeline.fromTo(
      descriptionThreeRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
      },
      "start"
    );
  }, [])
  return (
    <section className="app__section_one">
      <div className="app__avatar">
        <Image
          className="app__avatar"
          src={user}
          alt="avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <figure className="app__avatar_figure"></figure>
      <div className="app__title">
        <h1 ref={titleRef}>Backend</h1>
        <h1 ref={subtitleRef}>
          Developer<span className="dot">.</span>
        </h1>
      </div>

      <div className="app__description">
        <h1 ref={descriptionOneRef} className="app__description_one">
          I like to craft solid and scalable backends products<br></br> with
          great user experiences.
        </h1>

        <h1 ref={descriptionTwoRef} className="app__description_two">
          Highly skilled at progressive<br></br> enhancement, design systems
          &amp; <br></br>UI Engineering.
        </h1>

        <h1 ref={descriptionThreeRef} className="app__description_three">
          Over a decade of experience<br></br> building products for clients
          <br></br> across several countries.
        </h1>
      </div>
    </section>
  );
}
