import React from 'react';
import './Orderchart.css'
const line_c = require('../../assets/line_c.svg');

export default function Orderchart({header, title_one, title_three, title_two}) {
    return (
        <div className="c_ord_card mx-md-0 pt-3">
            <p className="c_txt_bold_sm">{header}</p>
            <img src={line_c} className="mb-1" alt="line" width="90%" />
            <p className="c_txt_sm_ord">{title_one} <span className="c_yellow">20</span></p>
            <p className="c_txt_sm_ord">{title_two} <span className="c_green">80</span></p>
            <p className="c_txt_sm_ord">{title_three} <span className="c_blue">100</span></p>
        </div>
    )
}
