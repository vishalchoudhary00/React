import { useState } from 'react'


function App() {
  const[color,setColor] = useState("white")

  return (
    <><div className="w-full h-screen flex justify-center duration-200 items-center text-white "
    style={{backgroundColor:color}}> CLICK ON THE FOLLOWING BUTTON FOR CHANGING THE COLOR:
    </div>
    <div className="fixed flex flex-wrap  bottom-12 justify-center px-10 py-10 h-18 ">
      <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
        <button onClick={()=>{setColor("red")}} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"red"}}>Red</button>
         <button onClick={()=>{setColor("yellow")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"yellow"}}>yellow</button>
         <button onClick={()=>{setColor("green")}}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"green"}}>green</button>
         <button onClick={()=>{setColor("blue")}}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"blue"}}>blue</button>
         <button onClick={()=>{setColor("black")}}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"black"}}>black</button>
      </div>
    </div>
  
    </>
  )
}

export default App
