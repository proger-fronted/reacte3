import {useRef} from "react";

const useIncompleteTasks = (tasks) => {
    const firstIncompleteTaskRef = useRef(null)
    const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id

    return {
        firstIncompleteTaskId,
        firstIncompleteTaskRef
    }
}

export default useIncompleteTasks;