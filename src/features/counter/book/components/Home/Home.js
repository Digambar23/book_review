import { useEffect, useState } from "react";
import Bookcard from "../BookCard/BookCard";
import Header from "../Header/Header"
import "./Home.css"
function Home(props){
    const [books,setBooks]=useState([]);


    useEffect(()=>{
        fetch("book.json")
        .then((res)=>res.json())
        .then((parsedJson)=>{
            setBooks(parsedJson);
        });
    },[props]);

    return(
        <div className="container ">
            <Header/>
            <div className="row">
                {books.map((book)=>
                       (<div className="col-md-2">
            <Bookcard data={book}/>
        </div>))}
                        
                        
                
          
        </div>
            
           
        </div>
    );
} 
export default Home;