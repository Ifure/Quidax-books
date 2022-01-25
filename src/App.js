
import Header from "./components/header"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DetailPage from "./pages/detailPage";
import BookContextProvider from './context/bookContext';
import CartContextProvider from './context/cartContext';
import Homepage from "./pages/homePage";
import SearchPage from './pages/searchPage'

function App() {
  return (
    <div className="overflow-x-hidden w-full text-gray-700 z-0">
      <CartContextProvider>
        <Router>
          <BookContextProvider>
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
              
              <Route exact strict path="/books/:featuredBookId/" element={<DetailPage/>} />
              <Route exact strict path="/search" element={<SearchPage/>} />
              
            </Routes>
          </BookContextProvider>
        </Router>
    </CartContextProvider>
  </div>

  );
}

export default App;