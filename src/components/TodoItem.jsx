import { useState } from "react";
import { updateTodo, deleteTodo, toggleCompleted } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
    // console.log(todo.text + " " + todo.id + " " + todo.completed)
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [message, setMessage] = useState(todo.text);

    const update = () => {
        const t = {...todo, text: message}
        dispatch(updateTodo(t));
        setEditable(false);
    }

    const toggle = () => {
        console.log(todo.id)
        dispatch(toggleCompleted(todo.id));
    }

    return (
        <>
        <div
        className={`rounded-md p-2 flex items-center gap-2 ${
            todo.completed ? "bg-red-400" : "bg-green-400"
        }`}
        >
            <input 
            type="checkbox"
            checked={todo.completed}
            onChange={toggle} 
            />
            <input 
            type="text" 
            value={message}
            readOnly={!editable}
            onChange={(e) => setMessage(e.target.value)}
            className={`flex-grow border rounded-md text-black outline-none bg-transparent p-2 text-2xl ${
                editable ? "border-[1px] border-slate-500" : "border-transparent"
            } ${
                todo.completed ? "line-through" : ""
            }`}
            />
            <button
            className="bg-slate-300 disabled:opacity-40 disabled:hover:bg-slate-300 hover:bg-slate-50 rounded-md px-3 py-2 text-lg"
            disabled={todo.completed}
            onClick={(e) => {
                if (todo.completed) return
                if (editable) {
                    update()
                }
                else {
                    setEditable(prevEditable => !prevEditable)
                }
            }}
            >
                {
                    editable ? "📂" : "✏️"
                }
            </button>
            <button
            className="bg-slate-300 disabled:opacity-40 disabled:hover:bg-slate-300 hover:bg-slate-50 rounded-md px-3 py-2 text-lg"
            disabled={todo.completed}
            onClick={() => dispatch(deleteTodo(todo.id))}
            >
                ❌
            </button>
        </div>
        </>
    )
}

export default TodoItem;
