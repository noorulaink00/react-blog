/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import "../css/Posts.css";
import Post from "./Post";
import  postdata  from "../data";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={postdata} />
      ))}
     
    </div>
  );
}
