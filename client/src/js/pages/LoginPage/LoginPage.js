import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './LoginPage.scss'

export default function LoginPage() {

    //Component did mount
    useEffect(() => {
        document.title = 'Login'
    }, [])

    return (
        <main className="login-page">
            <div className="auth-container text-center">
                <h1 className="text-title">Login page</h1>
                <h2 className="text-subtitle">Don't have an account ? <Link to="/register">Create an account</Link></h2>
                <form>
                    <div className="form-group">
                    </div> 
                    <Button variant="primary" block>Sign in</Button>
                </form>
                <Link to="register">I forgot my password</Link>
            </div>
        </main>
    )
}
