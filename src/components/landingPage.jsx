import { Link } from "react-router-dom";
import '../styles/landingPage.css';


const LandingPage =()=>{
    return(
        <div className="landingPage">
        <div className="selectLoginType"> 
            <h1>Library Management System</h1> 
            <br /><br /> 
               <div className="goodimg">
               <img  id="img1" height="70px"  width="75px"
                 src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png" alt="" /> 

                 <img id="img2" height="70px"  width="75px"
                 src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-green-icon-symbol-transparent-png-11639594320ayr6vyoidq.png" alt="" />
               </div>


            <div className="MRG1">
                
           <Link to='/admin-login' className="btn1"> Admin Login</Link> 
           
         <Link to='/user-login' className="btn2">  User Login </Link>
         </div>
        </div>
        </div>

    )
}
export default LandingPage;