import img0 from "./images/taipei-temples.jpg";
import img1 from "./images/temple-2.jpeg";
import img2 from "./images/temple-3.webp";
import img3 from "./images/temple-4.jpeg";
import img4 from "./images/temple-5.jpeg";
import { HashLink as Link } from "react-router-hash-link";

export default function Header_Tai_Temple() {
  return (
    <div>
      <div>
        <main>
          <section class="banner">
            <img src={img0} alt="Background" class="bg-image"></img>
            <div class="media-overlay"></div>
            <div class="container">
              <div class="banner-content-article text-white">
                <span class="badge fs-6 bg-light me-2 rounded-pill text-black">
                  Taiwan
                </span>
                <span class="badge fs-6 bg-light rounded-pill text-black">
                  Curiosities
                </span>
                <h1 class="fw-bolder custom-heading-banner">
                  Exploring the Spiritual Heritage: Top Temples to Visit in Taipei
                  and New Taipei City
                </h1>
                <p class="fs-6 fw-bold mt-5">
                  By Andrea S. Pensieri | June 10, 2023
                </p>
              </div>
            </div>
          </section>
          <article class="container mt-5">
            <div class="row justify-content-between">
              <div class="col-md-6">
                <p class="h5 mt-5 mb-5 custom-paragraph-article">
                  Taipei and New Taipei City, located in northern Taiwan, are
                  known for their vibrant culture, rich history, and stunning
                  landmarks. Among the many attractions, the region is home to
                  several breathtaking temples that showcase the deep spiritual
                  heritage of Taiwan. These temples offer a glimpse into the
                  country's religious traditions, architectural marvels, and
                  serene atmospheres. Whether you're a spiritual seeker or simply
                  fascinated by cultural exploration, here are some of the
                  must-visit temples in Taipei and New Taipei City.
                </p>
                <div class="accordion" id="table-content">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="content">
                      <button
                        class="accordion-button fs-4 fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#content-1-body"
                        aria-expanded="true"
                        aria-controls="content-1-body"
                      >
                        Table of Contents
                      </button>
                    </h2>
                    <div
                      id="content-1-body"
                      class="accordion-collapse show"
                      aria-labelledby="content"
                      data-bs-parent="#table-content"
                    >
                      <div class="accordion-body">
                        <ul class="fs-4">
                          <li>
                            <Link class="text-decoration-none" to="#Longshan">
                              Longshan Temple (龍山寺)
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Baoan">
                              Baoan Temple (保安宮)
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Xingtian">
                              Xingtian Temple (行天宮)
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Zushi">
                              Sanxia Qingshui Zushi Temple (祖師廟)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 id="Longshan" class="mt-5 mb-5 custom-heading-aside fw-bold">
                  Longshan Temple (龍山寺)
                </h1>
                <img class="img-fluid mb-2 rounded-3" src={img1} alt=""></img>
                <p class="h5 mt-3 custom-paragraph-article">
                  Located in the heart of Taipei, Longshan Temple is one of the
                  most iconic and revered temples in Taiwan. Built in 1738, it
                  beautifully combines elements of Buddhist, Taoist, and Confucian
                  faiths. Adorned with intricate wood carvings, colorful
                  decorations, and ornate roofs, the temple exudes a sense of
                  tranquility. Visitors can witness devout worshippers praying,
                  participate in traditional ceremonies, and admire the stunning
                  statues and altars.
                </p>
                <h1 id="Baoan" class="mt-5 mb-5 custom-heading-aside fw-bold">
                  Baoan Temple (保安宮)
                </h1>
                <img class="img-fluid mb-2 rounded-3" src={img2} alt=""></img>
                <p class="h5 mt-3 custom-paragraph-article">
                  Situated in Datong District, Taipei, Baoan Temple is a
                  historical masterpiece that dates back over two centuries.
                  Dedicated to Baosheng Dadi, the God of Medicine, this temple is
                  renowned for its exquisite architecture and intricate
                  sculptures. The vibrant annual Baosheng Cultural Festival
                  attracts locals and tourists alike with its religious rituals,
                  processions, and traditional performances.
                </p>
                <h1 id="Xingtian" class="mt-5 custom-heading-aside fw-bold">
                  Xingtian Temple (行天宮)
                </h1>
                <p class="h5 mt-3 mb-3 custom-paragraph-article">
                  Devoted to Guan Yu, the patron god of loyalty and righteousness,
                  Xingtian Temple is a bustling religious hub in Taipei's
                  Zhongshan District. This modern temple impresses visitors with
                  its grandeur and imposing structure. The main hall houses a
                  massive statue of Guan Yu, while the peaceful gardens provide a
                  respite from the city's hustle and bustle. The temple is
                  particularly lively during traditional festivals, offering an
                  authentic cultural experience.
                </p>
                <img class="img-fluid mb-3 rounded-3" src={img3} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Guan Yu (January or February 220), courtesy name Yunchang, was a
                  Chinese military general serving under the warlord Liu Bei
                  during the late Eastern Han dynasty of China.
                </p>
                <h1 id="Zushi" class="mt-5 custom-heading-aside fw-bold">
                  Sanxia Qingshui Zushi Temple (祖師廟)
                </h1>
                <p class="h5 mt-3 mb-3 custom-paragraph-article">
                  Qingshui Zushi Temple was built in 1761 (32nd year of Qianlong
                  Era in Qing Dynasty). The principal god worshiped here is
                  “Qingshui Zushi” Chao-Ying Chen. This is the local religious
                  center in Sanxia and one of the oldest Zushi temples in Taiwan.
                  The temple has been reconstructed three times; it has a
                  five-door three-hall pattern; the architecture is built using
                  wood for the top and stone for the base and everything is
                  processed by applying fine tenon structures.
                </p>
                <img class="img-fluid mb-5 rounded-3" src={img4} alt=""></img>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
