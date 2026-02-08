import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-gray-800 py-20 px-30 flex flex-col items-center gap-y-6">
      <h1 className="text-4xl text-shadow-white">Counter</h1>
      <h2 className="w-20 h-20 rounded-full bg-black text-white text-2xl flex items-center justify-around ">{count}</h2>
      <section className="flex justify-between gap-x-3.5">
      <button className="w-20 py-2 rounded-lg font-medium bg-gray-500 hover:bg-gray-500 
      transition-colors duration-300 " onClick={() => setCount(count+1)} >Increase</button>
      <button className="w-20 py-2 rounded-lg font-medium bg-gray-500 hover:bg-gray-500 
      transition-colors duration-300 " onClick={() => setCount(count-1)} >decrease</button>
      <button className="w-20 py-2 rounded-lg font-medium bg-gray-500 hover:bg-gray-500 
      transition-colors duration-300 " onClick={() => setCount(0)} >Reset</button>
      </section>
    </div>

  )
}

export default App
