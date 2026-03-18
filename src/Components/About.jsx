import React, { useEffect, useRef, useState } from 'react'
import Calculator from './Calculator';
import Navbar from './Navbar';
import Tic from '../Tictactoe/Tic';
import Hero from './Herosecond.jsx';

function About() {
   let  [count, setcount] = useState(1);
   let  [count2, setcount2] = useState(0);
   let  [todos, settodos] = useState([
    {title: "hey",
      desc: "hellow i am list with unique key"
    },{
      title: "hey another list with unique key",
      desc: "i am a list with unique key"
    },{
      title:"hey hellow!!",
      desc:"i am also list with unique key"
    }
   ]);
   const  [showbtn, setshowbtn] = useState(false);
   let btnref = useRef(0)
   let btn3 = useRef(0)
   let btn2 = useRef(0)
   let back = useRef(0)
   let sub = useRef(0)
   let inputref = useRef(0)


 const handleinput= (sub) => {
  sub.current.style.backgroundColor="yellow"
 }


 const handlebg= () => {
  let helo = document.getElementById("hi");
  helo.style.backgroundColor="red"
}


 const handlemagic = (btn3) => {
  // btn3.current.style.display="none"
  alert("hello")
 }

 const handlesubmit= (e) => {
  e.preventDefault();
  alert("hiiii")


  
 }

  useEffect( () =>{
     btnref.current.style.backgroundColor="red"  
     btn2.current.style.backgroundColor="red"
     if (inputref.current){
      inputref.current.focus();
     } 

  } )


const Todo= ({todo}) => {
  return ( <>
  <div id='hi'  className="todo text-white border border-purple-800 hover:bg-green-300"> {todo.title}</div>
  <div id='hi' className="todo text-white border border-purple-800 hover:bg-green-300"> {todo.desc}</div>
  </>
)}



  return (
    <>
    <Navbar />
    
     
    {/* <div ref={back} className=" text-center text-black">
      <h1 className='text-xl'> Concept 1 <li> UseState() Hoock</li></h1>

    </div> */}
    <div className="bg-gray-700 text-4xl text-red-600 text-center items-center h-20"> <h1><strong>Practic PAGE</strong></h1></div>
    <div className='bg-stone-400 h-screen  items-center text-center justify-center' >
    <button ref={btnref} onClick={() => {
      setcount(count+1)
    } } className=" p-2 m-2  border-gray-600 rounded-xl">Count + {count}</button>
        +
    <button onClick={ () => {
  setcount2(count2-1)
     } } 
    ref={btn2} className=" p-2 m-2  border-gray-600 rounded-xl">Count  {count2} </button> 
        <h1 className='text-white '>=</h1>
        
        <button ref={btn3} onClick={() => {
          setshowbtn(!showbtn);
          
        }}  className=" p-2 m-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-gray-600 rounded-xl"> Magic Button </button>
          <div className=" items-center flex justify-center">
<form >
        <input placeholder={count + count2} className='bg-slate-600 flex text-white justify-center  items-center hover:bg-purple-500' />
<button  ref={inputref} type="submit" onClick={handlesubmit} className="p-3 m-3 text-white  rounded-xl border hover:bg-blue-300 border-sky-300" > submit</button>
</form>
</div>
  {showbtn? <button ref={sub} onClick={ handlemagic} className='bg-slate-600 text-white border-red-500 p-3 m-3 rounded-xl hover:bg-red-400'>click</button>: <h1 className='text-center text-2xl text-teal-400'> hello</h1>}

{todos.map(todo=>{
  return <Todo key={todo.title} todo={todo} />
})}

 <button className='bg-slate-600 text-3xl m-8 p-7 rounded-md hover:bg-yellow-200'  onClick={ () =>  handlebg} >   change</button>

 </div>
   

   <Calculator />
    <Tic />
    <Hero />
    </>
  )
}

export default About
