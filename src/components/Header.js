import React from 'react'
import '../components/Header.css';
import { Link, Switch, Route } from 'react-router-dom'
import Dokumentasi from './Dokumentasi';
import ContentBiodata from './ContentBiodata';
import Portofolio from './Portofolio';
import Pendidikan from './Pendidikan';
import PendidikanInformal from './PendidikanInformal';
import Pengalaman from './Pengalaman';
import Sertifikat from './Sertifikat';
import Beranda from './Beranda';


function Header() {
    return (
        
            <div>
                <div className="navbar-bottom" >
                    <nav className="nav-kiri">
                        <li>
                            <Link className="link-navbar-bottom" to="/">Daftar</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="/">Masuk</Link>
                        </li>
                    </nav>
                    <nav>
                        <li>
                            <Link className="link-navbar-bottom" to="/">Beranda</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="/biodata">Biodata</Link>
                        </li>
                        <div class="dropdown-menu-end dropdown-menu-lg-start">
                            <button class="btn btn-outline-warning dropdown-toggle" type="button" 
                            id="btn-pendidikan" data-bs-toggle="dropdown" aria-expanded="false">
                                Pendidikan
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="btn-pendidikan">
                                <li>
                                    <Link className="dropdown-item btn btn-outline-warning" 
                                    to="/pendidikan-formal">Pendidikan Formal</Link>
                                    <Link className="dropdown-item btn btn-outline-warning" 
                                    to="/pendidikan-informal">Pendidikan Informal</Link>
                                </li>
                            </ul>
                        </div>
                        <li>
                            <Link className="link-navbar-bottom" to="./pengalaman">Pengalaman</Link>
                        </li>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger">Portofolio</button>
                            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <Link className="dropdown-item btn btn-danger" 
                                    to="./portofolio">Prestasi</Link>
                                    <Link className="dropdown-item btn btn-danger" 
                                    to="./sertifikat">Sertifikat</Link>
                                </li>
                            </ul>
                        </div>                    
                        <li>
                            <Link className="link-navbar-bottom" to="./dokumentasi">Dokumentasi</Link>
                        </li>
                    </nav>  
                </div>

                <Switch>
                    <Route exact path="/" >
                        <Beranda />
                    </Route>
                    <Route path="/biodata">
                        <ContentBiodata />
                    </Route>
                    <Route path="/pendidikan-formal">
                        <Pendidikan />
                    </Route>
                    <Route path="/pendidikan-informal">
                        <PendidikanInformal />
                    </Route>
                    <Route path="/pengalaman">
                        <Pengalaman />
                    </Route>
                    <Route path="/portofolio">
                        <Portofolio />
                    </Route>
                    <Route path="/sertifikat">
                        <Sertifikat />
                    </Route>
                    <Route path="/dokumentasi">
                        <Dokumentasi />
                    </Route>
                </Switch>
                
            </div> 
    )
}

export default Header
