import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

export default function LoginPage() {

    //Component did mount
    useEffect(() => {
        document.title = 'Login'
    }, [])

    return (
        <main className="login-page">
            <div className="auth-container">
                <h1>Login page</h1>
                <h2>Don't have an account ? <Link>Create an account</Link></h2>
            </div>
        </main>
    )
}
