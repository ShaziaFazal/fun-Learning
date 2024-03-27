import React from "react";
import DayImg from "../images/Group.png";
import NightImg from "../images/Mask group.png";
import Footer from "../components/Footer";
import Layout from "../components/Layout/index";
import HomeIcon from "../components/icons/home";
import ClockIcon from "../components/icons/clock";

function SlideTwo() {
  return (
    <Layout>
      <div className=" mt-12">
        <div className="bg-white rounded-lg p-6">
          <div className="text-2xl font-semibold my-4">
            Can you figure out the definition of setting from the following
            examples?
          </div>
          <div className="italic mb-2">(take a minute to think about this)</div>
          <div className="flex justify-around mb-4">
            <div>
              <div className="p-4 border-dashed border-2 border-gray-300">
                <img src={DayImg} alt="Sunny day at a beach" />
              </div>
              <p className="text-center mt-2">Sunny day at a beach</p>
            </div>
            <div>
              <div className="p-4 border-dashed border-2 border-gray-300">
                <img
                  className="mx-auto"
                  src={NightImg}
                  alt="A cold rainy night in a haunted house in October"
                />
              </div>
              <p className="text-center mt-2">
                A cold rainy night in a <br></br> haunted house in October
              </p>
            </div>
          </div>
          <div className="text-center font-bold mb-2">
            So, what do you think the definition of setting is?
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-center  whitespace-nowrap">Any guesses?</p>
            <div className="border-2 border-gray-300 border-dashed pb-2 w-full rounded-lg">
              <input className="border-b-2 outline-none focus:outline-none w-full"></input>
            </div>
            <p> Hint:</p>
            <HomeIcon />
            <ClockIcon />
          </div>

          <div className="p-4">
            <p className="bg-[#25A3A1] px-4 py-2 border-2 border-gray-300 border-dashed font-bold">
              Setting is the time and place of a story. It often answers the
              questions: when? and where?
            </p>
            <p className="my-2">
              The time of the story could be in the past, future, day, night,
              summer or winter. A story may take place in a school, a mall, a
              desert, an airplane or in a variety of other places.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}

export default SlideTwo;
