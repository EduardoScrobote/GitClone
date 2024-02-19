import React from "react";
import Header from "./components/Header";
import ContentBox from "./components/AlbumContent/ContentBox";

function RightContent() {
  return (
    <div className="flex flex-col w-full p-4">
      <Header />
      <ContentBox />
    </div>
  );
}

export default RightContent;
