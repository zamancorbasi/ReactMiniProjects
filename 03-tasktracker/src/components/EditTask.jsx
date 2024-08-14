import { useState } from "react";
import { useEffect } from "react";


const EditTask = ({task, index, taskList, setTaskList}) => {
    const [editModel, setEditModel] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription);
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        if(!projectName){
            setErrorMessage("Enter a project name to continue");
        }else{
            let taskIndex = taskList.indexOf(task);
            taskList.splice(taskIndex, 1, {
                projectName: projectName,
                taskDescription:  taskDescription,
                timestamp: task.timestamp,
                duration: task.duration
            });
            localStorage.setItem("taskList", JSON.stringify(taskList));
            window.location.reload();
            
            setEditModel(false);

        }
    }

    const handleInput = (e) => {
        const {name, value} = e.target;

        if(name === "projectName"){
            setProjectName(value);
            setErrorMessage("");

        } 
        if(name === "projectName" && value === ""){
            setErrorMessage("Enter a project name to continue");
        }
        if(name === "taskDescription") setTaskDescription(value);
    }

    return(
        <>
            
            <button className="bg-gray-400 text-white text-sm-uppercase font-semibold rounded px-3"
            onClick={() => setEditModel(true)}>
                Edit
            </button>

            {editModel ? (
            <>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <div className="bg-white w-9/12 max-w-lg rounded-lg shadow-md relative flex flex-col">
                        <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold ">
                                Edit Task
                            </h3>
                            
                            <button className="font-semibold text-3xl leading-none float-rigth block px-1"
                            onClick={()=>setEditModel(false)}> 
                                X 
                            </button>
                        </div>
                        <form className="p-6">
                            <div>
                                <label className="uppercase block track-wide text-grey-700 text-xs font-semibold mb-2"
                                htmlFor="project-name">
                                    Project Name
                                </label>
                                <input className="w-full
                                    bg-gray-200
                                    text-grey-700
                                    border border-grey-200 rounded
                                    py-3 px-4 mb-5 
                                    leading-tigth
                                    focus:outline-none
                                    focus:bg-white                         
                                    "  
                                    name="projectName"
                                    value={projectName}
                                    onChange={handleInput}
                                    id="project-name"
                                    type="text"
                                    placeholder="Project name"
                                    required
                                />
                                <p className="text-red-400 text-center mt-2 mb-5">{errorMessage}</p>
                            </div>
                            <div>
                                <label className="uppercase block track-wide text-grey-700 text-xs font-semibold mb-2"
                                htmlFor="task-description">
                                    Task Description
                                </label>
                                <textarea className="w-full
                                    bg-gray-200
                                    text-grey-700
                                    border border-grey-200 rounded
                                    py-3 px-4 mb-5 
                                    leading-tigth
                                    focus:outline-none
                                    focus:bg-white                         
                                    "   
                                    name="taskDescription"
                                    value={taskDescription}
                                    onChange={handleInput}
                                    id="task-description"
                                    rows="5"
                                    type="text"
                                    placeholder="Task description"                                
                                />
                            </div>
                        </form>
                        <div className="flex justify-end border-t p-6 border-slate-200 rounded-b">
                            <button className="rounded bg-blue-500 
                                text-white mx-1.5 text-sm uppercase
                                text-sm font-semibold 
                                px-6 py-3 hover:opacity-70"
                                onClick={handleUpdate}
                                >
                                Update Task
                            </button>
                        </div>
                    </div>
                    
                    
                    
                </div>

            </>
        ):null}

        
        </>
    )
}

export default EditTask;