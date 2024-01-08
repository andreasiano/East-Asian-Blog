import img0 from "./images/ricci-1.jpg";
import img1 from "./images/ricci-2.jpg";
import img2 from "./images/ricci-3.webp";
import img3 from "./images/ricci-4.jpg";
import img4 from "./images/ricci-5.jpg";
import img5 from "./images/ricci-6.jpg";
import { HashLink as Link } from "react-router-hash-link";

export default function Header_Ricci() {
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
              Religion
            </span>
            <h1 class="fw-bolder custom-heading-banner mt-4 mb-4">
              Matteo Ricci and the Chinese Reception of Christianity
            </h1>
            <p class="fs-6 mt-5 fw-bold">
              By Andrea S. Pensieri | May 23, 2023
            </p>
          </div>
        </div>
      </section>
      <article class="container mt-5">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <p class="h5 mt-5 mb-5 custom-paragraph-article">
              Regarding the relationship between China and Christianity, It is
              absolutely necessary to dive into what was their first encounter.
              Relatively speaking, this religion may have been known in China
              since at least the 3rd century, gaining a significant influence
              throughout the last two hundred years. But our effort will be
              addressed towards its reception at the end of the 16th century. A
              sharp and talented man, the Jesuit Matteo Ricci, came to Macau in
              1583, making a great effort to learn Chinese customs and their
              language. He had one goal : the conversion of a millenary culture,
              and this wasn’t exactly an easy-going challenge.
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
                        <Link class="text-decoration-none" to="#ChurchoftheEast">
                          The Church of the East in China
                        </Link>
                      </li>
                      <li>
                        <Link class="text-decoration-none" to="#Matteoricci">
                          Matteo Ricci, an extraordinary man
                        </Link>
                      </li>
                      <li>
                        <Link class="text-decoration-none" to="#Confucianism">
                          Is Confucianism a misrepresented version of
                          Christianity?
                        </Link>
                      </li>
                      <li>
                        <Link class="text-decoration-none" to="#Buddhism">
                          Buddhism and Christianity, similarities and hatred.
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h1
              id="ChurchoftheEast"
              class="mt-5 mb-3 custom-heading-aside fw-bold"
            >
              The Church of the East in China
            </h1>
            <p class="h5 mt-3 mb-3 custom-paragraph-article">
              Evidence of the existence of Christianity in China emerged with
              the testimony of the syriac ethnographer Bardesanes. Even so, the
              verifiable proof of Christianity’s existence may only be dated
              back to the 7th century. It is curious though that this lack of
              documentation might be attributed to the barriers applied in
              Persia by the Sassanids. The very first true encounter between
              Christianity and China took place precisely during the beginning
              of the Tang dynasty (618-907). The emperor Taizong (627-649) had
              studied the Christian Scriptures given to him by the Assirian
              missionary Alopen.
            </p>
            <img
              class="img-fluid mb-3 rounded-3"
              src="https://cdn.britannica.com/48/1048-050-09EE107B/surrender-Valerian-Shapur-rock-relief-province-Persian.jpg"
              alt=""
            ></img>
            <p class="fs-6 mb-5 img-description">
              The triumph of Shapur I over the Roman emperors Valerian and
              Philip the Arab, Naqsh-e Rostam, Iran.
            </p>
            <p class="h5 mt-3 mb-3 custom-paragraph-article">
              He belonged to the Syro-Persian Church of the East, also known as
              the Nestorian Church. After his arrival, Taizong extended
              religious tolerance by inviting the Christians to translate their
              sacred scriptures for the imperial library. Many of Taizong’s
              successors were tolerant with missionaries. This provided over two
              hundred years of life for the Church of the East in China, until
              its decline in 845.
            </p>
            <p class="h5 mt-3 mb-33 custom-paragraph-article">
              The emperor Wuzong demanded the banishment of foreign religions.
              Christians were forced to return to laity, becoming taxpayers. The
              event had a tremendous consequence for the Christian community,
              who had benefited from the patronage and protection of previous
              emperors. After the fall of the Tang dynasty, what was left of the
              Church of the East vanished without any political support. It
              disappeared completely in the mid 14th century after a brief
              patronage from the Yuan Dynasty.
            </p>

            <h1 id="Matteoricci" class="mt-5 mb-3 fw-bold custom-heading-aside">
              Matteo Ricci, an extraordinary man
            </h1>
            <p class="h5 mb-3 custom-paragraph-article">
              When the first Jesuit missionaries, Ruggieri and Ricci, settled
              down in Southern China, they thought the only way to convert the
              population was to pretend to be Buddhist monks, wearing their
              traditional garments. This unfortunately was revealed to be a
              false assumption, simply because religious men in China weren't
              taken seriously like in Europe. Therefore, Jesuits replaced
              Buddhist robes with scholar dresses. Looking like Confucian
              intellectuals could turn out to be helpful for their goals.
            </p>
            <img
              class="img-fluid mb-2 rounded-3"
              src="https://gesuiti.it/wp-content/uploads/2022/12/matteo-ricci.jpg"
              alt=""
            ></img>
            <p class="h5 mt-3 custom-paragraph-article">
              As a consequence Matteo Ricci introduced himself as a man of great
              talent, merging totally into Chinese culture by learning and
              memorizing Chinese Classics and the Chinese language. His talent
              was out of the ordinary, so much so that scholars started calling
              him (吉人) an “extraordinary man”. Besides, his respect for
              Chinese customs contributed to his success among scholars.
            </p>
            <p class="h5 mt-3 custom-paragraph-article">
              It becomes clear that Ricci just wanted to appear as a sympathizer
              of the Confucian traditions without mentioning his association
              with Christianity. Indeed, he decided to reveal the Christian
              message only to those who were prepared for its true meaning. His
              most important contribution to the spread of Christianity in China
              is undoubtedly the True Meaning of the Lord of Heaven. This book
              argues that Confucianism and Christianity are in fact remarkably
              similar. Ricci used the treatise as a means of conversion, trying
              to find any clue of a presence of God in the Chinese Classics.
            </p>

            <h1
              id="Confucianism"
              class="mt-5 mb-5 fw-bold custom-heading-aside"
            >
              Is Confucianism a misrepresented version of Christianity?
            </h1>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <img class="img-fluid mb-3 rounded-3" src={img1} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Statue of Confucius at Confucian Temple in Shanghai, China.
                </p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid mb-3 rounded-3" src={img2} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Portrait of Gong Fu Zi (Latinised to Confucius). Copyright
                  Bridgeman Images
                </p>
              </div>
            </div>
            <p class="h5 mb-3 custom-paragraph-article">
              Confucianism is a philosophy and belief system established by
              Confucius, a philosopher, and teacher who lived from 551 to 479
              B.C.E. Confucianism believes in ancestor worship and
              human-centered virtues for living a peaceful life. Its main idea
              is the importance of having a good moral character, which can then
              affect the world around that person through the idea of “cosmic
              harmony”. A respectable and moral character is achieved only
              through the virtue of (ren), or “humanity” which leads to more
              virtuous behavior, such as respect, humility, and altruism.
            </p>
            <img
              class="img-fluid mb-2 rounded-3"
              src="https://www.americamagazine.org/sites/default/files/main_image/AP18093276607310.jpg"
              alt=""
            ></img>
            <p class="h5 mt-3 mb-3 custom-paragraph-article">
              Ricci believed that the formula: “respect gods by keeping them at
              a distance” could be interpreted as follows: “do not sin by
              addressing false gods prayers”. Besides, the lack of documentation
              regarding the existence of God could even be associated with
              ancient books burned during the rogue order by the first emperor
              of Qin in 213 B.C. According to missionaries, some of those could
              have shown the evidence of God and the proof of the existence of
              the soul.
            </p>
            <img
              class="img-fluid mb-2 rounded-3"
              src="https://i.natgeofe.com/n/39b1a98b-20fc-426d-a35c-74ddc14a3a02/qin-shi-huangdi-1_4x3.jpg"
              alt=""
            ></img>
            <p class="fs-6 mb-5 img-description">
              Posthumous depiction of Qin Shi Huang, 19th century, PHOTOGRAPH BY
              UNIVERSAL HISTORY ARCHIVE, UIG/BRIDGEMAN IMAGES
            </p>
            <p class="h5 mt-3 custom-paragraph-article">
              These similarities unfortunately produced different
              misunderstandings from both Christians and Chinese scholars,
              leading to the first clash between the two. When Matteo Ricci died
              in 1610 the first doubts regarding the concept of Tianzhu
              (Heavenly God) in relation to God in Christianity arose. In the
              beginning, the missionaries were considered strict scholars,
              enemies of Buddhism, and great admirers of Confucius.
            </p>
            <p class="h5 mt-3 custom-paragraph-article">
              The Chinese’s behavior toward Christians changed when scholars
              discovered what was their true intent: conversion. This
              represented a real threat to the government’s balance.
              Furthermore, many Buddhist masters and Confucian scholars started
              gathering several pieces of data to confute what Ricci believed.
              Yu Chunxi, a scholar who sympathized with Buddhism, reproached
              missionaries for the killing of animals.
            </p>
            <p class="h5 mt-3 custom-paragraph-article">
              Indeed, Christians believed animals didn’t have a soul. The
              Jesuits used, to their advantage, the hatred of confucian scholars
              for idolatry and Buddhism as a strategy. It would have been too
              risky to confront Confucian scholars directly. This is why Jesuits
              wore buddhist clothes. As we will see there were more similarities
              between these two, much more than we think.
            </p>

            <h1 id="Buddhism" class="mt-5 mb-3 fw-bold custom-heading-aside">
              Buddhism and Christianity, similarities and hatred.
            </h1>

            <p class="h5 mb-3 custom-paragraph-article">
              What missionaries found out, during their first visit to China,
              was the religious indifference and the pronounced inclination to
              syncretism among Chinese intellectuals. The Chinese believed that
              through sharing beliefs, a culture could thrive. Unlike the
              Christians, who were in totally discordance with these statements.
              Their goal was to instill a blind faith rather than a pacific
              harmony. Towards the end of the Ming dynasty, the Three teachings
              Syncretism (Confucianism, Taoism and Buddhism, considered as a
              harmonious aggregate), was particularly in vogue.
            </p>
            <div class="row justify-content-center">
              <div class="col-md-6">
                <img class="img-fluid mb-3 rounded-3" src={img3} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  Confucius, Buddha and Laozi, A Ming period scroll depicting
                  Confucius handing over an infant Gautama Buddha to an elderly
                  Laozi
                </p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid mb-3 rounded-3" src={img4} alt=""></img>
                <p class="fs-6 mb-5 img-description">
                  In Chinese philosophy, the three teachings (Chinese: 三教;
                  pinyin: sān jiào) are Confucianism, Taoism, and Chinese
                  Buddhism considered as a harmonious aggregate.
                </p>
              </div>
            </div>
            <p class="h5 mt-3 custom-paragraph-article">
              In major temples it was common to see Confucius, the Buddha and
              Laozi statues gathered together. For this reason the idea of a
              dogma was completely unknown to them. Even the concept of an
              almighty God sounded awkward. On the contrary, for a Christian
              there is only one true religion. That is exactly what Ricci tried
              to explain in his treatise, The true meaning of the lord of
              Heaven, refusing the foundation of the Three learnings: either the
              three of them are true, and though only one is enough, or one is
              true and the others are false, in this case all of them should be
              refused. Speaking of Buddhism, when the missionaries arrived in
              China, the Chinese were strongly close to its principles. This
              religion, through India, had arrived blending with the native
              practices.
            </p>
            <p class="h5 mt-3 mb-3 custom-paragraph-article">
              With its rites and scriptures, Buddhism was undoubtedly the most
              important religion in China. The major issues that missionaries
              faced were mainly attributed to the jealousy of buddhist monks.
              This hostility was justified though, because of missionaries
              behavior towards Buddhism. Christians considered buddhist
              practices as diabolic. Actually, in the beginning missionaries
              noticed in Buddhism several similarities to their own beliefs.
              Buddhists believe in a sort of Paradise.
            </p>
            <p class="h5 mt-3 mb-3 custom-paragraph-article">
              Buddhism has Hell and what we can define as a concept of Trinity.
              The five precepts of Buddhism resemble somehow the ten
              commandments of Christianity: thou shalt not kill, thou shalt not
              steal, thou shalt not bear false witness. According to Ricci,
              these were just traps planned by evil. Bonzes and missionaries
              blamed each other. The Chinese thought that Christianity was a
              forgery and the same was for the Christians: Christianity is the
              pure form of Buddhism.
            </p>
            <img class="img-fluid mb-2 rounded-3" src={img5} alt=""></img>
            <p class="fs-6 mb-5 img-description">
              Shaolin Monastery (少林寺 Shǎolínsì), also known as Shaolin
              Temple, is a renowned monastic institution recognized as the
              birthplace of Chan Buddhism and the cradle of Shaolin Kung Fu. It
              is located at the foot of Wuru Peak of the Songshan mountain range
              in Dengfeng County, Henan Province, China.
            </p>
            <p class="h5 mt-3 mb-3 custom-paragraph-article mb-5">
              This was clearly absurd because between the two religions there
              was a deep resonance. Both of them have liberation purposes and
              future rewards. Both of them neglect the senses, considering the
              world as a source of pain. Therefore, even though Christians
              admired the Chinese customs, they couldn’t have accepted at all
              the Chinese affection towards rites and pagan beliefs. To
              conclude, Missionaries, buddhists and Confucian scholars, instead
              of fighting each other, they could have enriched themselves, by
              creating living space for syncretisms. This was absolutely common
              in China as we have already mentioned. But not for the Christians,
              and we can attribute this to one of their most famous statements:
              “There is only one true God!”.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
