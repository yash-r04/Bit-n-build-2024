 
 function MainSignUp(){
    return(<div>
        <h1>ReVogue</h1>
      <div className="signup-form">
          
          <h2>Sign Up</h2>
          <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Sign Up</button>
          </form>
      </div>
      </div>);
 }
 export default MainSignUp