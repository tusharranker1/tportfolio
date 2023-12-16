import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navBar.css";
import pdf from "../pdf/TUSHAR_KUMAR.pdf";


export const NavBar = () => {
  //   background: rgb(9,157,255);
  // background: linear-gradient(270deg, rgba(9,157,255,1) 0%, rgba(5,12,23,1) 81%);
  // background: rgb(227,38,54);
  //   background: linear-gradient(270deg, rgba(227,38,54,1) 10%, rgba(102,0,0,1) 80%);
  const [bg, setBg] = useState(
    "linear-gradient(270deg, rgba(227,38,54,1) 10%, rgba(102,0,0,1) 80%)"
  );
  const navItem1 = useRef(null);
  const navItem2 = useRef(null);
  const navItem3 = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/experience" || location.pathname==='/projects') {
      setBg(
        "linear-gradient(90deg, rgba(9,157,255,1) 0%, rgba(5,12,23,1) 81%)"
      );
    }
    if(location.pathname === '/skills'){
      setBg('linear-gradient(90deg, rgba(106,0,254,1) 0%, rgba(242,0,125,1) 79%)')
    }

    // tl.current = gsap
    //   .timeline()
    //   .from(navItem1.current, { y: -360 }, "<")
    //   .from(navItem2.current, { y: -360 }, "<")
    //   .from(navItem3.current, { y: -360 }, "<");
  }, []);

  return (
    <div className="nav-wrapper-active">
      <div className="nav-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="nav-content">
        <ul>
          <li ref={navItem1} style={{ background: bg }}>
            <Link className="nav-content-link" to="/portfolio">
              Home
            </Link>
          </li>
          <li ref={navItem2} style={{ background: bg }}>
            <a className="nav-content-link" href={pdf} target="__blank">
              Resume
            </a>
          </li>
          <li ref={navItem3} style={{ background: bg }}>
            <Link className="nav-content-link" to="/portfolio/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
