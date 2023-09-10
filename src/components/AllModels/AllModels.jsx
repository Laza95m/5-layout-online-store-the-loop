import s from './AllModels.module.css';
import Designs from './Designs/Designs';
import arrow_right from '../../assets/arrow_right.svg';

const AllModels = ({ title }) => {
  return (
    <>
      <section className={s.section}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.container}>
          <Designs />
          <Designs />
          <Designs />
          <Designs />
        </div>
        <button className={s.btn}>
          ВСЕ МОДЕЛИ <img src={arrow_right} alt="arrow_right_img" />
        </button>
      </section>
    </>
  );
};

export default AllModels;
