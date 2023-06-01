

import '../styles/userDashBoard.css';
const UserDashbord = () => {
    return ( 
        <div className="userdashbord">
            <h1 id='wel'>WELCOME TO USER DASHBORD</h1>
            <div className="user1">
                <h1 id='uu'>Lerning books</h1>
                <p id='pp'>The mission of the Library’s Learning books is to create an environment in which Library staff
                     and patrons can empower themselves with a practical understanding of current technology</p>
            </div>
            <div className="user2">
                <h1 id='uu'>LinkedIn learning</h1>
                <p id='pp'>LinkedIn Learning is an online educational site that features thousands of courses and video tutorials 
                    where you can discover, complete, and track courses related to your industry or interests.</p>
            </div>
            <div className="user3">
                <h1 style={{color:'white'}} id='uu'>Learn Something New or Get Tech Help</h1>
                <p id='pp'>Register on the online calendar. For more information call 7338171547.</p><br /><br />
                <label htmlFor="">View calender</label>
            </div>
            <div className="user4">
                <h1 id='uu'>Questions About the Digital Library?</h1>
                <p id='pp'>Our Digital Library quick guides or video tutorials will help you access 
                    eBooks, audiobooks, videos, music, and magazines from any device.</p>
            </div>
        </div>
     );
}
 
export default UserDashbord;