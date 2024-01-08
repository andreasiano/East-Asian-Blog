import img0 from "./images/shrines-1.jpg";
import img1 from "./images/shrines-1.jpg";
import img2 from "./images/shrines-2.jpg";
import img3 from "./images/shrines-3.jpg";
import img4 from "./images/shrines-4.jpg";
import img5 from "./images/shrines-5.jpg";
import img6 from "./images/shrines-6.jpg";
import img7 from "./images/shrines-7.webp";
import { HashLink as Link } from "react-router-hash-link";

export default function Header_Manners() {
  return (
    <div>
      <div>
        <div>
          <section class="banner">
            <img src={img0} alt="Background" class="bg-image"></img>
            <div class="media-overlay"></div>
            <div class="container">
              <div class="banner-content-article text-white">
                <span class="badge fs-6 bg-light me-2 rounded-pill text-black">
                  Japan
                </span>
                <span class="badge fs-6 bg-light rounded-pill text-black">
                  Culture
                </span>
                <h1 class="fw-bolder custom-heading-banner mt-4 mb-4">
                  Praying Offering Manners at Shrines and Temples in Japan
                </h1>
                <p class="fs-6 fw-bold mt-5">
                  By Andrea S. Pensieri | March 9, 2022
                </p>
              </div>
            </div>
          </section>
          <article class="container mt-5">
            <div class="row justify-content-between">
              <div class="col-md-6">
                <p class="h5 mt-5 mb-5 mb-2 custom-paragraph-article">
                  Japan is a country renowned for its rich cultural heritage,
                  where ancient traditions seamlessly blend with modern life.
                  One of the fascinating aspects of Japanese culture is the
                  practice of visiting shrines, which are sacred places of
                  worship dedicated to Shintoism, the indigenous religion of
                  Japan. Praying and offering manners at shrines are integral
                  parts of this religious and cultural experience. In this
                  article, we will delve into the various aspects of praying and
                  offering etiquette at shrines in Japan.
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
                        <ul class="fs-5">
                          <li>
                            <Link class="text-decoration-none" to="#Praying-1">
                              Understanding Shintoism and Shrine Culture
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-2">
                              Entering the Shrine
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-3">
                              Purification Ritual
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-4">
                              Offering Prayers
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-5">
                              Clapping and Bowing
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-6">
                              Personal Prayers and Wishes
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-7">
                              Offerings and Ema
                            </Link>
                          </li>
                          <li>
                            <Link class="text-decoration-none" to="#Praying-8">
                              Respecting the Shrine Grounds
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 id="Praying-1" class="mt-5 custom-heading-aside fw-bold">
                  Understanding Shintoism and Shrine Culture
                </h1>
                <p class="h5 mt-3 mb-3 custom-paragraph-article">
                  Shintoism, the indigenous religion of Japan, emphasizes the
                  worship of nature and ancestral spirits. Shinto shrines are
                  dedicated to various deities or kami (神), and visiting these
                  shrines is seen as a way to connect with the divine and seek
                  blessings for various aspects of life.
                </p>
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <img
                      class="img-fluid mb-3 rounded-3"
                      src={img1}
                      alt=""
                    ></img>
                  </div>
                  <div class="col-md-6">
                    <img
                      class="img-fluid mb-3 rounded-3"
                      src={img2}
                      alt=""
                    ></img>
                  </div>
                </div>
                <h1 id="JPraying-2" class="mt-5 fw-bold custom-heading-aside">
                  Entering the Shrine
                </h1>
                <p class="h5 mb-3 custom-paragraph-article">
                  Upon arrival at a shrine, it is customary to bow slightly
                  before passing through the torii gate, which marks the
                  entrance to the sacred space. This gesture is a sign of
                  respect and acknowledgment of the divine presence within the
                  shrine.
                </p>
                <img class="img-fluid mb-3 rounded-3" src={img3} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Torii (鳥居) is a traditional Japanese gate most commonly
                  found at the entrance of or within a Shinto shrine, where it
                  symbolically marks the transition from the mundane to the
                  sacred. The presence of a torii at the entrance is usually the
                  simplest way to identify Shinto shrines, and a small torii
                  icon represents them on Japanese road maps.
                </p>
                <h1
                  id="Praying-3"
                  class="mt-5 mb-5 fw-bold custom-heading-aside"
                >
                  Purification Ritual
                </h1>
                <img class="img-fluid mb-3 rounded-3" src={img4} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  The temizuya (手水舎) at the entrance to the shrine's
                  innermost grounds is a place to purify the body before
                  entering. Here worshippers wash their hands and mouth with the
                  cool, flowing water in an act of ritual purification.
                </p>
                <p class="h5 mt-3 custom-paragraph-article">
                  Before approaching the main prayer area, it is customary to
                  purify oneself by performing a ritual called temizu.
                  Typically, you will find a water basin with ladles near the
                  entrance of the shrine. Take the ladle with your right hand,
                  pour water onto your left hand, and then transfer the ladle to
                  your left hand to rinse your right hand. Finally, pour water
                  into your left hand and rinse your mouth, spitting the water
                  beside the basin. Remember not to drink directly from the
                  ladle or return the used water to the basin.
                </p>
                <h1 id="Praying-4" class="mt-5 fw-bold custom-heading-aside">
                  Offering Prayers
                </h1>
                <p class="h5 mb-3 custom-paragraph-article">
                  When approaching the main prayer area, you will often find a
                  bell or gong. It is customary to ring the bell or gong to
                  signal your presence and gain the attention of the kami.
                  Afterward, toss a coin into the offering box called saisenbako
                  as a symbolic gesture of support for the maintenance of the
                  shrine.
                </p>
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <img
                      class="img-fluid mb-3 rounded-3"
                      src={img5}
                      alt=""
                    ></img>
                  </div>
                  <div class="col-md-6">
                    <img
                      class="img-fluid mb-3 rounded-3"
                      src={img6}
                      alt=""
                    ></img>
                  </div>
                </div>
                <h1
                  id="Praying-5"
                  class="mt-5 mb-3 fw-bold custom-heading-aside"
                >
                  Clapping and Bowing
                </h1>
                <p class="h5 mt-3 custom-paragraph-article">
                  After offering a coin, proceed to the main prayer area, where
                  you will find the honden (本殿, main hall), the innermost
                  sanctum. Stand in front of the honden and bow twice, clap your
                  hands twice, and then bow once more. This rhythmic clapping is
                  believed to attract the kami's attention and show gratitude.
                  While clapping, it is customary to keep your eyes closed or
                  lowered.
                </p>
                <h1
                  id="Praying-6"
                  class="mt-5 mb-3 fw-bold custom-heading-aside"
                >
                  Personal Prayers and Wishes
                </h1>
                <p class="h5 mt-3 custom-paragraph-article">
                  With hands together in a prayer position, express your
                  gratitude for past blessings and silently offer your personal
                  prayers or wishes. There is no fixed way to pray in Shintoism,
                  so feel free to speak from your heart and connect with the
                  kami in your own way.
                </p>
                <h1
                  id="Praying-7"
                  class="mt-5 fw-bold mb-3 custom-heading-aside"
                >
                  Offerings and Ema
                </h1>
                <p class="h5 mt-3 mb-3 custom-paragraph-article">
                  Shinto shrines often have designated areas where visitors can
                  purchase and leave offerings such as small charms, known as
                  omamori, or wooden plaques called ema. Omamori are believed to
                  bring protection and good luck, while ema are used to write
                  prayers or wishes and hang them in designated spaces. When
                  leaving an offering, place it respectfully and avoid
                  obstructing walkways.
                </p>
                <img class="img-fluid mb-3 rounded-3" src={img7} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Ema (絵馬, lit. 'picture-horse') are small wooden plaques,
                  common to Japan, in which Shinto and Buddhist worshippers
                  write prayers or wishes. Ema are left hanging up at the
                  shrine, where the kami (spirits or gods) are believed to
                  receive them. Typically 15 cm (5.9 in) wide and 9 cm (3.5 in)
                  tall, they often carry images or are shaped like animals, or
                  symbols from the zodiac, Shinto, or the particular shrine or
                  temple
                </p>
                <h1
                  id="Praying-8"
                  class="mt-5 mb-3 fw-bold custom-heading-aside"
                >
                  Respecting the Shrine Grounds
                </h1>
                <p class="h5 mt-3 custom-paragraph-article">
                  While visiting a shrine, it is essential to be mindful of your
                  actions. Do not touch or disturb any sacred objects or
                  structures, and refrain from taking photographs in prohibited
                  areas. Remember to maintain a respectful demeanor, keeping
                  noise levels low and refraining from smoking.
                </p>
                <p class="h5 mt-3 mb-5 custom-paragraph-article">
                  Visiting shrines in Japan is not only an opportunity to
                  appreciate the country's ancient religious traditions but also
                  a chance to connect with a spiritual aspect of Japanese
                  culture. Understanding and following the proper manners and
                  etiquette associated with praying and offering at shrines is a
                  sign of respect for the religion and its practitioners. By
                  embracing these customs, you can enhance your experience and
                  deepen your understanding of the profound cultural heritage
                  that shrines represent in Japan.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
