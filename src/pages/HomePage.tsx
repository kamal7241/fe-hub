import React from 'react'
import UseStateHook from '../components/UseStateHook/UseStateHook.tsx'
import UseEffectHook from '../components/UseEffectHook/UseEffectHook.tsx'
import ThemedComponent from '../components/UseContextHook/UseContextHook.tsx'
import UseReducerHook from '../components/UseReducerHook/UseReducerHook.tsx'
import UseRefHook from '../components/UseRefHook/UseRefHook.tsx'
import UseMemoHook from '../components/UseMemoHook/UseMemoHook.tsx'
import UseCallbackHook from '../components/UseCallbackHook/UseCallbackHook.tsx'
import UseLayoutEffectHook from '../components/UseLayoutEffectHook/UseLayoutEffectHook.tsx'
export default function HomePage() {
  return (
    <>
      <div className='basic-hooks'>
        <h1 className='text-2xl font-bold'>Basic Hooks</h1>
        <div className='p-4 border-2 border-gray-400 flex gap-4 justify-around'>
          <UseStateHook />
          <UseEffectHook />
        </div>
      </div>
      <div className='intermediate-hooks'>
        <h1 className='text-2xl font-bold'>Intermediate Hooks</h1>
        <div className='p-4 border-2 border-gray-400 flex gap-4 justify-around'>
          <ThemedComponent />
          <UseReducerHook />
          <UseRefHook />
        </div>
      </div>
      <div className='intermediate-hooks'>
        <h1 className='text-2xl font-bold'>Advanced Hooks</h1>
        <div className='p-4 border-2 border-gray-400 flex gap-4 justify-around'>
          <UseMemoHook />
          <UseCallbackHook />
          <UseLayoutEffectHook/>
        </div>
      </div>

    </>
  )
}
