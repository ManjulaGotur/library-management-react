
import {Routes,Route} from 'react-router-dom';
import AddBook from './addBook';
import AddUser from './addUser';
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import BookList from './booklist';
import ReadBook from './readBook';
import UserList from './userList';
import PageNotFound from './404';


const AdminPortal = () => {
    return (  
        <div className="adminPortal">
         <AdminNavbar/>
       <Routes >
        <Route path='/'   element={<AdminDashboard/>}/>
        <Route path='/book-list' element={<BookList/>}/>                           
        <Route  path='/user-list' element={<UserList/>}/>
        <Route path='/book-list/:id' element={<ReadBook/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route   path='*'element={<PageNotFound/>}/>
        </Routes>
        </div>
    );
}
 
export default AdminPortal;