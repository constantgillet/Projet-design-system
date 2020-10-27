import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormText from '../../components/FormText/FormText'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import './LoginPage.scss'

export default function LoginPage() {

    //Component did mount
    useEffect(() => {
        document.title = 'Login'
    }, [])

    return (
        <main className="login-page">
            <div className="auth-container text-center">
                <h1 className="text-title mb-m">Login page</h1>
                <h2 className="text-subtitle mb-xl">Don't have an account ? <Link to="/register">Create an account</Link></h2>
                <form>
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-email">Email</Label>
                        <FormText>Please put a valid</FormText>
                        <Input type="text" placeholder="Your email" id="input-email"/>
                    </div>
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-password">Password</Label>
                        <Input type="password" placeholder="Your password" id="input-password"/>
                    </div> 
                    <Button className="mb-m" variant="primary" block>Sign in</Button>
                </form>
                <Link to="register">I forgot my password</Link>
            </div>
        </main>
    )
}
