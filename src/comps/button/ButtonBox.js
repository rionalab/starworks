import React from 'react'

export default function ButtonBox({ label, theme, style }) {
    return (
        <button className={`btn-box ${style} ${theme}`}>
            <div></div>
            <span>{label}</span>
        </button>
    )
}
