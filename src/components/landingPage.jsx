import { Link } from "react-router-dom";
import '../styles/landingPage.css';


const LandingPage =()=>{
    return(
        <div className="landingPage">
        <div className="selectLoginType"> 
            <h1>Library Management System</h1> 
            <br /><br /> 
               <div className="goodimg">
               <img  id="img1" height="60px"  width="60px"
                 src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" /> 

                 <img id="img2" height="60px"  width="60px"
                 src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
               </div>


            <div className="MRG">
                
           <Link to='/admin-login' className="btn1"> <button>Admin Login</button></Link> 
           
         <Link to='/user-login' className="btn2"> <button>  User Login </button></Link>
         </div>
        </div>
        </div>

    )
}
export default LandingPage;