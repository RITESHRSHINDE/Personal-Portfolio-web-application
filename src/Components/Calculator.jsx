import React, { useState } from 'react'

function Calculator() {
  const [result, setresult] = useState("");

  const handleclick = (e) => {
   setresult(result.concat(e.target.value))
  }
  const handleC = () => {
  setresult("");
  }
  const handleisequalto = () => {
    setresult(eval(result));
  }
    return (
     <>         
           <h1 className='text-slate-600 items-center justify-center flex lg:text-6xl text-2xl bg-slate-500 h-24 w-full'> Simple Calculator</h1>
         
    <div className='bg-gray-900 text-white h-screen w-full flex justify-center  items-center rounded-s-md'>

      <div className="main w-60 h-auto bg-slate-900 rounded-2xl shadow-xl border-4 hover:border-sky-700 border-red-500">
        <div className="screen p-1 rounded-xl flex text-center items-center justify-center border-none  ">
          <input type="text" placeholder='0' value={result} className='border-none  rounded-lg w-full px-1 bg-orange-200 hover:bg-sky-500 text-black text-right shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black pt-9 text-2xl' />
        </div>
         <div className="brand text-sm flex text-center justify-center bg-red-400 text-black hover:bg-slate-200 hover:text-red-500 hover:cursor-none">
        <h3>Ritesh`s calculator</h3>
        </div>
       <div className="keybord  border-xl border-pink-500 ">
          <div className="keys flex justify-between">
     <input type="button" value="c" onClick={handleC} className='text-lg hover:cursor-pointer text-black bg-pink-300 hover:bg-green-500  h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
      <input type="button" value="*" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-yellow-300 hover:bg-purple-500  h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
       <input type="button" value="<" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-green-300  hover:bg-pink-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        <input type="button" value=">" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-purple-300 hover:bg-yellow-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        
     </div>
     
      <div className="keys flex justify-between">
     <input type="button" value="1" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-pink-300 hover:bg-green-500  h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
      <input type="button" value="2" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-yellow-300  hover:bg-purple-500  h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
       <input type="button" value="3"m onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-green-300  hover:bg-pink-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        <input type="button" value="+" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-purple-300 hover:bg-yellow-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        
     </div>

      <div className="keys flex justify-between">
     <input type="button" value="4" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-pink-300 hover:bg-green-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
      <input type="button" value="5" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-yellow-300  hover:bg-purple-500  h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
       <input type="button" value="6" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-green-300  hover:bg-pink-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        <input type="button" value="-" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-purple-300 hover:bg-yellow-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        
     </div>
      <div className="keys flex justify-between">
     <input type="button" value="7" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-pink-300 hover:bg-green-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
      <input type="button" value="8" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-yellow-300  hover:bg-purple-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
       <input type="button" value="9" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-green-300  hover:bg-pink-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        <input type="button" value="%" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-purple-300 hover:bg-yellow-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        
     </div>

      <div className="keys flex justify-between">
     <input type="button" value="0" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-pink-300 hover:bg-green-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
      <input type="button" value="00" onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-yellow-300  hover:bg-purple-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
       <input type="button" value="." onClick={handleclick} className=' hover:cursor-pointer text-lg text-black bg-green-300 hover:bg-pink-500  h-11 w-11 m-2 font-medium justify-center text-center rounded-lg'/>
        <input type="button" value="=" onClick={handleisequalto} className='text-lg text-black bg-purple-300 hover:bg-yellow-500 h-11 w-11 m-2 font-medium justify-center text-center rounded-lg hover:cursor-pointer'/>
        
     </div>
       </div>
      </div>
    </div>
    </> 
  )
}

export default Calculator
