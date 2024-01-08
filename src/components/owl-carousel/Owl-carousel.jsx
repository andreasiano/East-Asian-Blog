import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from "./images/yokai.jpg"
import img2 from "./images/japan20s.jpg"
import img3 from "./images/forest.jpg"
import img4 from "./images/manners.jpg"
import img5 from "./images/jing-1.jpg"
import img6 from "./images/ricci.jpg"
import img7 from "./images/taipei-temples.jpg"
import img8 from "./images/fengshui.jpg"
import { Link } from "react-router-dom";

export class Owldemo1 extends Component {
  
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  render() {
    return (
      <div>
        <div class="container-fluid">
          <OwlCarousel
            items={4}
            className="owl-theme"
            loop
            nav
            margin={8}
            responsive={this.state.responsive}
          >
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img1}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    Japan
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Folklore
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Yōkai: Monsters and Strange phenomena in Japanese Folklore
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/yokai"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img2}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    Japan
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Culture
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Japanese social transitions between Meiji and Taisho Era
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/japan20s"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img3}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    Japan
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Nature
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Forest bathing: what it is and where to do it
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/forest_therapy"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img4}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    Japan
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Culture
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Prayer Offering Manners at Shrines and Temples in Japan
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/Manners"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img5}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    China
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Literature
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Jing ping Mei: A banned treatise on erotism
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/jingping"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img6}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    China
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Religion
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Matteo Ricci and the Chinese Reception of Christianity
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/ricci"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img7}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    Taiwan
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Curiosities
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Top Temples to Visit in Taipei and New Taipei City
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/taiwan_temples"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mb-3 rounded-3 text-start">
              <img
                class="card-img-top rounded-3"
                src={img8}
                alt="Image of a japanese monster"
              ></img>
              <div
                class="card-img-overlay text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="card-body">
                  <span class="badge me-2 rounded-pill bg-light text-dark">
                    China
                  </span>
                  <span class="badge rounded-pill bg-light text-dark">
                    Nature
                  </span>
                  <h4 class="card-title mt-3 mb-4 fw-bolder">
                    Feng Shui(風水): An art to achieve harmony and balance
                  </h4>
                  <button class="btn btn-sm btn-light fw-bolder">
                    <Link
                      to="/feng"
                      class="text-decoration-none text-dark"
                      href="javascript:void(0)"
                    >
                      Learn More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}  
      
export default Owldemo1
