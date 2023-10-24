"use client";
import React, { memo, useContext } from "react";
import Link from "next/link";
import { Central } from "./Wrapper";
import Spinner from "./Spinner"
const List = ({ content })=>{
  const {loading} = useContext(Central)
  return (
    <>
    <div>
      {content ? (
        <Link   key={content.objectID}  href={`/details/${content.objectID}`}>
        <div key={content.objectID} className="w-full mt-5  ">
          <div className="text-2xl font-bold">{content.title}</div>
          <div className="">
            <span className="text-gray-500">Author: {content.author}</span>
            <span className="text-gray-500"> | </span>
            <span className="text-gray-500">
              Comments: {content.num_comments}
            </span>
            <span className="text-gray-500"> | </span>
            <span className="text-gray-500">Points: {content.points}</span>
          </div>
        </div>
        
        </Link>
      ) : (
        <Spinner/>
      )}
    </div>
    </>
  );
}

export default memo(List)