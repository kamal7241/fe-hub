# FE Hub
Basic Hooks
- useState
- useEffect

Intermediate Hooks
- useContext
- useReducer
- useRef

 Advanced Hooks
- useMemo
- useCallback
- Custom Hooks



------------------------------------------------------------------------

* UseState

The useState hook is a fundamental React Hook that allows you to add state management to functional components. It lets you define and manage local state within your component.

 - Example

 const [state, setState] = useState(initialValue);

state: The current state value.
setState: A function used to update the state.
initialValue: The initial value of the state (can be a primitive, object, array, or function).

- When the state involves complex or deeply nested structures (e.g., an object with multiple nested properties), updating the state with useState can become error-prone and hard to manage. In such cases, useReducer is a better alternative.

* UseEffect 

- Effect runs after render: useEffect runs after the component renders, so it doesn’t block the rendering process.
- Dependencies array: If no dependencies are provided, the effect runs after every render. If dependencies are provided, it only runs when one of the values changes.
- Cleanup function: If the effect returns a function, it acts as a cleanup function that will run before the component unmounts or before the effect is rerun (if the dependencies change).

* useContext

- The useContext Hook is a built-in React Hook that allows you to access the value of a context directly in functional components. Context provides a way to share values like themes, authentication status, or global state across the component tree without needing to pass props down manually at every level.

1- Create a Context: First, you need to create a context using React.createContext(). This creates a context object that can be used to share data across components.

2- Provide a Context: Use a <Provider> to wrap the component tree and provide a value for the context.

3- Consume the Context: Inside a component, use useContext to access the context value.


* useReducer

The useReducer hook in React is a powerful alternative to useState for managing complex state logic in your components. It allows you to handle state updates by dispatching actions to a reducer function, which determines how the state should change based on those actions

1- Define the Reducer Function: This function takes the current state and an action, and returns the new state based on the action type. It usually includes a switch statement to handle different

2- Initialize State and Reducer: Use useReducer within your component to initialize the state and link it to the reducer function. It returns the current state and a dispatch function.

3- Dispatch Actions: Use the dispatch function to update the state. Actions are typically objects that describe what should happen (e.g., { type: 'increment' }).

* useRef

The useRef hook in React is a versatile hook that can be used for several purposes, mainly for directly accessing a DOM element in your component, preserving data across renders without triggering re-renders, and storing mutable variables.

1- Accessing DOM Elements: useRef gives you direct access to a DOM node in your component. This is useful for managing focus, selection, or media playback without adding extra rendering

2- Storing Mutable Data: Any value stored in useRef is preserved between renders but does not cause the component to re-render when updated. This makes useRef ideal for keeping track of values that you need to persist without wanting to cause a rerender whenever they change, like storing the previous state.

3- Persisting Values Between Renders: Since the .current property of the ref object is mutable and is not reset on re-renders, useRef is also handy for keeping any mutable value around for the lifetime of the component.


* useMemo 

The useMemo hook in React is used to optimize performance by memoizing expensive function results between renders. It caches a computed value so that it doesn't have to be recalculated on every render if its dependencies have not changed. This is particularly useful for expensive calculations or deeply derived data.

- Comparison with useCallback: While useMemo is used for memoizing values, useCallback is used for memoizing functions. useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.

* useLayoutEffect 

The useLayoutEffect hook in React is similar to the useEffect hook but with a key difference in the timing of execution. While both hooks allow you to perform side effects in function components, useLayoutEffect runs synchronously after all DOM mutations have occurred but before the browser has had a chance to paint the changes. This makes it ideal for reading layout from the DOM and synchronously re-rendering, avoiding any visible flickering or layout shift.













