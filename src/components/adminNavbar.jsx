

import '../styles/adminNavbar.css';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div className="adminNav">
      <div className="logo">
        <h1>Admin Portal</h1>
      </div>

      <div className="addbook">
        <li> <Link to="/admin/">Dashboard</Link> </li>
        <li> <Link to="/admin/add-book">Add Books</Link></li>
        <li> <Link to="/admin/add-user">Add users</Link></li>
        <li><Link to="/admin/book-list">Book list</Link></li>
        <li>  <Link to="/admin/user-list">user list</Link></li>
        <li><Link to="/">Logout</Link></li>
      </div>




    </div>
  );
}

export default AdminNavbar;