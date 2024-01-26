/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context";
import { CardReducer, inisialState } from "./utils/CardReducer";

export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(CardReducer, inisialState);
  const [darkMode, setDarkMode] = useState(true);
  // console.log(darkMode);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
            <Header />
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MovieList />
            </div>
            <Footer />
          </div>
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
