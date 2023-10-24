"use client";
import React, { createContext, memo, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Nev from "./Nev";

export const Central = createContext(null);

const Wrapper = ({ children }) => {
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [news, setnews] = useState([]);
  const [loading, setLoading] = useState(false)
  const [searchedNews, setSearchedNews] = useState([])

  return (
    <NextUIProvider>
      <Central.Provider
        value={{searchKeyWord, setSearchKeyWord , news, setnews , loading, setLoading,
          searchedNews, setSearchedNews
        }}
      >
        <Nev />
        {children}
      </Central.Provider>
    </NextUIProvider>
  );
};

export default memo(Wrapper);
