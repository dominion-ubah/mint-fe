import React, {useState, useEffect} from 'react';

import './NavigationBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const search_ico = require('../../assets/Search.svg');
const notif_ico = require('../../assets/Group.svg');
const profimg = require('../../assets/prof.svg');
const mo = require('../../assets/mo.svg');

export default function NavigationBar({setIsOpenSideAR}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSide, setIsOpenSide] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        return () => {
            console.log('re', isOpenSide)
            
        }
    }, [isOpenSide, setIsOpenSideAR])
    const toggleSide = () => {
        setIsOpenSideAR(!isOpenSide);
        setIsOpenSide(!isOpenSide);
    }
    return (
        <div>

            <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-light bg-light c_navbar px-md-5 fixed-top">
                <span onClick={toggleSide}><img className="d-sm-block d-md-none" width="200%" src={mo} alt="search"/></span>
                <a class="navbar-brand c_title_txt" href="#">TransMonitor</a> 
                <NavbarToggler onClick={toggle} />

                <Collapse class="collapse navbar-collapse" isOpen={isOpen} navbar id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0 ml-md-5 pl-md-5">
                        <span><img className="ml-md-5" width="25%" src={search_ico} alt="search"/></span>
                        <input class="form-control mr-md-2 c_search " type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-md-2">
                            <a class="nav-link ml-2" href="#">Support</a>
                        </li>
                        <li class="nav-item mx-md-2">
                            <a class="nav-link ml-2" href="#">FAQs</a>
                        </li>
                        <li class="nav-item mx-md-3">
                            <span><img className="ml-md-2 mt-1 d-none d-md-block" width="90%" src={notif_ico} alt="notify"/></span>
                        </li>
                        <li class="nav-item ml-md-5">
                            <div className="d-flex float-right float-md-none">
                                <div className="mx-3">
                                    <div className=" c_nav_txt_small text-right">Hello</div>
                                    <div className="c_nav_txt_med text-right">Oluwaleke Ojo</div>
                                </div>
                                <div className="rounded-circle c_overflow"><img src={profimg} alt="pic1"  /></div>
                            </div>
                        </li>
                    </ul>
                    
                </Collapse>
            </Navbar>
        </div>
    )
}
