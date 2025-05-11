import React, { Component, useState, useEffect } from 'react'
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import {useNavigate} from "react-router-dom";
import { Layout } from "antd";
import ic from '../img/ic.png'

export default function Sphere_card() {

 
    return (
      <div className='Sph_card' id='Sphere_card'>
        <div className='Sph_card_p'>
          <p className='name_card'> ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ</p>
        </div>
       <div className='Sph_card_img'>
          <img className='img_card' src={ic}></img>
       </div>
        
      </div>
    )
  
}


