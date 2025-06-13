import React from 'react'

export default function Abort() {

    useEffect(() => {
        const controller = new AbortController();
        fetch('/data', { signal: controller.signal });
      
        return () => controller.abort(); // ✅ Prevent memory leak
      }, []);
  return (
    <div>Abort</div>
  )
}

useEffect(() => {
    const unsubscribe = subscribeToSomething(data => {
      setData(data);
    });
  
    return () => unsubscribe(); // ✅ Clean up
  }, []);

  let ref = document.getElementById('something');
ref = null; // ✅ Help GC

useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
  
    return () => clearInterval(timer); // ✅ Cleanup on unmount
  }, []);
