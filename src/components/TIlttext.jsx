import React from "react";

const TIlttext = (props) => {
  return (
    <div
      id="tilt"
      ref={props.abc}
      className="absolute top-72 left-20 text-white text-6xl flex flex-col gap-3"
    >
      <h1 className="font-[anzo3]">
        I AM <span className="text-gray-700 font-[anzo3]">DARK MODE</span>
      </h1>
      <h1 className="font-[anzo1] text-[180px] leading-[8vw] tracking-wider text-amber-600">
        DEVELOPER
      </h1>
      <h1 className="font-[anzo3]">TO HIRE</h1>
    </div>
  );
};

export default TIlttext;
