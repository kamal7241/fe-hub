import React, { useState, useLayoutEffect, useRef } from 'react';

export default function UseLayoutEffectHook() {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);

    useLayoutEffect(() => {
        setWidth(ref.current.clientWidth);
    }, []);

    return (
        <div ref={ref}>
            <h1 className='text-2xl font-bold'>UseLayoutEffect Hook</h1>
            <h1 className='text-lg py-5'>The width of this container : {width} pixels</h1>
        </div>
    );
}
