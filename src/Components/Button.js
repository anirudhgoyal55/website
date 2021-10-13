import React from "react";
import './Button.css';

const STYLES = ['.btn-outline', '.btn-primary'];
const SIZE = ['.btn-medium', '.btn-large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
};


