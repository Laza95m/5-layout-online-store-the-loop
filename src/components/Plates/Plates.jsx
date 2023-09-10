import Container from './Container/Container';
import s from './Plates.module.css';

const Plates = () => {
  return (
    <>
      <section className={s.section}>
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
        <Container />
      </section>
    </>
  );
};

export default Plates;
