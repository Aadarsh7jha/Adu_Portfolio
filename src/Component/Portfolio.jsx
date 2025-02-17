import React from "react";
import ayushyam from "../Assets/ayushyam.webp";
import music from "../Assets/music.webp";
import webgenn from "../Assets/webgenn.webp";
import nodejs from "../Assets/node.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: ayushyam,
      name: "Ayushyam ",
      link:"https://github.com/Aadarsh7jha/Youtube",
      link2:"https://youtube-ten-alpha.vercel.app/"
    },
    {
      id: 2,
      logo: music,
      name: "MusicYogaUnion",
      link:"https://github.com/Aadarsh7jha/MusicYogaWeb",
      link2:"https://music-yoga-web.vercel.app/"
    },
    {
      id: 3,
      logo: webgenn,
      name: "Webgenn",
      link:"https://github.com/Aadarsh7jha/webgenn",
      link2:"https://website-woad-chi.vercel.app/"
    },
    
   
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="flex flex-cols md:flex-row items-center justify-center flex-wrap gap-6 my-5">
          {cardItem.map(({ id, logo, name ,link,link2}) => (
            <div
              className="md:w-[310px] w-[290px] md:h-auto border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100%] h-auto p-1  border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-semibold text-lg mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-4 py-3 space-x-3 flex justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold px-3 py-2 rounded">
                 <a target="_blank" href={link2}> Visit Website</a>
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold px-3 py-2 rounded">
                  <a target="_blank" href={link}>Source code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
