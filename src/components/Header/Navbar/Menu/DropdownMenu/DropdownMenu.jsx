import s from './DropdownMenu.module.css';

const DropdownMenu = ({ active, setActive, text }) => {
  return (
    <>
      <div
        className={active ? `${s.container} ${s.active}` : s.container}
        onClick={() => setActive(false)}
      >
        <div className={s.box} onClick={(e) => e.stopPropagation()}>
          <p className={s.text}>{text}</p>
          <p className={s.text}>{text}</p>
          <p className={s.text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
