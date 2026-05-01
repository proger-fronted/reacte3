import Field from './Field'
import Button from './Button'

const AddTaskForm = (props) => {
    const{addTask,
    setNewTaskTitle,
        newTaskTitle,
    }=props
    function onSubmit(event){
        event.preventDefault()
        addTask()
    }
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
          className="todo__field"
          label="New Task title"
          id="new-task"
          value={newTaskTitle}
          onInput={(event)=>setNewTaskTitle(event.target.value)}
      />
     <Button>Add</Button>
    </form>
  )
}

export default AddTaskForm
