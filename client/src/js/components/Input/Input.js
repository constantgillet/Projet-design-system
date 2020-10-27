import React from 'react'
import './Input.scss'

export default function Input({type, placeholder}) {
    return (
        <input className="form-control" type={type} placeholder={placeholder}/>
    )
}
