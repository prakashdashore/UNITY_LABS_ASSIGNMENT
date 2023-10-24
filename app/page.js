"use client";
import React, { memo } from "react";
import Home from "./components/Home";

const page = () => {

  return (
    <div className="mt-16 mx-auto min-h-[100vh] w-[95vw] md:w-[80vw] bg-gray-100">
      <Home/>
    </div>
  );
};

export default memo(page);
