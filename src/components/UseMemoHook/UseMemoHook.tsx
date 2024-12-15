import React, { useState, useMemo } from 'react';

export default function UseMemoHook() {
    const [num, setNum] = useState(0);

    const result = useMemo(() => {
        function calc(n) {
            return n*2
        }
        return calc(num);

    }, [num]);

    return (
        <div>
            <h1 className='text-2xl font-bold'>UseMemo Hook</h1>
            <input className='bg-red-100' type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
            <p className='text-lg py-5'>result: {result}</p>
        </div>
    );
}