import React , { useState , useEffect} from 'react'
export default function UseEffectHook() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div>
            <h1 className='text-2xl font-bold'>UseEffect Hook</h1>
            <p className='text-lg py-5'>Seconds: {seconds}</p>

        </div>
        </>
    )}