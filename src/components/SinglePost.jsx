import React from "react";
import { useLocation } from "react-router-dom";
import "../css/SinglePost.css";
export default function SinglePost() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b> Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          eius officia excepturi odio sed ut, odit iste voluptates delectus,
          iure inventore. Quaerat blanditiis enim eos eveniet, necessitatibus
          nemo modi iure. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ullam adipisci provident rem inventore. Odit, earum, non rem
          itaque qui accusamus illo, enim dolore odio vitae temporibus at fugit
          aut. Quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Minus suscipit illo maxime voluptatibus reprehenderit ea
          excepturi odit rerum, veniam fuga et dolor, eius, ipsa quia voluptas
          doloremque. Expedita, atque magni. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Dolor, iste officiis laborum eaque
          explicabo, culpa architecto nesciunt assumenda eligendi at qui
          excepturi nostrum facilis blanditiis autem beatae ullam tempore
          delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Temporibus eius officia excepturi odio sed ut, odit iste voluptates
          delectus, iure inventore. Quaerat blanditiis enim eos eveniet,
          necessitatibus nemo modi iure. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam adipisci provident rem inventore. Odit, earum,
          non rem itaque qui accusamus illo, enim dolore odio vitae temporibus
          at fugit aut. Quibusdam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Minus suscipit illo maxime voluptatibus
          reprehenderit ea excepturi odit rerum, veniam fuga et dolor, eius,
          ipsa quia voluptas doloremque. Expedita, atque magni. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Dolor, iste officiis
          laborum eaque explicabo, culpa architecto nesciunt assumenda eligendi
          at qui excepturi nostrum facilis blanditiis autem beatae ullam tempore
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Temporibus eius officia excepturi odio sed ut, odit iste voluptates
          delectus, iure inventore. Quaerat blanditiis enim eos eveniet,
          necessitatibus nemo modi iure. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam adipisci provident rem inventore. Odit, earum,
          non rem itaque qui accusamus illo, enim dolore odio vitae temporibus
          at fugit aut. Quibusdam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Minus suscipit illo maxime voluptatibus
          reprehenderit ea excepturi odit rerum, veniam fuga et dolor, eius,
          ipsa quia voluptas doloremque. Expedita, atque magni. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit.
          <br /> <br />
          <em>
            {" "}
            hello Dolor, iste officiis laborum eaque explicabo, culpa architecto
            nesciunt assumenda eligendi at qui excepturi nostrum facilis
            blanditiis autem beatae ullam tempore Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus eius officia excepturi odio
            sed ut, odit iste voluptates delectus, iure inventore. Quaerat
            blanditiis enim eos eveniet, necessitatibus nemo modi iure. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci
            provident rem inventore. Odit, earum, non rem itaque qui accusamus
            illo, enim dolore odio vitae temporibus at fugit aut. Quibusdam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            suscipit illo maxime voluptatibus reprehenderit ea excepturi odit
            rerum, veniam fuga et dolor, eius, ipsa quia voluptas doloremque.
            Expedita, atque magni. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolor, iste officiis laborum eaque explicabo,
            culpa architecto nesciunt assumenda eligendi at qui excepturi
            nostrum facilis blanditiis autem beatae ullam tempore Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Temporibus eius officia
            excepturi odio sed ut, odit iste voluptates delectus, iure
            inventore. Quaerat blanditiis enim eos eveniet, necessitatibus nemo
            modi iure.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            adipisci provident rem inventore. Odit, earum, non rem itaque qui
            accusamus illo, enim dolore odio vitae temporibus at fugit aut.
            Quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Minus suscipit illo maxime voluptatibus reprehenderit ea excepturi
            odit rerum, veniam fuga et dolor, eius, ipsa quia voluptas
            doloremque. Expedita, atque magni. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolor, iste officiis laborum eaque
            explicabo, culpa architecto nesciunt assumenda eligendi at qui
            excepturi nostrum facilis blanditiis autem beatae ullam tempore
          </em>
        </p>
      </div>
    </div>
  );
}
