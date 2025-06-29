import React from 'react';
import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({ recipe }) {
    return (
        <div className="recipe-container">
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </div>
    );
}