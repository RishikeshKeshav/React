import {createContext,useContext} from 'react'


export const ToDoContext = createContext({
    todos:[{
        id:1,
        completed:false,
        todo:"Todo msg"
    }],
    addToDo: (todo) => {},
    toggleComplete: (id) => {},
    deleteToDo: (id) => {},
    updateToDo: (id,todo) => {}

})


export const useToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider