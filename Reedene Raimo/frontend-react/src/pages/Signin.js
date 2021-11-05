/* import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";

function Signin() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(username, password));

    if (inputRef.current) inputRef.current.focus();     
    };

    const handleSubmit2 = (e) => {
    e.preventDefault();

    // dispatch register user, e.preventDefault ei lase funktsioonil enne joosta kui see pole kasku saanud

    if (inputRef.current) inputRef.current.focus();
    };

    return (
    <Layout>
        
        <Form onSubmit={handleSubmit}>
        
        <Input
        ref={inputRef}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
        />

        <Input
            ref = {inputRef}
            type = "password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
        />

        <Button type="submit"> Logi sisse </Button>
        </Form>
    <Form>
        
        <Form onSubmit={handleSubmit2}>
        </Form>
        <Input
            ref={inputRef}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
        />
        <Input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
        />
        <Button type="submit">TUleN KaSsSsutajakS!</Button>
    </Form>
    </Layout>
    );
}

export default Signin */

import { Button, Input, Space, Table, Typography, Layout, Form } from "antd";
import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { loginUser } from "../store/actions";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
    setEmail(e.email)
    setPassword(e.password)

    const userData = {
        email: e.email,
        password: e.password
    }

    const res = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    })

    const returnData = await res.json()

    if(returnData.token) {
        console.log("Successfully logged sheeted in")
        dispatch(loginUser(returnData))
    } else {
        let errors = ''
        if (returnData.error) {
            errors = returnData.error
        } else {
            for (let i = 0; i < returnData.msg.length; i++) {
            errors += returnData.msg[i].param[0].toUpperCase() + returnData.msg[i].param.slice(1) + ' ' + returnData.msg[i].msg + '\n'
            }
        }
        setError(errors)
    }
    }

    const handleError = (err) => {
    console.log(err)
    }

    return (
    <Layout>
    <Form
        name="basic"
        style={{maxWidth: '50%', margin: 'auto'}}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={handleError}
        autoComplete="off"
        >
        <Form.Item 
            label="E-mail"
            name="email"
            required
        >
        <Input />
        </Form.Item>

        <Form.Item 
            label="Sheetword"
            name="password"
            required
        >
        <Input.Password />
        </Form.Item>
        { error && <Typography.Text style={{whiteSpace: 'pre-wrap'}} type="danger">{ error }</Typography.Text> }

            <Form.Item style={{textAlign: 'center'}}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>

        </Form>
    </Layout>
    );
}

export default Login;