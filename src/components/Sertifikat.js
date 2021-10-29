import React from 'react'
import { Link } from 'react-router-dom'
import './Sertifikat.css'
import skilvulWeb from '../assets/sertifikat/Skilvul-SkilBadge-Web Development Pemula.jpg'
import skilvulCoding from '../assets/sertifikat/Skilvul-SkilBadge-Coding di Skilvul Playground.jpg'
import impactBN from '../assets/sertifikat/Impact Byte Network.jpg'
import d2d from '../assets/sertifikat/Bagas Hary.png'
import d2d2 from '../assets/sertifikat/Bagas Hary Best.png'
import skilvulWebPDF from '../assets/Unduh PDF/Skilvul-SkilBadge-Web Development Pemula.pdf'
import skilvulCodingPDF from '../assets/Unduh PDF/Skilvul-SkilBadge-Coding di Skilvul Playground.pdf'
import impactBN_PDF from '../assets/Unduh PDF/Bagas Hary Cendekiawan - Impact Byte Network.pdf' 

function Sertifikat() {

    return (
        <div>
            <h1 class="display-1">Sertifikat</h1>
            <div className="ukuran-card">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src={skilvulWeb} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Skilvul SkilBadge - Web Development Pemula</h5>
                            <p class="card-text">Silahkan klik <Link to={skilvulWebPDF} 
                            className="download" target="_blank" download>Download</Link> PDF</p>   
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={skilvulCoding} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Skilvul SkilBadge - Coding di Skilvul Playground</h5>
                            <p class="card-text">Silahkan klik <Link to={skilvulCodingPDF} 
                            className="download" target="_blank" download>Download</Link> PDF</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={impactBN} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Front End Development - Impact Byte Network</h5>
                            <p class="card-text">Silahkan klik <Link to={impactBN_PDF} 
                            className="download" target="_blank" download>Download</Link> PDF</p>
                            <a href="https://network.impactbyte.com/certificate/fe/bagas-hary-cendekiawan" 
                                target="_blank" rel="noreferrer" className="download">
                                Untuk sertifikat dapat diakses melalui link berikut :
                            </a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={d2d} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Deaf to Dev - Web Development</h5>
                            <p class="card-text">Peserta.</p>
                            <p class="card-text">Silahkan klik <Link to={d2d} 
                            className="download" target="_blank" download>Download</Link> PNG</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={d2d2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Deaf to Dev - Web Development</h5>
                            <p class="card-text">Peserta Terbaik.</p>
                            <p class="card-text">Silahkan klik <Link to={d2d2} 
                            className="download" target="_blank" download>Download</Link> PNG</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sertifikat
