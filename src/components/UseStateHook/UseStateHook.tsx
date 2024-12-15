import React , { useState} from 'react'
export default function UseStateHook() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1 className='text-2xl font-bold'>UseState Hook</h1>
            <p className='text-lg py-5'>Count: <span className='font-bold'>{count}</span></p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
