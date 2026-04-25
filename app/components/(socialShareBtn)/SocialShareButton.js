"use client";

import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function SocialShareButton() {
  return (
    <div>
      <p>Select:</p>
      <FacebookShareButton
        // {/* Url you want to share */}
        url={"http://localhost:3000"}
      >
        <FacebookIcon size={50} className="m-2" round />
      </FacebookShareButton>

      <RedditShareButton
        // {/* Url you want to share */}
        url={"http://localhost:3000"}
      >
        <RedditIcon size={50} className="m-2" round />
      </RedditShareButton>
      <WhatsappShareButton
        // {/* Url you want to share */}
        url={"http://localhost:3000"}
      >
        <WhatsappIcon size={50} className="m-2" round />
      </WhatsappShareButton>
      <LinkedinShareButton
        // {/* Url you want to share */}
        url={"http://localhost:3000"}
      >
        <LinkedinIcon size={50} className="m-2" round />
      </LinkedinShareButton>
    </div>
  );
}
