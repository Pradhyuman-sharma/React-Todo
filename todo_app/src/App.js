import React, { useState, useEffect } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {
const [todos, setTodos] = useState([])
const [input, setInput] = useState("");

useEffect(() =>{
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo})))
  })

},[]);

const addToDo = (event) => {
  event.preventDefault();
  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput("");
}
  
  return (
    <div className="App">
     <h1>Hello World!</h1>
    <form>
    <FormControl>
      <InputLabel>Write a ToDo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>

    </FormControl>
    <Button disabled={!input} type="submit" onClick ={addToDo} variant="contained" color="success">
      Add Todo
    </Button>

    

    </form>
    <ul>
      {todos.map(todo => (
        <Todo todo={todo}/>
        ))}
    </ul>

    </div>
  )
}

export default App;
