import './header.css';
import Logo from '../assets/images/levelbryte-logo.png';

const Header = () => {
  return (
    <header className="header-wrapper flex items-center justify-between bg-inherit rounded-3xl fixed h-14 w-96 pr-4 z-20 mt-8">
      {/* <p>Logo goes here</p> */}
      <div className="h-20 w-32 flex items-center justify-center pt-2">
        <img src={Logo} alt="Levelbryte Logo" className="" />
      </div>
      <nav>
        <ul className="list-none">
          <li>
            <a
              className="bg-blue-500 text-white px-2 py-1 rounded-3xl hover:bg-slate-200 transition shadow-md"
              href="mailto:synsaattv@gmail.com"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
