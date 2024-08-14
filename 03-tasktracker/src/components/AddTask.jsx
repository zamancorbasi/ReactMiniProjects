import { useState } from "react";

const AddTask = ({taskList, setTaskList}) => {
    const [addModel, setAddModel] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if(!projectName){
            setErrorMessage("Enter a project name to continue");
        }else{
            let timestamp = new Date();
            let tempList = taskList;
            tempList.push({
                projectName,
                taskDescription,
                timestamp: timestamp,
                duration: 0
            })
            localStorage.setItem("taskList", JSON.stringify(tempList))
            window.location.reload()

            setAddModel(false);
            setProjectName("");
            setTaskDescription("");

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
        <button className="rounded bg-blue-500 
        text-white mx-1.5 text-sm 
        text-sm font-semibold 
        pl-2 pr-2.5 py-1 hover:opacity-70"
        onClick={()=>setAddModel(true)}>
            +New
        </button>

        {addModel ? (
            <>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <div className="bg-white w-9/12 max-w-lg rounded-lg shadow-md relative flex flex-col">
                        <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold ">
                                Add New Task
                            </h3>
                            
                            <button className="font-semibold text-3xl leading-none float-rigth block px-1"
                            onClick={()=>setAddModel(false)}> 
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
                                onClick={handleAdd}
                                >
                                Add Task
                            </button>
                        </div>
                    </div>
                    
                    
                    
                </div>

            </>
        ):null}




        
        
        </>
    )

}

export default AddTask;