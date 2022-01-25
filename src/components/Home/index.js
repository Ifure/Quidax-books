import React, {useState} from 'react';
import AllBooksCard from './allBooksCard';
import BookJson from '../../books.json'

function AllBooksIndex() {
	const [books, setbooks] = useState(BookJson);
	return(
		<div className="mt-10">
			
				<h2 className="font-bold text-black mx-5 pb-3 border-b sm:ml-5 border-gray-100">All Books</h2>
			
			<div className="mt-5 flex flex-col sm:flex-row cursor-pointer sm:ml-5 sm:justify-between flex-wrap  ">	
			{books.map((book, i) => {
								return(
										<AllBooksCard book={book} key={i}/>
								)
						})}
			</div>
		</div>
	)
}
export default AllBooksIndex;