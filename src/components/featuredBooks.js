import React , {useState} from 'react';
import {FaCaretRight, FaCaretLeft} from "react-icons/fa"
import FeaturedCard from './featuredCard';
import BookJson from '../books.json'




export default function FeaturedBooks() {
	
	const [books, setBooks] = useState(BookJson);
	const features = books.filter(book => book.featured === true)
	return (
		<div className="relative mt-36">
			<h3 className='text-black text-lg font-medium hidden sm:block sm:pl-10 mb-3'> Featured Books</h3>
			<div className="flex no-wrap overflow-x-scroll scrollbar-hide cursor-pointer ">

						{
							features.map((book, i) => {
								return(
										<FeaturedCard book={book} key={i}/>
								)
						})}

						
				
			</div>
			{/* <div  className="absolute text-black text-xl top-0 sm:top-10 flex items-center justify-center bottom-2 left-0 bg-gradient-to-b from-gray-100 to-gray-700 opacity-50  px-3">
				<FaCaretLeft/>
			</div> */}
			<div className="absolute text-black text-xl top-0 sm:top-10 flex items-center justify-center bottom-0 right-0 bg-gradient-to-r from-gray-900 to-gray-200 opacity-50  px-5" >
				<FaCaretRight className='text-white'/>
			</div>

			
		</div>
	)
}
