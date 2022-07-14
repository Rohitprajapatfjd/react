import React from 'react'
import Todoitem from './Todoitem'

export default function todos(props) {
    return (
        <div>
            <div className="container">
            <h3 className='text-center my-2'>Todos List</h3>
            <table className="table table-border table-success table-striped-columns">
            <thead>
                <tr>
                    <th>s.no</th>
                    <th>Email</th>
                    <th>password</th>
                    <th>Delete</th>
                </tr>
            </thead>
            </table>
            </div>
            {props.todos.length ===0? <h5 className='text-center fw-semibold'>No Todo List Add</h5>: 
            props.todos.map((todo)=>{
                return(
            <Todoitem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })}
        </div>
    )
}
