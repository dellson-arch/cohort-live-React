//fisrt of all use useState do all the create , delete part keep the delete part same as it is but after that use useForm for that install react-hook-form after that first of all delete the two-way binding and jo react-hook-form ki by-default boiler plate code hai wo likho usko dekh dekh ke sab jagah bhar do that's it


import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";


const Create = (props) => {
  const todo = props.todo;
  const SetTodo = props.SetTodo;

  const{register , // two-way binding ke liye
        handleSubmit , //submission ke liye 
        reset ,  //form ko reset karne ke liye 
        formState:{errors}} // error find arne ke liye 
        = useForm()

  const submithandler = (data) => {
       data.isComplete = false;
       data.id = nanoid()

       //wahi same process data dikhane ke liye
        SetTodo([...todo , data]) // aise bhi likh sakte hai 

      //   const copyTodos = [...todo];
      //  copyTodos.push(data);     // aise bhi likh sakte hai
      //  SetTodo(copyTodos);

       reset()

    // const newTodo = {
    //     id : nanoid(),
    //     // title : title ,    // isko dekh dekh ke likhna upar submithandler ke ander
    //     isComplete : false
    // };

  };

  return (
    <div>
      <h1 className="">Create Tasks</h1>

      <form onSubmit={handleSubmit(submithandler)}>
        <input
          {...register("title")}//register ko spread karna hai and input ka naam likna hai apan input ka naam title rakha hai
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
