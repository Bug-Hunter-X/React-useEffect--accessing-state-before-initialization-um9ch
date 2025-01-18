# React useEffect Hook Bug: Accessing State Before Initialization

This repository demonstrates a common error in React applications involving the `useEffect` hook: attempting to access state variables before they have been initialized.  This can lead to unexpected behavior or errors, especially during the initial render.

## The Bug

The `bug.js` file contains a component that uses `useState` to manage a count.  Inside the `useEffect` hook, the component attempts to access and use the `count` variable before it's had a chance to be set by the `useState` hook.  This results in an `undefined` value being used, often leading to errors or unexpected results.

## The Solution

The `bugSolution.js` file shows the corrected implementation.  The solution is to use the `count` variable only after it's been initialized in the `useEffect` hook, typically after the first render when the state has been set.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Open both `bug.js` and `bugSolution.js` and examine the code.  Run the `bug.js` in a React environment and see the error. Run the `bugSolution.js` in a react environment to see the correct implementation.
