import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const todo = props.todo;
  const SetTodo = props.SetTodo;

  const [title, settitle] = useState("");

  const submithandler = (event) => {
    event.preventDefault();

    const newTodo = {
        id : nanoid(),
        title : title , 
        isComplete : false
    };

    SetTodo([...todo , newTodo]);
    settitle("");
  };

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={submithandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />
        <button>Create todo</button>
      </form>
      <hr />
    </div>
  );
};

export default Create;
