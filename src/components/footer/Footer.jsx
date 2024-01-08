import logo from './images/mask_kitsune.png'
import { Link } from "react-router-dom";

export default function 
() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-5">
        <div class="container text-center text-md-start">
          <div class="row text-center text-md-start mb-4">
            <div class="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3 mb-5">
              <a class="navbar-brand" href="javascript:void(0)">
                <span class="brand-style">
                  <Link class="navbar-brand" to='/home'>
                    <img class="logo" alt="" src={logo}></img>
                  </Link>
                </span>
              </a>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 mb-3">
              <h5 class="text-uppercase mb-4 fw-bolder">Locations</h5>
              <p>
                <Link to='/china' class="text-decoration-none text-white">
                  China
                </Link>
              </p>
              <p>
                <Link to='/japan' class="text-decoration-none text-white">
                  Japan
                </Link>
              </p>
              <p>
                <Link to='/korea' class="text-decoration-none text-white">
                  Korea
                </Link>
              </p>
              <p>
                <Link to='/taiwan' class="text-decoration-none text-white">
                  Taiwan
                </Link>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 mb-3">
              <h5 class="text-uppercase mb-4 fw-bolder">About</h5>
              <p>
                <a href="javascript:void(0)" class="text-decoration-none text-white">
                  About Us
                </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 mb-3">
              <h5 class="text-uppercase mb-4 fw-bolder">Contact</h5>
              <p>
                <i class="bi bi-house me-3"></i>Via Carlo Alberto Pizzardi 47,
                BO, Italy
              </p>
              <p>
                <i class="bi bi-envelope me-3"></i>
                eastasiancuriosities@gmail.com
              </p>
              <p>
                <i class="bi bi-telephone-outbound-fill me-3"></i>+393464920807
              </p>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-7 col-lg-8">
              <p>
                Copyright ©2023 All right reserved by: East Asian Curiosities
              </p>
            </div>
            <div class="col-md-5 col-lg-4">
              <div class="text-center">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item me-2 mx-2">
                    <a
                      class="text-white"
                      href="javascript:void(0)"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item me-2 mx-2">
                    <a
                      class="text-white"
                      href="javascript:void(0)"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item me-2 mx-2">
                    <a
                      class="text-white"
                      href="javascript:void(0)"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item me-2 mx-2">
                    <a
                      class="text-white"
                      href="javascript:void(0)"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="bi bi-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
