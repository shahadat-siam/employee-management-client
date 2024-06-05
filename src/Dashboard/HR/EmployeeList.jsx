import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shered/LoadingSpinner";
import EmployeeDataRow from "./EmployeeDataRow";

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
  //  console.log(allEmployee)

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
                  <EmployeeDataRow
                    key={employee._id}
                    refetch={refetch}
                    employee={employee}
                  />
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
