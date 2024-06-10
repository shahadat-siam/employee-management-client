import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { ImFire } from "react-icons/im"; 
import FiredModal from "../../Component/Modal/FiredModal";


 
const UserDataRow = ({user, userEmail, hundleMakeHR }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }
  const hundleDelete = (userEmail) => {
    console.log(userEmail)
  }
    return (
        <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.designation}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {user?.role === 'HR' ? (
            <p>
              {user.role}
            </p>
          ) : (
            <button type="button" onClick={() => hundleMakeHR(user?.email)}>  <p className='text-red-600 text-2xl cursor-pointer whitespace-no-wrap'><FcCheckmark/></p></button>
          )}
        </td>
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative text-red-500'><ImFire /></span>
          </button>
          {/* Delete modal */}
         <FiredModal isOpen={isOpen} hundleDelete={hundleDelete} userEmail={userEmail} closeModal={closeModal} /> 
        </td>
      </tr>
    );
};

export default UserDataRow;