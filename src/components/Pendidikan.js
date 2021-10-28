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
            <h1 class="display-1">Pendidikan Formal</h1>
            {/*  SMA Negeri 1 Candiroto */}
            <div id="myclass-smanca" class="carousel slide border border-5 border-warning rounded-3" 
                data-bs-ride="carousel" >

                <div class="">
                    <div class="card-body">
                        <a href="https://sman1candiroto.sch.id/" target="_blank" rel="noreferrer" 
                            class="card-title" >
                            <h5 class="card-title">SMA Negeri 1 Candiroto</h5>
                        </a>
                        <p class="card-text">Tahun 2017 - 2020</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>    
                </div>
                    
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myclass-smanca" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myclass-smanca" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myclass-smanca" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={smanca} class="d-block w-100 " alt="..." />
                        <div class="carousel-caption d-none d-md-block " > 
                            <a href="https://sman1candiroto.sch.id/" target="_blank" rel="noreferrer" >
                                <h5 class="btn btn-outline-warning">SMA Negeri 1 Candiroto</h5>
                            </a>
                            <br />
                            <p class="btn btn-outline-warning" >Tahun 2017 - 2020  </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <img src={ipa} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="btn btn-outline-warning">XII IPA 4</h5>
                        <br />
                        <p class="btn btn-outline-warning">Tahun 2017 - 2020</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={ipa2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="btn btn-outline-warning">XII IPA 4</h5>
                        <br />
                        <p class="btn btn-outline-warning">Tahun 2017 - 2020</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myclass-smanca" 
                data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myclass-smanca" 
                data-bs-slide="next">
                    <span class="carousel-control-next-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* SMK PIUS X Magelang */}
            <div id="myclass-smkpius" class="carousel slide border border-5 border-warning rounded-3" 
            data-bs-touch="false" data-bs-interval="false">

                <div class="">
                    <div class="card-body">
                        <a href="https://smk-mgl.tarakanita.sch.id/" target="_blank" rel="noreferrer"
                            className="card-title">
                            <h5 class="card-title">SMK PIUS X Magelang</h5>
                        </a>
                        <p class="card-text">Tahun 2016</p>
                        <p class="card-text"><small class="text-muted">Last updated 13 mins ago</small></p>
                    </div>    
                </div>

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
                <button class="carousel-control-prev" type="button" data-bs-target="#myclass-smkpius" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myclass-smkpius" data-bs-slide="next">
                    <span class="carousel-control-next-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

             {/*  SMPLB Karya Bakti Wonosobo */}
             <div id="smplb-karya" class="carousel carousel-orange slide border border-5 border-warning rounded-3"
              data-bs-ride="carousel">

                <div class="">
                    <div class="card-body">
                        <a href="https://donboscolabtik.blogspot.com/" target="_blank" rel="noreferrer"
                            class="card-title">
                            <h5 class="card-title">SLB/B Karya Bakti Wonosobo</h5>
                        </a>
                        <p class="card-text">Tahun 2013 - 2016</p>
                        <p class="card-text"><small class="text-muted">Last updated 36 mins ago</small></p>
                    </div>    
                </div>

                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#smplb-karya" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#smplb-karya" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#smplb-karya" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={db2} class="card-img-top" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <a href="https://donboscolabtik.blogspot.com/" target="_blank" rel="noreferrer">
                                <h5 class="btn btn-outline-warning">SLB/B Karya Bakti Wonosobo</h5>
                            </a> 
                            <br />
                            <p class="btn btn-outline-warning">Tahun 2013 - 2016</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={smplb} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="btn btn-outline-warning">SMPLB/B Karya Bakti Wonosobo</h5>
                            <br />
                            <p class="btn btn-outline-warning">Tahun 2013 - 2016</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={smplb2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="btn btn-outline-warning">SMPLB/B Karya Bakti Wonosobo</h5>
                            <br />
                            <p class="btn btn-outline-warning">Tahun 2013 - 2016</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#smplb-karya" 
                data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#smplb-karya" 
                data-bs-slide="next">
                    <span class="carousel-control-next-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/*  SDLB Karya Bakti Wonosobo */}
            <div id="sdlb-karya" class="carousel carousel-orange slide border border-5 border-warning rounded-3" 
            data-bs-ride="carousel">
                
                <div class="">
                    <div class="card-body">
                        <a href="https://donboscolabtik.blogspot.com/" target="_blank" rel="noreferrer"
                            class="card-title">
                            <h5 class="card-title">SLB/B Karya Bakti Wonosobo</h5>
                        </a>
                        <p class="card-text">Tahun 2007 - 2013</p>
                        <p class="card-text"><small class="text-muted">Last updated 36 mins ago</small></p>
                    </div>    
                </div>

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#sdlb-karya" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#sdlb-karya" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#sdlb-karya" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={db} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <a href="https://donboscolabtik.blogspot.com/" target="_blank" rel="noreferrer">
                            <h5 class="btn btn-outline-warning">SLB/B Karya Bakti Wonosobo</h5>
                        </a>
                        <br />
                        <p class="btn btn-outline-warning">Tahun 2007 - 2013</p>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={sdlb} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="btn btn-outline-warning">SDLB/B Karya Bakti Wonosobo</h5>
                        <br />
                        <p class="btn btn-outline-warning">Tahun 2007 - 2013</p>
                    </div>
                    </div>
                    <div class="carousel-item" >
                    <img src={sdlb2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="btn btn-outline-warning">SDLB/B Karya Bakti Wonosobo</h5>
                        <br />
                        <p class="btn btn-outline-warning">Tahun 2007 - 2013</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#sdlb-karya" 
                data-bs-slide="prev">
                    <span class="carousel-control-prev-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#sdlb-karya" 
                data-bs-slide="next">
                    <span class="carousel-control-next-icon btn btn-outline-warning" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Pendidikan
