import { useContext, useEffect, useState } from "react";
import { Link,  useNavigate } from 'react-router-dom';
import { BookContext } from "../context/bookContext";
import BookCard from "../components/Home/allBooksCard";

import Loader from "../components/loader";


const SearchPage = () => {
	const {searchedBooks, query, setAllBooks} = useContext(BookContext);
	const [loading, setLoading] = useState(true);
	let navigate = useNavigate();

	useEffect(() => {
		getBooks();

	}, [])

	const getBooks = async () => {
	
	 setAllBooks();

	 setTimeout(() => {
			 setLoading(false);
	 }, 2000);

	}

	if (searchedBooks.length === 0 && query === null){
		navigate('/search')
	}

	if (loading) {
		return ( 
				<Loader />
		)
	}
	return (
		<div className="mt-24">
				<div className="font-bold p-5 border-b border-gray-200">
							{query.length > 0 ? (
							<h4>{searchedBooks.length} results found for {query}</h4>) 
							: (
							<h4>Start typing to search</h4>
							)}
				</div>
				<div className="flex flex-col md:flex-row md:mx-14 flex-wrap">
						{searchedBooks.map((book, i) => {
								return(
										<BookCard book={book} key={i}/>
								)
						})}
				</div>
			</div>
	);
}

export default SearchPage;
