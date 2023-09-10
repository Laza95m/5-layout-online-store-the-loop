import s from './FreeDelivery.module.css';

const FreeDelivery = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.title}>
            <strong className={s.bold_text}>БЕСПЛАТНАЯ ДОСТАВКА</strong> ОТ
            3000₽
          </h2>
          <p className={s.text}>Сделайте заказ и получите подарок!</p>
        </div>
      </section>
    </>
  );
};

export default FreeDelivery;
