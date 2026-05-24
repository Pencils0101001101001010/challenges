import "./testimonial.css";

const page = () => {
  return (
    <div className="testiPageContainer">
      <div className="testimonialGrid">
        <div className="aroundImage">
          <div className="anotherBorder">
            <div className="testImg"></div>
          </div>
        </div>

        <div className="teMonialTextGrid">
          <div className="bodyText">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                fill="currentColor"
                className="bi bi-quote quSizes"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
              </svg>
            </span>
            <p className=" ">
              {" "}
              Act now, think never, and assume Dad will run damage control
              later. They navigate life with zero foresight and absolute
              confidence, turning every routine walk into an unpredictable
              comedy routine and every quiet afternoon into a test of parental
              endurance. While their decision-making skills are completely
              non-existent, their commitment to pure, chaotic fun is
              unmatched—usually operating at the exact expense of our last
              remaining nerves. They might not be winning any logic awards, but
              they have successfully mastered the art of being so incredibly
              lovable that we gladly forgive the grey hairs they give us.
            </p>
          </div>
          <div className="signOff">
            <span>-Beeny&Sifi</span>
            <span className="bttStl">Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
