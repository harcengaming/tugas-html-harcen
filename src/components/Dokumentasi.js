import React from 'react'
import '../components/Dokumentasi.css'
import logo from '../images/710KB 1;1.jpg';

function Dokumentasi() {

    return (
        <div>
            <h1 class="display-1">Dokumentasi</h1>

            <div class="card-group ">
                <div class="card border-warning mb-3 ">
                    <img src={logo} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card border-warning mb-3">
                    <img src={logo} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card border-warning mb-3">
                    <img src={logo} class="card-img-top" alt="..." />
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
    )
}

export default Dokumentasi
