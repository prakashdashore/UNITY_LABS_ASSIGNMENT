"use client";
import { Central } from "@/app/components/Wrapper";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { memo, useContext, useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

const page = () => {
  const { objectID } = useParams();
  const [details, setdetails] = useState([]);
  const [singleStory, setsingleStory] = useState(null);
  const { news,searchedNews } = useContext(Central);


  // console.log("sikdjfk" , singleStory)
  const getRandomSingleStory = () => {
    news.map((e) => {
      e.objectID === objectID && setsingleStory(e);
    });
  };
  const getSearchedSingleStory = () => {
    searchedNews.map((e) => {
      e.objectID === objectID && setsingleStory(e);
    });
  };


  const getNews = async () => {
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/items/${objectID}`
    );
    setdetails(data.children);
  };

  useEffect(() => {
    getNews();
    getRandomSingleStory();
    getSearchedSingleStory();
  }, []);

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  const getDetails = (rowDate) => {
    let time = String(rowDate).split("T")[1].slice(0, 8);
    let updatedTime = tConvert(time);

    var dateString = `/Date(${rowDate})/`.substr(6);
    var currentTime = new Date(parseInt(dateString));
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var date = day + "/" + month + "/" + year;
    return `${date} at ${updatedTime}`;
  };

  return (
    <>
      <div
        className="mt-20 mx-auto min-h-[100vh] w-[95vw] md:w-[80vw] 
      0"
      >
        <div className=" mt-5 w-full flex items-center justify-center">
          {singleStory ? (
            <div>
              <div className="text-3xl font-bold ">{singleStory?.title}</div>
              <div className="font-semibold">Ponts : {singleStory?.points}</div>
            </div>
          ) : (
            ""
          )}
        </div>

        {details &&
          details.map((e) => {
            return (
              <>
                {e.children.length > 1 ? (
                  <div  key={e.objectID} className=" w-[100%] relative min-h-[500px] md:min-h-[300px]   mt-10  overflow-x-hidden">
                    <div className="flex items-center  overflow-x-hidden">
                      <BiSolidDownArrow />
                      <h1 className="text-2xl">
                        <span className="font-bold">{e?.author}</span>{" "}
                        <span className="font-extralight">
                          on {getDetails(e?.created_at)}
                        </span>
                      </h1>
                    </div>
                    <p className="mt-5">{e?.text}</p>

                    {e.children.length > 1
                      ? e.children.map((e) => {
                          return (
                            <div   key={e.objectID} className="w-full 0 px-5 overflow-x-hidden">
                              <div className="mt-5 px-5 overflow-x-hidden">
                                <div className="flex items-center overflow-x-hidden">
                                  <BiSolidRightArrow />
                                  <h1>
                                    <span className="font-bold">
                                      {e?.author}
                                    </span>{" "}
                                    <span className="font-extralight">
                                      on {getDetails(e?.created_at)}
                                    </span>
                                  </h1>
                                </div>
                                <div className="whitespace-pre-wrap px-5 overflow-hidden">
                                  {e?.text}
                                </div>
                              </div>

                              {e.children.length > 1
                                ? e.children.map((e) => {
                                    return (
                                      <div   key={e.objectID} className="w-full 0 px-5 overflow-x-hidden">
                                        <div className="mt-5 px-5 overflow-x-hidden">
                                          <div className="flex items-center overflow-x-hidden">
                                            <BiSolidRightArrow />

                                            <h1>
                                              <span className="font-bold">
                                                {e?.author}
                                              </span>{" "}
                                              <span className="font-extralight">
                                                on {getDetails(e?.created_at)}
                                              </span>
                                            </h1>
                                          </div>
                                          <p>{e?.text}</p>
                                        </div>

                                        {e.children.length > 1
                                          ? e.children.map((e) => {
                                              return (
                                                <div   key={e.objectID} className="w-full 00 px-5">
                                                  <div className="mt-5 px-5 overflow-x-hidden">
                                                    <div className="flex items-center overflow-x-hidden">
                                                      <BiSolidDownArrow />
                                                      <h1 className="text-2xl">
                                                        <span className="font-bold">
                                                          {e?.author}
                                                        </span>{" "}
                                                        <span className="font-extralight">
                                                          on{" "}
                                                          {getDetails(
                                                            e?.created_at
                                                          )}
                                                        </span>
                                                      </h1>
                                                    </div>
                                                    <p>{e?.text}</p>
                                                  </div>

                                                  {e.children.length > 1
                                                    ? e.children.map((e) => {
                                                        return (
                                                          <div key={e.objectID} className="w-full 00 px-5">
                                                            <div className="mt-5 px-10 overflow-x-hidden">
                                                              <div className="flex items-center overflow-x-hidden">
                                                                <BiSolidDownArrow />
                                                                <h1 className="text-2xl">
                                                                  <span className="font-bold">
                                                                    {e?.author}
                                                                  </span>{" "}
                                                                  <span className="font-extralight">
                                                                    on{" "}
                                                                    {getDetails(
                                                                      e?.created_at
                                                                    )}
                                                                  </span>
                                                                </h1>
                                                              </div>
                                                              <p>{e?.text}</p>
                                                            </div>
                                                          </div>
                                                        );
                                                      })
                                                    : ""}
                                                </div>
                                              );
                                            })
                                          : ""}
                                      </div>
                                    );
                                  })
                                : ""}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
      </div>
    </>
  );
};

export default memo(page);
