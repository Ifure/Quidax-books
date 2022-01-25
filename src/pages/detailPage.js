import Arrow from '../assets/arrow.svg';
import {
	useLocation,
	useNavigate
} from "react-router-dom";
import { useState, useEffect } from "react"
import People from '../assets/people.svg';
import Heart from '../assets/heart.svg';
import ReactStars from 'react-stars';
import { useContext } from 'react';
import Loader from '../components/loader';
import { CartContext } from '../context/cartContext';
import { BookContext } from '../context/bookContext';



const DetailPage = () => {
		const {state} = useLocation();
		const navigate = useNavigate();
		const selectedBook = state.book;
		const {addToCart, cartIsOpen} = useContext(CartContext);
		const {getSingleBook} = useContext(BookContext);
		const [book, setBook] = useState(null);
		const [loading, setIsLoading] = useState(true)

			useEffect(() => {
				getBook();

			}, [])

			const getBook = async () => {
				setBook(getSingleBook(book))
				setTimeout(() => {
						setIsLoading(false);
				}, 2000);
			}
	 
			if(loading) {
				return (
					<Loader/>
				)
			}

	

	
	return ( 
	<>
		<div className="mt-32 md:mx-10 relative text-black m-5 md:flex overflow-hidden ">
			<aside className=" w-full md:w-1/3 md:h-screen md:fixed ">
				<div className=" w-24 px-3 py-2 flex cursor-pointer border border-gray-100" onClick={() => navigate("/")}>
					<img src={Arrow} alt="back-arrow" className=''/>
					<p className='font-bold ml-2 '>Back</p>
				</div>
				<img src={selectedBook.image_url} alt="cover page" className='w-60 h-80 my-5 shadow-2xl 
				'/>
				<div className="hidden md:block">
					<p className={`${selectedBook.available_copies > 1 ? "text-lemon" : "text-red-500"}`}>{selectedBook.available_copies > 1 ? `${selectedBook.available_copies} copies available`  : 'Out of stock'}</p>
					<h3 className="text-2xl"> ${selectedBook.price}</h3>
					<div className="flex items-center justify-center w-60 rounded bg-black text-white p-5 mt-5 cursor-pointer"  onClick={(() => addToCart(selectedBook))}>
						<svg width="30" height="30" className="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path style={{fill:'white' }} fillRule="evenodd" clipRule="evenodd" d="M19.5545 13.3568L6.90606 14.6356C6.56202 14.6699 6.2604 15.0034 6.2604 15.3489C6.2604 15.662 6.51515 15.917 6.82828 15.917H19.4693C19.9404 15.917 20.3216 16.2986 20.3216 16.7691C20.3216 17.2396 19.9404 17.6214 19.4693 17.6214H6.82828C6.81374 17.6214 6.79899 17.621 6.78444 17.6202C5.56667 17.597 4.58061 16.6109 4.55737 15.3931C4.55677 15.3784 4.55636 15.3636 4.55636 15.3491C4.55636 14.758 4.78141 14.1836 5.1903 13.7317C5.59939 13.2798 6.14828 12.9986 6.73657 12.9398L7.14545 12.899L4.48384 3.70424H2.85212C2.38141 3.70424 2 3.32263 2 2.85212C2 2.38162 2.38141 2 2.85212 2H5.12424C5.50364 2 5.83737 2.25091 5.94263 2.61515L6.42242 4.27212H19.4693C19.9404 4.27212 20.3216 4.65354 20.3216 5.12424V12.5089C20.3216 12.9469 19.9897 13.3131 19.5545 13.3568ZM18.6174 5.97636H6.91556L8.8697 12.7267L18.6174 11.7378V5.97636Z" fill="black"/>
							<path style={{fill:'white' }} d="M4.98223 22C6.00189 22 6.82849 21.1734 6.82849 20.1537C6.82849 19.1341 6.00189 18.3075 4.98223 18.3075C3.96257 18.3075 3.13597 19.1341 3.13597 20.1537C3.13597 21.1734 3.96257 22 4.98223 22Z" fill="black"/>
							<path style={{fill:'white' }} d="M18.4754 22C19.495 22 20.3216 21.1734 20.3216 20.1537C20.3216 19.1341 19.495 18.3075 18.4754 18.3075C17.4557 18.3075 16.6291 19.1341 16.6291 20.1537C16.6291 21.1734 17.4557 22 18.4754 22Z" fill="black"/>
						</svg>
						<p>Add to cart</p>
					</div>
				</div>
			</aside>
			<main className="w-full md:w-2/3 md:ml-96">
				<h3 className='font-bold mb-2 text-3xl '>{selectedBook.title}</h3>
				<p className=''>{selectedBook.authors.map((author, i) => {
					return (
						<span className="text-sm font-bold" key={i}>{author.name}</span>
						);
					})}
				</p>
				<p className="text-sm">{new Date(selectedBook.release_date).getFullYear()}</p>

				<div className="flex flex-col md:flex-row  md:justify-start py-3 w-full mt-3 border-t border-b  border-gray-200">
					<div className="flex md:items-center md:pr-5">
						<div className="flex border-r border-gray-200  px-4 ">
							<div className="">
								<img src={People} alt="people" />
								<p className="text-center">{selectedBook.number_of_purchases}</p>
							</div>
							<div className="">
								<img src={Heart} alt="" />
								<p className="text-center">{selectedBook.likes}</p>
							</div>
						</div>
						<div className="px-4">
							<p className='font-bold'>Ratings: <span className='font-normal'>{selectedBook.rating}</span></p>
							<dd>
								<ReactStars count={Math.floor(selectedBook.rating)} isHalf={true} size={18} color="#40A698" />
							</dd>
						</div>
					</div>
					
					<div className="flex flex-col md:flex-row md:items-center ">
						<div className="flex ">
							<div className='w-1/2'>
									<dt className='font-bold '>Genre</dt>
									<dd>
										{selectedBook.genres.slice(0,2).map((genre, i) => {
											return (
											<span className='text-sm' key={i}>{genre.name}{ i !== selectedBook.genres.slice(0,2).length - 1 ? ', ': ''}</span>
										)
										})}
									</dd>
							</div>
							<div className="">
								<dt className="font-bold">Publisher</dt>
								<dd className='text-sm'>{selectedBook.publisher}</dd>
							</div>
						</div>
						
						<div className="flex ">
							<div className='w-1/2'>
								<dt className='font-bold '>Tags</dt>
								<dd>
									{selectedBook.tags.slice(0,2).map((genre, i) => {
										return (
											<span className='text-sm' key={i}>{genre.name}{ i !== selectedBook.genres.slice(0,2).length - 1 ? ', ': ''}</span>
										)
									})}
								</dd>
							</div>
							<div className=''>
								<dt className="font-bold ">Released</dt>
								<dd className='text-sm'>{new Date(selectedBook.release_date).toDateString()}</dd>
							</div>
						</div>
				</div>
			</div>
			<div>
				<h4 className="font-bold my-3">{selectedBook.subtitle}</h4>
				<p className=''>{selectedBook.full_description }</p>
			</div>
			</main>
				{selectedBook.available_copies > 0 && (
					<div className="fixed cursor-pointer md:hidden w-3/4 flex shadow-2xl text-white px-10 items-center left-14 bottom-7 rounded h-24  bg-black"  onClick={(() => addToCart(selectedBook))}>
					<div className="">
						<svg width="30" height="30" className="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path style={{fill:'white' }} fillRule="evenodd" clipRule="evenodd" d="M19.5545 13.3568L6.90606 14.6356C6.56202 14.6699 6.2604 15.0034 6.2604 15.3489C6.2604 15.662 6.51515 15.917 6.82828 15.917H19.4693C19.9404 15.917 20.3216 16.2986 20.3216 16.7691C20.3216 17.2396 19.9404 17.6214 19.4693 17.6214H6.82828C6.81374 17.6214 6.79899 17.621 6.78444 17.6202C5.56667 17.597 4.58061 16.6109 4.55737 15.3931C4.55677 15.3784 4.55636 15.3636 4.55636 15.3491C4.55636 14.758 4.78141 14.1836 5.1903 13.7317C5.59939 13.2798 6.14828 12.9986 6.73657 12.9398L7.14545 12.899L4.48384 3.70424H2.85212C2.38141 3.70424 2 3.32263 2 2.85212C2 2.38162 2.38141 2 2.85212 2H5.12424C5.50364 2 5.83737 2.25091 5.94263 2.61515L6.42242 4.27212H19.4693C19.9404 4.27212 20.3216 4.65354 20.3216 5.12424V12.5089C20.3216 12.9469 19.9897 13.3131 19.5545 13.3568ZM18.6174 5.97636H6.91556L8.8697 12.7267L18.6174 11.7378V5.97636Z" fill="black"/>
							<path style={{fill:'white' }} d="M4.98223 22C6.00189 22 6.82849 21.1734 6.82849 20.1537C6.82849 19.1341 6.00189 18.3075 4.98223 18.3075C3.96257 18.3075 3.13597 19.1341 3.13597 20.1537C3.13597 21.1734 3.96257 22 4.98223 22Z" fill="black"/>
							<path style={{fill:'white' }} d="M18.4754 22C19.495 22 20.3216 21.1734 20.3216 20.1537C20.3216 19.1341 19.495 18.3075 18.4754 18.3075C17.4557 18.3075 16.6291 19.1341 16.6291 20.1537C16.6291 21.1734 17.4557 22 18.4754 22Z" fill="black"/>
						</svg>
					</div>
					<div className="mx-5">
						<h3 className="font-bold"> Add to cart</h3>
						<p className="text-lemon">{selectedBook.available_copies} Available copies</p>
					</div>
					<div className="">
						<h3 className="text-2xl"> ${selectedBook.price}</h3>
					</div>
				</div>
				)}
		</div>
	</>
	 );
}

export default DetailPage;