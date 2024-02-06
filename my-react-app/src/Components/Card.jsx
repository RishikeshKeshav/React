
import rishiImage from '/images/rishi.png';


function Card(){
    return(
        <div className="card">
         <img className="card-image"src ={rishiImage} alt="profile pic" height="100px" width="100px"></img>
        <h2>Card Details</h2>
        </div>
    );
}
export default Card