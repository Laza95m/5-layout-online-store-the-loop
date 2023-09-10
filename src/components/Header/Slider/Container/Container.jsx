import s from './Container.module.css';

const Container = () => {
  return (
    <>
      <div className={s.container_one}>
        <h2 className={s.text}>Зимняя распродажа</h2>
        <h1 className={s.title}>СКИДКИ ДО 90%</h1>
        <button className={s.btn}>СМОТРЕТЬ МОДЕЛИ</button>
      </div>
      <div className={s.container_two}>
        <h3 className={s.old_price}>9 900 ₽ </h3>
        <h2 className={s.new_price}>1 900 ₽ </h2>
      </div>
    </>
  );
};

export default Container;
