import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import __ROLE__ from './CONST';
import Heder from "../components/Heder";
import Slider from "../components/Slider";

export default function Contacts() {
    const navigate = useNavigate();
    
    const { Sider, Content } = Layout;

    return (
        <div className="Contacts" >
            <Heder/>
            <div className="analitic_blok">
              <Slider/>
              <div className="free_analytic_doby">
              <p>О проекте</p>   
            </div>  
            </div>
           
           
            

        </div>
    )


}