import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button/Button'
import FormText from '../../components/FormText/FormText'
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label'
import './ResetPasswordPage.scss'

export default function ResetPasswordPage() {

    const history = useHistory()
    const [isPosting, setIsPoting] = useState(false)

    //Component did mount
    useEffect(() => {
        document.title = 'Reset password'
    }, [])

    const onButtonClick = (e) => {
        e.preventDefault()
        setIsPoting(true)

        setTimeout(() => {
            setIsPoting(false)
        }, 1000)
    }

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
                    <Button className="mb-m" variant="primary" block onClick={onButtonClick} isLoading={isPosting}>Send</Button>
                </form>
            </div>
        </main>
    )
}
