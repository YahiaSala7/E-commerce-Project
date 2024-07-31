import React from "react";

function SkeletonProductInfo() {
  return (
    <div>
      <div className="w-[300px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[50px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[600px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[600px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[600px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[150px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[70px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
      <div className="w-[100px] h-[30px] rounded-lg bg-slate-200 animate-pulse "></div>
    </div>
  );
}

export default SkeletonProductInfo;
