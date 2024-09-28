import { Link } from "react-router-dom";
function ClosetDonate(){
 return(<div>
    <div className="container"> 
            <button className="upload"><Link to={"/NewClothes"}>I got new Clothes</Link></button>
            <button className="myCloset"><Link to={"/Closet"}>My Closet</Link></button>
            <button className="donate"><Link to={"/Donate"}>Donate</Link></button>
        </div>
 </div>);
}
export default ClosetDonate