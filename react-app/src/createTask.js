
function CreateTask() {
    return (
    <div>
        <div className='Create-task'>
            <div className='Create-task-header'>
                <div className='Create-task-name'>Create Task</div>
                <div className='Create-task-btn'>Create button</div>
            </div>
            <div className='Create-task-colums'>
                <div className='Create-task-left'>
                    <div>Name</div>
                    <div>Status</div>
                    <div>Price</div>
                    <div>Deadline</div>
                </div>
                <div className='Create-task-right'>
                    <div>Description</div>
                    <div>Templ</div>               
                </div>
            </div>
        </div> 
    </div>
    )
}

export default CreateTask
