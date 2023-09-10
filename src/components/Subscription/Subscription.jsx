import s from './Subscription.module.css';

const Subscription = () => {
  return (
    <>
      <section className={s.section}>
        <div className={s.container}>
          <h2 className={s.title}>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ</h2>
          <form className={s.form} action="#">
            <input
              className={s.btn_email}
              type="email"
              name=""
              id=""
              placeholder="Ваш e-mail"
            />
            <input
              className={s.btn_subscribe}
              type="button"
              value="ПОДПИСАТЬСЯ"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Subscription;
