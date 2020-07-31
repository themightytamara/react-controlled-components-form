import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Controlled Form</h3>
        <FormContainer />
      </div>
    );
  }
}
console.log({FormContainer});

export default App;