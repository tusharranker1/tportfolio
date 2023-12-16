import React, { useEffect, useRef, useState } from "react";
import "../css/projects.css";
import { NavBar } from "./NavBar";
import { HomePageLinks } from "./HomePageLinks";
import expImg from "../Images/ProjectImg.jpg";

import gsap from "gsap";
import { Cube } from "./Cube";
import pro1Img1 from "../Images/Hostinger1.png";
import pro1Img2 from "../Images/hostinger2.png";
import pro1Img3 from "../Images/hostinger3.png";
import pro1Img4 from "../Images/hostinger4.png";
import pro2Img1 from "../Images/fuelcab1.png";
import pro2Img2 from "../Images/fuelcab2.png";
import pro2Img3 from "../Images/fuelcab3.png";
import pro2Img4 from "../Images/fuelcab4.png";
import pro3Img1 from "../Images/cee1.png";
import pro3Img2 from "../Images/cee2.png";
import pro3Img3 from "../Images/cee3.png";
import pro3Img4 from "../Images/cee3.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Projects = () => {
  const expimg = useRef();
  const expHeading = useRef();
  const cubeRef1 = useRef();
  const cubeRef2 = useRef();
  const cubeRef3 = useRef();
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
        { opacity: 1, translateZ: 20, rotateX: 1, rotateY: 0, duration: 1 }
      );
      tl.fromTo(
        cubeRef1.current,
        { opacity: 0, left: "-200px" },
        { opacity: 1, left: "-100px" }
      );
      tl.to(cubeRef1.current, { opacity: 0.4 });
      tl.fromTo(
        cubeRef2.current,
        { opacity: 0, right: "-300px" },
        { opacity: 1, right: "-100px" }
      );
      tl.to(cubeRef2.current, { opacity: 0.4 });
      tl.fromTo(
        cubeRef3.current,
        { opacity: 0, right: "-300px" },
        { opacity: 1, right: "-100px" }
      );
      tl.to(cubeRef3.current, { opacity: 0.4 });
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
      tl.fromTo(
        cubeRef1.current,
        { opacity: 0, left: "-300px" },
        { opacity: 1, left: "-130px" }
      );
      tl.to(cubeRef1.current, { opacity: 0.4 });
      tl.fromTo(
        cubeRef2.current,
        { opacity: 0, right: "-300px" },
        { opacity: 1, right: "-130px" }
      );
      tl.to(cubeRef2.current, { opacity: 0.4 });
      tl.fromTo(
        cubeRef3.current,
        { opacity: 0, right: "-300px" },
        { opacity: 1, right: "-130px" }
      );
      tl.to(cubeRef3.current, { opacity: 0.4 });
    }
  }, []);
  const [view1, setViewPro1] = useState(false);
  const [view2, setViewPro2] = useState(false);
  const [view3, setViewPro3] = useState(false);
  const projectCube = [
    {
      name: "Hostinger-ReDesign",
      imgs: [pro1Img1, pro1Img2, pro1Img3, pro1Img4],
      content: "Lorem Ipsum",
      link:'https://tusharranker1.github.io/Hostinger-ReDesign/'
    },
    {
      name: "FuelCab-India",
      imgs: [pro2Img2, pro2Img2, pro2Img3, pro2Img4],
      content: "Lorem Ipsum",
      link:'https://www.fuelcab.com/'
    },
    {
      name: "Exam Pannel",
      imgs: [pro3Img1, pro3Img2, pro3Img3, pro3Img4],
      content: "Lorem Ipsum",
      link:'https://github.com/tusharranker1/Exam-Management-Panel'
    },
  ];
  const handleEvent0 = () => {
    setViewPro1(true);
  };
  const handleEvent1 = () => {
    setViewPro2(true);
  };
  const handleEvent2 = () => {
    setViewPro3(true);
  };
  const handleEventR0 = () => {
    setViewPro1(false);
  };
  const handleEventR1 = () => {
    setViewPro2(false);
  };
  const handleEventR2 = () => {
    setViewPro3(false);
  };

  return (
    <>
      <NavBar />
      <div className="Projects_Wrapper">
        <HomePageLinks />
        <div className="animationWrapper">
          <img ref={expimg} src={expImg} alt="" />
          <h1 className="pro_heading" ref={expHeading}>
            PROJECTS
          </h1>
          <div className="lineWrapper"></div>
        </div>
        {projectCube.map((card, idx) => {
          var cname = "cubeWrapper" + idx;
          var hname = cname + "_heading";
          var plname = "project_link_wrapper" + idx;
          var he1;
          var he2;
          var hover;
          var refs;
          if (idx === 0) {
            he1 = handleEvent0;
            he2 = handleEventR0;
            hover = view1;
            refs = cubeRef1;
          } else if (idx === 1) {
            he1 = handleEvent1;
            he2 = handleEventR1;
            hover = view2;
            refs = cubeRef2;
          } else {
            he1 = handleEvent2;
            he2 = handleEventR2;
            hover = view3;
            refs = cubeRef3;
          }

          console.log(hname);
          return (
            <>
              <div
                className={cname}
                key={idx}
                style={{ opacity: hover ? "1" : "0.3" }}
                ref={refs}
              >
                <Cube data={card} />
              </div>
              <h1 className={hname}>{card.name}</h1>
              <div className={plname}>
                <Button variant="outlined" onMouseOver={he1} onMouseOut={he2}>
                  <Link to={card.link}>View</Link>
                </Button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
