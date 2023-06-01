import { Link } from "react-router-dom";

import '../styles/userNavbar.css'

const UserNavbar = () => {
    return (
        <div className="adminNav">  
            <div className="logo">
                <h1>User Portal</h1>
            </div>


            <div className="addbook">

                <li><Link to="/user/">DashBoard</Link></li>
                <li><Link to="book-list">Book list</Link></li>
                {/* <li>  <Link to="/admin/user-list">user list</Link></li> */}
                <li><Link to="/">Logout</Link></li>
            </div>
        </div>
    );
}

export default UserNavbar;