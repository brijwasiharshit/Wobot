import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './utils/constants';
import RecCard from './RecCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import SearchBar from './SearchBar';
import ErrorScreen from './ErrorScreen'; // Import the ErrorScreen component

const Body = () => {
    const [ListOfItems, setListOfItems] = useState([]);
    const [error, setError] = useState(null); // State for handling errors

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/complexSearch?apiKey=${API_KEY}&number=50`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setListOfItems(data.results);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setError('An error occurred while fetching recipes. Please try again later.'); // Set the error message
        }
    };

    return (
        <div>
            {error ? ( // Check if there's an error
                <ErrorScreen message={error} /> // Display the ErrorScreen component with the error message
            ) : (
                <>
                    {ListOfItems.length === 0 ? (
                        <Shimmer />
                    ) : (
                        <div>
                            <SearchBar setListOfItems={setListOfItems} />
                            <div className='flex flex-wrap'>
                                {ListOfItems.map((item) => (
                                    <Link key={item.id} to={`./recipe/${item.id}`}>
                                        <RecCard recData={item} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Body;
