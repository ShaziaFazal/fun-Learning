import React from "react";
import HomeIcon from "./icons/home";
import ClockIcon from "./icons/clock";
import CrossIcon from "./icons/crossIcon";

function HintModal({ isVisible, onCancel }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative h-[80svh] w-[80%] transform overflow-hidden rounded-lg bg-black bg-opacity-30 text-white border-2 border-white shadow-xl transition-all sm:my-8 ">
            <div class=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div onClick={onCancel} className="flex justify-end">
                <CrossIcon />
              </div>
              <h2 className="text-2xl font-semibold text-white text-center">
                Guide Sheet
              </h2>
              <div className="mt-[10%]">
                <div className="text-center font-bold mb-2">
                  So, what do you think the definition of setting is?
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-center  whitespace-nowrap">Any guesses?</p>
                  <div className="border-2 border-gray-300 bg-white border-dashed pb-2 w-full rounded-lg">
                    <p className="border-b-2 text-black text-start w-full px-3">
                      Setting is the time and place of a story.
                    </p>
                  </div>
                  <p> Hint:</p>
                  <HomeIcon />
                  <ClockIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HintModal;
