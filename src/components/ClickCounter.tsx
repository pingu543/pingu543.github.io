import { useState } from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Click Counter: {count}
    </button>
  )
}

export default ClickCounter
