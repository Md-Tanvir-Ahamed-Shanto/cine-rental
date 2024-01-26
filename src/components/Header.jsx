/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { MovieContext, ThemeContext } from "../context";
import MovieCart from "./MovieCart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleClose = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <MovieCart onClose={handleClose} />}

      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src="./assets/logo.svg" width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src="./assets/ring.svg" width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                <img
                  src={
                    darkMode
                      ? "/assets/icons/sun.svg"
                      : "/assets/icons/moon.svg"
                  }
                  width="24"
                  height="24"
                  alt="mode"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => {
                  setShowCart(true);
                }}
              >
                <img
                  src="./assets/shopping-cart.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#eb2b2b] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
