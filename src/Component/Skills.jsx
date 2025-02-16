import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.jpg";
import javascript from "../Assets/javascript.png";
import mongoDB from "../Assets/mongodb.jpg";
import express from "../Assets/express.png";
import reactjs from "../Assets/reactjs.png";
import nodejs from "../Assets/node.png";
import Tailwind from "../Assets/tailwind.webp";
import Next from "../Assets/next.webp";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
        id: 4,
        logo: Tailwind,
        name: "Tailwind css",
      },
    {
        id: 7,
        logo: reactjs,
        name: "ReactJS",
      },
      {
        id: 8,
        logo: nodejs,
        name: "NodeJS",
      },
    
      {
        id: 6,
        logo: express,
        name: "Express",
      },
      {
        id: 5,
        logo: mongoDB,
        name: "MongoDB",
      },
      {
        id: 5,
        logo: Next,
        name: "Next js",
      },

    
   
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  mb-5">
          I have more than 2 years of experiance in below technologies.
        </p>
        <div className="flex md:flex-row items-center justify-center flex-wrap gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] md:w-[150px] md:h-[150px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[100px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
