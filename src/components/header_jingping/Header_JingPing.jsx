import img0 from "./images/jing-1.jpg";
import img1 from "./images/jing-2.jpg";
import img2 from "./images/jing-3.jpg";
import img3 from "./images/jing-4.png";
import img4 from "./images/jing-5.jpg";
import img5 from "./images/jing-6.jpg";
import img6 from "./images/jing-7.jpg";
import img7 from "./images/jing-8.jpg";
import { HashLink as Link } from "react-router-hash-link";

export default function Header_JingPing() {
  return (
    <div>
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
                Literature
              </span>
              <h1 class="fw-bolder custom-heading-banner mt-4 mb-4">
                Jing Ping Mei. A banned treatise on erotism
              </h1>
              <p class="fs-6 mt-5 fw-bold">
                By Andrea S. Pensieri | January 2, 2023
              </p>
            </div>
          </div>
        </section>
        <article class="container mt-5">
          <div class="row justify-content-between">
            <div class="col-md-6">
              <p class="h5 mt-3 mb-2 custom-paragraph-article">
                Jin Ping Mei (Chinese: 金瓶梅) — translated as The Plum in the
                Golden Vase or The Golden Lotus — is a Chinese novel of manners
                composed in vernacular Chinese during the latter half of the
                16th century during the late Ming dynasty (1368–1644).
              </p>
              <p class="h5 mt-3 mb-5 custom-paragraph-article">
                Consisting of 100 chapters, it was published under the title
                "Lanling Xiaoxiao Sheng" (蘭陵笑笑生), "The Scoffing Scholar of
                Lanling,". The novel circulated in manuscript around 1596, and
                may have undergone revision up to its first printed edition in
                1610.
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
                          <Link class="text-decoration-none" to="#Jing-1">
                            Origins and Authorship
                          </Link>
                        </li>
                        <li>
                          <Link class="text-decoration-none" to="#Jing-2">
                            Plot and Characters
                          </Link>
                        </li>
                        <li>
                          <Link class="text-decoration-none" to="#Jing-3">
                            Themes and Social Commentary
                          </Link>
                        </li>
                        <li>
                          <Link class="text-decoration-none" to="#Jing-4">
                            Literary Style and Influence
                          </Link>
                        </li>
                        <li>
                          <Link class="text-decoration-none" to="#Jing-5">
                            Controversy and Reception
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h1 id="Jing-1" class="mt-5 mb-3 custom-heading-aside fw-bold">
                Origins and Authorship
              </h1>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                Jin Ping Mei takes its name from the three central female
                characters: Pan Jinlian (潘金蓮, means "Golden Lotus"); Li
                Ping'er (李瓶兒, literally "Little Vase"), a concubine of Ximen
                Qing; and Pang Chunmei (龐春梅, "Spring plum blossoms"), a young
                maid who rose to power within the family. Chinese critics see
                each of the three Chinese characters in the title as symbols of
                different aspect of human nature. The Jing Ping Mei was written
                by an anonymous author, most likely during the late 16th
                century.
              </p>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                Although the true identity of the author remains a mystery, his
                work has left an indelible mark on Chinese literature. The novel
                is considered part of the vernacular fiction genre, which
                emerged during the Ming dynasty, in contrast to classical
                literature that was traditionally reserved for the educated
                elite.
              </p>
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <img class="img-fluid mb-3 rounded-3" src={img1} alt=""></img>
                </div>
                <div class="col-md-6">
                  <img class="img-fluid mb-3 rounded-3" src={img2} alt=""></img>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <img class="img-fluid mb-3 rounded-3" src={img3} alt=""></img>
                  <p class="fs-6 mb-5 img-description">
                    The act of physical love was an important part of the
                    natural order in ancient China. Not only was it the duty of
                    both men and women to maintain the ancestral line, sexual
                    harmony was also regarded as a way of promoting health and
                    vigour.
                  </p>
                </div>
              </div>
              <h1 id="Jing-2" class="mt-5 mb-3 fw-bold custom-heading-aside">
                Plot and Characters
              </h1>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                The Jing Ping Mei revolves around the central character, Ximen
                Qing, a wealthy merchant in the city of Shandong around the
                years 1111–1127 (during the Northern Song dynasty). Ximen Qing's
                life and relationships form the core of the narrative. The novel
                delves into his complex love affairs, including his multiple
                marriages and extramarital affairs, and explores the ensuing
                intrigues, passions, and consequences.
              </p>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                The supporting cast features a colorful array of characters,
                each with their own desires, aspirations, and flaws. The novel
                is framed as a spin-off from Water Margin (水滸傳, pyinin: Shui
                hu juan), one of the earliest Chinese novels written in
                vernacular Mandarin, attributed to Shi Nai'an. The beginning
                chapter is based on an episode in which the character "Tiger
                Slayer" Wu Song avenges the murder of his older brother by
                brutally killing his brother's former wife, Pan Jinlian.
              </p>
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <img class="img-fluid mb-3 rounded-3" src={img4} alt=""></img>
                  <p class="fs-6 mb-5 img-description">
                    Ancient Jing Ping Mei illustration who dates back to XVII
                    century
                  </p>
                </div>
                <div class="col-md-6">
                  <img class="img-fluid mb-3 rounded-3" src={img5} alt=""></img>
                  <p class="fs-6 mb-5 img-description">
                    Yanqin Yiqing (Intimate Scenes of Leisurely Love) Qing
                    dynasty, 18th century | 清十八世紀 〈燕寢怡情〉 一冊八幀
                    設色絹本, PROPERTY FROM THE BERTHOLET COLLECTION
                    貝氏情色藝術珍藏
                  </p>
                </div>
              </div>
              <p class="h5 mb-3 mt-3 custom-paragraph-article">
                The story follows the domestic sexual struggles of the women who
                lives within Ximen Qing's household untill Ximen Qing's death
                from an overdose of aphrodisiacs. In the course of the novel,
                Ximen has 19 sexual partners, including his six wives and
                mistresses, and a male servant. There are 72 detailed sexual
                episodes in Jin Ping Mei. However, considering the novel has
                over one million words (and over 3,600 pages in complete English
                translation), the graphic sexual scenes accounts for less than 3
                percent of its total content.
              </p>
              <h1 id="Jing-3" class="mt-5 mb-3 fw-bold custom-heading-aside">
                Themes and Social Commentary
              </h1>
              <p class="h5 mb-3 custom-paragraph-article">
                At its heart, the Jing Ping Mei serves as a commentary on the
                social, cultural, and moral landscape of 16th-century China. It
                offers a critique of the corrupt and decadent ruling class,
                exposing the hypocrisy and moral bankruptcy that pervaded
                society. The novel reflects the tensions between the desires and
                aspirations of individuals and the oppressive social constraints
                that stifled their freedom.
              </p>
              <img class="img-fluid mb-3 rounded-3" src={img6} alt=""></img>
              <p class="fs-6 mb-5 img-description">
                Elegant Gathering in the Apricot Garden, This handscroll is one
                of two similar compositions attributed to Xie Huan that document
                a gathering of nine scholar-officials in Beijing on April 6,
                1437. The original composition, prepared for the party's host,
                Yang Rong (1371–1440), who is depicted wearing a red robe in the
                first group of seated figures, is now in the Zhenjiang Municipal
                Museum.
              </p>
              <p class="h5 mb-3 custom-paragraph-article">
                Moreover, the Jing Ping Mei explores the dynamics of power, the
                objectification of women, and the challenges faced by
                individuals who sought to navigate a complex web of
                relationships in a patriarchal society. It offers a nuanced
                portrayal of female characters who, despite their limited
                agency, display resilience, wit, and resourcefulness.
              </p>
              <h1 id="Jing-4" class="mt-5 mb-3 fw-bold custom-heading-aside">
                Literary Style and Influence
              </h1>
              <p class="h5 mt-3 custom-paragraph-article">
                The Jing Ping Mei stands out for its vivid and evocative prose,
                skillful use of dialogue, and meticulous attention to detail.
                The author's immerses readers in the opulent world of Ming
                dynasty China. Jing Ping Mei's influence on subsequent works of
                Chinese literature cannot be overstated, as many authors drew
                inspiration from its storytelling techniques and exploration of
                social issues.
              </p>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                For centuries identified as pornographic and officially banned,
                the book has nevertheless been read by many of the educated
                class. The early Qing dynasty critic Zhang Zhupo remarked that
                those who regard Jin Ping Mei as pornographic "read only the
                pornographic passages." The influential author Lu Xun, writing
                in the 1920s, called it "the most famous of the novels of
                manners" of the Ming dynasty.
              </p>
              <h1 id="Jing-5" class="mt-5 mb-3 fw-bold custom-heading-aside">
                Controversy and Reception
              </h1>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                Due to its explicit depiction of sexuality and its unflinching
                portrayal of social decadence, the Jing Ping Mei has faced
                significant controversy throughout its history. It was banned
                multiple times in China and faced criticism for its perceived
                moral ambiguity. However, despite its contentious nature, the
                novel has endured and continues to be celebrated for its
                literary merits and its insightful commentary on society.
              </p>
              <p class="h5 mt-3 mb-3 custom-paragraph-article">
                The American scholar and literary critic Andrew H. Plaks ranks
                Jin Ping Mei as one of the "Four Masterworks of the Ming Novel"
                along with Romance of the Three Kingdoms, Water Margin, and
                Journey to the West, which collectively constitute a technical
                breakthrough and reflect new cultural values and intellectual
                concerns. It has been described as a "milestone" in Chinese
                fiction for its character development, particularly its complex
                treatment of female figures.
              </p>
              <img class="img-fluid mb-3 rounded-3" src={img7} alt=""></img>
              <p class="h5 mb-3 mt-3 custom-paragraph-article">
                James Robert Hightower wrote in 1953 that along with The Dream
                of the Red Chamber, it ranks with "the greatest novels" for
                "scope, subtle delineation of character, and elaborate plot."
                Phillip S. Y. Sun argued that although in craftsmanship it is a
                lesser work than The Dream of the Red Chamber, it surpasses the
                latter in "depth and vigour".
              </p>
              <p class="h5 mb-3 mt-3 custom-paragraph-article">
                The novel contains a surprising number of descriptions of sexual
                objects and techniques that would be considered fetish today, as
                well as a large number of bawdy jokes and sexual euphemisms.
                Some critics have argued that the highly sexual descriptions are
                essential, and have exerted what has been termed a "liberating"
                influence on other Chinese novels that deal with sexuality, most
                notably the Dream of the Red Chamber.
              </p>
              <p class="h5 mb-3 mt-3 custom-paragraph-article">
                David Tod Roy (whose translation of the novel was published
                1993–2013) sees it as an "uncompromising moral vision,"
                associated with the philosophy of Xunzi, (Chinese: 荀子;
                lit. 'Master Xun'), a Chinese philosopher of Confucianism who
                lived during the late Warring States period.
              </p>
              <p class="h5 mb-5 mt-3 custom-paragraph-article">
                The Jing Ping Mei remains an essential work in Chinese
                literature, offering a captivating exploration of human desires,
                societal constraints, and the complexity of interpersonal
                relationships. Its enduring legacy lies in its ability to engage
                readers across time, transcending the boundaries of a specific
                era to resonate with universal themes. As we delve into the
                pages of the Jing Ping Mei, we uncover not only a riveting tale
                but also a profound reflection on the human condition and the
                timeless pursuit of love, power, and self-discovery.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
