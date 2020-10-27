import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormText from '../../components/FormText/FormText'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import './registerPage.scss'

export default function registerPage() {

    const history = useHistory()
    const [isPosting, setIsPoting] = useState(false)

    //Component did mount
    useEffect(() => {
        document.title = 'Register'
    }, [])


    const onRegisterButtonClick = (e) => {
        e.preventDefault()
        setIsPoting(true)

        setTimeout(() => {
            setIsPoting(false)
        }, 1000)
    }

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
                        <FormText>Must contain lowercase letter, uppercase letter and number.</FormText>
                        <Input type="password" placeholder="Your password" id="input-password"/>
                    </div> 
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-password">Confirm Password</Label>
                        <FormText>Passwords do not match.</FormText>
                        <Input type="password" placeholder="Your password" id="input-password"/>
                    </div> 
                    <Button className="mb-m" variant="primary" block onClick={onRegisterButtonClick} isLoading={isPosting}>Register</Button>
                </form>
            </div>
        </main>
    )
}

