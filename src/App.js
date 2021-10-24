import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';
import Contents from './components/Contents';

function App() {

  return (
    <div>
      <HeaderTop />  
      <Header/>
      <Contents />
      <Footer/>
    </div>
    
  );
};

export default App;
