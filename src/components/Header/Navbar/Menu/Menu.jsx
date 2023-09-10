import s from './Menu.module.css';
import arrow_down from '../../../../assets/arrow_down.svg';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { useState } from 'react';

const Menu = ({ text }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className={s.container}>
        <p onClick={() => setOpenMenu(!openMenu)} className={s.text}>
          {text}
        </p>
        <img className={s.arrow_down} src={arrow_down} alt="down_arrow_img" />
        <div className={s.box}>
          <DropdownMenu active={openMenu} setActive={setOpenMenu} text={text} />
        </div>
      </div>
    </>
  );
};

export default Menu;
