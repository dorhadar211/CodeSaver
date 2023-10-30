import { useState } from 'react'
import  CustomBarChart  from './components/GraphComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CustomBarChart></CustomBarChart>
      </div>
    </>
  )
}

export default App
