import homeIcon from "../assets/House.svg";
import trophy from "../assets/Trophy.svg";
import user from "../assets/User.svg";

const Footer = () => {
  return (
    <div className="md:hidden fixed bottom-0 right-0 left-0 mx-auto flex justify-around items-center py-3  border w-full h-[60px] bg-[#121212]">
      <div className="">
        <img src={homeIcon} alt="" />
      </div>
      <div className="">
        <img src={trophy} alt="" />
      </div>
      <div className="">
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Footer;
