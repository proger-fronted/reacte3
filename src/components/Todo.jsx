
import {useState} from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {


    const [tasks,setTasks] = useState([{id: 'task-1', title: 'buy milk', isDone: false},
        {id: 'task-2', title: 'buy eat', isDone: true}])
    const[newTaskTitle,setNewTaskTitle] = useState('')


    function deleteAllTasks(){
       const isConfirmed = confirm('Are you sure you want to delete?')
        if(isConfirmed){
            setTasks([])
        }
    }
    function deleteTask(taskId){
       setTasks(
           tasks.filter(task=>task.id !== taskId)
       )
    }
    function toggleTaskComplete(taskId,isDone){
       setTasks(tasks.map((task)=>{
           if(task.id === taskId){
               return {...task,isDone}
           }
           return task
       }))
    }
    function filterTasks(query){
        console.log(`Search ${query}`)
    }
    function addTask(){
       if(newTaskTitle.trim().length > 0){
           const newTask={
               id:crypto?.randomUUID() ?? Date.now().toString(),
               title:newTaskTitle,
               isDone:false
           }

           setTasks([...tasks,newTask])
           setNewTaskTitle('')
       }
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}/>
            <SearchTaskForm onSearchInput={filterTasks}/>
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteButtonClick={deleteAllTasks}
            />
            <TodoList tasks={tasks}
                      onTaskCompleteChange={toggleTaskComplete}
            onDeleteTaskButtonClick={deleteTask}/>
        </div>
    )
}

export default Todo
