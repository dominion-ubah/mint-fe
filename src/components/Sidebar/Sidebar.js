import React from 'react';
import './Sidebar.css'

const ico1 = require('../../assets/ico1.svg');
const ico2 = require('../../assets/ico2.svg');
const ico3 = require('../../assets/ico3.svg');
const ico4 = require('../../assets/ico4.svg');
const ico5 = require('../../assets/ico5.svg');
const ico6 = require('../../assets/ico6.svg');
const ico7 = require('../../assets/ico7.svg');
const ico8 = require('../../assets/ico8.svg');
const ico9 = require('../../assets/ico9.svg');

export default function Sidebar({isOpened}) {
    return (
        <div className={isOpened?"c_sidebar":" c_translate"}>
            <div className="c_side_btn ml-4">
                GENERATE INVOICE
            </div>
            <div className="c_side_list pt-4"> 
                <p>Main</p>
                <ul >
                    <li className="active">
                        <span><img src={ico9} className="mr-2" alt="ico1" /></span>
                        <a href="#" >Overview</a>
                    </li>
                </ul>
                <p>Payments</p>
                <ul>
                    <li>
                        <span><img src={ico8} className="mr-2" alt="ico1" /></span>
                        <a href="#">All Payments</a>
                    </li>
                    <li>
                        <span><img src={ico6} className="mr-2" alt="ico1" /></span>
                        <a href="#">Reconcilled Payments</a>
                    </li>
                    <li>
                        <span><img src={ico7} className="mr-2" alt="ico1" /></span>
                        <a href="#">Un-Reconcilled Payments</a>
                    </li>
                    <li>
                        <span><img src={ico1} className="mr-2" alt="ico1" /></span>
                        <a href="#">Manual Settlements</a>
                    </li>
                </ul>
                <p>Orders</p>
                <ul>
                    <li>
                        <span><img src={ico4} className="mr-2" alt="ico1" /></span>
                        <a href="#">All Orders</a>
                    </li>
                    <li>
                        <span><img src={ico2} className="mr-2" alt="ico1" /></span>
                        <a href="#">Pending Orders</a>
                    </li>
                    <li>
                        <span><img src={ico3} className="mr-2" alt="ico1" /></span>
                        <a href="#">Reconcilled Orders</a>
                    </li>
                    <li>
                        <span><img src={ico5} className="mr-2" alt="ico1" /></span>
                        <a href="#">Merchant Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
