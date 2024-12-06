import React from 'react';
import './ScrollUpButton.css';

const ScrollUpButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="scroll-up-btn" onClick={scrollToTop}>
            ↑
        </button>
    );
};

export default ScrollUpButton;
