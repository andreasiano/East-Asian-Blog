import React, { useEffect, useState } from "react";
import logo from "./images/mask_kitsune.png";
import { Link } from "react-router-dom";

export default function Topbar_2() {

  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0
  })

  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollData(prevState => {
        return {
          y: window.scrollY,
          lastY: prevState.y
          }
        })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, []);

    useEffect(() => {
      console.log(scrollData)
      if (scrollData.y > 200) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }, [scrollData]);
  
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
  };
  
  window.addEventListener("scroll", changeColor);
  

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          color ? "navbar custom-nav" : "navbar"
        } ${showNav ? "navbar hideNav" : "navbar"}`}
      >
        <div class="container pt-0">
          <Link to="/home" class="navbar-brand">
            <img class="logo" alt="" src={logo}></img>
          </Link>
          <button
            class="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header" data-bs-dismiss="offcanvas">
              <Link to="/home" class="navbar-brand">
                <img class="logo" alt="" src={logo}></img>
              </Link>
              <button
                type="button"
                class="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav text-center ms-auto">
                <li data-bs-dismiss="offcanvas" class="nav-item me-3">
                  <Link to="/home" class="custom-item nav-link">
                    Home
                  </Link>
                </li>
                <li data-bs-dismiss="offcanvas" class="nav-item me-3">
                  <Link to="/china" class="custom-item nav-link">
                    China
                  </Link>
                </li>
                <li data-bs-dismiss="offcanvas" class="nav-item me-3">
                  <Link to="/japan" class="custom-item nav-link">
                    Japan
                  </Link>
                </li>
                <li data-bs-dismiss="offcanvas" class="nav-item me-3">
                  <Link to="/korea" class="custom-item nav-link">
                    Korea
                  </Link>
                </li>
                <li data-bs-dismiss="offcanvas" class="nav-item me-3">
                  <Link to="/taiwan" class="custom-item nav-link">
                    Taiwan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
