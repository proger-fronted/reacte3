import {useEffect, useState} from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {


    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
            return JSON.parse(savedTasks)
        }
        return [
            [{id: 'task-1', title: 'buy milk', isDone: false},
                {id: 'task-2', title: 'buy eat', isDone: true}]

        ]
    })
    const [searchQuery, setSearchQuery] = useState('')
    const [newTaskTitle, setNewTaskTitle] = useState('')

    function deleteAllTasks() {
        const isConfirmed = confirm('Are you sure you want to delete?')
        if (isConfirmed) {
            setTasks([])
        }
    }

    function deleteTask(taskId) {
        setTasks(
            tasks.filter(task => task.id !== taskId)
        )
    }

    function toggleTaskComplete(taskId, isDone) {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return {...task, isDone}
            }
            return task
        }))
    }


    function addTask() {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
        }
    }
    const clearSearchQuery= searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0
    ? tasks.filter(({title})=> title.toLowerCase().includes(clearSearchQuery)):null


    useEffect(() => {

        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <SearchTaskForm
                searchQuery={searchQuery}
                setsearchQuery={setSearchQuery}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteButtonClick={deleteAllTasks}
            />
            <TodoList
                filteredTasks={filteredTasks}
                tasks={tasks}
                onTaskCompleteChange={toggleTaskComplete}
                onDeleteTaskButtonClick={deleteTask}
            />
        </div>
    )
}

export default Todo
