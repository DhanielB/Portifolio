import { gsap } from "gsap";
import { List, X } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import strftime from "strftime";

export default function Header() {
  const [timer, setTimer] = useState("");
  const [direction, setDirection] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef(null);

  setInterval(() => {
    const weekDay = strftime("%a");
    const month = strftime("%B");
    const day = strftime("%d");
    const hour = strftime("%H");
    const minutes = strftime("%M");
    const meridian = strftime("%P").toUpperCase();

    const text = `${weekDay} ${month} ${day}, ${hour}:${minutes} ${meridian}`;
    setTimer(text);
  }, 1000);

  useEffect(() => {
    const menuAnimation = gsap
      .from(menuRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1)
      .reverse();
  }, []);

  return (
    <header className="app__header" ref={menuRef}>
      <div className="app__header_menuarea">
        {!menuVisible ? (
          <List
            className="app__header_menubutton"
            onClick={() => {
              setMenuVisible((state) => !state);
            }}
          />
        ) : (
          <X
            className="app__header_menubutton"
            onClick={() => {
              setMenuVisible((state) => !state);
            }}
          />
        )}

        {menuVisible ? (
          <div className="app__header_menu">
            <div className="app__header_menu_projectsbutton">
              <a className="app__header_menu_projects">Projects</a>
            </div>

            <div className="app__header_menu_contactsbutton">
              <a className="app__header_menu_contacts">Contacts</a>
            </div>

            <div className="app__header_menu_githubbutton">
              <a
                className="app__header_menu_github"
                href="https://github.com/dhanielb#README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/dhanielb
              </a>
            </div>

            <button
              onClick={() => {
                setMenuVisible((state) => !state);
              }}
              className="app__header_menu_close"
            ></button>
          </div>
        ) : null}
      </div>
      <a className="app__header_projects">Projects</a>
      <a className="app__header_contact">Contact</a>
      <a className="app__header_timer">{timer}</a>
    </header>
  );
}
