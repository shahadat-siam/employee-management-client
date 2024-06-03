import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shered/LoadingSpinner";
import { IoCloseSharp } from "react-icons/io5";
import { FaSquareCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });
  const allEmployee = users.filter((user) => user?.role === "Employee");

  // update verified status
  const hundleVerified = async (email, verified) => {
    const { data } = await axiosSecure.patch(`/user/${email}`, { verified });
    console.log(data);
    refetch();
  };

  const hundleDetailsSlug = id => {
    console.log(id)
  }

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead className="bg-[#254336]">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Verified
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Account
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Salary
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Pay
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* User data table row */}
                {allEmployee.map((employee) => (
                  <tr key={employee._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {employee?.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {employee?.email}
                      </p>
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
                      <p className="  whitespace-no-wrap">
                        {employee?.bank_no}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="  whitespace-no-wrap">{employee?.salary}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button
                        disabled={!employee?.verified}
                        className="btn btn-sm bg-[#008080] hover:bg-[#008089] text-white"
                      >
                        Pay
                      </button>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to='/dashboard/details'>
                        <button onClick={() => hundleDetailsSlug(employee?._id)} className="btn btn-sm bg-[#008080] hover:bg-[#008089] text-white">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
