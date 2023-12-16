import React, { useEffect, useRef, useState } from "react";
import "../css/Experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fb from "../Images/fuelcab.png";
import ni from "../Images/nextInnovation.jpeg";
import oi from "../Images/oasisInfobyte.jpeg";
import { NavBar } from "../component/NavBar";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HomePageLinks } from "../component/HomePageLinks";
import expImg from "../Images/ExpImg.jpg";
gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  useEffect(() => {
    Aos.init();
  }, []);
  let ExpContent = [
    {
      id: 0,
      img: ni,
      ExpPosition: "Web Developer",
      company: "Next-Innovation",
      date: "5/07/2023 - 15/09/2023",
    },
    {
      id: 1,
      img: fb,
      ExpPosition: "React Frontend Developer",
      company: "FuelCab-India",
      date: "26/02/2023 - 26/05/2023",
    },
    {
      id: 2,
      img: oi,
      ExpPosition: "Project Intern",
      company: "Oasis Infobyte",
      date: "02/02/2023 - 02/03/2023",
    },
  ];
  const exp1 = useRef();
  const exp2 = useRef();
  const exp3 = useRef();
  const expimg = useRef();
  const expHeading = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    const expCards = [exp1.current];
    expCards.push(exp2.current);
    expCards.push(exp3.current);
    if (window.innerWidth <= 600) {
      tl.fromTo(
        expimg.current,
        { opacity: 0, rotateY: 10, translateZ: 0, translateX: -500 },
        { opacity: 1, rotateY: 0, translateZ: 0, translateX: -80 }
      ).fromTo(
        expHeading.current,
        { opacity: 0, translateZ: 50 },
        { opacity: 1, translateZ: 20, rotateX: 1, rotateY: 0, duration: 1 }
      );
      expCards.forEach((card) => {
        tl.fromTo(
          card,
          { translateX: 100, translateZ: 100, opacity: 0 },
          {
            translateZ: 0,
            translateX: -30,
            opacity: 1,
            scale:0.7,
            stagger: 0.5,
            duration: 0.5,
          }
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
      expCards.forEach((card) => {
        tl.fromTo(
          card,
          { translateX: 100, translateZ: 100, opacity: 0 },
          {
            translateZ: 0,
            translateX: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 0.5,
          }
        );
      });
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="experience-wrapper">
        <HomePageLinks />
        <div className="animationWrapper">
          <img ref={expimg} src={expImg} alt="" />
          <h1 className="exp_heading" ref={expHeading}>
            EXPERIENCE
          </h1>
        </div>
        <div className="exp_Img_company">
          {ExpContent.map((user, idx) => {
            var refvalue;
            if (idx === 0) {
              refvalue = exp1;
            } else if (idx === 1) {
              refvalue = exp2;
            } else if (idx === 2) {
              refvalue = exp3;
            }

            return (
              <div className="exp_Content" ref={refvalue} key={idx}>
                <img className="companyImg" src={user.img} alt="" />
                <h1>{user.company}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
