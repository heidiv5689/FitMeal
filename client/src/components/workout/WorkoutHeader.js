import {Button, Container, Modal, Carousel} from 'react-bootstrap';

const WorkoutHeader = ()=>(



<>

<header style={{ backgroundSize: "cover" , backgroundImage: "url('https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJ1bm5pbmclMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')"}} >
    <div className='p-5 text-center bg-image' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '400px' }}>

        <div className='mask'>
          <div className='d-flex h-100'>
            <div className='text-white'>
            <h4 className='mb-3'>Find the workout that works for you</h4>
          

  
            </div>
          </div>
        </div>
      </div>
    </header>
</>


)
export default WorkoutHeader;

