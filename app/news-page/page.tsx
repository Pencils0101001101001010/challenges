import Image from "next/image";
import "./new.css";
import donate from "../../assets/img/donate4.jpg";
import donate1 from "../../assets/img/cable_car.jpg";
import donate2 from "../../assets/img/cinema.jpg";
import donate3 from "../../assets/img/whale.jpg";
import donate4 from "../../assets/img/spark.jpg";
import donate5 from "../../assets/img/mars3.jpg";
import donate6 from "../../assets/img/SifiAndBieny.jpeg";

const articles = [
  {
    id: 1,
    title: "Cable Way Maintenance ",
    image: donate1,
  },
  {
    id: 2,
    title: "Open air theater",
    image: donate2,
  },
  {
    id: 3,
    title: "Whale Season",
    image: donate3,
  },
  {
    id: 4,
    title: "Loop Festival",
    image: donate4,
  },
];

export default function page() {
  return (
    <div className="news-page-container">
      <div className="mobile-message">View on desktop</div>
      <div className="page-grid-layout">
        <div className="open-article-container">
          <Image
            src={donate}
            alt="people cleaning"
            height={500}
            width={500}
            className="news-page-image"
          />
          <div className="news-text-content">
            <div className="news-title">Engineering a Cleaner Future</div>

            <p className="news-body-paragraph">
              Every year, over 11 million metric tons of plastic waste enter our
              marine ecosystems. This debris kills marine life and destroys
              coral reefs. The battle against marine debris begins long before
              waste reaches the open ocean. Over 80% of ocean plastic originates
              from land-based sources, carried away by major global river
              networks.
            </p>

            <p className="news-body-paragraph">
              To solve this, automated solar-powered river barriers are
              strategically anchored at critical estuaries. These systems
              utilise heavy-duty conveyor belts to scoop floating plastics
              directly out of the water into onshore waste containers. By
              stopping trash at the source, engineers prevent millions of tons
              of synthetic materials from fragmenting into hazardous
              microplastics downstream.
            </p>

            <p className="news-body-paragraph">
              <strong>Passive Ocean Collection:</strong> For the waste that
              evades coastal defenses and enters international waters, massive
              passive cleanup systems are deployed directly inside oceanic
              gyres. These systems use natural oceanic currents and wind to trap
              floating debris across thousands of square kilometres. Long,
              flexible floating barriers act like an artificial coastline,
              catching plastic while allowing marine life to swim safely
              underneath.
            </p>

            <p className="news-body-paragraph">
              <strong>The Microplastic Challenge:</strong> The ultimate frontier
              of modern marine engineering focuses on invisible pollution. Over
              time, sunlight and wave action break down large debris into
              microplastics smaller than a grain of rice. Scientists are
              currently testing advanced autonomous drones equipped with
              specialized filtration meshes to skim these particles from surface
              waters.
            </p>
          </div>
        </div>
        <div className="more-articles">
          <div className="right-side-header">More articles: </div>
          {articles.map((a) => (
            <div className="mr-article-container" key={a.id}>
              <Image
                src={a.image}
                alt={a.title}
                width={400}
                height={350}
                className="articles-images"
              />
              <div className="more-articles-title">{a.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
