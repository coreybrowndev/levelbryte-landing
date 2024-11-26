import './header.css';

const Header = () => {
  return (
    <header className="header-wrapper flex items-center justify-between bg-inherit rounded-3xl border border-slate-200 fixed h-14 w-96 px-4 z-20">
      <p>Logo goes here</p>
      <nav>
        <ul className="list-none">
          <li>Lets Talk</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
