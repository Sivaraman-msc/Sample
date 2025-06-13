function Child({ count }) {
    console.log("Child rendered");
    return <div>Count: {count}</div>;
  }
  
  function Parent() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);
  
    return (
      <>
        <Child count={count} />
        <button onClick={() => setOther(other + 1)}>Update Other State</button>
      </>
    );
  }
  