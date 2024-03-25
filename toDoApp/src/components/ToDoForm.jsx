import { useToDo } from "../context";
import {useState} from "react";



function ToDoForm() {
    const [todo,SetTodo] = useState()

    const {addToDo} = useToDo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addToDo({id:Date.now(),todo:todo,completed:false})
        SetTodo("")
    }

    return (
        <form  onSubmit ={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={ (e) => SetTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default ToDoForm;

