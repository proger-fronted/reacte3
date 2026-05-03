import TodoItem from './TodoItem'

const TodoList = (props) => {
    const {tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
    filteredTasks} = props
    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length ==0

    if (!hasTasks) {
        return <div className="todo__empty-message">No task</div>
    }
    if(hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Tasks not found </div>
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    className="todo__item"
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    onDeleteTaskbuttonClick={onDeleteTaskButtonClick}
                    isDone={task.isDone}
                    onTaskCompleteChange={onTaskCompleteChange}
                />
            ))}
        </ul>
    )
}

export default TodoList;