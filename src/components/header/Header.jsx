import img1 from "./images/fengshui.jpg";
import img2 from "./images/taipei-temples.jpg";
import img3 from "./images/shrines-1.jpg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div>
        <section
          id="slides-with-indicators"
          class="carousel carousel-fade slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              class="active"
              data-bs-target="#slides-with-indicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              class="active"
              data-bs-target="#slides-with-indicators"
              data-bs-slide-to="1"
              aria-current="true"
              aria-label="Slide 2"
            ></button>
            <button
              class="active"
              data-bs-target="#slides-with-indicators"
              data-bs-slide-to="2"
              aria-current="true"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="banner">
                <img src={img1} alt="" class="bg-image"></img>
                <div class="media-overlay-header"></div>
                <div class="container">
                  <div class="banner-content text-white">
                    <h1 class="custom-heading-banner fw-bolder mb-5">
                      Feng Shui(風水): An art to achieve harmony and balance
                    </h1>
                    <button type="button" class="btn btn-red fw-bolder">
                      <Link
                        to="/feng"
                        class="text-decoration-none text-white"
                        href="javascript:void(0)"
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="banner">
                <img src={img3} alt="" class="bg-image"></img>
                <div class="media-overlay-header"></div>
                <div class="container">
                  <div class="banner-content text-white">
                    <h1 class="custom-heading-banner fw-bolder mb-5">
                      Prayer Offering Manners at Shrines and Temples in Japan
                    </h1>
                    <button type="button" class="btn btn-red fw-bolder">
                      <Link
                        to="/Manners"
                        class="text-decoration-none text-white"
                        href="javascript:void(0)"
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="banner">
                <img src={img2} alt="" class="bg-image"></img>
                <div class="media-overlay-header"></div>
                <div class="container">
                  <div class="banner-content text-white">
                    <h1 class="custom-heading-banner fw-bolder mb-5">
                      Top Temples to Visit in Taipei and New Taipei City
                    </h1>
                    <button type="button" class="btn btn-red fw-bolder">
                      <Link
                        to="/taiwan_temples"
                        class="text-decoration-none text-white"
                        href="javascript:void(0)"
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-left mt-5 mb-5">
                <p class="custom-paragraph text-center fs-4">
                  East Asian Curiosities will allow you to go deep in the
                  understanding of marvellous places, where ghosts, gods and
                  spirits dwell.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
