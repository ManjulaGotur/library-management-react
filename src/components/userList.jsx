 import { useState,useEffect } from "react";
 import '../styles/userList.css';

const UserList = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let fetching=await fetch("http://localhost:4000/users")
            let data=await fetching.json()
            setUsers(data)
        }
        fetchData()
    },[users])

    let handleDelete=(id,name)=>{
     setUsers(users.filter((x)=>x.id!=id))
     alert(`${name} confirm to dlt`)
    }
    
  return (
        <div className="Pavvi">
           <div className="information1">
            <h1>User List</h1>
            </div>
            <div className="usedcard">
                {users.map((data)=>(
     <div className="even">
     <h1>Name:{data.name}</h1>
     <p>Age:{data.age}</p>
     <p>Email:{data.email}</p>
     <p>PhoneNumber:{data.phoneNumber}</p>
     <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
    </div>
     ))}
     </div>
     </div>

    );
}
 
export default UserList;