import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = ({user, logout}) => {
    const greeting = () => (
      <div className="greeting">
        <h6>Hi, {user.first_name}</h6>
       <button className="btn-nav" onClick={()=> logout()}>logout</button>
      </div>
    )

    const signin = () => (
        <div className="register">
          <h6>Hi, Beautiful</h6>
          <Link className="lnk" to="/login">Sign In</Link>
          <p>or</p>
          <Link className="lnk" to="/signup">Register</Link>
        </div>
    )
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <input className="form-control mx-sm-3" type="text" placeholder="&#x1F50D; Search" />
            </div>
            <div className="col">
              <h2><Link className="title-logo" to="/">Pretty Little Things</Link></h2>
            </div>
            <div className="col">
              { user ? greeting() : signin() }
              <img className="heart" src="http://www.lovejframe.com/uploads/3/0/9/8/30981033/s906654426785960500_p287_i28_w598.png" alt="black-heart" />
               <span>
                
               </span>
            </div>
          </div>
        </div>
        <nav>
          <ul className="nav justify-content-center">
            <li>SHOP</li>
            <li>NEW</li>
            <li>BRANDS</li>
            <li>GIFTS</li>
            <li>QUIZZES</li>
            <li>COMMUNITY</li>
          </ul>
        </nav>
        <hr className="nav-line" />
      </div>
    )
}

export default MainNav;


