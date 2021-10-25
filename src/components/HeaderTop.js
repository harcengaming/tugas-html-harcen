import React from 'react'
import wisataJakarta from '../images/IMG_0319.JPG';
import '../components/HeaderTop.css';

function HeaderTop() {
    return (
        <div>
            <div id="image-div">
                <img className="bg-utama"
                    src={wisataJakarta}
                    alt="wisata jakarta 60D canon"  
                />
                <h1 className="text-cover">{ 'Curriculum Vitae'.toUpperCase() }</h1>
                <br />
                <p className="text-deskripsi">kami tuli, berbahasa isyarat indonesia!</p>
            </div>
        </div>
    )
}

export default HeaderTop
