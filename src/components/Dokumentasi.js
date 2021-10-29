import React from 'react'
import '../components/Dokumentasi.css'
import logo from '../images/710KB 1;1.jpg';
import foto from '../images/CSC_0132.JPG'
import foto_2 from '../images/DSC_4151 red 1mb.jpg'
import foto_3 from '../images/FOTO 4X6 MERAH.jpg'
import foto_4 from '../images/IMG_0319.JPG'

function Dokumentasi() {

    return (
        <div>
            <h1 class="display-1">Dokumentasi</h1>
        
            <div class="card-group">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card border-warning mb-3 h-100">
                            <img src={logo} class="card-img-top" alt="harcen posong" />
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-warning mb-3 h-100">
                            <img src={foto} class="card-img-top" alt="basket smanca" />
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-warning mb-3 h-100">
                            <img src={foto_2} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-warning mb-3 h-100">
                            <img src={foto_3} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-warning mb-3 h-100">
                            <img src={foto_4} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Dokumentasi
