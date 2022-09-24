import logo from "../img/logo.svg";
import search from "../img/Header/search.svg";
import cart from "../img/Header/cart.svg";
import account from "../img/Header/account.svg";

export function Header() {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderNav />
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className="header__logo">
      <img className="logo" src={logo} />
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            Shop
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            Block
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            About us
          </a>
        </li>
        <li className="header__nav-item">
          <div className="header__nav-strip"></div>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            <img src={search} />
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            <img src={cart} />
          </a>
        </li>
        <li className="header__nav-item">
          <a href="#" className="header__nav-link">
            <img src={account} />
          </a>
        </li>
      </ul>
    </div>
  );
}
