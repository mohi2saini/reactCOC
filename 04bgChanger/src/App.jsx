import { useState } from "react"
import './App.css';
function App() {
const [color, setColor]=useState("olive")

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-2xl">
    
            <button onClick={()=>setColor("red")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg m-1 " style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>setColor("green")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg m-1 " style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg m-1 " style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=>setColor("white")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg m-1 " style={{backgroundColor:"white"}}>white</button>
            <button onClick={()=>setColor("pink")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg m-1 " style={{backgroundColor:"pink"}}>pink</button>
            <button onClick={()=>setColor("lavender")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg m-1 " style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={()=>setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg m-1 " style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>setColor("grey")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg m-1 " style={{backgroundColor:"grey"}}>Grey</button>
            <button onClick={()=>setColor("black")} className=" outline-none px-4 py-1 rounded-full text-white shadow-lg m-1 " style={{backgroundColor:"black"}}>Black</button>

            
          </div>
        </div> 
    </div>
    
  )
}
  
export default App
