import Image from "next/image";
import "./styles.css";
import chicken from "../../assets/img/marryMeChicken.png";
import berger from "../../assets/img/bergers.jpg";
import food from "../../assets/img/food.jpg";

export default function page() {
  return (
    <div className="background">
      <section className="menuBody">
        <div className="menGrid">
          {/* Logo */}
          <div className="shopName">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              fill="currentColor"
              className="bi bi-egg-fried"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
            </svg>
            <span>Mammas</span>
          </div>
          {/* info */}
          <div className="contctSection">
            <p>Call: 012 548 1254</p>
            <p>order online: www.mammaskitchen.com</p>
          </div>
          {/* first menu section */}
          <div className="menuSection">
            <p>WOOD FIRE PIZZA</p>
            <span>
              <div className="itmeName">Miami</div>
              <div>150</div>
            </span>
            <div className="itemDesc">Bacon, Avo, Feta</div>
            <span>
              <div className="itmeName">Good</div>
              <div>180</div>
            </span>
            <div className="itemDesc">Spicy chicken BBQ</div>
            <span>
              <div className="itmeName">Classic</div>
              <div>100</div>
            </span>
            <div className="itemDesc">Bacon, Avo, Feta</div>
          </div>
          {/* first image */}
          <div className="frstBorder">
            <div className="imBrd">
              <Image src={chicken} alt="chicken" className="mnIm" />
            </div>
          </div>
          {/* second image */}
          <div className="frstBorder">
            {" "}
            <div className="imBrd">
              <Image src={food} alt="chicken" className="mnIm" />
            </div>
          </div>
          {/* second menu section */}
          <div className="menuSection">
            <p>Burgers</p>
            <span>
              <div className="itmeName">Cheese and Bacon</div>
              <div>90</div>
            </span>
            <div className="itemDesc">Single patty with cheese</div>
            <span>
              <div className="itmeName">Double Cheese</div>
              <div>100</div>
            </span>
            <div className="itemDesc">Double the cheese and the patties</div>
            <span>
              <div className="itmeName">Mega deal</div>
              <div>150</div>
            </span>
            <div className="itemDesc">Everything is on it</div>
          </div>
          {/* third menu section  */}
          <div className="menuSection">
            <p>Sunday plates</p>
            <span>
              <div className="itmeName">Oumas meal</div>
              <div>98</div>
            </span>
            <div className="itemDesc">Rice beef and veg</div>
            <span>
              <div className="itmeName">Mammas meal</div>
              <div>98</div>
            </span>
            <div className="itemDesc">
              Roasted chicken and veg with a side of rice{" "}
            </div>
            <span>
              <div className="itmeName">Family meals</div>
              <div>150</div>
            </span>
            <div className="itemDesc">Everything mamma and ouma can give</div>
          </div>
          {/* third image */}
          <div className="frstBorder">
            <div className="imBrd">
              <Image src={berger} alt="chicken" className="mnIm" />
            </div>
          </div>

          {/* Footer */}
          <div className="ft"></div>
        </div>
      </section>
    </div>
  );
}
