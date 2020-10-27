import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormText from '../../components/FormText/FormText'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import './ResetPasswordPage.scss'

export default function ResetPasswordPage() {

    //Component did mount
    useEffect(() => {
        document.title = 'Reset password'
    }, [])

    return (
        <main className="reset-password-page">
            <div className="auth-container text-center">
                <h1 className="text-title mb-m">Reset password</h1>
                <h2 className="text-subtitle mb-xl">Please enter your email address</h2>
                <form>
                    <div className="form-group mb-xl text-left">
                        <Label htmlFor="input-email">Email</Label>
                        <FormText>Please put the Email you have an account with</FormText>
                        <Input type="text" placeholder="Your email" id="input-email"/>
                    </div>
                    <Button className="mb-m" variant="primary" block>Send</Button>
                </form>
            </div>
        </main>
    )
}
