"use client";
import React, { memo } from "react";
import List from "./list";

const NewsContainer = ({ news }) => {
  return (
    <div>
      {news && news.map((items, i) => <List key={i} content={items} />)}
    </div>
  );
};

export default memo(NewsContainer);
