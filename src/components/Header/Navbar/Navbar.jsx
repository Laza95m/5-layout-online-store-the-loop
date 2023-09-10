import s from './Navbar.module.css';

import logo from '../../../assets/logo_one.png';
import basket from '../../../assets/basket.svg';
import arrow_left from '../../../assets/arrow_left.svg';
import burger_menu_open from '../../../assets/burger_menu_open.svg';

import BurgerMenu from './BurgerMenu/BurgerMenu';
import Menu from './Menu/Menu';
import { useState } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <BurgerMenu active={menuActive} setActive={setMenuActive} />
      <nav className={s.nav}>
        <div className={s.container_one}>
          <div className={s.block_one}>
            <Menu text="Для мужчин" />
            <Menu text="Для женщин" />
            <Menu text="Для детей" />
          </div>
          <div className={s.block_two}>
            <a href="#1" className={s.logo}>
              <img src={logo} alt="logo_img" />
            </a>
            <div className={s.box_two}>
              <p className={s.text}>Оплата</p>
              <p className={s.text}>Доставка</p>
            </div>
          </div>
        </div>
        <div className={s.container_two}>
          <img className={s.basket} src={basket} alt="basket_img" />
          <img className={s.arrow_left} src={arrow_left} alt="arrow_left_img" />
          <img
            className={s.burger_menu_open}
            src={burger_menu_open}
            alt="burger_menu_open_img"
            onClick={() => setMenuActive(!menuActive)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
