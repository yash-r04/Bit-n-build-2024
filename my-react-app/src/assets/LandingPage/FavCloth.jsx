import FavClo from  './assets/FavShirt.jpg'
function FavCloth(){
    return(<div>
         <div className="card">
        <img className="card-image" alt="logo" src={FavClo}></img>
        <h2 className="card-title">Favourite Outfit</h2>
        <p className="card-text">Denim Shirt<br/>Color:Blue</p>
    </div>
    </div>);
}
export default FavCloth