import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import HeaderMobile from './components/header/header-mobile';
import useViewportWidth from './utils/viewport';
import Footer from './components/footer/footer';

function App() {
  const isDesktop = useViewportWidth();

  return (
    <div className="App">
      {isDesktop ? <Header /> : <HeaderMobile />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
