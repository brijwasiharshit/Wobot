import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, API_URL } from '../utils/constants';

const RecipeInfo = () => {
    const [recipeInformation, setRecipeInformation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const [showIngredients, setShowIngredients] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const handleIngredientsClick = () => {
        setShowIngredients(!showIngredients);
    }

    const handleInstructionsClick = () => {
        setShowInstructions(!showInstructions);
    }

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const response = await fetch(`${API_URL}/${params.id}/information?apiKey=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipe information');
                }
                const data = await response.json();
                setRecipeInformation(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchInfo();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-4 my-auto">
            <img src={recipeInformation.image} alt={recipeInformation.title} className="w-full" />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-gray-700">{recipeInformation.title}</h1>
                <h5>Price Per Serving - {recipeInformation.pricePerServing} ₹</h5>
                <h5>Ready In Minutes - {recipeInformation.readyInMinutes}</h5>
                <button onClick={handleIngredientsClick} className="mt-4 bg-gray-700 text-white rounded-md py-2 px-4 w-full flex justify-between">
                    <span>Ingredients</span> <span>{showIngredients ? '⬆️' : '⬇️'}</span>
                </button>
                <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${showIngredients ? 'max-h-full' : 'max-h-0'}`}>
                    <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                    <ul className="list-disc pl-4">
                        {recipeInformation.extendedIngredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.name}</li>
                        ))}
                    </ul>
                </div>
                <button onClick={handleInstructionsClick} className="mt-4 w-full bg-gray-700 text-white rounded-md py-2 px-4 flex justify-between">
                    <span>Instructions</span> <span>{showInstructions ? '⬆️' : '⬇️'}</span>
                </button>
                <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${showInstructions ? 'max-h-full' : 'max-h-0'}`}>
                    <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
                    <ol className="list-decimal pl-4">
                        {recipeInformation.analyzedInstructions[0]?.steps?.map((step, index) => (
                            <li key={index}>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeInfo;
