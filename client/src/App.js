import { Routes, Route } from "react-router-dom";
import Home from "./components/shared/home/Home";
import Nomatch from "./components/shared/Nomatch";
import MainNavbar from "./components/shared/MainNavbar";
import LandingPage from "./components/shared/home/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/user/Profile";
import FetchUser from "./components/auth/FetchUser";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Workouts from "./components/workout/Workouts";
import WorkoutShow from "./components/workout/WorkoutShow";
import UserWorkouts from "./components/userworkouts/UserWorkouts";
import Exercises from './components/exercises/Exercises';
import ExerciseShow from './components/exercises/ExerciseShow';
import Team from './components/shared/Team';
import Trainings from './components/Training/Trainings';
import RegPage from "./components/shared/home/RegPage";
import Footer from "./components/shared/home/Footer";

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
      
        <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/userWorkouts" element={<UserWorkouts />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:workoutId" element={<WorkoutShow />} />
          <Route path="/:workoutId/exercises" element={<Exercises />} />
          <Route path="/:exerciseId/exerciseShow" element={<ExerciseShow />} />
          <Route path='/:userWorkoutId/trainings' element={<Trainings />} />
        </Route>
        <Route path='/login' element={<LandingPage />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/team' element={<Team />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
    <Footer/>
  </>
);

export default App;
