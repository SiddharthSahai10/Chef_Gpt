import React from 'react';

export default function LoadingAnimation() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">🍳 Your delicious recipe is a minute away!</div>
            <div className="loading-subtext">Chef Claude is cooking up something special for you...</div>
        </div>
    );
} 