// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ShowMagic from "./components/ShowMagic";
// import { Button } from 'antd';
/* import { Layout } from "antd"; */
import { Layout, Space, Typography } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import PostsTabel from "./pages/PostsTabel";
import ShowMagic from "./pages/ShowMagic";
import Signin from "./pages/Signin";

/* function App() {
  return (
  <BrowserRouter>
    <Route path="/" component={Header}/>
    <Switch>
      <Route exact path="/" component={ShowMagic} />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  </BrowserRouter>
  );
} 
ehitus */ 

function App() {
  return (
    <Layout>
      <BrowserRouter>
      
        <Header> </Header> 
        
        <Content>
        <Switch>
        <Route exact path="/" />
        <Route exact path="/poststabel" component={PostsTabel} />
        <Route exact path="/showmagic" component={ShowMagic} />
        <Route exact path="/register" component={Signin} />
        </Switch>
        </Content>

        <Footer> </Footer>
      
      </BrowserRouter>
    </Layout>
  );
}
  export default App;