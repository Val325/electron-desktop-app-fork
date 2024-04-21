function Home() {
  const Tasks = () => {
    console.log("Tasks!")
  };

  const Staff = () => {
    console.log("Staff!")
  };

  const TasksCreate = () => {
    console.log("TasksCreate!")
  };

  const Create = () => {
    console.log("Create!")
  };

  return (
    <div>
      <h5>home page</h5>
      <div className='Home-main'>
        <div className='Home-left'>
            <div>Home left</div>
            <div><button onClick={Tasks}>Tasks</button></div>
            <div><button onClick={Staff}>Staff</button></div>
            
        </div>
        <div className='Home-right'>
            <div>Home right</div>
            <div className='Tasks-staff-create'>
                <div><button onClick={TasksCreate}>Tasks</button></div> 
                <div><button onClick={Create}>Create</button></div>
                
            </div>
            <div className='Task-white'>White</div>
        </div>
      </div>
    </div>
  )
}

export default Home
