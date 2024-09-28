import { Link } from 'react-router-dom';

function Header(){
    return(
      <header className="header">
          <h1 className="logo">ReVogue</h1>
          <nav>
              <ul className="nav-list">
                  <li><a href="/Login">Sign In</a></li>
              </ul>
          </nav>
          
      </header>
    );
  }
  
  export default Header