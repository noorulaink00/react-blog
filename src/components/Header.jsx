// eslint-disable-next-line no-unused-vars
import React from "react";
import "../css/Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlessm">React and Node </span>
        <span className="headerTitleslg">Blog</span>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRU62lQqYAVIXU1sokvE7JZ3oA0_xSRNaTFup0fnD3nMZXxNv8kfLZW2sJAGoNc36bmWY&usqp=CAU"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
