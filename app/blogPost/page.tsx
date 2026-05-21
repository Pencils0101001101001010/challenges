"use client";
import "./styles.css";
import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user3.jpg";
import user4 from "../../assets/img/user4.jpg";
import user5 from "../../assets/img/user5.jpg";
import user6 from "../../assets/img/user6.jpg";
import user7 from "../../assets/img/user7.jpg";
import user8 from "../../assets/img/profilePicture1.jpg";
import user9 from "../../assets/img/marsplanet.jpg";
import workspace from "../../assets/img/samuri.jpg";
import vinylBar from "../../assets/img/soundWaves.png";
import sourdough from "../../assets/img/plat5.jpg";
import oceanSwell from "../../assets/img/mars1.jpg";
import oldLibrary from "../../assets/img/libirary.jpg";
import synthesizer from "../../assets/img/hero-img3.jpg";

import capeTown from "../../assets/img/capeTown.jpg";
import cinema from "../../assets/img/cinema.jpg";
import garage from "../../assets/img/garage.jpg";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface BlogPost {
  id: number;
  title: string;
  user: {
    name: string;
    avatar: StaticImageData;
  };
  body: string;
  postImage: StaticImageData;
}

const BLOGS = [
  {
    id: 1,
    title: "Chasing the tablecloth on Table Mountain",
    user: {
      name: "@CapeTown_Hiker",
      avatar: user1,
    },
    body: "I took the Platteklip Gorge route at 5:00 AM today to beat the heat. Just as I reached the summit, the famous 'tablecloth' cloud layer started rolling over the edge. Standing above the clouds with the city waking up below is a feeling money cannot buy. If you are visiting Cape Town, skip the cableway at least once and hike it!",
    postImage: capeTown,
  },
  {
    id: 2,
    title: "Why retro cinemas still hold the magic",
    user: {
      name: "@The_Celluloid_Kid",
      avatar: user2,
    },
    body: "I spent my Friday night at a local indie theatre watching a 35mm screening of an old sci-fi classic. No reclining seats, no oversized digital screens—just the nostalgic hum of the projector and the smell of real buttered popcorn. Multiplexes are convenient, but they completely lose the communal magic of traditional cinema storytelling.",
    postImage: cinema,
  },
  {
    id: 3,
    title: "Restoring a 1974 classic in my garage",
    user: {
      name: "@Wrench_Warior",
      avatar: user3,
    },
    body: "After three months of searching for original parts, the engine blocks are finally back together on my vintage rebuild project. My hands are stained with grease, my back aches from leaning over the fender, and my garage is an absolute mess. Yet, hearing that motor turn over and roar to life for the first time made every single hour of frustration worth it.",
    postImage: garage,
  },
  {
    id: 4,
    title: "Unlocking deep focus with the Pomodoro technique",
    user: {
      name: "@Dev_FlowState",
      avatar: user4,
    },
    body: "I used to struggle with shiny object syndrome every time I sat down to write code. Switching to a strict 25-minute focus blocks followed by 5-minute walks has completely saved my productivity. Last night, I pushed three critical feature updates without breaking my stride or getting distracted by social media loops.",
    postImage: workspace,
  },
  {
    id: 5,
    title: "A rainy afternoon in a hidden Kyoto vinyl bar",
    user: {
      name: "@Tokyo_Grooves",
      avatar: user5,
    },
    body: "Getting lost in the back alleys of Kyoto during a sudden downpour led me straight into a tiny, five-seat listening lounge. The master was spinning a flawless jazz press from 1972 on a pair of vintage horn speakers. Sipping highballs while watching the rain glaze the windows felt like stepping straight into a classic Murakami novel.",
    postImage: vinylBar,
  },
  {
    id: 6,
    title: "The therapeutic magic of baking sourdough from scratch",
    user: {
      name: "CrustAndCrumb",
      avatar: user6,
    },
    body: "There is an incredible, grounding rhythm to feeding a starter, stretching dough, and watching a beautiful boule blister in a hot Dutch oven. In a world full of digital noise and instant gratification, baking forces you to slow down and wait. The rewarding, shattering crunch of that first slice makes the 24-hour fermentation process completely worth it.",
    postImage: oceanSwell,
  },
  {
    id: 7,
    title: "Catching the first swell at Muizenberg beach",
    user: {
      name: "@Surf_Capetonian",
      avatar: user7,
    },
    body: "Woke up to crisp offshore winds and headed straight down to the surfers' corner this morning. The water was absolutely freezing, but catching a glassy, clean right-hander right as the sun broke over the mountains makes you forget the cold instantly. There is truly no better way to kickstart a Tuesday morning in Cape Town.",
    postImage: oceanSwell,
  },
  {
    id: 8,
    title: "Why I am ditching algorithms for physical library rows",
    user: {
      name: "@Page_Turner_99",
      avatar: user8,
    },
    body: "I realized my reading list was being completely dictated by online trends and feed algorithms. Today, I walked into the local archive library and just picked three random fiction books based purely on their spines and dust jackets. Breaking out of the digital echo chamber to discover stories feels incredibly liberating.",
    postImage: oldLibrary,
  },
  {
    id: 9,
    title: "Restoring crisp tones on a vintage 1980s synth",
    user: {
      name: "@Analog_Wave",
      avatar: user9,
    },
    body: "After hours of meticulous cleaning and desoldering leaking capacitors, my thrifted 1983 analogue synthesizer is finally firing on all channels again. Playing around with the low-pass filter and hearing those thick, warm synthwave basslines fill the room gives me goosebumps. Modern software plugins simply cannot replicate this raw hardware grit.",
    postImage: synthesizer,
  },
];

function page() {
  const [posts] = useState<BlogPost[]>(BLOGS);
  const [isActive, setIsActive] = useState<BlogPost>(BLOGS[0]);

  const handleClick = (post: any) => {
    setIsActive(post);
  };

  return (
    <div className="blogPostContainer">
      <div className="blGrid">
        <div className="postNavbar">
          <div className="navContainer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                className="bi bi-collection-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
              </svg>
            </span>

            <span>BLOGS...</span>
          </div>
        </div>
        <div>
          <div className="rightSideContainer" key={isActive.id}>
            <Image
              src={isActive.postImage}
              alt="post image"
              className="rightSidePostImg"
            />
            <p className="rSideTitle">{isActive.title}</p>
            <p>{isActive.body}</p>

            <p>{isActive.user.name}</p>
          </div>
        </div>
        <span className="postList">
          {" "}
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleClick(post)}
              className="listCard"
            >
              <Image
                src={post.user.avatar}
                className="imgStl"
                alt="user image"
              />
              <p className="postTitle">{post.title}</p>
              <p className="userName">{post.user.name}</p>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
}

export default page;
