 import { useState,useEffect } from "react";
 import '../styles/userList.css';

const UserList = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let fetching=await fetch(`http://localhost:4000/users`);
            let data=await fetching.json()
            setUsers(data)
        }
        fetchData()
    },[users])

     
    let handleDelete=(id,title)=>{
        //  setBooks(books.filter(x=>x.id!=id))
         fetch(`http://localhost:4000/users/${id}`,{
            method:'DELETE'
         });
         alert(`${title} wii be deleted permently`)

    // let handleDelete=(id,name)=>{
    //  setUsers(users.filter((x)=>x.name!=name))
    //  alert(`${name} confirm to dlt`)
    }
    
  return (
        <div className="userlistcontainer">
           <div className="information1">
            <h1>User List:{users.length}</h1>
            </div>
            <div className="usedcard">
                {users.map((data)=>(
     <div className="even">
     <h1>Name:{data.name}</h1>  
     <p>Age:{data.age}</p>
     <p>Email:{data.email}</p>
     <p>PhoneNumber:{data.phoneNumber}</p>
     <button id="dlt" onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
    </div>
     ))}
     </div>
     </div>

    );
}
 
export default UserList;