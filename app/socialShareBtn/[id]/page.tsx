import Image from "next/image";
import "../../styles/socialSharebtn.css";
import SocialShareBtnModal from "@/app/components/(socialShareBtn)/socailSharebtnModal";
import notFound from "@/app/not-found";

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
      <div key={product.id} className="card cardStyles">
        <div style={{ position: "relative", height: "200px" }}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            style={{ objectFit: "contain" }}
            className="card-img-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <p className="card-text text-truncate">R {product.price}</p>

          <SocialShareBtnModal
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error loading products.</div>;
  }
}
