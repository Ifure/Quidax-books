import brandFull from '../assets/brand-full.svg';
import books from '../assets/books.svg';
import cartIcon from '../assets/cart.svg';
import searchIcon from '../assets/search.svg';
import backArrow from '../assets/arrow.svg';
import singleLogo from '../assets/brand-lite.svg';
import {motion} from 'framer-motion/dist/framer-motion'
import React, { useState, useContext } from 'react';
import { CartContext } from "../context/cartContext";
import { BookContext } from "../context/bookContext";
import {   useNavigate } from 'react-router-dom';
import Cart from './cart';



export default function Header() {
	const {toggleCart, cart, cartIsOpen} = useContext(CartContext);
	const {search} = useContext(BookContext);
	const [searchIsOpen, setsearchIsOpen] = useState(false)
	const [searchTerm, setSearchTerm] = useState("");
	let navigate = useNavigate();

	function toggleSearchBar (){
		setsearchIsOpen(!searchIsOpen)
	}

	const onSearch = (e) => {
		if (window.location.pathname !== '/search'){
			navigate("/search")
		}

		setSearchTerm(e.target.value);

		search(searchTerm);
}


	return (
		<>
				<header className=" w-full h-24 bg-white flex fixed justify-around items-center flex-grow py-3 px-3 border-b border-gray-300 shadow-md z-10">
					<div className="">
						<img src={brandFull} alt="logo" className="w-full hidden sm:block" />
						<img src={singleLogo} alt="logo" className='w-full sm:hidden' />

					</div>
					<div className="flex items-center justify-center cursor-pointer ">
						<input onKeyUp={onSearch} type="text" className='p-2  sm:block hidden md:block sm:w-42 md:w-80 border border-gray-200  outline-none' placeholder='Search book, author etc..' />
						<div className="sm:border sm:border-gray-200 sm:bg-gray-200  p-2">
						<img src={searchIcon} alt="search" onClick={toggleSearchBar} className="" />
						</div>
					</div>
					<div className="flex justify-center align-center relative">
						<img src={books} alt="books" className="mr-5 bg-gray-100 rounded-full p-3 " />

						<button className='cursor-pointer mx-3  ' onClick={toggleCart}>

							<img src={cartIcon} alt="cart" />
							<span className="absolute top-2 flex items-center justify-center right-0 bg-lemon rounded-full h-5 w-5 text-white p-1">{cart.length}</span>
						</button>

					</div>

					{cartIsOpen && (<Cart />)}
				</header>
		
				{searchIsOpen && (
					
						<motion.div className=" sm:hidden mt-24 px-5 py-7 bg-white flex items-center fixed z-20 -top-24 left-0 w-full h-42 "
						initial={{y: "-100%"}}
						animate={{y: 0}}
						exit={{y: "-100%" }}
						transition={{type:"tween", duration: 0.5}}>
							<button className="mx-5 " >
								<img src={backArrow} alt="search-icon" onClick={toggleSearchBar} />
							</button>
							<div className="flex">
								<input type="text" onKeyUp={onSearch} className="outline-none w-80 px-3 py-2 border border-gray-200" placeholder="Search books, genres, author, etc." />
								<button className=" p-2 bg-gray-200">
									<img src={searchIcon} alt="search-icon" />
								</button>
							</div>
						</motion.div>
			
			)}	
			</>

	
	)
}
 