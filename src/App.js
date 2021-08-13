// import logo from './logo.svg';
import './App.css';
import Name from './Project';
import logo from '../src/images/710KB 1;1.jpg';
import logo3 from '../src/images/unnamed.png';
import logo4 from '../src/images/CSC_0132.JPG';

function App() {

  const judul = 'biodata diriku'
  const width = "600px";
  
  return (
    <div className="App">
      
        
          <img className="bg-utama"
            src={logo4}
            alt="lapangan basket"
          />
        
        <div className="full-screen"> 
            <h1 className="text-gede">{ 'SELAMAT DATANG DI WEBsite REACT JS'.toUpperCase() }</h1>
        </div>
        
        
      
      <header className="App-header">
        <hr
           style={{
            backgroundColor: 'blue',
            height: 5,
            width: 900
        }}
        />
        <h1 className="text-gede">{ judul.toUpperCase() }</h1>
        <hr
           style={{
            backgroundColor: 'blue',
            height: 5,
            width: 900
        }}
        />
        <h1>Bagas Hary Cendekiawan</h1>
        <hr
           style={{
            backgroundColor: 'orange',
            height: 5,
            width: 600
        }}
        />
        
        <img
                src={logo}
                alt="Muka harcen"
                width={width}
        />
        <hr 
                style={{
                    backgroundColor: 'brown',
                    height: 5,
                    width: 600
                }}
        />
        <br/>
        <hr 
                style={{
                    backgroundColor: 'red',
                    height: 5,
                    width: 1220
                }}
        />
        <Name/>
        <hr className="hr-kanan"
                style={{
                    backgroundColor: 'yellow',
                    height: 5,
                    width: 1220
                }}
        />
        <img 
                src={logo3}
                alt="banner-jrrp"
        />
        <div className="deskripsi">
        <p> <i>Pelatihan Front End Developer untuk Disabilitas se-Indonesia</i> </p>
        <p> <u>Sedang masih berlangsung selama 3 bulan dari bulan Juni - Agustus 2021</u> </p>
        </div>
        
        
      </header>
      
      <footer>
          &copy; { new Date().getFullYear() } Copyright:  <a href="https://id.reactjs.org/" rel='noreferrer' target='_blank'> React JS </a> <br/>
            Created with Visual Studio Code by <a href="https://www.instagram.com/harcengaming" rel='noreferrer' target='_blank'> Harcen Gaming </a>
      </footer>
      
    </div>
    
  );
};

export default App;
