import React, { Component } from 'react'
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import {useNavigate} from "react-router-dom";

export default function Heder() {
  
      const navigate = useNavigate();
    return (
        <header>
        <div className="head_free">
            <div className="head_free_icon">
                 <img src={myImageIconHed } className="icon_heder" onClick={() => {navigate('/pages/free_analytics')}}/>
            </div>

            <div className="head_free_user">
                <img src={myImageIconHeduser } className="icon_heder_user" />
            </div>
        </div> 
    </header>
    )
  
}


