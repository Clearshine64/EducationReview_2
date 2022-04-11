import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";

const UAER = {
  name: 'Jhon Dai',
  avatar: '/mock/avatar.jpg',
  email: 'test@gmail.com',

}

export default function Header() {

  const [language, setLanguage] = useState({ language: 'ENen', icon: 'twemoji:flag-mongolia' });

  const [store, setStore] = useState({ store: 'taoboa', img: '/images/header/taoboa.png' });

  const [user, setUser] = useState(UAER);

  const handleStore = (sto, i) => {
    setStore({ store: sto, img: i })
  };

  const handleLanguage = (lang, i) => {
    setLanguage({ language: lang, icon: i });
  };



  return (
    <div className=" bg-[#f79521] bg-opacity-[0.029]">
      <div className="container py-8 max-w-6xl">
        <div className="container flex  justify-between text-bold text-lg font-bold">
          <Link to="/" className=" mr-5">
            <img src="/logo192.png" className="h-16" alt="logo" />
          </Link>
          <div className=" gap-3 hidden lg:flex">
            <Link to="/about" className="">
              About
            </Link>
            <Link to="/categories" className="">
              Categories
            </Link>
            <Link to="/category/123" className="">
              Category Detail
            </Link>
            <Link to="/experience" className="">
              Awesome Experence
            </Link>
          </div>
          <div className="flex gap-5">
            <Link to="/auth/login" className="btn  text-white w-28 shadow-2xl shadow-neutral/40">
              Login
            </Link>
            <Link to="/auth/register" className="btn  bg-white hover:text-white text-neutral w-28 shadow-2xl shadow-neutral/40">
              Register
            </Link>
          </div>


        </div>
      </div>

    </div>
  );
}