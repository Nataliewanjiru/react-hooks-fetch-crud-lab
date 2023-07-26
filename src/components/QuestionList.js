import React, { useEffect,useState } from "react";
import Delete from "./Delete";

function QuestionList() {
  const[questions, setQuestions]= useState([])
  useEffect(
    () =>{
      fetch("http://localhost:3000/questions")
      .then(res=>res.json())
      .then(data =>{
           setQuestions(data)
      })
    },[])

    

  return (
    <div>
    {questions.map(question =>{
      return(
        <div key={question.id}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h2>{question.prompt}</h2>
        <br></br>
        <ul>
          <li>{question.answers[0]}</li>
          <li>{question.answers[1]}</li>
          <li>{question.answers[2]}</li>
          <li>{question.answers[3]}</li>
          </ul>
          <br></br>
          <Delete prop={question.id}/>
        </div>
        
      )
    })}
    </div>
  );
}

export default QuestionList;
