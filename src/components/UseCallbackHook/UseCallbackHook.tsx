import React, { useState, useCallback } from 'react';

export default function UseCallbackHook() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);  

    const increment = useCallback(() => {
        setCount((prev) => prev + step);  
    }, [step]);  

    return (
        <div>
            <h1 className='text-2xl font-bold'>UseCallback Hook</h1>
            <p className='text-lg py-5'>Count: {count}</p>
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={increment}
            >
                Increment
            </button>
            <input
                type="number"
                value={step}
                onChange={(e) => setStep(parseInt(e.target.value, 10))}
                className="ml-4 border-2 p-1 rounded"
            />
        </div>
    );
}
