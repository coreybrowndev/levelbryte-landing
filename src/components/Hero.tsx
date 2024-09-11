import Logo from '../assets/banner.svg?react';
import './landingStyles.css';

const Hero = () => {
  return (
    <div className="flex relative w-full h-screen overflow-hidden flex justify-center items-center">
      <div className="absolute pt-20 z-10 h-full w-full text-center flex justify-center">
        <div className="absolute">
          <h1 className="text-7xl text-blue-800	font-medium">
            Your Vision, Our Expertise
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
      </div>
      <div className="absolute w-[500px] pt-20 rounded-xl">
        <Logo />
      </div>
      <div className="styled-container"></div>
    </div>
  );
};

export default Hero;
