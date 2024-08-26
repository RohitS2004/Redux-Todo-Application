import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice"
import { useDispatch } from "react-redux";

const TodoAddForm = () => {

    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(message))
        setMessage("");
    }

    return (
        <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center"
        >
            <input 
            type="text" 
            className="p-2 flex-grow text-xl rounded-s-md outline-none dark:text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add todo..."
            />
            <button
            type="submit"
            className="px-5 py-2 dark:bg-sky-500 bg-black text-white text-xl rounded-e-md font-semibold"
            >
                Add
            </button>
        </form>
    )
}

export default TodoAddForm;