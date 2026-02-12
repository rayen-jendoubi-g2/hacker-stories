import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function sayHello(name) {
  return `Hello, ${name}! Welcome aboard 🚀`;
}

function App() {
  const studentName = "Rayen";
  const student = {
    name: "Rayen",
    age: 21,
    track: "Finance & Web Development"
  };

  return (
    <div>
      <h1>{sayHello(studentName)}</h1>
      <p>Course: {courseTitle}</p>  
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <label htmlFor="feedback">Your Feedback:</label>
      <input id="feedback" type="text" />
    </div>
  );
}

export default App
