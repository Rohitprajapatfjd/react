import React from 'react'

const Todoitem = ({todo,onDelete}) => {
  return (
    <div>
         <div className="container">
         <table className="table table-success table-striped-columns 1h-1" >
            <tbody>
                <tr>
                    <td>{todo.sno}</td>
                    <td>{todo.Email}</td>
                    <td>{todo.password}</td>
                    <td><button className='btn btn-sm btn-danger' onClick={ ()=>{onDelete(todo)}}>Delete</button></td>
                </tr>
            </tbody>
            </table>
            </div>
    </div>
  )
}

export default Todoitem
