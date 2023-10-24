"use client";
import React, { memo, useContext, useEffect, useState } from "react";
import { getRandomNews } from "../utils/fetch";
import NewsContainer from "./NewsContainer";
import { Central } from "./Wrapper";

const Home = () => {
  const [page, setPage] = useState(0)
  const {news, setnews ,setLoading} =  useContext(Central)


  const getNews = async (page) => {
    const d = await getRandomNews(page);
    setnews( (pre)=> [...pre, ...d]);
    setLoading(false)
    // console.log(d);
  };

  const infiniteScroll = async ()=>{
    try {

      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        setPage((prev)=> prev + 1)
        setLoading(true)
        // console.log("bottom reached")
        // console.log(">>>>>>>>>>>>"   ,page)
      }
      
    } catch (error) {
      console.log(error.message)
      
    }

  }

  useEffect(()=>{
    window.addEventListener('scroll', infiniteScroll)
    
    return ()=>{
      window.removeEventListener('scroll',infiniteScroll)
    }

  },[])

  useEffect(()=>{
    getNews(page)
  }, [page]);

  return <NewsContainer news={news}/>
  
};


export default memo(Home);
