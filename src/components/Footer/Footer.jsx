import s from './Footer.module.css';
import logo_two from '../../assets/logo_two.png';
import Menu from './Menu/Menu';
import vk from '../../assets/vk.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.block_one}>
            <img className={s.logo} src={logo_two} alt="logo" />
            <p className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              faucibus egestas elit, at eleifend elit ornare ut.
            </p>
          </div>
          <div className={s.block_two}>
            <Menu
              title="ОСНОВНЫЕ ССЫЛКИ"
              textOne="О компании"
              textTwo="Каталог"
              textThree="Доставка"
              textFour="Оплата"
            />
            <Menu
              title="КАТЕГОРИИ"
              textOne="Мужская одежда"
              textTwo="Женская одежда"
              textThree="Детская одежда"
              textFour="Для животных"
            />
            <Menu
              title="ПОЛЕЗНЫЕ ССЫЛКИ"
              textOne="Таблица размеров"
              textTwo="Блог о моде"
              textThree="Наша миссия"
              textFour=""
            />
            <div className={s.box}>
              <h2 className={s.title}>СОЦ СЕТИ</h2>
              <div className={s.block_three}>
                <a href="#1" className={s.content}>
                  <img className={s.vk} src={vk} alt="vk_img" />
                  <p className={s.text_link}>VK.com</p>
                </a>
                <a href="#1" className={s.content}>
                  <img
                    className={s.facebook}
                    src={facebook}
                    alt="facebook_img"
                  />
                  <p className={s.text_link}>Facebook</p>
                </a>
                <a href="#1" className={s.content}>
                  <img
                    className={s.instagram}
                    src={instagram}
                    alt="instagram_img"
                  />
                  <p className={s.text_link}>Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
