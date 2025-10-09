import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div>
            <PacmanLoader color="#00D390" ></PacmanLoader>
        </div>
    );
};

export default LoadingSpinner;