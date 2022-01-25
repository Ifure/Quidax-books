import People from '../../assets/people.svg';
import cart from '../../assets/cart.svg';
import Heart from '../../assets/heart.svg';
import ReactStars from 'react-stars';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const AllBooksCard = ({book}) =>  {
	const {addToCart} = useContext(CartContext);
	const title = book.title

	return (
		
<div key={book.id} className="w-full md:w-96 text-sm max-w-3xl flex items-center hover:shadow-2xl mx-3 my-5">
<Link  to= { `books/${title.split(" ").join("-")}`}	state= {{book}}  >
	<div className="flex ">
		<div className=" w-2/5 mr-5 ">
			<img src={book.image_url} alt={book.title} className="w-72 h-48" />
		</div>
		<div className="w-3/5">
			<h3 className='font-bold'>{book.title}</h3>
			<p className='mb-3'>
			{book.authors.slice(0,2).map((author, i) => {
				return (
						<span key={i}>{author.name}{ i !== book.authors.length - 1 ? ', ': ''}</span>
				)
				})}
			</p>
			<p className='overflow-x-hidden mb-3'>{book.tags.slice(0,2).map((tag, i) => {
				return (
						<span key={i}>{tag.name}{ i !== book.tags.length - 1 ? ', ': ''}</span>
					)
				})}
			</p>
			<div className="flex items-center w-full mb-2">
				<div className=" flex items-center border-r border-gray-200 ">
					<div className="flex  ">
						<div className="mr-5">
							<img src={People} alt="" />
							<p className="text-center">{book.number_of_purchases}</p>
						</div>
						<div className="mr-5">
						<img src={Heart} alt="" />
						<p className="text-center">{book.likes}</p>
						</div>
					</div>
				</div>
				<div className=" flex flex-col mx-5 ">
					<p>Ratings: {book.rating}</p>
					<dd>
						<ReactStars count={Math.floor(book.rating)} isHalf={true} size={24} activeColor="#67c100" />
					</dd>
				</div>

			</div>

			<div className="flex ">
				<p>${book.price}</p>
				<p className={`ml-5 font-bold ${book.available_copies > 1 ? "text-lemon" : "text-red-500"}`}>{book.available_copies > 1 ?  `${book.available_copies} copies available`  : 'Out of stock'}</p>
			</div>
			
			{book.available_copies > 0 && (
				<div className="flex mt-2" onClick={(() => addToCart(book))}>
					<img src={cart} alt="" />
				<p className="ml-4 font-bold">Add to cart</p>
			</div>
			)}
			
		</div>
	</div>
	</Link>
</div>
				

	)
}
export default AllBooksCard;