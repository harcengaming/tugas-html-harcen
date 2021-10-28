import React from 'react'
import '../components/PendidikanInformal.css'
import skilvul from '../assets/skilvul-jasarahaja.png'
import deaftodev from '../assets/deaftodev.jpg'
import thisable from '../assets/thisablexkominfo.jpg'

function PendidikanInformal() {
    return (
        <div>
            <h1 class="display-1">Pendidikan Informal</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card border-warning mb-3">
                        <img src={skilvul} class="card-img-top" alt="banner-jrrp" />
                        <div class="card-body">
                            <h5 class="card-title">Front End Developement - JRRP 2021</h5>
                            <p class="card-text"><i>Pelatihan Front End Developer untuk Disabilitas se-Indonesia
                                selama 3 bulan mulai dr bulan Juni - Agustus 2021</i></p>
                            <p class="card-text">HTML, CSS. JavaScript, React JS, NodeJS</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-warning mb-3">
                        <img src={deaftodev} class="card-img-top" alt="banner deaf to dev" />
                        <div class="card-body">
                            <h5 class="card-title">Deaf to Developer - Training 2021</h5>
                            <p class="card-text">Selama 1 bulan pada tanggal 18 September -
                            29 Agustus 2021</p>
                            <p class="card-text">Web Development Pemula dengan HTML dan CSS dasar.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-warning mb-3">
                        <img src={thisable} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Pelatihan IT untuk Disabilitas - TA (DTS Kominfo) 2021</h5>
                            <p class="card-text">eLearning ThisAble Enterprise.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-warning mb-3">
                        <img src={skilvul} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendidikanInformal
