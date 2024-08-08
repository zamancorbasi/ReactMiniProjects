const Board = ({task, index, taskList, setTaskList}) => {
    const handleDelete = () => {
        // Filter out the task to be deleted
        const newTaskList = taskList.filter((_, i) => i !== index);
        // Update the state with the new task list
        setTaskList(newTaskList);
    }

    return (
        <>
        <div className="max-w-md rounded-xl flex flex-col 
        items-center justify-start border
        text-center text-lg pt-3 pb-4 px-2 md:px-6">
            <p>{task}</p>
            <button
            className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4 "
            onClick={handleDelete}
            >
                Delete
            </button>
        </div>
         
        </>
    )
}

export default Board;