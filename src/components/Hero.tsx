import Logo from '../assets/banner.svg?react';
import './landingStyles.css';
import BGImage from '../assets/images/hero-bg.png';

const Hero = () => {
  return (
    <div className="flex relative w-screen h-screen overflow-hidden justify-center items-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transform rotate-180"
        style={{
          backgroundImage: `url(${BGImage})`,
          opacity: 0.2,
        }}
      ></div>
      <div className="absolute z-10 h-full w-full text-center flex flex-col justify-center items-center pt-44">
        <div className="flex flex-col w-full">
          <h1 className="text-5xl md:text-7xl text-blue-800	font-medium text-wrap">
            Your Vision, Data Driven
          </h1>
          <h3 className="text-5xl mt-4 font-normal ">
            We build digital products
          </h3>
          <ul className=" flex flex-col md:flex-row gap-2 my-6 items-center justify-center">
            <li className="mx-6 text-white py-0.5 px-6 rounded-3xl bg-blue-600">
              Design
            </li>
            <li className="mx-6 text-white py-0.5 px-6 rounded-3xl bg-blue-600">
              Development
            </li>
            <li className="mx-6 text-white py-0.5 px-6 rounded-3xl bg-blue-600">
              Knowledge
            </li>
          </ul>
        </div>
        <div className="hidden w-[500px] rounded-xl">
          <Logo />
        </div>
      </div>
      <div className="styled-container"></div>
    </div>
  );
};

export default Hero;
