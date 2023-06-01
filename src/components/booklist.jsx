import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReadBook from "./readBook";
import '../styles/bookList.css'

const BookList = () => {
    let [books, setBooks] = useState([])

    //to fetch the route value
    let location = useLocation()

    //to get route parameter

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/books")
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    }, [books])

    let navigate = useNavigate()

    let read = (id) => {
        if (location.pathname == '/admin/book-list') {
            navigate(`/admin/book-list/${id}`)
        } else {
            navigate(`/user/book-list/${id}`)
        }
    }

    let handleDelete = (id, title) => {
        //  setBooks(books.filter(x=>x.id!=id))
        fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} wii be deleted permently`)//to delete all books from the server permenently

        //  alert(`${id} has been deleted`)
    }
    return (
        <div className="bookList">
            <h1 >Books List:{books.length}</h1>
            <div className="books_section">
                {books.map((data) => (
                    <div className="Avvikutti">
                        <div className="arrangement">

                            <div className="images">
                                <img src={data.thumbnailUrl} alt="" />
                            </div>

                            <div className="twinkle">
                                <h3>{data.title}</h3>
                                <h6>Authors:{data.authors}</h6>
                                <h6>Catogery:{data.categories}</h6>
                                <h6>PageCount:{data.pageCount}</h6>

                                <a href=""><button className="btn1" onClick={() => read(data.id)}>Read More</button></a>
                                {location.pathname == '/admin/book-list' && <button className="btn2" onClick={() => handleDelete(data.id, data.title)}>Delete</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;