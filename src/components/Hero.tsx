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
      <div className="absolute z-10 h-full w-full text-center flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-7xl text-blue-800	font-medium">
            Your Vision, Data Driven
          </h1>
          <h3 className="text-5xl mt-4 font-normal ">
            We build digital products
          </h3>
          <ul className="flex my-6 items-center justify-center list-disc">
            <li className="mx-6">Design</li>
            <li className="mx-6">Development</li>
            <li className="mx-6">Knowledge</li>
          </ul>
        </div>
        <div className="w-[500px] rounded-xl">
          <Logo />
        </div>
      </div>
      <div className="styled-container"></div>
    </div>
  );
};

export default Hero;
