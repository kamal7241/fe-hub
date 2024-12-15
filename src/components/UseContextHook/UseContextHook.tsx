import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext('light');

export default function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1 className='text-2xl font-bold'>UseContext Hook</h1>
            <p className='text-lg py-5'>Current theme: {theme}</p>
        </div>

    )
}