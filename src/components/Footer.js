import User from "../components/icons/user";
import Info from "../components/icons/info";
import LeftIcon from "../components/icons/leftIcon";
import RightIcon from "../components/icons/rightIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();

  const incrementCounter = () => {
    setCounter(2);
    navigate(`/slide`);
  };

  const decrementCounter = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <User />

      <div className="flex items-center gap-4">
        <button onClick={decrementCounter}>
          <LeftIcon />
        </button>
        <div className="bg-[#AA1070] font-semibold text-xl border rounded-xl flex items-center">
          <div className="px-4 py-2 text-white border-r border-gray-400">
            {window.location.pathname === "/slide" ? 2 : 1}
          </div>
          <div className="px-2">
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.02662 4.00803C5.05789 3.96147 5.09318 3.91728 5.13216 3.87589C6.47861 2.63904 7.82632 1.4029 9.1753 0.167445C9.29982 0.0530338 9.43612 -0.0196466 9.61645 0.00469609C9.69493 0.0162044 9.76877 0.0463245 9.83061 0.0920639C9.89246 0.137803 9.94017 0.19757 9.96899 0.265427C9.99782 0.333283 10.0068 0.406867 9.99492 0.478869C9.98309 0.55087 9.9509 0.618783 9.90154 0.67586C9.86814 0.712653 9.83227 0.747496 9.79411 0.780186L5.39563 4.80821C5.11584 5.06485 4.88654 5.06381 4.60485 4.80578C3.13186 3.45673 1.65861 2.10791 0.185108 0.759321C0.0564109 0.64178 -0.0252089 0.513111 0.00706023 0.342017C0.0212063 0.271429 0.0549883 0.205377 0.105139 0.15024C0.15529 0.0951036 0.220115 0.0527464 0.293355 0.0272603C0.366595 0.00177422 0.445775 -0.00597919 0.523241 0.00474915C0.600707 0.0154775 0.67384 0.0443247 0.735582 0.0885045C0.778872 0.122181 0.819945 0.158179 0.858584 0.196308L4.88578 3.88597C4.92185 3.91901 4.95981 3.9503 5.02662 4.00803Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <button onClick={incrementCounter} disabled={counter === 2}>
          <RightIcon />
        </button>
      </div>
      <Info />
    </div>
  );
};

export default Footer;
