import { createContext, useState } from 'react'

export const todocontext = createContext(null)
const Wrapper = (props) => {
    const[todo , SetTodo] = useState([
    {id: 1 , title:"kaam karle bhai" , isComplete : false}   // is jagah apan wo data likhenge jo data apne ko pure application me failana hai 
  ])
  return (
     <todocontext.Provider value={[todo , SetTodo]}>
         {props.children}
     </todocontext.Provider>
    
    
  )
}

export default Wrapper

