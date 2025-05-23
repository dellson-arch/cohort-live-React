const Read = (props) => {
  const todo = props.todo;
  const SetTodo = props.SetTodo;
  
    const deleteHandler = (id)=>{
     const filterTodo = todo.filter((todo)=>todo.id !== id);
     SetTodo(filterTodo)
   }
  const renderUser = todo.map((todo, id) => {
    return <li key={id}>
        {todo.title} | <span onClick={()=>deleteHandler(todo.id)}>delete</span>
        </li>;
  });
  return (
    <div>
      <h1>pending tasks</h1>
      <p>{renderUser}</p>
    </div>
  );
};

export default Read;

