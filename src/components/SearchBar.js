import React, { useState } from 'react';
import { API_KEY, API_URL } from './utils/constants';

const SearchBar = ({setListOfItems}) => {
    const [ingredients, setIngredients] = useState('');
    const filterRecipes = async () => {
        try {
            const response = await fetch(`${API_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${encodeURIComponent(ingredients)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            if(data.length === 0) alert('No recipes found, Please enter valid ingredient e.g. Apple, Banana');
            else setListOfItems(data);
            
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-16 bg-gray-100 shadow-md">
            <input
                className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none"
                type="text"
                placeholder="Enter ingredients to Filter"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 focus:outline-none"
                onClick={filterRecipes}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
