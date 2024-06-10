import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shered/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import UserDataRow from "../TableRow/UserDataRow";
import toast from "react-hot-toast";
import { useState } from "react";
import { RiLayoutGrid2Fill, RiLayoutHorizontalLine } from "react-icons/ri";
import { FcCheckmark } from "react-icons/fc";
import { ImFire } from "react-icons/im";

const AllEmployee = () => {
  const axiosSecure = useAxiosSecure();
  const [layout, setLayout] = useState(1);
  console.log(layout);

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
  const allUser = users.filter(
    (user) => user?.role !== "Admin" && user?.verified
  );
  // console.log(users)

  const hundleMakeHR = async (email) => {
    try {
      const currentUser = {
        email: email,
        role: "HR",
      };
      const { data } = await axiosSecure.put(`/user`, currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("success! Make the Employee to HR");
      }
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>Dashboard | All Employee, HR </title>
      </Helmet>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold text-center">
          All Employee Here
        </h2>
        <div className="flex gap-4">
          <div
            onClick={() => setLayout(1)}
            title="Table"
            className="text-xl cursor-pointer"
          >
            <RiLayoutHorizontalLine />
          </div>
          <div
            onClick={() => setLayout(2)}
            title="Card"
            className="text-xl cursor-pointer"
          >
            <RiLayoutGrid2Fill />
          </div>
        </div>
      </div> 

      <div className={`py-8  ${layout === 1 ? "flex" : "hidden"}`}>
        <div className="mx-auto md:w-4/5 px-4 sm:px-8 py-4 overflow-x-auto">
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
                {allUser.map((user) => (
                  <UserDataRow
                    key={user._id}
                    user={user}
                    userEmail={user.email}
                    refetch={refetch}
                    hundleMakeHR={hundleMakeHR}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className={`grid-cols-1 ${
          layout === 2 ? "grid" : "hidden"
        } md:grid-cols-2 lg:grid-cols-3 my-5 p-8 lg:max-w-5xl mx-auto gap-5`}
      >
        {allUser.map((user) => (
          <div
            key={user._id}
            className="card card-compact duration-200 hover:shadow-md hover:-translate-y-0.5 p-0 rounded-none border"
          >
            <div className="card-body ">
              <h2 className="card-title font-Sedan font-semibold text-xl">
                {user?.name}
              </h2>
              <p className="text-start text-gray-500">{user?.designation}</p>
              <div className="flex justify-between items-center">
                <p className="text-start">
                  {user?.role === "HR" ? (
                    <p>{user.role}</p>
                  ) : (
                    <button
                      type="button"
                      onClick={() => hundleMakeHR(user?.email)}
                    >
                      {" "}
                      <p className="text-red-600 text-2xl cursor-pointer whitespace-no-wrap">
                        <FcCheckmark />
                      </p>
                    </button>
                  )}
                </p>
                <p>
                  <button className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative text-red-500">
                      <ImFire />
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployee;
