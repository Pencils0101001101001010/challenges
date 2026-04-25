import Image from "next/image";
import "../../styles/socialSharebtn.css";
import SocialShareBtnModal from "./socailSharebtnModal";

export const dynamic = "force-dynamic";

export const SocialShareBtn = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");

    // 2. Check if the response is actually okay
    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return <div>Failed to load products. Please try again later.</div>;
    }

    let products = await res.json();

    //   console.log("POSTS:__________", posts);

    return (
      <div className="perantContainer">
        <div className="pageBody">
          {products.map((product: any) => (
            <div key={product.id} className="card cardStyles">
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="card-img-top"
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

                {/* <Link href={`/socialShareBtn/${post.id}`}>View Product</Link> */}
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
//fetching product data from server
//   let data = await fetch("https://fakestoreapi.com/products");
//   //turning data response into json
//   let products = await data.json();

//   //   console.log("POSTS:__________", posts);

//   return (
//     <div className="perantContainer">
//       <div className="pageBody">
//         {products.map((product: any) => (
//           <div key={product.id} className="card cardStyles">
//             <div style={{ position: "relative", height: "200px" }}>
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 fill
//                 style={{ objectFit: "contain" }}
//                 className="card-img-top"
//               />
//             </div>
//             <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="card-text text-truncate">{product.description}</p>
//               <p className="card-text text-truncate">R {product.price}</p>

//               <SocialShareBtnModal
//                 id={product.id}
//                 image={product.image}
//                 title={product.title}
//                 description={product.description}
//                 price={product.price}
//               />

//               {/* <Link href={`/socialShareBtn/${post.id}`}>View Product</Link> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SocialShareBtn;

// //fetching product data from server
//   let data = await fetch("https://fakestoreapi.com/products");
//   //turning data response into json
//   let products = await data.json();

//   //   console.log("POSTS:__________", posts);

//   return (
//     <div className="perantContainer">
//       <div className="pageBody">
//         {products.map((product: any) => (
//           <div key={product.id} className="card cardStyles">
//             <div style={{ position: "relative", height: "200px" }}>
//               <Image
//                 src={product.image}
//                 alt={product.title}
//                 fill
//                 style={{ objectFit: "contain" }}
//                 className="card-img-top"
//               />
//             </div>
//             <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="card-text text-truncate">{product.description}</p>
//               <p className="card-text text-truncate">R {product.price}</p>

//               <SocialShareBtnModal
//                 id={product.id}
//                 image={product.image}
//                 title={product.title}
//                 description={product.description}
//                 price={product.price}
//               />

//               {/* <Link href={`/socialShareBtn/${post.id}`}>View Product</Link> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
