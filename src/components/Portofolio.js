import React from 'react'
import '../components/Portofolio.css' 
import logo3 from '../images/pelatihanjasarahaja.png';

function Portofolio() {
    return (
        <div>
            <div className="deskripsi">
                <p> <i>Pelatihan Front End Developer untuk Disabilitas se-Indonesia</i> </p>
                <p> Juni - Agustus 2021 </p>
                <img 
                        src={logo3}
                        alt="banner-jrrp"
                />
                <p> Deskripsi : HTML, CSS. JavaScript, React JS, NodeJS </p>
            </div>
        </div>
    )
}

export default Portofolio
