import React from 'react';
import './Largechart.css'
const lg_c = require('../../assets/bg_c.svg');
const lb = require('../../assets/lb_ico.svg');
const rb = require('../../assets/rb_ico.svg');
const chev = require('../../assets/chev.svg');

export default function Largechart({}) {
    return (
        <div className="c_max_card w-100 pt-4">
            <div className="d-flex justify-content-between px-md-4 pb-5">
                <div ><p className="c_lg_bold_txt mt-1">Today: 5, Aug 2018</p></div>
                <div className="d-flex">
                    <div className="c_form_cont w-50">
                        <input type="text" className="form-control  d-inline-block c_d_form" placeholder="1 Jan - 1 Jun" />
                        <img src={chev} className="c_drop_ico" alt="btnl" />
                    </div>
                    <div className="w-50 mt-1">
                        <img src={lb} alt="btnl"  className="mx-3"/>
                        <img src={rb} alt="btnr" />
                    </div>
                    
                </div>
            </div>
                <div className="d-flex justify-content-around w-100 c_chart_tag">
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jan</div>
                </div>

            <div style={{marginTop:"-1.5em"}}> 
                <img src={lg_c} className="img-fluid" alt="chart2" />
            </div>
        </div>
    )
}
