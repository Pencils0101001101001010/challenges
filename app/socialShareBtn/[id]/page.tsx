import Image from "next/image";
import "../../styles/productIdPage.css";
import SocialShareBtnModal from "@/app/components/(socialShareBtn)/socailSharebtnModal";
import notFound from "@/app/not-found";
import MarketingSection from "@/app/components/(marketingSection)/MarketingSection";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return { title: product?.title || "Product Not Found" };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string; title: string }>;
}) {
  const { id } = await params;

  try {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);

    let product: Product = await res.json();

    if (!product) return notFound();
    return (
      <div className="perantContainer ">
        <div key={product.id} className="card cardStyles m-auto">
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              priority
              style={{ objectFit: "contain" }}
              className="card-img-left imageStyles"
            />
          </div>
          <div className="card-body cardBody">
            <p className="card-text">{product.description}</p>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text text-truncate">R {product.price}</p>

            <div className="cardBtn">
              <SocialShareBtnModal
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
              <button className="btn btn-success">Add to Cart</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                className="bi bi-suit-heart-fill hart"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
            </div>
          </div>
        </div>
        <MarketingSection />
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error loading products.</div>;
  }
}
