import React from 'react';
import './Navbar.css'

const search_ico = require('../../assets/Search.svg');
const notif_ico = require('../../assets/Group.svg');
const profimg = require('../../assets/prof.svg');

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light c_navbar px-md-5">
                <a class="navbar-brand c_title_txt" href="#">TransMonitor</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0 ml-md-5 pl-md-5">
                        <span><img className="ml-md-5" width="25%" src={search_ico} alt="search"/></span>
                        <input class="form-control mr-sm-2 c_search " type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-md-3">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                        <li class="nav-item mx-md-3">
                            <a class="nav-link" href="#">FAQs</a>
                        </li>
                        <li class="nav-item mx-md-3">
                            <span><img className="ml-md-2 mt-1" width="90%" src={notif_ico} alt="notify"/></span>
                        </li>
                        <li class="nav-item ml-md-5">
                            <div className="d-flex">
                                <div className="mx-md-3">
                                    <div className=" c_nav_txt_small text-right">Hello</div>
                                    <div className="c_nav_txt_med text-right">Oluwaleke Ojo</div>
                                </div>
                                <div className="rounded-circle c_overflow"><img src={profimg} alt="pic1"  /></div>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}
