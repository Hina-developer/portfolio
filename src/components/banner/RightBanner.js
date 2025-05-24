import React from 'react';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Hide on screens smaller than 1024px */}
      <img
        className="w-[300px] h-[200px] lgl:w-[480px] lgl:h-[480px] z-10 hidden lg:block" // Hide on screens smaller than lg (1024px)
        src="./logo.png"
        alt="bannerImg"
      />
      {/* Show on screens larger than or equal to 1024px */}
      <div className="absolute bottom-1 w-[350px] h-[300px] lgl:w-[510px] lgl:h-[500px]  shadow-shadowOne flex justify-center items-center hidden lg:block"></div>
    </div>
  );
}

export default RightBanner;