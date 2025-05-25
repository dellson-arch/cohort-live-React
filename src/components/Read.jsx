import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../../Wrapper";

const Read = () => {
    const [todo , SetTodo] = useContext(todocontext);

    const deleteHandler = (id)=>{
     const filterTodo = todo.filter((todo)=>todo.id !== id);
     SetTodo(filterTodo)
     toast.error("todo deleted ! ")
   }
  const rendertodos = todo.map((todo, id) => {
    return <li key={todo.id} className="mb-3 flex justify-between items-center p-3 bg-gray-900 rounded">
        <span className="text-xl font-thin">{todo.title}</span>
        <button className="font-thin text-red-400 text-sm"onClick={()=>deleteHandler(todo.id)}>Delete</button>
        </li>;
  });
  return (
    <div className="w-[30%] p-10">
      <h1 className="mb-10 text-5xl font-thin"><span className="text-pink-400">Pending</span> tasks</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;

