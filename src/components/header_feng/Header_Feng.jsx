import img0 from "./images/fengshui.jpg";
import img1 from "./images/feng-2.jpg";
import img2 from "./images/feng-3.jpg";
import img3 from "./images/feng-4.webp";
import img4 from "./images/feng-5.jpg";
import img5 from "./images/feng-7.webp";
import img6 from "./images/feng-8.jpg";
import img7 from "./images/feng-9.webp";
import { HashLink as Link } from "react-router-hash-link";

export default function Header_Feng() {
  return (
    <div>
      <section class="banner">
        <img src={img0} alt="Background" class="bg-image"></img>
        <div class="media-overlay"></div>
        <div class="container">
          <div class="banner-content-article text-white">
            <span class="badge fs-6 bg-light me-2 rounded-pill text-black">
              China
            </span>
            <span class="badge fs-6 bg-light rounded-pill text-black">
              Nature
            </span>
            <h1 class="fw-bolder custom-heading-banner mt-4 mb-4">
              Feng Shui(風水): An art to achieve harmony and balance
            </h1>
            <p class="fs-6 fw-bold mt-5">By Andrea S. Pensieri | May 2, 2023</p>
          </div>
        </div>
      </section>
      <article class="container mt-5">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <p class="h4 mt-5 mb-2 custom-paragraph-article">
              Feng shui (風水), sometimes called Chinese geomancy, is an ancient
              Chinese traditional practice which claims to use energy forces to
              harmonize individuals with their surrounding environment. The term
              feng shui means, literally, "wind-water". From ancient times,
              landscapes and bodies of water were thought to direct the flow of
              the universal Qi "cosmic current" or energy through places and
              structures. More broadly, feng shui includes astronomical,
              astrological, architectural, cosmological, geographical and
              topographical dimensions.
            </p>
            <img class="img-fluid mt-3 mb-2 rounded-3" src={img1} alt=""></img>
            <p class="h-4 mb-5 img-description">
              The Luopan(罗盘)or geomantic compass is a Chinese magnetic
              compass, also known as a feng shui compass. It is used by a feng
              shui practitioner to determine the precise direction of a
              structure, place or item.
            </p>
            <p class="h4 mb-5 custom-paragraph-article mt-3">
              Historically, as well as in many parts of the contemporary Chinese
              world, feng shui was used to orient buildings and spiritually
              significant structures such as tombs, as well as dwellings and
              other structures. Unfortunately, in contemporary societies, feng
              shui tends to be reduced to interior design for health and wealth.
              It has become increasingly visible through 'feng shui consultants'
              and corporate architects who charge large sums of money for their
              analysis, advice and design. With the approach of the climate
              crisis, feng shui is being taken into academic consideration for
              possible contributions to ecological philosophy.
            </p>
            <div class="accordion mt-3" id="table-content">
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
                        <Link class="text-decoration-none" to="#feng-1">
                          Understanding Feng Shui
                        </Link>
                      </li>
                      <li>
                        <Link class="text-decoration-none" to="#feng-2">
                          Origins
                        </Link>
                      </li>
                      <li>
                        <Link class="text-decoration-none" to="#feng-3">
                          The Core Principles of Feng Shui
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h1 id="feng-1" class="mt-5 custom-heading-aside fw-bold">
              Understanding Feng Shui
            </h1>
            <p
              class="h5 mt-3 mb-3 custom-paragraph-article
                        "
            >
              At its core, Feng Shui views good and bad fortune as tangible
              elements that can be managed through predictable and consistent
              rules. This involves the management of qi (氣, 气) a form of
              cosmic "energy". Feng shui states that the external environment
              can affect our body's state. The "perfect spot" is a locationthat
              can help individuals achieve a state of shu fu (舒服) or harmony
              with the universe.
            </p>
            <p
              class="h5 mt-3 mb-3 custom-paragraph-article
                        "
            >
              Traditional feng shui is inherently a form of ancestor worship.
              Popular in farming communities for centuries, it was built on the
              idea that the ghosts of ancestors and other independent,
              intangible forces, both personal and impersonal, affected the
              material world, and that these forces needed to be placated
              through rites and suitable burial places. For a fee, a Feng shui
              practitioner could properly site locations for the living and the
              dead to achieve balance.
            </p>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <img class="img-fluid mb-3 rounded-3" src={img2} alt=""></img>
              </div>
              <div class="col-md-6">
                <img class="img-fluid mb-3 rounded-3" src={img3} alt=""></img>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12">
                <img class="img-fluid mb-2 rounded-3" src={img4} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Usually known as the Five Elements, Wu Xing Chinese: (五行;
                  pinyin: wǔxíng) is also named the Five Movements, Five Phrases
                  or Five Steps. The 5 elements are jin (metal), mu (wood), shui
                  (water), huo (fire), tu (earth). Chinese five elements in
                  daily life were regarded as the foundation of everything in
                  the universe and natural phenomena. They have their own
                  characters and they can generate or destroy one other.
                </p>
              </div>
            </div>

            <h1 id="feng-2" class="mt-5 fw-bold custom-heading-aside">
              Origins
            </h1>

            <p
              class="h5 mt-3 mb-3 custom-paragraph-article
                        "
            >
              Some of the foundations of feng shui go back more than 3,500 years
              before the invention of the magnetic compass. It originated in
              Chinese astronomy. Some current techniques can be traced to
              Neolithic China, while others were added later (most notably the
              Han dynasty, the Tang, the Song, and the Ming). The astronomical
              history of feng shui is evident in the development of instruments
              and techniques.
            </p>
            <p
              class="h5 mt-3 mb-3 custom-paragraph-article
                        "
            >
              According to the Zhouli, The Rites of Zhou (Chinese: 周禮),
              originally known as "Officers of Zhou" (周官; Zhouguan), a Chinese
              work on bureaucracy and organizational theory, the original feng
              shui instrument may have been a gnomon. Chinese used circumpolar
              stars to determine the north–south axis of settlements. .
            </p>
            <h1 id="feng-3" class="mt-5 mb-5 fw-bold custom-heading-aside">
              The Core Principles of Feng Shui
            </h1>
            <img class="img-fluid mb-3 rounded-3" src={img5} alt=""></img>
            <h2 id="Japan20s-2" class="mt-5 fw-bold mb-3 custom-heading-aside">
              Qi flow
            </h2>
            <p
              class="h5 mt-3 custom-paragraph-article
                        "
            >
              In Feng Shui, a smooth and uninterrupted flow of Qi is essential.
              By arranging furniture, objects, and even entire buildings in a
              way that promotes free movement. This way the energy can circulate
              freely, benefiting the occupants. Avoiding clutter, maintaining
              clean spaces, and ensuring good air and light circulation are
              vital aspects of Qi flow.
            </p>

            <h2 id="Japan20s-2" class="mt-5 fw-bold mb-3 custom-heading-aside">
              The Bagua
            </h2>
            <p
              class="h5 mt-3 mb-3 custom-paragraph-article
                        "
            >
              The Bagua is a fundamental tool in Feng Shui, representing a map
              of the nine life areas, including wealth, health, relationships,
              and career. By overlaying the Bagua on a floor plan or individual
              rooms, one can identify areas that correspond to specific aspects
              of life and make adjustments to enhance energy in those areas.
            </p>
            <img class="img-fluid mb-3 rounded-3" src={img6} alt=""></img>
            <p class="fs-6 mb-5 img-description">
              The bagua or pakua (八卦) are a set of eight symbols that
              originated in China, used in Taoist cosmology to represent the
              fundamental principles of reality, seen as a range of eight
              interrelated concepts. Each consists of three lines, each line
              either "broken" or "unbroken", respectively representing yin or
              yang
            </p>
            <h2 id="Japan20s-2" class="mt-5 fw-bold mb-3 custom-heading-aside">
              Five Elements
            </h2>
            <p
              class="h5 mt-3 mb-3 custom-paragraph-article
                        "
            >
              Feng Shui incorporates the five elements, namely water, wood,
              fire, earth, and metal, which are believed to interact and
              influence each other. Each element represents specific qualities
              and can be used strategically to create a balanced and harmonious
              environment. For example, incorporating water elements, such as a
              small fountain or aquarium, can enhance wealth and abundance.
            </p>
            <img class="img-fluid mb-5 rounded-3" src={img7} alt=""></img>
          </div>
        </div>
      </article>
    </div>
  );
}
