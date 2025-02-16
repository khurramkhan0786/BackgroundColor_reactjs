import { useState } from 'react'


function App() {
 const [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button onClick={()=>setColor("red")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
        Red
        </button>
        <button  onClick={()=>setColor("green")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
        green
        </button>  
        <button  onClick={()=>setColor("blue")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
        blue
        </button>
        <button  onClick={()=>setColor()}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>
         olive
        </button>
        <button  onClick={()=>setColor("Gray")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Gray"}}>
        Gray
        </button>
        <button  onClick={()=>setColor("Yellow")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Yellow"}}>
          Yellow
        </button>
        <button   onClick={()=>setColor("Pink")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}>
        Pink
        </button>
        <button  onClick={()=>setColor("Purple")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}}>
        Purple
        </button>
        <button  onClick={()=>setColor("Lavender")}
        className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor:"Lavender"}}>
        Lavender
        </button>
        <button  onClick={()=>setColor("white")}
        className="outline-none px-4 rounded-full text-black shadow-lg" style={{backgroundColor:"White"}}>
        white
        </button>
        <button  onClick={()=>setColor("black")}
        className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
        Black
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
