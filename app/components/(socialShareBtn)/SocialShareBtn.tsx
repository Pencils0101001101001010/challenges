import Image from "next/image";
import "../../styles/socialSharebtn.css";
import SocialShareBtnModal from "./socailSharebtnModal";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import CartComponent from "./CartComponent";

export const dynamic = "force-dynamic";

export const SocialShareBtn = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");

    // 2. Check if the response is actually okay
    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return (
        <div className="perantContainer">
          This page will not work in production, because I'm using a placeholder
          api.{" "}
        </div>
      );
    }

    let products = await res.json();

    //   console.log("POSTS:__________", posts);

    return (
      <div className="perantContainer">
        <div className="cart-dropdown">
          <h1>Shop</h1>
          <CartComponent />
        </div>

        <div className="pageBody">
          {products.map((product: any) => (
            <div key={product.id} className="card cardStyles">
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  className="card-img-top p-3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-body cardBody">
                <h5 className="card-title">{product.title}</h5>
                {/* <p className="card-text  ">{product.description}</p> */}
                <p className="card-text text-truncate">R {product.price}</p>

                <div className="cardBtns">
                  <Link
                    href={`/socialShareBtn/${product.id}`}
                    className="btn btn-dark"
                  >
                    View Product
                  </Link>

                  <AddToCartBtn product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error loading products.</div>;
  }
};
