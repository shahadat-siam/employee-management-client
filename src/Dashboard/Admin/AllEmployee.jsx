import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shered/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import UserDataRow from "../TableRow/UserDataRow";

const AllEmployee = () => {
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
  const allUser = users.filter(user => user?.role !== 'Admin') 
  // console.log(users)
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">
        All Employee Here {users?.length}{" "}
      </h2>
      <Helmet>
        <title>All Employee List</title>
      </Helmet>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full   leading-normal">
              <thead className="bg-[#008080]">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Designation
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Make HR
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                  >
                    Fire
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* User data table row */} 
                {allUser.map((user) => (<UserDataRow key={user._id} user={user} userEmail={user.email}  refetch={refetch} /> ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployee;
