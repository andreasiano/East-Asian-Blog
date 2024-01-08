import img1 from "./images/china.jpg";
import img2 from "./images/japan.jpg";
import img3 from "./images/korea.jpg";
import img4 from "./images/taiwan.jpg";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <section class="gallery">
        <div class="container-lg custom-container">
          <div class="row g-4 row-cols-1 row-cols-md-2">
            <div class="col">
              <Link to='/china'>
              <div class="img-container">
                  <a class="img_link" href="javascript:void(0)">
                    <img
                      class="gallery-item"
                      src={img1}
                      alt="Image of two chinese ladies"
                    ></img>
                    <div class="img-overlay"></div>
                    <div class="centered fw-bolder">China</div>
                  </a>
              </div>
              </Link>
            </div>
            <div class="col">
              <Link to='/japan'>
                <div class="img-container">
                  <a class="img_link" href="javascript:void(0)">
                    <img
                      class="gallery-item"
                      src={img2}
                      alt="Image of Fuji Mountain"
                    ></img>
                    <div class="img-overlay"></div>
                    <div class="centered fw-bolder">Japan</div>
                  </a>
                </div>
              </Link>
            </div>
            <div class="col">
              <Link to='/korea'>
                <div class="img-container">
                  <a class="img_link" href="javascript:void(0)">
                    <img
                      class="gallery-item"
                      src={img3}
                      alt="Image of a korean temple"
                    ></img>
                    <div class="img-overlay"></div>
                    <div class="centered fw-bolder">Korea</div>
                  </a>
                </div>
              </Link>
            </div>
            <div class="col">
              <Link to='/taiwan'>
                <div class="img-container">
                  <a class="img_link" href="javascript:void(0)">
                    <div class="inner">
                      <img src={img4} alt="Image of a building"></img>
                    </div>
                    <div class="img-overlay"></div>
                    <div class="centered fw-bolder">Taiwan</div>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
