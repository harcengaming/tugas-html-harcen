import React from 'react'
import './Pendidikan.css'
import db from '../assets/donbosco.jpg'
import db2 from '../assets/donbosco2.jpg'
import sdlb from '../assets/sdlb-wsb.jpg'
import sdlb2 from '../assets/sdlb-wsb2.jpg'
import smplb from '../assets/smplb-wsb.jpg'
import smplb2 from '../assets/smplb-wsb2.jpg'
import smanca from '../assets/smanca.jpg'
import ipa from '../assets/ipa4.JPG'
import ipa2 from '../assets/IPA4-2.jpg'
import smk from '../assets/smk.JPG'
import myclass from '../assets/myclass-smk.jpg'
import myclass2 from '../assets/myclass-smk2.jpg'
import myclass3 from '../assets/myclass-smk3.jpg'

function Pendidikan() {
    return (
        <div>
            {/* <div class="card mb-3">
                
                <div class="card-body">
                    <h5 class="card-title">SDLB/B Karya Bakti Wonosobo</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <img src={sdlb} class="card-img-top" alt="..." />
            </div> */}

            {/*  SMA Negeri 1 Candiroto */}
            <div id="carouselExampleCaptions" class="carousel slide border border-5 border-warning rounded-3" 
                data-bs-ride="carousel" >

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={smanca} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>SMA Negeri 1 Candiroto</h5>
                        <p>Tahun 2017 - 2020</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={ipa} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>XII IPA 4</h5>
                        <p>Tahun 2017 - 2020</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={ipa2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>XII IPA 4</h5>
                        <p>Tahun 2017 - 2020</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* SMK PIUS X Magelang */}
            <div id="carouselExampleControlsNoTouching" class="carousel slide border border-5 border-warning rounded-3" 
            data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={smk} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={myclass} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={myclass2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={myclass3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

             {/*  SMPLB Karya Bakti Wonosobo */}
             <div id="smplb-karya" class="carousel carousel-dark slide border border-5 border-warning rounded-3"
              data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#smplb-karya" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#smplb-karya" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#smplb-karya" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={db2} class="card-img-top" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>SLB/B Karya Bakti Wonosobo</h5>
                            <p>Tahun 2013 - 2016</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={smplb} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>SMPLB/B Karya Bakti Wonosobo</h5>
                            <p>Tahun 2013 - 2016</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={smplb2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>SMPLB/B Karya Bakti Wonosobo</h5>
                            <p>Tahun 2013 - 2016</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#smplb-karya" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#smplb-karya" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/*  SDLB Karya Bakti Wonosobo */}
            <div id="sdlb-karya" class="carousel carousel-dark slide border border-5 border-warning rounded-3" 
            data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#sdlb-karya" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#sdlb-karya" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#sdlb-karya" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={db} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>SLB/B Karya Bakti Wonosobo</h5>
                        <p>Tahun 2007 - 2013</p>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={sdlb} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>SDLB/B Karya Bakti Wonosobo</h5>
                        <p>Tahun 2007 - 2013</p>
                    </div>
                    </div>
                    <div class="carousel-item" >
                    <img src={sdlb2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>SDLB/B Karya Bakti Wonosobo</h5>
                        <p>Tahun 2007 - 2013</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#sdlb-karya" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#sdlb-karya" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Pendidikan
