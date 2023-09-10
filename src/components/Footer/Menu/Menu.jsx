import s from './Menu.module.css';

const Menu = ({ title, textOne, textTwo, textThree, textFour }) => {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.block}>
          <a href="#1" className={s.text}>
            {textOne}
          </a>
          <a href="#1" className={s.text}>
            {textTwo}
          </a>
          <a href="#1" className={s.text}>
            {textThree}
          </a>
          <a href="#1" className={s.text}>
            {textFour}
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
