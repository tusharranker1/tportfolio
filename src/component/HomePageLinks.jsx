import React ,{ useEffect, useState}from 'react'
import { Link, useLocation } from "react-router-dom";
import "../css/homePage.css";

export const HomePageLinks = () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const location = useLocation();
    const [pageChange,setPageChange] = useState(false);
    const [color,setColor] = useState('rgba(255,0,0,0.38)');
    const [color2,setColor2] = useState('red');
    
    useEffect(()=>{
      if(location.pathname==='/tportfolio/experience' || location.pathname==='/tportfolio/projects'){
        setPageChange(true)
        setColor('rgb(225, 225, 225,0.18)')
        setColor2('#099dff')
        
      }
      if(location.pathname === '/tportfolio/skills'){
        setColor('rgba(242, 0, 125,0.4)')
        setColor2('rgba(242, 0, 125,1)')
        
      }
     
    },[])
  return (
    <>
        <div className={pageChange?'ExperienceWrapper_page':'ExperienceWrapper_page'}>
              <div
                className="hLine"
                style={{
                  backgroundColor: hover1 ? color2 : color,
              
                }}
              ></div>
              <div
                className="content_name"
                onMouseOver={() => {
                  setHover1(true);
                }}
                onMouseOut={() => {
                  setHover1(false);
                }}
                style={{
                  border: hover1
                    ? `1px solid ${color2}`: `1px solid ${color}`,
                }}
              >
                <Link
                  className="linkss"
                  style={{
                    textDecoration: "none",
                    color: hover1 ? color2 : color,
                  }}
                  to="/tportfolio/experience"
                >
                  Experience
                </Link>
              </div>
              <div
                className="circle"
                style={{
                  border: hover1
                    ? `1px solid ${color2}`
                    : `1px solid ${color}`,
                }}
              ></div>
            </div>
            <div  className={pageChange?'projectsWrapper_page':'projectsWrapper_page'}>
              <div
                className="hLine"
                style={{
                  backgroundColor: hover2 ? color2 : color,
                }}
              ></div>
              <div
                className="content_name"
                onMouseOver={() => {
                  setHover2(true);
                }}
                onMouseOut={() => {
                  setHover2(false);
                }}
                style={{
                  border: hover2
                    ? `1px solid ${color2}`
                    : `1px solid ${color}`,
                }}
              >
                <Link
                  className="linkss"
                  style={{
                    textDecoration: "none",
                    color: hover2 ? color2 : color,
                  }}
                  to='/tportfolio/projects'
                >
                  Projects
                </Link>
              </div>
              <div
                className="circle"
                style={{
                  border: hover2
                    ? `1px solid ${color2}`
                    : `1px solid ${color}`,
                }}
              ></div>
            </div>
            <div className={pageChange?'skillsWrapper_page':'skillsWrapper_page'} >
              <div
                className="hLine"
                style={{
                  backgroundColor: hover3 ? color2 : color,
                }}
              ></div>
              <div
                className="content_name"
                onMouseOver={() => {
                  setHover3(true);
                }}
                onMouseOut={() => {
                  setHover3(false);
                }}
                style={{
                  border: hover3
                    ? `1px solid ${color2}`
                    : `1px solid ${color}`,
                }}
              >
                <Link
                  className="linkss"
                  style={{
                    textDecoration: "none",
                    color: hover3 ? color2 : color,
                  }}
                  to='/tportfolio/skills'
                >
                  Skills
                </Link>
              </div>
              <div
                className="circle"
                style={{
                  border: hover3
                    ? `1px solid ${color2}`
                    : `1px solid ${color}`,
                }}
              ></div>
            </div>
            
    </>
  )
}
