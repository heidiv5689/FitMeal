import { useState, useEffect } from 'react';
import { Modal, Button, Container, Card, Table } from 'react-bootstrap';
import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { WorkoutConsumer } from "../../providers/WorkoutProvider";
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';

const Exercises = ({ updateParentTime, workoutId, exercises, }) => {
  const [adding, setAdd] = useState(false)
  const [time, setTime] = useState(0);



  let total = 0;

  const totalTime = () => {
    return (total + time)
  };

  exercises.forEach(item => {
    total = total + item.eduration;
  })




  useEffect(() => {
    updateParentTime(time + total)
 }, [total]);

  return(
    <>

   
    <br/> 
    

    <Container>
  

 
         
  
      <Button onClick={() => setAdd(true)} className="login-button-white">Create Exercises+</Button>
 
    


      <Modal show={adding} onHide={() => setAdd(false)}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <ExerciseForm
          setAdd={setAdd}
          workoutId={workoutId}
        />

      </Modal.Body>

      </Modal>

   
    
     <h1 className='workout-text-fam'>Workout Exercise</h1>

    <Table>
    <thead>
        <tr>
          {/* <th>#</th> */}
        </tr>
      </thead>
      <ExerciseList
       exercises={exercises}/>
    </Table>
  
   
    </Container>


    </>
  )
}




const ConnectedExercises = (props) => (
  <ExerciseConsumer>
    { value => <Exercises {...props} {...value} />}
  </ExerciseConsumer>
)

const ConnectedWorkouts = (props) => (
  <WorkoutConsumer>
    { value => <ConnectedExercises {...props} {...value} />}
  </WorkoutConsumer>
)

export default ConnectedWorkouts;