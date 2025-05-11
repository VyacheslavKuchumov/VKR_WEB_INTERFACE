import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { useForm } from 'antd/es/form/Form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import myImageIcon from '../img/Frame_19.png'
import __ROLE__ from './CONST';
import axios from 'axios';
import {requestToApi} from '../components/Request';

export default function Auth() {
    const navigate = useNavigate();
    const { Content } = Layout;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [form] = useForm();
    
    
async function handleSubmit(event){
      event.preventDefault(); // Предотвращаем перезагрузку страницы
      navigate("/pages/MainAutCard1")
      requestToApi.updateUserDetails(undefined)
      form.validateFields().then((values) => {
        requestToApi.post('/auth/signup', values)
            .then(data => {
                if(data.token !== undefined){
                    requestToApi.updateUserDetails(data)
                    navigate("/pages/MainAutCard1")
                }
            });
    })
}

    
    //Валидация мэйла
  function ValidMail(email) {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test(email);
    return valid;
  }

  //Валидация имени
  function validName(name) {
    var re = /^[A-ZА-ЯЁ]+$/i;
    var valid = re.test(name);
    return valid;
  }

    return (
        
    <div className="auth" id="auth">
        <div className="cent" id="cent">
            <Content className="contentStyle_aut_logo">
                <img src={myImageIcon } className="icon_hed"/>
            </Content>

            <Content className="slider_auth" id="slider_auth">  
                <h1 className="auth_vhod">Вход в систему</h1>
                <div className="auth_text">
                    <p className="auth_vhod">Еще не зарегестрированны ? </p>
                    <p className="" onClick={() => {navigate('/pages/reg')}} > Регистрация</p>
                </div>   
                <p className="auth_vhod_mail"> E-mail</p>
                <Input className="inp_aut" 
                  placeholder="Адрес электронной почты" 
                  id="logemailIn"
                  autoComplete="off"
                  type="email"
                  name="logemail"
                />
                <p className="auth_vhod_mail"> Пароль</p>
                <Form.Item
                name="password"
                rules={
                [
                    {
                        required: true,
                        message:"Пароль не может быть пустым"
                    }
                ]
                }
                >
                    {(email && email) && <div style={{color:'red'}}>{error}</div>}
                    <Input.Password 
                    className="inp_aut" 
                    placeholder="Введите пароль" 
                    id="logpassIn"
                    autoComplete="off"
                    name="logpass"
                    />
                </Form.Item>
                
                    <div className="button_aut">                 
                        <Button onClick={handleSubmit} className='btn_inp_aut'>Войти</Button>
                        <Button onClick={() => {navigate('/')}} className='btn_inp_aut'>Назад</Button>                   
                    </div>			           	
            </Content>
        </div>  
        <Footer/>
    </div>
)
}
