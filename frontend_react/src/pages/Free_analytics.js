import React, {useEffect, useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
import { Button, Form, Input, Checkbox, Select, notification,Menu,Image } from "antd";
import { Layout } from "antd";
import myImageIconHed from '../img/Icon_hed.png'
import myImageIconHeduser from '../img/Icon_hed_user.png'
import Heder_free from "../components/Heder_free";
import Slider_free from "../components/Slider_free"
import Chart from 'chart.js/auto';
import LineChart from "../components/LineChart";
import Free_param from "../components/Free_param";
import Footer from "../components/Footer";
import { DatePicker, Space } from 'antd';


export default function Free_analytics() {
    const navigate = useNavigate();
    const { RangePicker } = DatePicker;
    
   
    return (
        <div className="free_analytics" id="free_analytics">
            <Heder_free/>
        <div className="Free_analytics_p">           
                <Slider_free/>
            <div className="free_analytic_doby">
                    <Button className="button_fre_pref">Предыдущий месяц</Button>
                    <Button className="button_fre_pref">Следующий меняц</Button>
                    <Button className="button_fre_pref">Год</Button>
                    <Button className="button_fre_pref">5 лет</Button>
                    <RangePicker
                    className="button_fre_pref"
                    >
                    </RangePicker>
                    <div className="free_analytic_Chart">
                        <LineChart/>
                    <div className="free_analytic_param">
                        <Free_param/>
                    </div>
                </div>
            </div>
        </div>
         <Footer/>
    </div>
    )
}