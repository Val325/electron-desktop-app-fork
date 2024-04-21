function Home() {
  return (
    <div>
      <h5>home page</h5>
      <div className='Home-main'>
        <div className='Home-left'>
            <div>Home left</div>
            <div>Tasks</div>
            <div>Staff</div>
            
        </div>
        <div className='Home-right'>
            <div>Home right</div>
            <div className='Tasks-staff-create'>
                <div>Tasks</div> 
                <div>Create</div>
                
            </div>
            <div className='Task-white'>White</div>
        </div>
      </div>
    </div>
  )
}
export default Home
