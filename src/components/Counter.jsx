function Counter() {
    const [count, setCount] = useState(21)
    const increment = () => {
      setCount(count+1);
    }
  
    const decrement = () => {
      setCount(count-1)
    }
    return (
      <>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increase</button>
        <br></br>
        <button onClick={decrement}>Decrease</button>
      </>
    )
  }

  export default Counter;