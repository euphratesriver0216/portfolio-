import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <h1 className="tx ">HTML</h1>
            <p className="my-4">
              CSS, JAVASCRIPT와의 연동성을 고려한 구조설계와 개발이 가능합니다.
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
            <p>
              필요한 요소들을 BLOCK, FLEX, BOOTSTRAP 등을 이용하여 배치가
              가능하며, KEYFRAME을 이용한 애니메이션 효과 적용을 경험해봤습니다.
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
            <p>
              JAVASCRIPT 를 숙련도를 높여나가는 단계이며 간단한 알고리즘을 한
              프론트엔드의 개발이 가능합니다.
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
            <p>
              라이프사이클을 이해하고 있으며 Function Component 활용 가능합니다.
              Jsx 문법 활용가능, redux 를 활용한 state 관리가 가능합니다.
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
            <p>
              GitHub에서 단체(Organization) 구성하여 작업이 가능합니다. GIT -
              CLI 를 활용할 수 있습니다.
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>

            <p>NODE JS를 프론트로 연동하여 개발할 수 있습니다.</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">AWS</p>
            <p>EC2를 통해 배포가 가능합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
