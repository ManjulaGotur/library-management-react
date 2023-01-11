import {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css';

const AddUser = () => {
    let[name,setName] = useState('')
    let[age,setAge] = useState('')
    let[email,setEmail] =useState('')
    let[phoneNumber,setPhoneNumber] =useState('')



    let navigate = useNavigate()


    let handleSubmit=(e)=>{
        e.preventDefault();
        //data to be posted
        let userData ={name,age,email,phoneNumber}//7 values should be stored by giving any name
        //posting to server
        fetch('http://localhost:4000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })

    alert('users added successfully')
    navigate('/admin/user-list')
}


    return ( 
        <div className="addUser1">

            <h1>Add User</h1>

            <div className="how">
            <form onSubmit={handleSubmit}>
            <div className="name">
            <input type="name" required placeholder=" enter name of the user"  value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="age">
            <input type="number"  min='1' required placeholder="enter age of the user"  value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="email">
            <input type="email" required placeholder="enter email of the user"  value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="phoneNumber">
            <input type="tel" required  minlength="10" maxlength="10" placeholder="enter 0-9digits"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <button>Submit</button>
            </form>

            </div>




        </div>
     );
}
 
export default AddUser;