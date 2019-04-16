import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

  render () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <input className="form-control mx-sm-3" type="text" placeholder="&#x1F50D; Search" />
            </div>
            <div className="col">
              <h2>Pretty Little Things</h2>
            </div>
            <div className="col">
              <h6>Hi, Beautiful</h6>
              <div className="register">
                <Link className="lnk" to="/login">Sign In</Link> 
                <p>or</p>
                <Link className="lnk" to="/signup">Register</Link> 
              </div>
               <span>

               </span>
               <span>
                <i id="heart" className="fas fa-heart"></i>
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
      </div>
    )
  }
}

export default MainNav;


