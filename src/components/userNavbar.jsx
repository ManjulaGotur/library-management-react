import { Link } from "react-router-dom";

const UserNavbar = () => {
    return (
        <div className="adminNav">
            <div className="logo1">
                <h1>User Portal</h1>
            </div>


            <div className="addbook">

                <li><Link to="/admin/book-list">DashBoard</Link></li>
                <li><Link to="book-list">Book list</Link></li>
                <li>  <Link to="/admin/user-list">user list</Link></li>
                <li><Link to="/">Logout</Link></li>
            </div>
        </div>
    );
}

export default UserNavbar;