import React from 'react'
import '../components/Header.css';
import { Link, Router, Switch, Route } from 'react-router-dom'
import Dokumentasi from './Dokumentasi';
import ContentBiodata from './ContentBiodata';

function Header() {
    return (
        
            <div>
                <div className="navbar-bottom" >
                    <nav>
                        <li>
                            <Link to="/">Beranda</Link>
                        </li>
                        <li>
                            <Link to="/biodata">Biodata</Link>
                        </li>
                        <li>
                            <Link to="/pendidikan">Pendidikan</Link>
                        </li>
                        <li>
                            <Link to="./pengalaman">Pengalaman</Link>
                        </li>
                        <li>
                            <Link to="./dokumentasi">Dokumentasi</Link>
                        </li>
                    </nav>
                </div>
                <Switch>
                    <Route path="/biodata">
                        <ContentBiodata />
                    </Route>
                    <Route path="/dokumentasi">
                        <Dokumentasi />
                    </Route>
                </Switch>
                
            </div>
        
    )
}

export default Header
