import { Link } from "react-router-dom";
function OutfitPlan(){
    return(<div>
        <button className="Plan"><Link to={"/PlanOutfit"}>Plan your Outfit</Link></button>
    </div>);
}
export default OutfitPlan