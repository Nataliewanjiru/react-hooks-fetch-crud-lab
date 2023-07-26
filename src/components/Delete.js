import { useState} from "react"


function Delete({prop}){

      
    function deleteFunction(){
      fetch(`http://localhost:3000/questions/${prop}`,{
            method:"DELETE",})
    }

 
    return(
        <button onClick={deleteFunction}>Delete</button>
    )
}

export default Delete;