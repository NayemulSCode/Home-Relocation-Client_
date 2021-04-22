import React, { useContext } from 'react';
import './Navbar.css'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { handleSignOut } from '../../Login/Login';
import { UserContext } from '../../../App';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  //logout
  const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res);
    })
  }
  const handleResponse = res=>{
    setLoggedInUser(res)
  }
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img style={{height: '40px'}} className="ms-5" src="https://i.postimg.cc/QdSgRmQc/home-relocation.png" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#servicesSection">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">{loggedInUser.email? <button className="btn btn-warning" onClick={signOut} >LogOut</button>: <button className="btn btn-primary">LogIn</button>}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;