import { useState } from 'react';

function Counter() {
  
  const [count, setCount] = useState<number>(0);
  

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)} className="border rounded-md p-1" type="button">
//         Click
//       </button>
//     </div>
//   );
    const updateCount = () => setCount(count + 1)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={updateCount}>Click</button>
        </div>
    )
}

export default Counter