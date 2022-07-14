import React, {useState}  from 'react';

export const AddTodo =(props) => {
    const [Email ,setTitle] = useState("");
    const [password ,setpassword] = useState("");
  
    const submit = (e)=>{
      e.preventDefault();
    if(!Email || !password){
      alert("Email and Password cannot be blank");
    }
    else{
        props.addTodo(Email,password);
        setTitle("");
        setpassword("")
    }
    }
  return (
    <div className='container'>
      <form onSubmit={submit}>
          <div className='border p-4'>
            <div className="mb-3 row">
              <label htmlfor="Email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-5">
                <input type="email" className="form-control" value={Email} onChange={(e)=>setTitle(e.target.value)} id="Email" placeholder="email@example.com" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlfor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-4">
                <input type="password" className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)} id="inputPassword" />
              </div>
            </div>
            <div className=''>
              <button type='submit'  className='btn btn-outline-primary'>Submit</button></div>
          </div>
          </form>
    </div>
  )
}
