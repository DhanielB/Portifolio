import strftime from 'strftime'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import user from "./images/user.png";

export default function App() {
  const [timer, setTimer] = useState('')
 
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionOneRef = useRef(null);
  const descriptionTwoRef = useRef(null);
  const descriptionThreeRef = useRef(null);
  const designTitleRef = useRef(null);
  const designDescriptionRef = useRef(null);
  const engeneeringTitleRef = useRef(null);
  const engeneeringDescriptionRef = useRef(null);
  const overTitleRef = useRef(null);
  const overDescriptionOneRef = useRef(null);
  const overDescriptionTwoRef = useRef(null);

  setInterval(() => {
    const weekDay = strftime('%a')
    const month = strftime('%B')
    const day = strftime('%U')
    const hour = strftime('%H')
    const minutes = strftime('%M')
    const meridian = strftime('%P').toUpperCase()
    
    const text = `${weekDay} ${month} ${day}, ${hour}:${minutes} ${meridian}`
    setTimer(text)
  }, 1000)

  useEffect(() => {
    const timeline = gsap.timeline();
    
    gsap.registerPlugin(ScrollTrigger);

    timeline.fromTo(titleRef.current, {
      y: -5,
      duration: 2,
      autoAlpha: 0,
    }, {
      y: 0,
      duration: 2,
      autoAlpha: 1,
    });

    timeline.fromTo(subtitleRef.current, {
      y: -5,
      duration: 2,
      autoAlpha: 0
    }, {
      y: 0,
      duration: 2,
      autoAlpha: 1
    });

    timeline.fromTo(descriptionOneRef.current, {
      y: -5,
      duration: 2,
      autoAlpha: 0,
    }, {
      y: 0,
      duration: 2,
      autoAlpha: 1
    });

    timeline.add('start')
 
    timeline.fromTo(descriptionTwoRef.current, {
      y: -5,
      duration: 2,
      autoAlpha: 0
    }, {
      y: 0,
      duration: 2,
      autoAlpha: 1
    }, 'start');

    timeline.fromTo(descriptionThreeRef.current, {
      y: -5,
      duration: 2,
      autoAlpha: 0
    }, {
      y: 0,
      duration: 2,
      autoAlpha: 1
    }, 'start');

    gsap.fromTo(
      designTitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0
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
        }
      }
    );

    gsap.fromTo(
      designDescriptionRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0
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
        }
      }
    );

    gsap.fromTo(
      engeneeringTitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0
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
        }
      }
    );

    gsap.fromTo(
      engeneeringDescriptionRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0
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
        }
      }
    );

    gsap.fromTo(
      overTitleRef.current,
      {
        y: -5,
        duration: 2,
        autoAlpha: 0
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: overTitleRef.current,
          start: "center 100%",
          end: "center 30%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(
      overDescriptionOneRef.current,
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
          trigger: overDescriptionOneRef.current,
          start: "center 50%",
          end: "center 30%",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(
      overDescriptionTwoRef.current,
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
          trigger: overDescriptionTwoRef.current,
          start: "center 50%",
          end: "center 30%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  return (
    <div className="app">
      <header className="app__header">
      <a className="app__header_projects">Projects</a>
        <a className="app__header_contact">Contact</a>
        <a className="app__header_timer">{timer}</a>
      </header>
      <div className="app__background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="935"
          height="701"
          viewBox="0 0 935 701"
          id="avatar-shapes"
          data-shape="true"
        >
          <path
            fill="none"
            stroke="#ccf381"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M165.648 352.811v0l15.343 16.136v0l15.343-16.136v0l15.341 16.136v0l15.343-16.136v0l15.343 16.136v0l15.343-16.136v0l15.344 16.136v0l15.345-16.136v0"
          ></path>
          <path
            fill="#ccf381"
            d="M112.476 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 1.58a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 1.58a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 1.58a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM150.412 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM169.38 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM188.348 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM207.315 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 20.804a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM264.22 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM283.188 20.804a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.002 0zM302.155 20.804a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM321.123 20.804a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM112.476 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 40.026a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 40.026a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 59.25a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 59.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 78.473a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 78.473a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 97.696a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 97.696a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM150.412 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM169.38 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM188.348 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM207.315 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 116.92a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM264.22 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .001zM283.188 116.92a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.002.001zM302.155 116.92a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .001zM321.123 116.92a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.001zM112.476 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM131.444 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM169.38 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM188.348 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM207.315 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM226.283 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM245.252 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM264.22 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM283.188 136.142a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.002 0zM302.155 136.142a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 136.142a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM112.476 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM131.444 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM226.283 155.365a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM245.252 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 155.365a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 174.588a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 174.588a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM112.476 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM131.444 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM150.412 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM169.38 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM188.348 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM207.315 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM226.283 193.811a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM245.252 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM264.22 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM283.188 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM302.155 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM321.123 193.811a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          ></path>
          <path
            fill="#4831d4"
            d="M692.477 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM711.444 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM749.38 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM768.348 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM787.315 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM844.22 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM863.188 418.551a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM882.155 418.551a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 418.551a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM692.477 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM711.444 437.774a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM730.412 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM749.38 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM768.348 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM787.315 437.774a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 437.774a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM844.22 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM863.188 437.774a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM882.155 437.774a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM901.123 437.774a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM692.477 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 456.998a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 456.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 456.998a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 456.998a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 456.998a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 456.998a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM711.444 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM749.38 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM768.348 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM787.315 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM844.22 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM863.188 476.22a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM882.155 476.22a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 476.22a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM692.477 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 495.443a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM806.283 495.443a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM825.252 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 495.443a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 514.667a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 514.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 514.667a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 514.667a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 514.667a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 514.667a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 533.89a1.5 1.5 0 11-2.998 0 1.5 1.5 0 012.998 0zM806.283 533.89a1.5 1.5 0 11-2.998 0 1.5 1.5 0 012.998 0zM825.252 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 533.89a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM711.444 553.113a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM730.412 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM749.38 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM768.348 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM787.315 553.113a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 553.113a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM844.22 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 .001zM863.188 553.113a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001.001zM882.155 553.113a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 .001zM901.123 553.113a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001.001zM692.477 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 572.336a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 572.336a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 572.336a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 572.336a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 572.336a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 572.336a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM692.477 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM711.444 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM730.412 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM749.38 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM768.348 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM787.315 591.558a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM806.283 591.558a1.5 1.5 0 11-2.998.002 1.5 1.5 0 012.998-.002zM825.252 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM844.22 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM863.188 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM882.155 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM901.123 591.558a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM692.477 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM711.444 610.782a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM730.412 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM749.38 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM768.348 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM787.315 610.782a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM806.283 610.782a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM825.252 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0zM844.22 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013 0zM863.188 610.782a1.5 1.5 0 11-3.002-.001 1.5 1.5 0 013.001 0zM882.155 610.782a1.5 1.5 0 11-3-.001 1.5 1.5 0 013 0zM901.123 610.782a1.5 1.5 0 11-3.001-.001 1.5 1.5 0 013.001 0z"
          ></path>
          <path
            fill="none"
            stroke="#4831d4"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M846.646 332.048v0l22.258.562v0l-.56-22.26v0l22.258.56v0l-.56-22.258v0l22.259.56v0l-.56-22.257v0l22.26.559v0l-.56-22.26v0"
          ></path>
          <path
            fill="none"
            stroke="#ccf381"
            stroke-miterlimit="50"
            stroke-width="2"
            d="M2.114 541.705v0l-.56 22.258v0l22.258-.561v0l-.56 22.259v0l22.258-.56v0l-.56 22.258v0l22.258-.56v0l-.559 22.26v0l22.26-.56v0"
          ></path>
        </svg>
      </div>

      <main className="app__main">
        <section className="app__section_one">
          <img className="app__avatar" src={user} alt="avatar" />
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
        <section className="app__section_two">
          <h1 ref={designTitleRef} className="app__section_two__title_one">Design</h1>
          <p ref={designDescriptionRef} className="app__section_two__description_one">
            I'm probably not the typical designer positioned<br></br>
            behind an Illustrator artboard adjusting pixels, but I<br></br>
            design. Immersed in stylesheets tweaking font sizes<br></br> and
            contemplating layouts is where you'll find me<br></br> (~_^). I'm
            committed to creating fluent user<br></br>
            experiences while staying fashionable.
          </p>

          <h1 ref={engeneeringTitleRef} className="app__section_two__title_two">Engeneering</h1>
          <p ref={engeneeringDescriptionRef} className="app__section_two__description_two">
            In building JavaScript applications, I'm equipped with just the
            <br></br> right tools, and can absolutely function independently of
            them<br></br> to deliver fast, resilient solutions optimized for
            scale ???<br></br> performance and scalabilty are priorities on my
            radar.
          </p>
        </section>
        <section className="app__section_three">
          <h1 ref={overTitleRef} className="app__section_three__title">
            Over the<br></br> past 1 year,
          </h1>

          <p ref={overDescriptionOneRef} className="app__section_three__description_one">
            I've built products for companies and businesses<br></br> around the
            globe ranging from marketing websites<br></br> to complex solutions
            and enterprise apps with focus<br></br> on fast, elegant and
            accessible user experiences.
          </p>
          <p ref={overDescriptionTwoRef} className="app__section_three__description_two">
            Currently, I work at Shopify as a Senior UX Developer<br></br> and
            Accessibility advocate crafting thoughtful and<br></br> inclusive
            experiences that adhere to web standards<br></br> for over a million
            merchants across the world.
          </p>
        </section>
      </main>
    </div>
  );
}
