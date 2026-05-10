import { SocialShareBtn } from "../components/(socialShareBtn)/SocialShareBtn";

export const metadata = {
  title: "Shop | Home",
  description: "Browse the latest movies and trending titles.",
};

function page() {
  return (
    <div>
      <SocialShareBtn />
    </div>
  );
}

export default page;
