
import './App.css';
import Header from './Header';
import Todos from './Todos'
import Footer from './Footer';

import React, { useState } from 'react';
import { AddTodo } from './AddTodo';
import {Route,Routes} from "react-router-dom"



function App() {
  let onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }
  const addTodo = (Email, password) => {
    console.log("add todo list", Email, password)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      Email: Email,
      password: password
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      Email: "@rvlhg",
      password: "5758hrf"
    },
    {
      sno: 2,
      Email: "@rohanprajaapt",
      password: "5758hrf"
    },
    {
      sno: 3,
      Email: "vermaji@gmail.com",
      password: "5758hrf"
    },
  ])

  return (
    <>
     
        <Header title='Add Todos' />
       
        <Routes>
          <Route>
          <AddTodo addTodo={addTodo} />
                 
         <Todos todos={todos} onDelete={onDelete} />
         </Route>
         
         </Routes>
        <Footer />
  
    </>
  );

}

export default App;
