import React, { useRef } from 'react';

export default function UseRefHook() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

 
    return (
        <div>
            <h1 className='text-2xl font-bold'>UseRef Hook</h1>
            <div className='my-5 flex gap-4'>
                <input ref={inputRef} type="text" className='bg-red-100' />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={focusInput}>Focus Input</button>
            </div>
        </div>
    );
}