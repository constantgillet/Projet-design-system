import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormText from '../../components/FormText/FormText'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import './registerPage.scss'

export default function registerPage() {

    //Component did mount
    useEffect(() => {
        document.title = 'Register'
    }, [])

    return (
        <main className="login-page">
            <div className="auth-container text-center">
                <h1 className="text-title mb-m">Register page</h1>
                <h2 className="text-subtitle mb-xl">Already have an account ? <Link to="/login">Login</Link></h2>
                <form>
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-email">Email</Label>
                        <FormText>Please put a valid email</FormText>
                        <Input type="text" placeholder="Your email" id="input-email"/>
                    </div>
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-password">Password</Label>
                        <Input type="password" placeholder="Your password" id="input-password"/>
                    </div> 
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-password">Confirm Password</Label>
                        <Input type="password" placeholder="Your password" id="input-password"/>
                    </div> 
                    <Button className="mb-m" variant="primary" block>Register</Button>
                </form>
                <Link to="/reset-password">I forgot my password</Link>
            </div>
        </main>
    )
}

