import {createContext} from "react";

import useTasks from "../components/Hooks/useTasks";
import useIncompleteTasks from "../components/Hooks/useIncompleteTaskScroll";
import useIncompleteTaskScroll
    from "../components/Hooks/useIncompleteTaskScroll";

export const TasksContext = createContext({})
export const TasksProvider = (props) => {
     const {children} = props

    const {
        tasks,
        filteredTasks,

        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        setNewTaskTitle,
        newTaskTitle,
        setSearchQuery,
        searchQuery,
        newTaskInputRef,
        addTask,
    }=useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    }=useIncompleteTaskScroll(tasks)

    return(
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteAllTasks,
                deleteTask,
                toggleTaskComplete,
                setNewTaskTitle,
                newTaskTitle,
                setSearchQuery,
                searchQuery,
                newTaskInputRef,
                addTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}