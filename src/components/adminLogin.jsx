import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';


const AdminLogin = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()


    let login = (e) => {
        e.preventDefault();
        let data = { email, password }//data from input
        //admin validation
        if (email == "admin@gmail.com" && password == "1234") {
            navigate('/admin/')
        }
        else {
            alert("invalid credentials")
        }
    }
    return (
        <div className="adminLogin">
            <div className="form_container">
                <h1>Login as Admin</h1>

                <div className="form_input ">
                <form onSubmit={login}>

                <div className="email">
               <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter email address" className="form_control my3" />
               </div>

                <div className="password">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder=" Enter password" className="form_control_my3" />
                </div>

                <button className="btn_btn-primary" onClick={() => login}>Login</button>
                </form>

                </div>
            </div>
        </div>
    )
}
export default AdminLogin;