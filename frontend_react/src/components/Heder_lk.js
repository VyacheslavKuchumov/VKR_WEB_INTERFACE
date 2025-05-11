import React, { Component } from 'react'
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import {useNavigate} from "react-router-dom";

export default function Heder_lk() {
  
    const navigate = useNavigate();
    return (
        <header>
        <div className="head_lk">
            <div className="head_user_lk">
                <div className="head_user_icn_user">
                    <img src={myImageIconHeduser } className="icon_heder_user"onClick={() => {navigate('/pages/LK')}} />
                </div>
                <div className="head_user_icn_param">
                    <p className="p_lk_user">имя пользователя</p>
                    <p className="p_lk_user">Роль пользователя</p> 
                    <p className="p_lk_user">Почта@mail.ru</p>     
                </div>      
            </div>
            <div className="head_user_icn">
                <img src={myImageIconHed } className="icon_heder" onClick={() => {navigate('/pages/MainAutCard1')}}/>
            </div>

        </div> 
    </header>
    )
  
}