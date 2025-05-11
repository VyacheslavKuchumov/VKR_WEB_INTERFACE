import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import Footer from "../components/Footer";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import myImageIcon from '../img/Frame_19.png'
import axios from 'axios';

export default function Reg() {
    const navigate = useNavigate();
    const { Content } = Layout;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        try {
            const response = await axios.post('/auth/signup', {
                email,
                password,
                name
            });
            setSuccessMessage('Регистрация успешна!'); // Успешное сообщение
            console.log(response.data); // Здесь вы можете обработать ответ от сервера
        } catch (err) {
            setError('Ошибка регистрации. Попробуйте ещё раз.'); // Обработка ошибок
            if (err.response) {
                console.error(err.response.data); // Вывод детальной информации об ошибке
            }
        }
    };//navigate('/pages/MainAutCard1')

    return (
        
    <div className="auth" id="auth">
        <div className="cent" id="cent">
            <Content className="contentStyle_aut_logo">
                 <img src={myImageIcon } className="icon_hed"/>
            </Content>

            <Content>
            <div className="slider_reg" id="slider_reg">   
                    <h1 className="auth_vhod">Регистрация </h1> 
                    <p className="auth_vhod_mail"> Имя</p>
                <Input className="inp_aut" placeholder="Введите свое имя" id="name" value={name} onChange={(e) => setName(e.target.value)}/> 
                    <p className="auth_vhod_mail"> Фамилия</p>
                <Input className="inp_aut" placeholder="Введите свою фамилию"/>
                    <p className="auth_vhod_mail"> Отчество</p>
                <Input className="inp_aut" placeholder="Введите свое отчество"/>
                    <p className="auth_vhod_mail"> E-mail</p>
                <Input className="inp_aut" placeholder="Введите E-mail" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <p className="auth_vhod_mail"> Пароль</p>
                <Input.Password className="inp_aut" placeholder="Введите пароль" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p className="auth_vhod_mail"> Пароль еще раз</p>
                <Input.Password className="inp_aut" placeholder="Введите пароль еще раз"/>
                <div className="reg_text">
                    <Checkbox className="chek_reg" > </Checkbox>
                    <p className="p_reg"> Даю согласие на обработку своих персональных данных</p>
                </div>
                <div className="button_aut">
                    <Button onClick={() => {}} className='btn_inp_aut'>Регистрация</Button>
                    <Button onClick={() => {navigate('/')}} className='btn_inp_aut'>Назад</Button>
                </div>		
            </div>	           	
            </Content>
        </div>  
        <Footer/>
    </div>
    )
}