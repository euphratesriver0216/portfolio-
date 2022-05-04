import React from "react";
import Haemin from "../assets/Haemin.jpg";
import { AiOutlineCheck } from "react-icons/ai";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#333f58] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"></div>
          <div className="sm:text-right text-4xl font-bold">
            <p>안녕하세요!</p>
            <p>
              길을 만들어 나가는 <br /> 웹개발자 박해민입니다.
            </p>
            <div className="img">
              <img
                src={Haemin}
                className="shadow-lg shadow-[#040c16] rounded-md mx-auto "
              />
            </div>
          </div>
          <div>
            <p className="text-3xl">
              어려운 문제를 만나고 해결해 나가는 과정에 서 배우고 성취감을
              느끼는 개발자 입니다.
            </p>
            <ul>
              <li className="text-1xl">
                <AiOutlineCheck size={25} />
                디테일을 놓치지 않기 위해 구현한 기능에 취약점이 있지 않은지
                관심을 갖고 완전한 해결을 위해 노력하는 편입니다.
              </li>
              <li>
                <AiOutlineCheck size={25} />
                Git, GitHub, GitDesktop 협업툴 사용 경험
              </li>
              <li>
                <AiOutlineCheck size={25} />
                교류와 협력을 좋아하며 소통을 중시하는 성격
              </li>
              <li>
                <AiOutlineCheck size={25} />
                블록체인 기반 핀테크 및 응용 SW개발자 양성과정 수료
                (2021.08.05~2022.05.13)
              </li>
              <li>
                <AiOutlineCheck size={25} />
                euphratesmin@gmail.com
              </li>
              <li>
                <AiOutlineCheck size={25} />
                010-3108-0377
              </li>
              <li>
                <AiOutlineCheck size={25} />
                서울특별시 강동구
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
