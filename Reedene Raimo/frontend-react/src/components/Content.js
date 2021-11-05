import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "../pages/Posts";
import ShowMagic from "../pages/ShowMagic";
import Signin from "../pages/Signin";
import { Layout, Space, Typography } from "antd";

function Content() {
    return (
    <Switch>
        <Route exact path="/" />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/showmagic" component={ShowMagic} />
        <Route exact path="/register" component={Signin} />
    </Switch>
    );
}

export default Content