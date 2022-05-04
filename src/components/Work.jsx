import React from "react";
import Mallang from "../assets/Mallang.png";
import Nft from "../assets/Nft.png";
import Wooks from "../assets/Wooks.png";
import Daitzo from "../assets/Daitzo.png";
import realEstate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#333f58]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Project's
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Nft})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                NFT MUSIC FLATFROM PROJECT
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() => window.open("http://3.39.234.167/")}
                  >
                    LINK
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      window.open("https://github.com/enum30-BlockChain/Musit")
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Wooks})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                REACT.JS PROJECT
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    LINK
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      window.open(
                        "https://github.com/pier101/PROJECT_WooksChilds"
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Mallang})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML/CSS/JS PROJECT
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      window.open(
                        "https://mallllllllllllang.netlify.app/index.html"
                      )
                    }
                  >
                    LINK
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      window.open(
                        "https://github.com/euphratesriver0216/HTML-CSS-JS-PROJECT"
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Daitzo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                NODE.JS PROJECT
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      window.open("https://daitzoshop.herokuapp.com/")
                    }
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    onClick={() =>
                      window.open(
                        "https://github.com/euphratesriver0216/NODEJS-PROJECT"
                      )
                    }
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
