import Header from "./header.jsx";
import UserGreeting from "./userGreeting.jsx";
import ClosetDonate from "./closetDonate.jsx";
import FavCloth from "./FavCloth.jsx";
import FavColor from "./FavColor.jsx";
import OutfitPlan from "./OutfitPlan.jsx";
import Graphs from "./Graphs.jsx";
import Footer from "./Footer.jsx";
import './index.css'

function MainLanding() {
 
  return (
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} username="User"/>
      <ClosetDonate/>
      <div className="Analytics">
         <FavCloth/>
            <div className="block">
              <FavColor/>
              <OutfitPlan/>
            </div>
            <Graphs/>
      </div>
      <hr/>
      <Footer/>
    </>
  )
}

export default MainLanding
