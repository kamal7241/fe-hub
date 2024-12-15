import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>UseReducer Hook</h1>
            <p className='text-lg py-5'>Count: {state.count}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-3' onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}