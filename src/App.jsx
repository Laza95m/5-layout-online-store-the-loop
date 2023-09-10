import './App.css';
import AllModels from './components/AllModels/AllModels';
import Footer from './components/Footer/Footer';
import FreeDelivery from './components/FreeDelivery/FreeDelivery';
import Header from './components/Header/Header';
import Plates from './components/Plates/Plates';
import Subscription from './components/Subscription/Subscription';
import СlothesСollection from './components/СlothesСollection/СlothesСollection';

const App = () => {
  return (
    <>
      <Header />
      <FreeDelivery />
      <СlothesСollection />
      <Plates />
      <AllModels title="Новые модели" />
      <Subscription />
      <AllModels title="СКИДКИ ДО 90%" />
      <Footer />
    </>
  );
};

export default App;
