/* eslint-disable no-unused-vars */
import React from "react";
import images from "../Review/Group 4.svg";
import images1 from "../Review/image 18.svg";
import images2 from "../Review/image 27.svg";
const Review = () => {
  return (
    <div className=" min-h-screen bg-teal-50">
        <div className="pt-20 w-full max-w-[1400px] mx-auto">

        
      {/* <div className=''>
                <h1>ok</h1>
            </div>
            
            <div className=" ">
            <img
              className="w-[420px] mx-auto "
              src={images}
              data-aos="fade-up"
              alt=""
            />
          </div> */}
      <div className="max-w-[1400px] mx-auto pt-12 flex">
        <div className="w-1/2 mr-20">
          <div>
            <h3 className="text-3xl font-bold py-3">
            Review from the best
            </h3>
          </div>
          <div className="text-sm">
            <p>
            Get review from the best professional coaches on our platfrom to improve <br /> your gameplay
            </p>
          </div>
          <div>
            <img className="w-[200px]" src={images1} alt="" />
            <div className="flex ">
            <button className="bg-violet-950 ml-10 text-white rounded w-32 h-8">
             Join Now
            </button>
            <img className="w-[300px] pl-52" src={images2} alt="" />
            </div>
          </div>
          <div className="">
            
          </div>
        </div>
        {/* right side image */}
        <div className="mr-6 justify-end">
        <img
              className="w-[800px] pb-40 mx-auto "
              src={images}
             
              alt=""
            />
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Review;
