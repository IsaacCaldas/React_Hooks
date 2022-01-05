import './PageTitle.css'
import React from 'react'

const PageTitle = props => (
    <div className={`PageTitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
    </div>
)

export default PageTitle