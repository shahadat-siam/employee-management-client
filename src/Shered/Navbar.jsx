import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import "./style.css";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const hundleMenuBar = () => {
    const nav = document.getElementById("nav-item");
    nav.classList.add("active");
  };
  const removeMenu = () => {
    const nav = document.getElementById("nav-item");
    nav.classList.remove("active");
  };
  const hundleClick = () => {
    console.log('click logout')
  }
  return (
    <>
      <div className="md:px-12 py-2 px-8 sticky top-0 z-10 max-w-screen-xl shadow-sm  bg-[#f3fafa] mx-auto flex justify-between items-center">
        <div className="flex items-center px-4 py-1 rounded-lg shadow-lg bg-orange-100 text-[#254336] justify-center  ">
          <img src="https://i.ibb.co/qYxrp45/logo2.png" className="w-[50px]" alt="" />
          <h2 className="text-3xl font-Itim font-bold">TalentIQ</h2>
        </div>

        <div className="flex items-center">
          <div id="nav-item" className={`md:flex hidden`}>
            <li>
              <Link to="/">
                <a className=" ">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <a className=" ">Dashboard</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className=" ">Contact us</a>
              </Link>
            </li>

            <div id="close" className="md:hidden  absolute top-8 left-8  ">
              <a
                className="cursor-pointer font-semibold text-2xl text-[#008080]"
                onClick={removeMenu}
              >
                <IoMdClose />
              </a>
            </div>
          </div>

          {user ? (
            <div className="dropdown dropdown-end mx-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full" title="">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow-sm bg-base-100 rounded-box w-32"
              >
                <li className="mt-2">
                  <button
                  type="button"
                    onClick={async() =>{ await logOut(); hundleClick()}}
                    className="bg-gray-200 block text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="md:ml-10 flex gap-2 mx-4">
              <Link to="/register">
                <button className="btn hidden md:flex  bg-[#008080ef] hover:bg-[#008080] text-white">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="btn bg-[#008080ef] hover:bg-[#008080] text-white">
                  Login
                </button>
              </Link>
            </div>
          )}

          <div id="menu" className="md:hidden flex">
            <li
              onClick={hundleMenuBar}
              className="text-2xl cursor-pointer font-semibold list-none text-[#0C2D57]"
            >
              <RiMenu2Line />
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
