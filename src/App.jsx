// import React, { useEffect, useLayoutEffect, useState, useRef, useMemo, useCallback, useDebugValue } from 'react';
import './App.css';
import React, { useReducer } from 'react'
import { useName } from './useName'
import { COMPLETE, UNCOMPLETE, initialState, reducer } from './reducer';


function App() {

    const  [state, dispatch] = useReducer(reducer, initialState)

    // const { name } = useName()

        // const age = 22

    // const getName = useCallback(() => {  //кеширует ссылку на функцию, когда она передается в качестве пропса 
    //     console.log(name)
    // }, [name])
    // const value = useMemo(() => ({   // кеширует данные
    //     name, age
    // }), [name])


    // const [data, setData] = useState({})
    // const inputRef = useRef<HTMLInputElement>(null)

    // useLayoutEffect(() => {
    //     console.log(inputRef.current.value)
    // }, [])

    // useEffect(() => {
    //     inputRef.current.value = 'Lera'
    //     const interval = setInterval(() => {
    //         console.log('500')
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])

  return (
    <div>
    <h3>HTML (JS version)</h3>
    {state.map(todo => (
        <button key={todo.name} style={{display: 'flex', alignItems: 'center'}} 
        onClick={() =>  
            dispatch({type: todo.isCompleted ? UNCOMPLETE : COMPLETE, payload: todo.name}) }>
            <div style={{backgroundColor: todo.isCompleted ? 'green' : 'red', width: 15, height: 15, marginRight: 5}} />
            <div>{todo.name}</div>
        </button>
    ))}
    {/* <input
    //ref={inputRef} 
    //value={name}
    placeholder='Enter name' /> */}
    {/* <div><b>Value:</b> {data.name}</div> */}
    </div>
  );
}

export default App;
