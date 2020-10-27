import React from 'react'
import './FormText.scss'

export default function FormText({...props}) {
    return (
        <p className="form-text text-body-small mb-xxs">{props.children}</p>
    )
}
