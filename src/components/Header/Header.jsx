import s from './Header.module.css';
import Navbar from './Navbar/Navbar';
import Slider from './Slider/Slider';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Navbar />
        <Slider />
      </header>
    </>
  );
};

export default Header;
