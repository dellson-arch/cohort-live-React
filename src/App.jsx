import { useState } from "react"
import Create from "./components/create"
import Read from "./components/read"
const App = () => {
  const[todo , SetTodo] = useState([
    {id: 1 , title:"kaam karle bhai" , isComplete : false}
  ])

  return (
    <div>
    <Create  todo = {todo} SetTodo = {SetTodo}/>
    <Read todo = {todo} SetTodo = {SetTodo} /> 
    </div>
  )
}

export default App
