import week1 from "../images/week1.png";

const Header = () => {
  return (
    <div className="flex py-4 px-20 items-center">
      <img src={week1} alt="week-1" className="h-10" />
    </div>
  );
};

export default Header;
