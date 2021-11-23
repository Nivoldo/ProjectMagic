import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'

export default function Footer() {
    return (
    <div>
        <div id="cop" style={{height:150, width:'100%', backgroundColor:'rgb(17, 17, 17)', paddingTop:50}}>
            <div style={{display:'flex', marginLeft:90}}>
            <h1 style={{color:'#fff',}}>Project Magic</h1>
            <h3 style={{color:'#fff',marginLeft:30, marginTop:10, fontSize:15, fontFamily:'Nunito Sans'}}>© 2021    4.002.899/2200-00<br/>Rua dos exemplos, 0 - São José dos Campos, SP - 05409-000</h3>
            <div style={{position:'absolute', right:100}}>
            <FaFacebook style={{color:'#fff', fontSize:30, marginRight:30}}/>
            <FaInstagram style={{color:'#fff', fontSize:30, marginRight:30}}/>
            <FaYoutube style={{color:'#fff', fontSize:30, marginRight:30}}/>
            <FaTwitter style={{color:'#fff', fontSize:30}}/>
            </div>
            </div>
        </div>
    </div>
        
    )
}