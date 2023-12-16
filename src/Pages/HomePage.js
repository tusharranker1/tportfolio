import React, {
  useState,
  useEffect,
  Suspense,
  useRef,
  useLayoutEffect,
} from "react";
import { NavBar } from "../component/NavBar";
import "../css/homePage.css";
import Loader from "../component/Loader";
import { Link } from "react-router-dom";
import gsap, { Power3 } from "gsap";
import { HomePageLinks } from "../component/HomePageLinks";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";

export const HomePage = () => {
  // loader component
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const para1 = useRef();
  const para2 = useRef();
  const specs1 = useRef();
  const specs2 = useRef();
  const specs3 = useRef();
  const logo1 = useRef();
  const logo2 = useRef();
  const logo3 = useRef();
  const logo4 = useRef();
  const count = 0;
  useLayoutEffect(() => {
    const ease = Power3.easeOut();
    console.log(count);
    const tl = gsap.timeline({ repeat: 0 });
    let targets = gsap.utils.toArray(specs1.current);
    targets.push(specs2.current);
    targets.push(specs3.current);
    console.log(targets);

    tl.to(para1.current, { opacity: 0, translateY: 50, duration: 0 }, "<")
      .to(
        para1.current,
        { opacity: 1, translateY: -70, duration: 0.6, ease: ease },
        "<1"
      )
      .to(para1.current, { opacity: 1, translateY: -70, duration: 0.2 }, "<1")
      .to(para1.current, { opacity: 0, translateY: -90, duration: 0.5 }, "<1")

      .to(
        para2.current,
        { opacity: 0, translateY: 0, duration: 0.3 },
        "<"
      )
      .to(
        para2.current,
        { opacity: 1, translateY: -50,translateZ:-10, scale: 0.955, duration: 0.7, ease: ease },
        "<1"
      )
      .to(
        para2.current,
        { opacity: 1, translateY: -150, duration: 1 },
        "<2"
      );

    targets.forEach((title, idx) => {
      console.log(targets[idx]);
      // const split = new SplitTextJS(title)
      if(window.innerWidth < 500 ){
        tl.from(
          title,
          { opacity: 0, stagger: 0.02, translateY: 20, rotateX: -90 },
          "<0.3"
        ).to(
          title,
          { opacity: 0, stagger: 0.02, translateY: -30, rotateX: 90,duration:0.5 },
          "<0.8"
        );
        if (idx === 0) {
          tl.to(targets[idx], {
            translateX: 0,
            translateY: -80,
            opacity: 1,
            rotateX: 0,
            scale: 0.6,
            ease: ease,
            
          });
        }
        if (idx === 1) {
          tl.to(targets[idx], {
            translateX: 0,
            translateY: -60,
            opacity: 1,
            rotateX: 0,
            scale: 0.6,
            ease: ease,
          });
        }
        if (idx === 2) {
          tl.to(targets[idx], {
            translateX: 0,
            translateY: -40,
            opacity: 1,
            rotateX: 0,
            scale: 0.6,
            ease: ease,
          });
        }
      }else{
        tl.from(
          title,
          { opacity: 0, stagger: 0.02, translateY: 20, rotateX: -90 },
          "<0.3"
        ).to(
          title,
          { opacity: 0, stagger: 0.02, translateY: -30, rotateX: 90,duration:0.5 },
          "<0.8"
        );
        if (idx === 0) {
          tl.to(targets[idx], {
            translateX: -250,
            translateY: -50,
            opacity: 1,
            rotateX: 0,
            scale: 0.8,
            ease: ease,
          });
        }
        if (idx === 1) {
          tl.to(targets[idx], {
            translateX: -30,
            translateY: -50,
            opacity: 1,
            rotateX: 0,
            scale: 0.8,
            ease: ease,
          });
        }
        if (idx === 2) {
          tl.to(targets[idx], {
            translateX: 220,
            translateY: -50,
            opacity: 1,
            rotateX: 0,
            scale: 0.8,
            ease: ease,
          });
        }
      }
      
    });
    if(window.innerWidth<500){
      tl.fromTo(logo1.current, { opacity: 0, translateY: 600 ,translateX:30},{opacity:1,translateY:0,translateX:30})
      .fromTo(logo2.current, { opacity: 0, translateY: 600 },{opacity:1,translateY:0})
      .fromTo(logo3.current, { opacity: 0, translateY: 600 },{opacity:1,translateY:0})
      .fromTo(logo4.current, { opacity: 0, translateY: 600,translateX:-30 },{opacity:1,translateY:0,translateX:-30});
    }else{
      tl.fromTo(logo1.current, { opacity: 0, translateY: 600 },{opacity:1,translateY:40,scale:1.5})
      .fromTo(logo2.current, { opacity: 0, translateY: 600 },{opacity:1,translateY:40,scale:1.5})
      .fromTo(logo3.current, { opacity: 0, translateY: 600 },{opacity:1,translateY:40,scale:1.5})
      .fromTo(logo4.current, { opacity: 0, translateY: 600 },{opacity:1,translateY:40,scale:1.5});
    }
    
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <NavBar />
          <div className="home-wrapper">
            <HomePageLinks />
            <div className="introWrapper">
              <div className="textWrapper">
                <p ref={para1} className="para welcome">
                  Welcome
                </p>
                <p ref={para2} className="para name">
                  <span>Myself -</span> Tushar
                </p>
                <p ref={specs1} style={{ opacity: 1 }} className="para specs">
                  UI Designer
                </p>
                <p ref={specs2} style={{ opacity: 1 }} className="para specs">
                  React Developer
                </p>
                <p ref={specs3} style={{ opacity: 1 }} className="para specs">
                  Backend Developer
                </p>
                <div className="publicLinks">
                  <div className=" logo">
                    <Link className="logoLinks" to="">
                      <InstagramIcon ref={logo1} className="maticons" />
                    </Link>{" "}
                  </div>
                  <div className=" logo">
                    <Link className="logoLinks" to="">
                      <GitHubIcon ref={logo2} className="maticons" />
                    </Link>{" "}
                  </div>
                  <div className=" logo">
                    <Link className="logoLinks" to="">
                      <LinkedInIcon ref={logo3} className="maticons" />
                    </Link>{" "}
                  </div>
                  <div className=" logo">
                    <Link className="logoLinks" to="">
                      <MailIcon ref={logo4} className="maticons" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <HomeSideBar /> */}
          {/* <Resume /> */}
          {/* <Section2 /> */}
          {/* <Experience /> */}
          {/* <Skills /> */}
        </Suspense>
      )}
    </>
  );
};
