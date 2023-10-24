"use client";
import React, { memo, useContext, useEffect, useState } from "react";
import { Central } from "../components/Wrapper";
import { getNewsBySearchKeyword } from "../utils/fetch";
import NewsContainer from "../components/NewsContainer";
const page = () => {
  const d = useContext(Central);
  const { searchKeyWord } = d;

  const [page, setPage] = useState(0);
  const {news ,setnews} = useContext(Central)

  const getNews = async (page) => {
    const d = await getNewsBySearchKeyword(page, searchKeyWord);
    setnews((pre) => [...pre, ...d]);
    // console.log(d);
  };

  const infiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        
        setPage((prev) => prev + 1);
        console.log("bottom reached");
        console.log(">>>>>>>>>>>>", page);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  useEffect(() => {
    getNews(page);
  }, [page]);

  return (
    <div className="mt-16 mx-auto min-h-[100vh] w-[95vw] md:w-[80vw] bg-gray-100">
      <NewsContainer news={news} />
    </div>

  );
};

export default memo(page);
