import React from 'react'
import './Label.scss'

export default function Label({htmlFor, ...props}) {
    return (
        <label className="form-label mb-xxs" htmlFor={htmlFor}>{props.children}</label>
    )
}
