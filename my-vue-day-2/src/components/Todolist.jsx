import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Todolist() {
    const [text,setText]= useState("");
    const [items,setItems]= useState();
    const [page,setPage]=useState(1);

    function getdata(){
      axios.get(`http://localhost:3012/list?_limit=3&_page=${page}`).then((res)=>{
        setItems(res.data);
       // console.log(res.data)
      })
    }
    useEffect(()=>{
      getdata();
    },[page])


  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>{
            console.log(text)
            axios.post("http://localhost:3012/list",{title:text}).then(()=>{
              getdata()
        })
        }} className="btn btn-primary">Save</button>
        <div>
        {(items) ? <div>{(items.map((e)=>
          <p key={e.id}>{e.title}</p> 

        ))} </div>   : <p>getting details </p>}
        </div>

        <button onClick={ ()=>{
          if(page<=1){
            return
          }
          setPage(page-1)
        }}>Prev</button>
        <button onClick={ ()=>{
          setPage(page+1)
        }}>Next</button>
        
    </div>
  )
}

export default Todolist