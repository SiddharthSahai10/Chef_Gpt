import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import LoadingAnimation from "./LoadingAnimation";
import { getRecipeFromCohere } from "../../ai.js";

export default function Main(){
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const recipeRef = React.useRef(null);

    async function getRecipe() {
        if (ingredients.length === 0) return;
        
        setIsLoading(true);
        setRecipe(""); // Clear previous recipe
        
        try {
            console.log("📡 getRecipe called with:", ingredients); // Debug
            const recipeMarkdown = await getRecipeFromCohere(ingredients);
            setRecipe(recipeMarkdown);
            
            // Scroll to recipe after a short delay to ensure it's rendered
            setTimeout(() => {
                if (recipeRef.current) {
                    recipeRef.current.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            }, 100);
        } catch (error) {
            console.error("Error generating recipe:", error);
            setRecipe("Sorry, there was an error generating your recipe. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }
   
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient").trim();
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }
    } 

    return(
        <main>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    addIngredient(formData);
                    e.currentTarget.reset();
                }}
                className="add-ingredient-form"
            >
                <input
                    name="ingredient"
                    type="text"
                    placeholder="e.g., chicken, rice, tomatoes..."
                    aria-label="Add Ingredient"
                    required
                />
                <button type="submit">Add Ingredient</button>
            </form>
            
            <IngredientsList 
                ingredients={ingredients} 
                setIngredients={setIngredients}
                getRecipe={getRecipe}
            />
            
            {isLoading && <LoadingAnimation />}
            
            {recipe && !isLoading && (
                <div ref={recipeRef}>
                    <ClaudeRecipe recipe={recipe} />
                </div>
            )}
        </main>
    );
}