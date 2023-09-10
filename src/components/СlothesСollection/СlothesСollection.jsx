import s from './СlothesСollection.module.css';
import Clothes from './Clothes/Clothes';
import people_one from '../../assets/people_one.png';
import people_two from '../../assets/people_two.png';

const СlothesСollection = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.container}>
          <Clothes titleBold={'МУЖСКАЯ'} title={'КОЛЛЕКЦИЯ'} img={people_one} />
          <Clothes titleBold={'ЖЕНСКАЯ'} title={'КОЛЛЕКЦИЯ'} img={people_two} />
        </div>
      </section>
    </>
  );
};

export default СlothesСollection;
