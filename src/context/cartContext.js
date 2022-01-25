import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {

	const [cart, setCart] = useState([])
	const [cartIsOpen, setCartIsOpen] = useState(false);

	const addToCart = ({title, price, image_url, available_copies, authors, id}) => {
		const book = cart.find((item) => item.id === id);
		if(book){
				increaseBookQuantity(id)
				toggleCart();
				return
		}
		const books = [];
        const newBook = {
            id,
            title,
            price,
            authors,
            image_url,
            quantity: 1,
            available_copies,
            total: parseFloat(price) * 1
        }
        books.push(newBook)
        setCart([...cart,...books])
        toggleCart();
    }
		const removeFromCart = (index) => {
			const filteredCart = cart.filter((item, i) => i !== index);
			setCart([...filteredCart])
		}

	const getTotalCost = () => {
		return cart.reduce((a, b) => {
				return { total: a.total + b.total };
		});
}
const increaseBookQuantity = (id) => {
	const bookIndex = cart.findIndex(item => parseInt(item.id) === parseInt(id));
	if (bookIndex < 0) {
			return;
	}
	const book = cart.find((item, index) => parseInt(id) === item.id);
        if(book.available_copies > book.quantity){
            book.quantity++
            book.total += book.price
            setCart([...cart]);
        }
        return;
			}
			const decreaseBookQuantity = (id) => {
        const bookIndex = cart.findIndex(item => parseInt(item.id) === parseInt(id));
        if (bookIndex < 0) {
            return;
        }
        const book = cart.find((item, index) => parseInt(id) === item.id);
        book.quantity--
        book.total -= book.price
        if(book.quantity === 0){
            return removeFromCart(bookIndex)
        }
    
        setCart([...cart]);
        return;

    }

    const toggleCart = () => {
        setCartIsOpen(!cartIsOpen)
    }


	return ( 
		<CartContext.Provider value={{cart, getTotalCost, addToCart, cartIsOpen, toggleCart, removeFromCart, decreaseBookQuantity, increaseBookQuantity}}>
			{props.children}
		</CartContext.Provider>		
	 );
}
 
export default CartContextProvider;
