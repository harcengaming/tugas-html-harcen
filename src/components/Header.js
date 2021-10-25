import React from 'react'
import '../components/Header.css';
import { Link, Switch, Route } from 'react-router-dom'
import Dokumentasi from './Dokumentasi';
import ContentBiodata from './ContentBiodata';
import Portofolio from './Portofolio';

function Header() {
    return (
        
            <div>
                <div className="navbar-bottom" >
                    <nav>
                        <li>
                            <Link className="link-navbar-bottom" to="/">Beranda</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="/biodata">Biodata</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="/pendidikan">Pendidikan</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="./pengalaman">Pengalaman</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="./portofolio">Portofolio</Link>
                        </li>
                        <li>
                            <Link className="link-navbar-bottom" to="./dokumentasi">Dokumentasi</Link>
                        </li>
                    </nav>
                </div>
                <Switch>
                    <Route path="/biodata">
                        <ContentBiodata />
                    </Route>
                    <Route path="/portofolio">
                        <Portofolio />
                    </Route>
                    <Route path="/dokumentasi">
                        <Dokumentasi />
                    </Route>
                </Switch>
                
            </div>
        
    )
}

export default Header
