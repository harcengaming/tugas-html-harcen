import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';
import Timer from './components/Timer';

function App() {

  return (
    <div>
      <HeaderTop />  
      <Header/>
      <Timer />
      <Footer/>
    </div>
    
  );
};

export default App;
