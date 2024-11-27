import BGImage from '../assets/images/stock-bg.png';

const Footer = () => {
  return (
    <footer className="relative flex flex-col gap-16 items-center bg-white text-slate-300 text-center py-4 w-screen text-black mt-8">
      <div className="flex justify-around items-center w-full text-black text-left">
        <div>
          <ul className="flex flex-col">
            <li className="text-slate-300">LEVELBRYTE</li>
            <li>Our Solution</li>
            <li>Our Work</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col">
            <li className="text-slate-300">SERVICES</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col">
            <li className="text-slate-300">QUESTIONS</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <p>&copy; 2021. All rights reserved. LevelBryte</p>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          opacity: 0.08,
          backgroundImage: `linear-gradient(to top, rgba(33, 139, 255, 0.05), rgba(0, 0, 0, 0.0)), url(${BGImage})`,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
