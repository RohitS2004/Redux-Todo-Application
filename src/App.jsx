import { TodoAddForm, TodoItem, ThemeBtn } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLocalStore } from "./features/todo/todoSlice";

function App() {
    const todos = useSelector((state) => state.todoReducer.todos);
    const themeMode = useSelector((state) => state.themeReducer.themeMode);
    const dispatch = useDispatch();

    // everytime there is a change in the themeMode just re-render the component
    const htmlElem = document.querySelector("html");
    useEffect(() => {
        htmlElem.classList.remove("light", "dark");
        htmlElem.classList.add(themeMode);
    }, [themeMode])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("redux-todos"))
        // check if the data is there and the length is not equal to zero
        if (data && data.length) {
            dispatch(setLocalStore(data));
        }
    }, [])

    useEffect(() => {
        // if there is any kind of change in the todos then set them to the todos state of our todoSlice
        localStorage.setItem("redux-todos", JSON.stringify(todos));
        // console.log(todos)
    }, [todos])
    
    return (
        <>
            <div className="max-w-full relative min-h-screen dark:bg-slate-900 bg-blue-400 dark:text-white text-black flex justify-center items-start">
                <div className="absolute right-5 top-5">
                    <ThemeBtn />
                </div>
                <div className="max-w-xl flex flex-col gap-3 w-full mt-10 font-poppins">
                    <h1 className="text-center text-4xl font-extrabold">
                        Todo App
                    </h1>
                    <TodoAddForm />
                    <div className="w-full flex flex-col gap-3">
                        {todos.map((todo) => (
                            <TodoItem 
                            key={todo.id}
                            todo={todo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
