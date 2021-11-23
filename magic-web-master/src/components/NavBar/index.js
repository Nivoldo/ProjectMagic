import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, LoginIcon} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1 style={{position: 'absolute', left: 50, color: '#fa5e37', fontSize: "2rem"}}> Project Magic</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        Sobre
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Apoiadores  
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Depoimentos
                    </NavLink>
                    <NavLink to="/sing-up" activeStyle>
                        Dúvidas
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Login<LoginIcon/></NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
