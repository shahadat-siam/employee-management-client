import { FcApproval, FcCheckmark } from "react-icons/fc";
import { ImFire } from "react-icons/im";
import { TiInputChecked } from "react-icons/ti";

 
const UserDataRow = ({user, refetch}) => {
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
            <p className='text-red-600 text-2xl cursor-pointer whitespace-no-wrap'><FcCheckmark/></p>
          )}
        </td>
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button  className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
            ></span>
            <span className='relative text-red-500'><ImFire /></span>
          </button>
          {/* Update User Modal */}
          {/* <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user} /> */}
        </td>
      </tr>
    );
};

export default UserDataRow;