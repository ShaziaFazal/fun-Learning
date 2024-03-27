import Badge from "./Badge";
import Girl from "../images/girl.png";
import cloud1 from "../images/clouds/cloud1.png";
import cloud2 from "../images/clouds/cloud2.png";
import cloud3 from "../images/clouds/cloud3.png";
import cloud4 from "../images/clouds/cloud4.png";
import cloud5 from "../images/clouds/cloud5.png";

const StoryElements = () => {
  const imgClass = "w-32 h-24 lg:w-40 lg:h-full ";
  return (
    <div className="mb-4 items-center ">
      <div className="flex justify-center">
        <Badge title="Elements of Story Writing"></Badge>
      </div>
      <p>
        Welcome to term 2 of Writers Club. Are you excited for this amazing
        journey?
      </p>
      <p>
        Over the next week, we will be practicing the different elements of
        story writing. Our aim is to make stories more interesting and exciting.
      </p>

      <div className="p-2 my-4 ">
        <div className="bg-[#25A3A1] px-3 border-2 border-gray-300 border-dashed flex gap-12 items-center">
          <p className="text-white">
            There are five elements which make the foundation for story writing.
            An element is an essential part of something and every fiction story
            has the same key elements:
          </p>
          <img src={Girl} alt="girl" />
        </div>

        <div className="flex justify-between py-4 gap-2">
          <img src={cloud1} className={imgClass} alt="1" />
          <img src={cloud2} className={imgClass} alt="2" />

          <img src={cloud3} className={imgClass} alt="3" />

          <img src={cloud4} className={imgClass} alt="4" />

          <img src={cloud5} className={imgClass} alt="5" />
        </div>
      </div>
      <p>
        You must be familiar with some of these. If not, do not worry! We will
        cover all these elements as we go along.
      </p>
    </div>
  );
};

export default StoryElements;
