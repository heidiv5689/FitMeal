import { ExerciseConsumer } from "../../providers/ExerciseProvider";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import Flash from '../shared/Flash';

const ExerciseForm = ({ workoutId, addExercise, setAdd, name, level, movetype, reps, timeframe, sets, image, desc,  category, setEdit, updateExercise, errors, setErrors }) => {
 
  const [exercise, setExercise] = useState({ name: '', image: '', category: '' })

  const {exerciseId} = useParams()

  

  useEffect( () => {
    if (exerciseId) {
    
      setExercise({ name, image, category })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (exerciseId) {
      updateExercise(workoutId, exerciseId, exercise)
    } else {
      addExercise(workoutId, exercise)
    }
    setExercise({ name: '', image: '', category: '' })
  }

  return (
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
      <h1>{ exerciseId ? "Update" : "Create" } Exercise</h1>
      <Form onSubmit={handleSubmit}>
       
      <Form.Group className="mb-3">
                <Form.Label>name</Form.Label>
                <Form.Control
                  name='name'
                  value={exercise.name}
                  onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
                  required
                />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>image</Form.Label>
                <Form.Control
                  name='image'
                  value={exercise.image}
                  onChange={(e) => setExercise({ ...exercise, image: e.target.value })}
                  required
                />
              </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label>category</Form.Label>
          <Form.Select
            name='category'
            value={exercise.category}
            onChange={(e) => setExercise({ ...exercise, category: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Health">Health</option>
            <option value="Diet">Diet</option>
            <option value="Play">Play</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

      

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedExerciseForm = (props) => (
  <ExerciseConsumer>
    { value => <ExerciseForm {...props} {...value} /> }
  </ExerciseConsumer>
)

export default ConnectedExerciseForm;