import React from "react";
import { sanket11pic } from "../../assets/index";
import { sanimg } from "../../assets/index";


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        // className="w-[485px] h-[400px] lgl:w-[500px] lgl:h-[545px] z-10"
        className="w-[415px] h-[470px] lgl:w-[375px] lgl:h-[480px] z-10"
        //  src={sanket11pic}
        // src={sanketprofile}
        src={sanimg}
        alt="sanketpic"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[] to-[] shadow-shadowOne flex justify-center items-center"></div>
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};
export default RightBanner;
