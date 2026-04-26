import Image from "next/image";
import SocialShareButton from "./SocialShareButton";

interface SolcailButtonProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function SocialShareBtnModal({
  id,
  image,
  title,
  description,
  price,
}: SolcailButtonProps) {
  // Change the products id to make sure it does not show only the first product info when clicking share
  const modalId = `modalId-${id}`;

  return (
    <div className=" ">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        //~ passing the new id to the button
        data-bs-target={`#${modalId}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-share-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
        </svg>
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        //~ passed ID to modal
        id={modalId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby={`${modalId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5" id={`${modalId}Label`}>
                Share
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="card-body">
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                  className="card-img-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-truncate">{description}</p>
              <p className="card-text text-truncate">R {price}</p>{" "}
              <SocialShareButton />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
