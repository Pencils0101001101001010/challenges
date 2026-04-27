import Image from "next/image";
import "../../styles/marhetingSection.css";
import MarketingTiles from "./MarketingTiles";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

async function MarketingSection() {
  const res = await fetch("https://fakestoreapi.com/products/?limit=6");
  const products: Product[] = await res.json();

  try {
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return (
      <div>
        <div className="marketing-grid text-center">
          {" "}
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="container marketing mt-5 itemsCenter"
            >
              {" "}
              <div className="gridContent">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="imageSection"
                />
                <h5>{product.title}</h5>
                <p>R {product.price}</p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </div>
              <hr className="featurette-divider" />
            </div>
          ))}
        </div>
        {/* <MarketingTiles /> */}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
}

export default MarketingSection;
