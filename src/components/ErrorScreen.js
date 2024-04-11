import React from 'react';

const ErrorScreen = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-lg text-gray-700">{message}</p>
        </div>
    );
};

export default ErrorScreen;
