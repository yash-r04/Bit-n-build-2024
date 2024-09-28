import PropTypes from 'prop-types';


function UserGreeting(props){
   const welcomeMessage = <h2 className="welcome-message">"Hi {props.username}"</h2>
   const loginPrompt = <h2 className="login-prompt">Login to continue</h2>

   return( props.isLoggedIn ? welcomeMessage : loginPrompt )
}
UserGreeting.prototypes = {
   isLoggedIn: PropTypes.bool,
   username: PropTypes.string,
}
UserGreeting.defaultProps = {
   isLoggedIn: false,
   username: "User",
}
export default UserGreeting