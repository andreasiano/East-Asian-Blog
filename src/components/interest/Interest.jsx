import img1 from "./images/culture.webp";
import img2 from "./images/folklore.webp";
import img3 from "./images/religion.webp";
import img4 from "./images/nature.webp";
import img5 from "./images/literature.jpg";
import img6 from "./images/curiosities.webp";


export default function Interest() {
  return (
    <div>
      <section>
        <div class="container mt-3">
          <div class="row justify-content-center">
            <div class="col-md-6 text-left mt-5 mb-5">
              <p class="custom-paragraph text-center fs-3">
                Here you can find all you need to know about culture, politics,
                religion and so on. Feel free to dive deep into it!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-sm-4">
              <div class="img-thumbnail border-0 mb-4">
                <div class="img-container">
                  <img
                    class="image rounded-4"
                    src={img1}
                    alt="Image of a mug"
                  ></img>
                  <div class="img-overlay-interest">
                    <p class="centered text-white fs-4 fw-bolder">Culture</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4">
              <div class="img-thumbnail border-0 mb-4">
                <div class="img-container">
                  <img
                    class="image rounded-4"
                    src={img2}
                    alt="Image of a ghost"
                  ></img>
                  <div class="img-overlay-interest">
                    <p class="centered text-white fs-4 fw-bolder">Folklore</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4">
              <div class="img-thumbnail border-0 mb-4">
                <div class="img-container">
                  <img
                    class="image rounded-4"
                    src={img3}
                    alt="Image of offerings"
                  ></img>
                  <div class="img-overlay-interest">
                    <p class="centered text-white fs-4 fw-bolder">Religion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-sm-4">
              <div class="img-thumbnail border-0 mb-4">
                <div class="img-container">
                  <img
                    class="image rounded-4"
                    src={img4}
                    alt="Image of a mug"
                  ></img>
                  <div class="img-overlay-interest">
                    <p class="centered text-white fs-4 fw-bolder">Nature</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4">
              <div class="img-thumbnail border-0 mb-4">
                <div class="img-container">
                  <img
                    class="image rounded-4"
                    src={img5}
                    alt="Image of a ghost"
                  ></img>
                  <div class="img-overlay-interest">
                    <p class="centered text-white fs-4 fw-bolder">Literature</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-4">
              <div class="img-thumbnail border-0 mb-4">
                <div class="img-container">
                  <img
                    class="image rounded-4"
                    src={img6}
                    alt="Image of offerings"
                  ></img>
                  <div class="img-overlay-interest">
                    <p class="centered text-white fs-4 fw-bolder">
                      Curiosities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
