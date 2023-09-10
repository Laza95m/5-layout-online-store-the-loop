import s from './Designs.module.css';
import people_three from '../../../assets/people_three.png';

const Designs = () => {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={people_three} alt="model_img" />
        <h2 className={s.title}>Коктейльное платье</h2>
        <p className={s.price}>₽ 40 000</p>
      </div>
    </>
  );
};

export default Designs;
