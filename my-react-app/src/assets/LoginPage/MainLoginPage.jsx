import { Link } from "react-router-dom";

function MainLogin() {
    return (<div>
          <h1>ReVogue</h1>
        <div className="login-form">
            
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                {/* Don't have an account? <a href="/SignUp">Sign Up</a> */}
                <Link to={"/SignUp"}>Don't have an account?</Link>
            </p>
        </div>
        </div>
    );  
}

export default MainLogin;
