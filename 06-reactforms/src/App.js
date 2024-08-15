import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([{
    prompt: "",
    answer: "",
    timestamp: new Date().getTime(),

  }])

  const handlePrompt = (e,i) => {
    const { name, value} = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name]  = value;
    setPrompts(newPrompts);
  }

  const handleAddPrompt = () => {
    setPrompts([...prompts,{
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    }])
  }

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name] : value
    })
    
  }

  const handleDelete = (i) => {
    let deletePrompts = [...prompts];
    deletePrompts.splice(i,1);
    setPrompts(deletePrompts);
  }
  console.log(userInfo);
  
  return (
    <>
    <h1 className='text-3xl text-center my-4 py-2'>
      06-React Forms
    </h1>

    <form className="w-5/6 max-w-md mx-auto ">
    <fieldset className="flex flex-col border py-1 px-6 gap-2">
        <legend className="text-2xl font-semibold ">About You</legend>
      
        <div>
          <label className="text-3xl  font-semibold">
            What's your name?
          </label>
          <input
            className="w-3/5 border rounded text-lg leading-tigth py-3 px-2 mt-4 
            focus:outline-indigo-400"
            id="firstName"
            name="firstName"
            type="text"
            placeholder='First name'
            onChange={handleInput}        
          />
          <input
            className="w-3/5 border rounded text-lg leading-tigth py-3 px-2 mb-3 mt-1.5
            focus:outline-indigo-400"
            id="lastName"
            name="lastName"
            type="text"
            placeholder='Last name'
            onChange={handleInput}        
          />
        </div>

        <div>
          <label className="text-3xl  font-semibold">
            What's your email?
          </label>
          <input
            className="w-3/5  border rounded text-lg leading-tigth py-3 px-2 mt-4 
            focus:outline-indigo-400"
            id="email"
            name="email"
            type="email"
            placeholder='example@email.com'
            onChange={handleInput}        
          />
        </div>

        <div>
          <label className="text-3xl  font-semibold">
            What's your date of birth?
          </label>
          <input
            className="w-3/5 border rounded text-lg leading-tigth py-3 px-2 mt-4 custom-date-input
            focus:outline-indigo-400"
            id="dob"
            type="date"
            max="2000-01-01"
            name="dob"
          
            onChange={handleInput}        
          />
        </div>

        <div className="flex flex-col">
          <label 
          className="text-3xl  font-semibold">
            What's your gender?
          </label>
          <select className="w-3/5 border rounded text-lg leading-tigth py-3 px-2 mt-4 mb-6 custom-date-input
            focus:outline-indigo-400"
            id="gender" name="gender"
            onChange={handleInput}    >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Nonbinary">Nonbinary</option>

          </select>
        </div>
    </fieldset>

    <fieldset className="flex flex-col border py-1 px-6 gap-2 mb-7">
      <legend className="text-2xl font-semibold ">
        Prompts
      </legend>
        {prompts.map((prompt,i)=>(
          <div key={prompt.timestamp} className="flex flex-col">
          <label 
          className="text-3xl  font-semibold">
            Select a prompt
          </label>
          <div className="flex flex-row items-center gap-2">
            <select className="w-full border rounded text-lg py-3 px-2 mt-4 mb-3 custom-date-input
              focus:outline-indigo-400"
              id="prompt1" name="prompt1"
              onChange={e=> handlePrompt(e, i)}>
              <option value="Dating me is like...">Dating me is like...</option>
              <option value="A fact about me surprises people...">A fact about me surprises people...</option>
              <option value="I want someone who...">I want someone who...</option>
            </select>
            <button className="border bg-red-400 py-3 px-5 rounded-lg text-white font-bold text-xl "
            type="button"
            onClick={() => handleDelete(i)}>
              -
            </button>

          </div>
          
          <textarea
          className="border border-dashed py-3 px-2 mb-4
          w-3/7 border rounded text-lg leading-tigth py-3 px-2 mt-4 mb-6 custom-date-input
          focus:outline-indigo-400"
          id="answer1"
          name="answer1"  
          rows={3}
          placeholder="Let your true colors show"
          onChange={e=> handlePrompt(e, i)}
          />
        </div>


      ))}
     
      
        <div className="w-full flex justify-center">
          <button className="border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl"
          type="button" onClick={handleAddPrompt}>
            Add Prompt
          </button>
        </div>


    </fieldset>
      
      
    </form>
    </>
  );
}

export default App;
