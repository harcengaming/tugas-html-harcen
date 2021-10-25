import React from 'react'
import '../components/Dokumentasi.css'
import logo from '../images/710KB 1;1.jpg';

function Dokumentasi() {

    
    const width = "600px";

    return (
        <div>
  
            <h1 className="judul-namaku">Galleri</h1>
            <div className="galleri">
                <img
                        src={logo}
                        alt="Muka harcen"
                        width={width}
                />
            </div>
        </div>
    )
}

export default Dokumentasi
