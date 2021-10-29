import React from 'react'
import '../components/Portofolio.css' 
import portofolio from '../assets/portofolio.png'
import portofolio2 from '../assets/portofolio2.jpg'

function Portofolio() {
    return (
        <div>
            <h1 class="display-1">Prestasi</h1>
            <div className="ukuran-card">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 border-warning mb-3">
                        <img src={portofolio} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Juara 2 Lomba TIK Online Nasional Disabilitas 
                            Kategori Basic 2D Design Tahun 2020</h5>
                            <p class="card-text">Saya juara 2 lomba online tingkat nasional kategori 
                            desain 2D dasar disabilitas pada tanggal 3 desember 2020. Sebelumnya saya 
                            mengikuti pelatihan desain 2d selama 1 minggu menggunakan aplikasi PowerPoint 
                            (PPT) dan saya rajin belajar mandiri selama 2 minggu.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-warning mb-3">
                        <img src={portofolio2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Juara 3 Olimpiade Matematika SDLB untuk siswa 
                            tunarungu tahun 2012</h5>
                            <p class="card-text">The competition took place from 2-5 September 2012 
                            at Hotel Bali. Participants were 264 SDLB/SMPLB/inclusive students from 33 provinces.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-warning mb-3">
                        <img src={portofolio} class="card-img-top" alt="..." />
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

export default Portofolio
