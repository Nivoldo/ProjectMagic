import React, {useState} from "react";
import "./style.css";
import Logo from "../../assets/login.png";
import User from "../../assets/user.jpg";
import {AiFillHome} from "react-icons/ai";
import {GiOpenBook} from "react-icons/gi";
import {RiGroupFill} from "react-icons/ri";
import {BsChatFill} from "react-icons/bs";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {GrYoutube} from "react-icons/gr";

const Sidebar = () => {

  const user= JSON.parse(localStorage.getItem('user'));
  
  return (
    <>
      <div className="sidebar">
        <img src={Logo} alt="logo" className="sidebar-img" />
        <div className="sidebar-user-info">
          <img src={User} alt="logo" className="sidebar-user-img" />
          <div className="text-center">
            <label className="display-4 text-white name">{user.name}</label>
          </div>
          <ul class="list-group list-group-flush menu-list">
            <li class="list-group-item menu-item"><AiFillHome/> Início</li>
            <li class="list-group-item menu-item"><GiOpenBook/> Seus Cursos</li>
            <li class="list-group-item menu-item"><RiGroupFill/> Seções</li>
            <li class="list-group-item menu-item"><BsChatFill/> Chat</li>
          </ul>
        </div>
        <div className="social-icons">
            <AiFillFacebook/>
            <AiFillInstagram/>
            <GrYoutube/>
        </div>
        <hr className="line"></hr>
        <div className="links">
            <label className="link">CONTATOS E SUPORTE</label>
            <label className="link">POLÍTICAS DE PRIVACIDADE</label>
            <label className="link">TERMOS DE USO</label>
            <label className="link">DÚVIDAS FREQUENTES </label>
        </div>
        <label className="display-5 copy"> &#169; 2021 Project Magic</label>
      </div>
    </>
  );
};

export default Sidebar;
