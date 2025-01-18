```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly accessing count after initialization
    console.log('Count doubled:', count * 2); 
  }, [count]); // Added count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```