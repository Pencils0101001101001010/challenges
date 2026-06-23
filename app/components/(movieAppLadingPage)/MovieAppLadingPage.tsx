"use client";
import Image, { StaticImageData } from "next/image";
import "./styles.css";
import user from "../../../assets/img/user1.jpg";
import samuri from "../../../assets/img/movie1.jpg";
import whale from "../../../assets/img/whale.jpg";
import lion from "../../../assets/img/lion.jpg";
import cinema from "../../../assets/img/cinema.jpg";
import library from "../../../assets/img/libirary.jpg";
import movie2 from "../../../assets/img/lilly.jpg";
import movie3 from "../../../assets/img/soundWaves.png";
import bass from "../../../assets/img/bass.jpg";
import guitar from "../../../assets/img/guitar.jpg";
import cercus from "../../../assets/img/comingtotown.jpg";
import ct from "../../../assets/img/capeTown.jpg";
import hall from "../../../assets/img/hall.jpg";
import mars2 from "../../../assets/img/mars3.jpg";

import { useState } from "react";

const movies = [
  {
    id: 1,
    title: "Friends with blades",
    description:
      "Friends with Blades is a gritty, stylized neo-noir action film set in a rain-soaked, near-future metropolis. The story follows two former rivals from a disbanded elite samurai unit who are forced to reunite",
    image: samuri,
    rating: 4.5,
    category: "action",
    type: "movie",
  },
  {
    id: 2,
    title: "Whales Tale",
    description:
      "Deeper in the blue we discover the true meaning of blue and her heart. The amazing story of the biggest mamal and her journey",
    image: whale,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 3,
    title: "Life of a Cub",
    description:
      "A breathtaking wildlife documentary that follows the high-stakes journey of a lioness and her lone survivor cub. Set in the unforgiving expanse of the Serengeti, it is a raw, intimate look at the bond required to survive when the odds are stacked against the pride.",
    image: lion,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 4,
    title: "No One Here",
    description:
      "A psychological horror-thriller that turns a romantic night out into a claustrophobic nightmare. It plays on the primal fear of being watched in a place that should be empty, utilizing the eerie silence of a hollowed-out theater to build unbearable tension.",
    image: cinema,
    rating: 3.8,
    category: "horror",
    type: "movie",
  },
  {
    id: 5,
    title: "Connection",
    description:
      "Nostalgic, bittersweet documentary that explores the physical era of home video. It chronicles the rise and fall of the neighborhood video store—a place where movie-watching was a social ritual rather than an algorithm.",
    image: library,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 6,
    title: "Lilly",
    description:
      "Nostalgic, bittersweet documentary that explores the physical era of home video. It chronicles the rise and fall of the neighborhood video store—a place where movie-watching was a social ritual rather than an algorithm.",
    image: movie2,
    rating: 5,
    category: "drama",
    type: "movie",
  },
  {
    id: 7,
    title: "Sorry I'm a DJ",
    description:
      "Looking into the negative effect of creating digital music and ignoring timber and steel",
    image: movie3,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 8,
    title: "The Ghost on the mountain",
    description:
      "Nostalgic, bittersweet documentary that explores the physical era of home video. It chronicles the rise and fall of the neighborhood video store—a place where movie-watching was a social ritual rather than an algorithm.",
    image: ct,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 9,
    title: "How to Rock",
    description:
      "Nostalgic, bittersweet documentary that explores the physical era of home video. It chronicles the rise and fall of the neighborhood video store—a place where movie-watching was a social ritual rather than an algorithm.",
    image: bass,
    rating: 5,
    category: "drama",
    type: "movie",
  },
  {
    id: 10,
    title: "Sorry I'm a DJ",
    description:
      "Looking into the negative effect of creating digital music and ignoring timber and steel",
    image: movie3,
    rating: 5,
    category: "documentary",
    type: "series",
  },
];

const T_movies = [
  {
    id: 1,
    title: "Out there",
    description:
      "Friends with Blades is a gritty, stylized neo-noir action film set in a rain-soaked, near-future metropolis. The story follows two former rivals from a disbanded elite samurai unit who are forced to reunite",
    image: mars2,
    rating: 4.5,
    category: "action",
    type: "movie",
  },
  {
    id: 2,
    title: "Only strings attached",
    description:
      "Deeper in the blue we discover the true meaning of blue and her heart. The amazing story of the biggest mamal and her journey",
    image: guitar,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 3,
    title: "Carnival Murders",
    description:
      "A breathtaking wildlife documentary that follows the high-stakes journey of a lioness and her lone survivor cub. Set in the unforgiving expanse of the Serengeti, it is a raw, intimate look at the bond required to survive when the odds are stacked against the pride.",
    image: cercus,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 4,
    title: "Phantom of the hall",
    description:
      "A psychological horror-thriller that turns a romantic night out into a claustrophobic nightmare. It plays on the primal fear of being watched in a place that should be empty, utilizing the eerie silence of a hollowed-out theater to build unbearable tension.",
    image: hall,
    rating: 3.8,
    category: "horror",
    type: "movie",
  },
  {
    id: 5,
    title: "The Ghost on the mountain",
    description:
      "Nostalgic, bittersweet documentary that explores the physical era of home video. It chronicles the rise and fall of the neighborhood video store—a place where movie-watching was a social ritual rather than an algorithm.",
    image: ct,
    rating: 5,
    category: "documentary",
    type: "series",
  },
  {
    id: 6,
    title: "How to Rock",
    description:
      "Nostalgic, bittersweet documentary that explores the physical era of home video. It chronicles the rise and fall of the neighborhood video store—a place where movie-watching was a social ritual rather than an algorithm.",
    image: bass,
    rating: 5,
    category: "drama",
    type: "movie",
  },
  {
    id: 7,
    title: "Sorry I'm a DJ",
    description:
      "Looking into the negative effect of creating digital music and ignoring timber and steel",
    image: movie3,
    rating: 5,
    category: "documentary",
    type: "series",
  },
];

const MovieAppLadingPage = () => {
  const [isActive, setIsActive] = useState<{
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    rating: number;
  }>(movies[3]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (movie: any) => {
    setIsActive(movie);
  };

  return (
    <div className="mainGridComponent">
      <nav className="navSection">
        <Image src={user} alt="profileImage" className="imgStyle" />
        <div>
          <button className="bttnStyle">MOVIE</button>|
          <button className="bttnStyle">SERIES</button>
        </div>
        {/**This is to make sure movie|series stays centered on screen */}
        <button onClick={() => setIsModalOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            fill="currentColor"
            className="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
      </nav>

      {isModalOpen && (
        <div className="modal-open-box">
          <div className="inner-modal-box">
            <span className="message-in-modal">
              Are you sure you want to leave?
            </span>
            <span className="stay-button">Stay</span>
            <span className="yes-button">Yes</span>
          </div>
        </div>
      )}

      <div className="heroSection" onClick={() => setIsModalOpen(false)}>
        <span key={isActive.id}>
          <Image src={isActive.image} alt="hero" className="heroImg" />
          <h1 className="movieTitle">{isActive.title}</h1>
          <p className="movieDescription">{isActive.description}...</p>
          <p className="movieRating">Rated {isActive.rating}</p>
        </span>
      </div>

      <h4 className="newCategoryTitle">Trending Top 10</h4>

      <div className="carouselContainer ">
        {T_movies.map((movie) => (
          <button
            onClick={() => handleClick(movie)}
            className="movieCarouselCard"
            key={movie.id}
          >
            <span>{movie.id}</span>
            <Image
              src={movie.image}
              alt={movie.title}
              className="carouselImage"
            />
            <p className="carouselImageTitle">{movie.title}</p>
          </button>
        ))}
      </div>
      <h4 className="newCategoryTitle">New</h4>

      {/* passing the tumbnail movie to the here display  */}
      <div className="carouselContainer ">
        {movies.map((movie) => (
          <button
            onClick={() => handleClick(movie)}
            className="movieCarouselCard"
            key={movie.id}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              className="carouselImage"
            />
            <p className="carouselImageTitle">{movie.title}</p>
          </button>
        ))}
      </div>

      <h4 className="newCategoryTitle">Watched</h4>

      <div className="carouselContainer ">
        {movies.map((movie) => (
          <button
            onClick={() => handleClick(movie)}
            className="movieCarouselCard"
            key={movie.id}
          >
            <Image
              src={movie.image}
              alt={movie.title}
              className="carouselImage"
            />
            <p className="carouselImageTitle">{movie.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieAppLadingPage;
