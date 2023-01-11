import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
  // let read = props.data
  let params = useParams()
  let [books, setBooks] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:4000/books/${params.id}`)
      let data = await response.json()
      setBooks(data)
    }
    fetchData()
  }, [books])


  return (
    <div className="readBook_contain">
      <div className="readBook">
        {/* <h1>Read Book </h1> */}
        <h2 className="Santu">{books.title}</h2>

        <div className="division">
          <p>{books.shortDescription}</p>
          <p>{books.longDescription}</p>
        </div>
      </div>



    </div>
  );
}

export default ReadBook;