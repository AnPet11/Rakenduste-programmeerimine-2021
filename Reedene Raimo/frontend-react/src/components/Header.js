import { BrowserRouter, Link } from "react-router-dom";
import { Layout } from "antd";

function Header() {
return (
    <Layout.Header>      
        <Link to="/"> Avaleht </Link>
        <Link to="/posts"> Postitused </Link> 
        <Link to="/tabel"> Tabel </Link> 
        <Link to="/showmagic"> Showmagic </Link> 
    </Layout.Header>    
);
}

export default Header