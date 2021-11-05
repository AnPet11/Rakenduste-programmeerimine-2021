import { BrowserRouter, Link } from "react-router-dom";
import { Layout, Menu, Space, Typography } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { logoutUser } from '../store/actions';

function Header() {
    const [current, setCurrent] = useState(window.location.pathname.replace('/', ''))
    const [state, dispatch] = useContext(Context)
    const handleLogout = () => {
        dispatch(logoutUser)
    }
return (
    <Layout.Header>      
        <Link to="/"> Avaleht </Link>
        <Link to="/posts"> Postitused </Link> 
        <Link to="/tabel"> Tabel </Link> 
        <Link to="/showmagic"> Showmagic </Link> 
        {state.auth.token && (
            <Menu.Item key={'logout'} onClick={e => setCurrent(e.key)}>
            <Link to="#" onClick={handleLogout}> pole sees</Link>
            </Menu.Item>
        )}
        {!state.auth.token && (
            <>
            <Menu.Item key={'login'} onClick={e => setCurrent(e.key)}>
            <Link to="/login"> Sihn in</Link>
            </Menu.Item>
            <Menu.Item key={'register'} onClick={e => setCurrent(e.key)}>
            <Link to="/register"> Sigh up</Link>
            </Menu.Item>
            </>
        )}
    </Layout.Header>    
);
}

export default Header