import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import __ROLE__ from './CONST';
import Heder from "../components/Heder";
import Slider from "../components/Slider";
import Direction_card from "../components/Direction_card";

export default function Direction() {
    const navigate = useNavigate();
    const [buttonTextLike, setButtonTextLike] = useState(0);
    
    const { Sider, Content } = Layout;

    return (
        <div className="Direction" >
            <Heder/>
            <div className="Sphere_card_slider">
             <Slider/>   
                <div className="Sphere_slider">   
                    <Direction_card></Direction_card>
                </div>
            </div>
            <Footer/>

        </div>
    )


}