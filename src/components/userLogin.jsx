import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css';

const UserLogin = () => {
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')

    }
    return ( 
        <div className="userLogin1">
        <div className="form_container1">
            <h1>Login as User</h1>
            <div className="form_input p-5">
                <form onSubmit={login}>
                    <div className="email1">
                        <input type="email" required  placeholder="email address" className="form_control my3" />
                    </div>
                    <div className="password">
                        <input type="password" 
                            placeholder=" enter password"  required className="form_control my3" />
                    </div>
                    <button className="btn5">Login</button>


                </form>
            </div>
        </div>
    </div>
     );
}
 
export default UserLogin;