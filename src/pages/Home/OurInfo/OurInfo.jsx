import { FaCalendarDays, FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

const OurInfo = () => {
  return (
    <div className="stats shadow my-24 w-full justify-evenly h-[250px] bg-[#151515]">
      <div className="stat flex items-center">
        <div className="text-red-500 text-5xl">
          <FaCalendarDays />
        </div>
        <div className="text-white">
          <p className="">We are open monday-friday</p>
          <h3 className="text-2xl">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="stat flex items-center">
        <div className="text-red-500 text-5xl">
          <FaPhoneVolume />
        </div>
        <div className="text-white">
          <p className="">Have a question?</p>
          <h3 className="text-2xl">+2546 251 2658</h3>
        </div>
      </div>
      <div className="stat flex items-center">
        <div className="text-red-500 text-5xl">
          <FaLocationDot />
        </div>
        <div className="text-white">
          <p className="">Need a repair? Our address</p>
          <h3 className="text-2xl">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;
