import React, { Component } from 'react'
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import {useNavigate} from "react-router-dom";
import { Layout } from "antd";

export default function Slider_free() {
    const navigate = useNavigate();
    const { Sider, Content } = Layout;
    return (
        <Sider className="slider_free">
            <div className="slider_free_button">
                <p className="slider_free_button_p">Главная</p>
                <Button onClick={() => {navigate('/pages/Sphere')}} className="button_fre_anali">Cферы</Button>
                <Button onClick={() => {navigate('/pages/Direction')}} className="button_fre_anali">Направления</Button>
                <Button className="button_fre_anali">Аналитика</Button>                       
            </div>
            <div className="slider_free_button">
                <p className="slider_free_button_p">Опции</p>
                <Button onClick={() => {navigate('/pages/Report')}} className="button_fre_anali">Отчеты</Button>
                <Button className="button_fre_anali">Сводки</Button>
                <Button onClick={() => {navigate('/pages/About')}} className="button_fre_anali">О проекте</Button>
                <Button onClick={() => {navigate('/pages/Contacts')}} className="button_fre_anali">Контакты</Button>
            </div>
            <div className="slider_free_button_exit">
                <Button onClick={() => {navigate('/')}} className="button_fre_anali">Выход</Button>
            </div>
        </Sider> 
    )
}
  


