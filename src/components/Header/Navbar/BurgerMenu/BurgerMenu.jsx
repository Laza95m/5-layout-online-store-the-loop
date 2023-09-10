import s from './BurgerMenu.module.css';
import burgerMenuClose from '../../../../assets/burger_menu_close.svg';
// import Menu from '../Menu/Menu';

const BurgerMenu = ({ active, setActive }) => {
  return (
    <>
      <aside
        className={active ? `${s.burger_menu} ${s.active}` : s.burger_menu}
        onClick={() => setActive(false)}
      >
        <div className={s.container} onClick={(e) => e.stopPropagation()}>
          <div className={s.box_one}>
            <img
              className={s.burger_menu_close}
              src={burgerMenuClose}
              alt="burger_menu_close"
              onClick={() => setActive(false)}
            />
          </div>
          <div className={s.box_two}>
            <p className={s.text}>Для мужчин</p>
            <p className={s.text}>Для женщин</p>
            <p className={s.text}>Для детей</p>
            <p className={s.text}>Оплата</p>
            <p className={s.text}>Доставка</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BurgerMenu;
