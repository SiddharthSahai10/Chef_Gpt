import React, { useState } from 'react';

export default function IngredientsList({ ingredients, setIngredients, getRecipe }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleEdit = (index, ingredient) => {
        setEditingIndex(index);
        setEditValue(ingredient);
    };

    const handleSave = (index) => {
        if (editValue.trim()) {
            const updatedIngredients = [...ingredients];
            updatedIngredients[index] = editValue.trim();
            setIngredients(updatedIngredients);
        }
        setEditingIndex(null);
        setEditValue('');
    };

    const handleCancel = () => {
        setEditingIndex(null);
        setEditValue('');
    };

    const handleDelete = (index) => {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter') {
            handleSave(index);
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    if (ingredients.length === 0) {
        return (
            <div className="ingredients-section">
                <div className="empty-state">
                    <h3>🍽️ No ingredients yet!</h3>
                    <p>Add some ingredients to get started with your recipe.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="ingredients-section">
            <h2>🥘 Your Ingredients</h2>
            <div className="ingredients-grid">
                {ingredients.map((ingredient, index) => (
                    <div key={`${ingredient}-${index}`} className="ingredient-card">
                        {editingIndex === index ? (
                            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    onKeyDown={(e) => handleKeyPress(e, index)}
                                    style={{
                                        flex: 1,
                                        marginLeft: '40px',
                                        padding: '8px 12px',
                                        border: '2px solid #667eea',
                                        borderRadius: '8px',
                                        fontSize: '1rem'
                                    }}
                                    autoFocus
                                />
                                <div className="ingredient-actions">
                                    <button
                                        className="action-btn edit-btn"
                                        onClick={() => handleSave(index)}
                                        style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}
                                    >
                                        ✓
                                    </button>
                                    <button
                                        className="action-btn delete-btn"
                                        onClick={handleCancel}
                                        style={{ background: 'linear-gradient(135deg, #6c757d, #495057)' }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <span className="ingredient-text">{ingredient}</span>
                                <div className="ingredient-actions">
                                    <button
                                        className="action-btn edit-btn"
                                        onClick={() => handleEdit(index, ingredient)}
                                        title="Edit ingredient"
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        className="action-btn delete-btn"
                                        onClick={() => handleDelete(index)}
                                        title="Delete ingredient"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="get-recipe-container">
                <div>
                    <h3>🎯 Ready for a delicious recipe?</h3>
                    <p>Chef Claude will create a unique recipe using your ingredients!</p>
                </div>
                <button onClick={getRecipe}>
                    🍳 Generate Recipe
                </button>
            </div>
        </div>
    );
}