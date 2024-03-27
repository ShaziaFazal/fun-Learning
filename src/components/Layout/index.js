import React, { useState } from "react";
import HintIcon from "../../components/icons/hintIcon";
import HintModal from "../HintModal";

const Layout = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  return (
    <div
      className=" mx-auto px-16 py-4 bg-cover bg-no-repeat bg-fixed relative"
      style={{
        backgroundImage: `url(${require("../../images/background.png")})`,
      }}
    >
      <div onClick={handleOpenModal} className="absolute right-0 top-[40%]">
        <HintIcon />
      </div>
      <HintModal isVisible={isModalVisible} onCancel={handleCloseModal} />
      {props.children}
    </div>
  );
};
export default Layout;
