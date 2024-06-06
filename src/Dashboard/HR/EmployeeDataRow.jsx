import { IoCloseSharp } from "react-icons/io5";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaSquareCheck } from "react-icons/fa6";
import PaymentModal from "../../Component/Modal/PaymentModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmployeeDataRow = ({ employee, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const hubdleGetEmail = async (email) => {
    console.log(email)
    const { data } = await axiosSecure(`/user/${email}`);
    console.log(data)
  }

  // update verified status
  const hundleVerified = async (email, verified) => {
    const { data } = await axiosSecure.patch(`/user/${email}`, { verified });
    console.log(data);
    refetch();
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{employee?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{employee?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {employee?.verified ? (
          <p className=" cursor-pointer text-green-600 text-xl  whitespace-no-wrap">
            <FaSquareCheck />
          </p>
        ) : (
          <p
            onClick={() => hundleVerified(employee?.email, true)}
            className=" cursor-pointer text-red-500 text-xl  whitespace-no-wrap"
          >
            <IoCloseSharp />
          </p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="  whitespace-no-wrap">{employee?.bank_no}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="  whitespace-no-wrap">{employee?.salary}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          disabled={!employee?.verified}
          className="btn btn-sm bg-[#008080] hover:bg-[#008089] text-white"
        >
          Pay
        </button>
        {/* Payment Modal */}
        <PaymentModal
          isOpen={isOpen}
          closeModal={closeModal}
          employee={employee}
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/dashboard/details/${employee?._id}`}>
          <button  className="btn btn-sm bg-[#008080] hover:bg-[#008089] text-white">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default EmployeeDataRow;
