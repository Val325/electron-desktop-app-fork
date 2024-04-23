
function StaffManagers(props) {
    return (
        
            <div>
                { props.render &&
                <div className='Create-task'>
                    <div className='Header-Staff'>
                       <div>Managers</div>
                       <div>Workers</div> 
                    </div>
                    <div className='Info-Staff'>
                        Info-Staff
                    </div> 
                </div>
                }
            </div>
        
    )
}

export default StaffManagers
