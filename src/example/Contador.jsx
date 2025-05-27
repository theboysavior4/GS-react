import { useState } from "react"

const Contador = () => {
     const [count, setCount] = useState (1)
     const sumar = () => {
        setCount (count + 1)
        
     }
      const restar = () => {
        setCount (count - 1)
        
     }
     return (
        <div>
            <button>+</button>
            <span>{count}</span>
            <button>-</button>
        </div>
     )

    }

    export default Contador