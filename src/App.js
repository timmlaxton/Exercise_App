import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./components/home.component";
import Trainer from "./components/trainer.component";
import Client from "./components/client.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Running from "./components/running.component";

function App() {
  return (
    <Router>
    <div className="container">

  <br/>
  <Route path="/" exact component={Home} />
  <Route path="/trainer" exact component={Trainer}/>
  <Route path="/client" exact component={Client}/>
  <Route path="/exercise" exact component={ExercisesList} />
  <Route path="/edit/:id" exact component={EditExercise} />
  <Route path="/create" exact component={CreateExercise} />
  <Route path="/user" exact component={CreateUser} />
  <Route path="/running" exact component={Running} />

  </div>
  </Router>
  );
}

export default App;
