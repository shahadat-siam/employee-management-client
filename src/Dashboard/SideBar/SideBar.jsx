import { useState } from 'react';
import { FcSettings } from 'react-icons/fc';
import { GrLogout } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import useRole from '../../Hooks/useRole';
import { FaUsersGear } from 'react-icons/fa6';
import HRMenu from '../HR/HRMenu';
import EmployeeMenu from '../Employee/EmployeeMenu';

const SideBar = () => {
    const [isActive, setActive] = useState(false);
    const [role] = useRole()  
  
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive);
    };
    return (
        <>
        {/* Small Screen Navbar */}
        <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div>
            <div className="block cursor-pointer p-2 font-bold">
              <Link to="/">
              <div className="flex items-center px-4 py-1 rounded-lg shadow-lg bg-orange-100 text-[#254336] justify-center  ">
                <img src="../../../public/logo2.png" className="w-[50px]" alt="" />
                <h2 className="text-3xl font-buntu font-bold">TalentIQ</h2>
                </div>
              </Link>
            </div>
          </div>
  
          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
          >
            <AiOutlineBars className="h-5 w-5" />
          </button>
        </div>
  
        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && "-translate-x-full"
          } md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className="w-full  md:flex px-4 py-1 shadow-lg rounded-lg justify-center items-center bg-orange-100 mx-auto">
                <Link to="/">
                <div className="flex items-center text-[#254336] justify-center  ">
                <img src="../../../public/logo2.png" className="w-[50px]" alt="" />
                <h2 className="text-3xl font-buntu font-bold">TalentIQ</h2>
                </div>
                </Link>
              </div>
            </div>
  
            {/* Nav Items */}
            <div className="flex flex-col justify-between flex-1 mt-6"> 
              <nav>
                
                {/* Statistics */}
                <MenuItem label='Statistics' address='/dashboard' icon={BsGraphUp} />  
                {role === 'Admin' && <MenuItem label='All Employee' address='/dashboard/all-employee' icon={FaUsersGear}/>}
                {role === 'HR' && <HRMenu/>}
                {role === 'Employee' && <EmployeeMenu/>}
              </nav>
            </div>
          </div>
  
          <div>
            <hr />
  
            {/* Profile Menu */}
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                }`
              }
            >
              <FcSettings className="w-5 h-5" />
  
              <span className="mx-4 font-medium">Profile</span>
            </NavLink>
            <button
            //   onClick={logOut}
              className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />
  
              <span  className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </>
    );
};

export default SideBar;