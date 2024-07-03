import banner from "../assets/banner.jpeg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="h-[470px] relative mt-[40px]">
      <div className="absolute z-10 inset-0 banner"></div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "0% 0%",
          borderRadius: "48px",
        }}
        className="bg-cover absolute inset-0 h-[470px]"
      ></div>
    </div>
  );
};

export default Banner;
