import React from 'react'
import { useAuth } from '../context/auth'
import { useHistory } from 'react-router-dom'
import toastr from 'toastr'

export default function LogoutPage() {

    const history = useHistory()
    const authContext = useAuth()

    authContext.logout()
    history.push('/')
    toastr.success('Vous êtes déconnecté(e)')

    return (
        <div>
            
        </div>
    )
}
