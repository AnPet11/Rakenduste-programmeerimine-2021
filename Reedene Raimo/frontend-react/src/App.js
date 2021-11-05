// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
// import { Button } from 'antd';
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import 'antd/dist/antd.css'



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
        
        <Content> </Content>

        <Footer> </Footer>
      
      </BrowserRouter>
    </Layout>
  );
}
  export default App;