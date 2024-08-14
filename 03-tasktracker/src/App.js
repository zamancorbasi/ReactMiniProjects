import AddTask from './components/AddTask';
import ToDo from './components/ToDo';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDrop } from 'react-dnd';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  
  useEffect(()=>{
    let array = localStorage.getItem("taskList");

    if(array){
      setTaskList(JSON.parse(array))
    }
  }, [])

  const [{isOver}, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addToCompleted(item.id,  item.projectName, item.taskDescription, item.timestamp,item.duration),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addToCompleted = (id, projectName,taskDescription,timestamp,duration) => {
      
    const moveTask = taskList.filter((task) => id===task.id);
    setCompleted((completed) => [...completed, {moveTask, projectName, taskDescription,timestamp,duration}])
    
  }


  return (
    <>
    <h1 className="text-2xl font-bold py-4 pl-6">03-The Task Tracker</h1>

    <p className="text-xl pl-6">Hi there!</p>

    <div>
      <p className="text-xl pl-6">Click 
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
     to add a new task</p>
    </div>

    <div className='flex flex-row'>
      <div className='w-full'>
        <h2 className='ml-6 text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-200'>To Do:</h2>

        {taskList.slice().reverse().map((task,i) =>
          
          <ToDo key={task.timestamp} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>
          
        )}
      </div>


      <div className='w-full flex flex-col' ref={drop}>
        <h2 className='text-xl font-semibold w-3/4 max-w-lg my-4 py-2 px-4 bg-gray-200'>Done:</h2>

        {completed.slice().reverse().map((task,i) =>
          <ToDo key={task.timestamp} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>    
        )}
      </div>
    </div>  
    </>
  );
}

export default App;
