//fisrt of all use useState do all the create , delete part keep the delete part same as it is but after that use useForm for that install react-hook-form after that first of all delete the two-way binding and jo react-hook-form ki by-default boiler plate code hai wo likho usko dekh dekh ke sab jagah bhar do that's it


import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../../Wrapper";


const Create = () => {
  const [todo , SetTodo] = useContext(todocontext);

  const{register , // two-way binding ke liye
        handleSubmit , //submission ke liye 
        reset ,  //form ko reset karne ke liye 
        formState:{errors}} // error find karne ke liye  and validation lagane ke liye
        = useForm()

  const submithandler = (data) => {
       data.isComplete = false;
       data.id = nanoid()

        SetTodo([...todo , data]) // aise bhi likh sakte hai 
    
        toast.success("todo created !")

        reset()

    // const newTodo = {
    //     id : nanoid(),
    //     // title : title ,    // isko dekh dekh ke likhna upar submithandler ke ander
    //     isComplete : false
    // };

  };

  return (
    <div className=" w-[70%] p-10 ">
      <h1 className="mb-10 text-5xl font-thin">
        Set  <span className="text-red-400"> Reminders</span> for <br/>
         tasks
         </h1>

      <form onSubmit={handleSubmit(submithandler)}>
        <input
        className="border-b w-full text-2xl font-thin p-2 outline-0"
          {...register("title" , {required:"title cannot be empty"})}//register ko spread karna hai and input ka naam likna hai apan input ka naam title rakha hai
          type="text"
          placeholder="title"
         />
         <small className="font-thin text-red-400">{errors?.title?.message}</small>
        <br />
        <br />
        <button className=" mt-5 text-xl px-10 py-2 border rounded">Create todo</button>
      </form>
    </div>
  );
};

export default Create;
