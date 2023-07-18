import React from 'react';
import LoginForm from './loginform';
import './login.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <h1></h1>
      <LoginForm />
    </div>
  );
};

export default App;
