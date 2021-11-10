import s from "./Header.module.scss";
import logo from "../../images/logo.png";

function Header({ onChange, search }) {
  const menuList = ["Home", "Stars", "Popular", "Random recipe"];

  return (
    <header className={s.header}>
      <a href="#" className="logoLink">
        <img src={logo} className={s.logo} alt="Logo Cook" />
      </a>
      <input
        type="search"
        name="search"
        className={s.searchInput}
        id="search"
        value={search}
        onChange={onChange}
      />
      <nav className={s.navigation}>
        <ul className={s.navList}>
          {menuList.map((item, idx) => (
            <li key={idx} className={s.navItem}>
              <a href="#" className={s.navLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Header };
