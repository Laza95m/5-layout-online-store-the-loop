import s from './Clothes.module.css';
import arrow_right from '../../../assets/arrow_right.svg';

const Clothes = ({ titleBold, title, img }) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.block_one}>
          <h2 className={s.title}>
            <b className={s.bold_text}>{titleBold}</b> {title}
          </h2>
          <p className={s.text}>Обувь, полуверы, костюмы</p>
          <button className={s.btn}>
            <img src={arrow_right} alt="arrow_right" />
          </button>
        </div>
        <div className={s.block_two}>
          <img className={s.img} src={img} alt="peple_img" />
        </div>
      </div>
    </>
  );
};

export default Clothes;
