import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setdata]= useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/RITESHRSHINDE')
        .then(Response => Response.json())
        .then(data => {
            setdata(data)
        }
        )
    },[])

    
    const [form, setform] = useState(0)

  const handleclick = ()  => {
    alert("hii a am click")
  }
  const handlemouseover = ()  => {
    alert("hii a am div")
  }
  return (
    <div>
      <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>
    Github followers: {data.following} <br />
    User Name : {data.login} 
  <br />
    <div className=""><a href="https://github.com/RITESHRSHINDE"> My GitHub Profile</a>
    <h1>
        Full Name : Ritesh Rajabhau Shinde
      </h1>
    </div>
     <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full' /> 
      
    </div>

    <div className="bg-white text-black h-72 flex  items-center text-center justify-center ">

<button onClick={handleclick} className='border-4 border-black p-7 '>
  click me 
  </button> 
  <div onMouseOver={handlemouseover} className="bg-orange-500 h-52 w-52"> 
    i am div
  </div>
  </div>
    </div>

    
  )
}

export default Github
