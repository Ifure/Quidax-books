import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function CartItem({book, index}) {
	const {removeFromCart, decreaseBookQuantity, increaseBookQuantity} = useContext(CartContext);
	return (
		<div className='py-3 flex items-center justify-between border-b border-gray-300'>
			<div className=" flex item-center justify-center">
				<div className="w-14 h-20 mr-3">
					<img src={book.image_url} alt={book.title} className="w-full h-full"/>
				</div>
				<div className="text-xs">
					<div className="">
						<p className="font-bold mb-1">{book.title}</p>
						<span className="">{book.authors[0].name}</span>
					</div>
					<button className="mt-7 sm:mt-4 hover:shadow-md" onClick={(() => removeFromCart(index))} >Remove</button>
				</div>
			</div>
			<div className="flex flex-col items-end justify-center">
				<p>${book.price}</p> 
				<div className="flex justify-center items-center border border-gray-300 my-1">
					<button className="px-3 py-1 bg-gray-100" onClick={(() => decreaseBookQuantity(book.id))}>-</button>
					<p className="border-r border-l border-gray-300 px-3 py-1 ">{book.quantity}</p>
					<button className="px-3 py-1 bg-gray-100" onClick={(() => increaseBookQuantity(book.id))}>+</button>
				</div>
				<span className="font-bold">${(book.price * book.quantity).toFixed(2)}</span>
			</div>
		</div>
	)
}

export default CartItem
