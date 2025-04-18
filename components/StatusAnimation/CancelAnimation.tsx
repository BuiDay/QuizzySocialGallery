import React from 'react';
import "./statusErrorAnimation.css"

const CancelAnimation = () => {
    return (
        <div className="wrapper">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark_circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark_check" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8" />
            </svg>
        </div>
    );
};

export default CancelAnimation;