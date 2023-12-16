import React, { useEffect, useRef, useState } from "react";
import "../css/Skills.css";
import html from "../Images/html5.svg";
import css from "../Images/css3.svg";
import js from "../Images/js.svg";
import react from "../Images/react.svg";
import node from "../Images/node-js.svg";
import database from "../Images/database-solid (1).svg";
import php from "../Images/php.svg";
import expImg from "../Images/Skills.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/projects.css";
import { NavBar } from "./NavBar";
import { HomePageLinks } from "./HomePageLinks";
import gsap from "gsap";

export const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  let skillData = [
    {
      img: html,
      data: "HTML",
    },
    {
      img: css,
      data: "CSS",
    },
    {
      img: js,
      data: "Java Script",
    },
    {
      img: react,
      data: "React",
    },
    {
      img: node,
      data: "Node.js",
    },
    {
      img: php,
      data: "PHP",
    },
    {
      img: database,
      data: "MySql",
    },
  ];
  const expimg = useRef();
  const expHeading = useRef();
  const s1 = useRef();
  const s2 = useRef();
  const s3 = useRef();
  const s4 = useRef();
  const s5 = useRef();
  const s6 = useRef();
  const s7 = useRef();
  useEffect(() => {
    const tl = gsap.timeline();

    if (window.innerWidth <= 600) {
      tl.fromTo(
        expimg.current,
        { opacity: 0, rotateY: 10, translateZ: 0, translateX: -500 },
        { opacity: 1, rotateY: 0, translateZ: 0, translateX: 0 }
      ).fromTo(
        expHeading.current,
        { opacity: 0, translateZ: 50 },
        {
          opacity: 1,
          translateZ: 20,
          rotateX: 1,
          rotateY: 0,
          duration: 1,
          scale: 0.3,
          translateX: -70,
          translateY: -50,
        }
      );
      const scard = [];
      scard.push(s1);
      scard.push(s2);
      scard.push(s3);
      scard.push(s4);
      scard.push(s5);
      scard.push(s6);
      scard.push(s7);
      scard.forEach((skill) => {
        tl.fromTo(
          skill.current,
          { opacity: 0, stagger: 0.05, translateZ: 400 },
          { opacity: 1, stagger: 0.05, translateZ: 0 ,scale:0.5}
        );
      });
    } else {
      tl.fromTo(
        expimg.current,
        { opacity: 0, rotateY: 10, translateZ: 0, translateX: -500 },
        { opacity: 1, rotateY: 0, translateZ: 0, translateX: 0 }
      ).fromTo(
        expHeading.current,
        { opacity: 0, translateZ: 50 },
        { opacity: 1, translateZ: 20, rotateX: 1, rotateY: 0, duration: 1 }
      );
      const scard = [];
      scard.push(s1);
      scard.push(s2);
      scard.push(s3);
      scard.push(s4);
      scard.push(s5);
      scard.push(s6);
      scard.push(s7);
      scard.forEach((skill) => {
        tl.fromTo(
          skill.current,
          { opacity: 0, stagger: 0.05, translateZ: 400 },
          { opacity: 1, stagger: 0.05, translateZ: 0 }
        );
      });
    }
  }, []);
  return (
    <>
      <NavBar />
      <div className="Projects_Wrapper sills">
        <HomePageLinks />
        <div className="animationWrapper">
          <img ref={expimg} src={expImg} alt="" />
          <h1
            className="exp_heading "
            style={{ fontSize: "7em" }}
            ref={expHeading}
          >
            SKILLS
          </h1>
          <div className="lineWrapper"></div>
        </div>
        <div className="skill_Wrapper">
          <div className="skill_content s1" ref={s1}>
            <img src={html} alt="img" />
            <h1>HTML</h1>
          </div>
          <div className="skill_content s2" ref={s2}>
            <img src={css} alt="img" />
            <h1>CSS</h1>
          </div>
          <div className="skill_content s3" ref={s3}>
            <img src={js} alt="img" />
            <h1>JAVA SCRIPT</h1>
          </div>
          <div className="skill_content s4" ref={s4}>
            <img src={react} alt="img" />
            <h1>REACT</h1>
          </div>
          <div className="skill_content s5" ref={s5}>
            <img src={node} alt="img" />
            <h1>NODE</h1>
          </div>
          <div className="skill_content s6" ref={s6}>
            <img src={php} alt="img" />
            <h1>PHP</h1>
          </div>
          <div className="skill_content s7" ref={s7}>
            <img src={database} alt="img" />
            <h1>DATABASE</h1>
          </div>
        </div>
      </div>
    </>
  );
};
