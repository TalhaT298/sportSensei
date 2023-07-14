/* eslint-disable no-unused-vars */
import React from "react";
import line from "../Work/Group 12.png";
import line1 from "../Work/Group 8.svg";
import line2 from "../Work/Group 9.svg";
import line3 from "../Work/Group 10.svg";
import line4 from "../Work/Group 11.svg";

const Work = () => {
  return (
    <div className="min-h-screen bg-cyan-50">
  <div className="max-w-[1400px] mx-auto py-12 pl-10">
    <div className="flex items-center justify-center">
      <img className="" src={line} alt="" />
    </div>
    <div className="flex flex-wrap justify-between pt-10">
      <img className="w-[320px]" src={line1} alt="" />
      <img className="w-[320px]" src={line2} alt="" />
      <img className="w-[320px]" src={line3} alt="" />
      <img className="w-[320px]" src={line4} alt="" />
    </div> 
  </div>
</div>

  );
};

export default Work;
