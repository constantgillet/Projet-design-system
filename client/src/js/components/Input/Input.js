import React from 'react'
import './Input.scss'

export default function Input({type, id, placeholder}) {
    return (
        <input className="form-control" type={type} id={id} placeholder={placeholder}/>
    )
}
