
import logo from "./logo192.png"



export default function Header(props) {
 
  return (
   

    <div>
     <nav className="navbar navbar-expand-lg bg-light">
     <div class="p-1">
    <a class="navbar-brand" to="/">
      <img src={logo} alt="" width="30" height="24"/>
    </a>
  </div>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
      <section>
        <div className="container ">
          <h3 className='text-center'>{props.title}</h3>
          
        </div>
      </section>
    </div>
  )
}
