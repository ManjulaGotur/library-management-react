 import{useState} from "react";
 import { useNavigate } from "react-router-dom";
 import '../styles/addBook.css';


const AddBook = () => {
    //title,categories,author,pageCount,shortdescription,longDescription,thumbnailUrl.
    let[title,setTitle] =useState("")
    let[authors,setAuthors] =useState("")
    let[categories,setCategories] =useState("")
    let[pageCount,setPageCount] =useState("")
    let[shortdescription,setShortDescription] =useState("")
    let[longDescription,setLongescription] =useState("")
    let[thumbnailUrl,setThumbnailUrl] =useState("")


    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        //data to be posted
        let booksData ={title,authors,categories,pageCount,shortdescription,longDescription,thumbnailUrl}//7 values should be stored by giving any name
        //posting to server
        fetch('http://localhost:4000/books',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(booksData)
    })

    alert('books added successfully')
    navigate('/admin/book-list')
}


    return ( 
        <div className="addbooks_section">
            <h1>Add Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    
            <div className="title">
                <input type="text" required placeholder="title of the book"  value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            
            <div className="authors">
            <input type="text" required placeholder="authors of the book" value={authors} onChange={(e) => setAuthors(e.target.value)} />
            </div>
           
            <div className="categories">
            <input type="text" required placeholder="categories of the book" value={categories} onChange={(e) => setCategories(e.target.value)} />
            </div>
          
            <div className="pageCount">
            <input type="number" required placeholder="pageCount of the book" value={pageCount} onChange={(e) => setPageCount(e.target.value)}/>
            </div>
{/*            
            <div className="shortdescription">
            {/* <textarea type="text" required placeholder="shortdescription of the book" value={shortdescription} onChange={(e) => setShortDescription(e.target.value)} cols="10" rows="10"/> */}
            {/* <textarea type="text" required placeholder="shortdescription of the book" value={shortdescription} onChange={(e) => setShortDescription(e.target.value)} />
            
            </div>
             */}
            <div className="longDescription">
            {/* <textarea type="text" required placeholder="longdescription of the book"   value={longDescription} onChange={(e) => setLongescription(e.target.value)} cols="10" rows="5" /> */}
            <textarea type="text" required placeholder="longdescription of the book"   value={longDescription} onChange={(e) => setLongescription(e.target.value)}  />
            
            </div>
           
            <div className="thumbnailUrl">
            <input type="text" required placeholder="image of the book" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)}  />
             
            </div>
            <button className="btn_btn1">Add Book</button>

                </form>
            </div>
            
        </div>
     );
}
 
export default AddBook;