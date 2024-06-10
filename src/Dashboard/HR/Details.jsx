import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Chart from "./Chart";  
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosSecure();

  const {
    data: user = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/users/${id}`);
      return data;
    },
  }); 
  
  return ( 
    <div className="flex flex-col gap-5 p-2 justify-center mt-2 items-center ">
      <Helmet>
        <title>Dashboard | Details Employee</title>
      </Helmet>
      <div className="bg-white shadow-lg  rounded-2xl ">
        <img
          alt="profile"
          src="https://i.ibb.co/Nm7Qvzd/cover.png"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.image_url}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">{user?.name}</span>
              </p>
              <p className="flex flex-col">
                Designation
                <span className="font-bold text-black ">
                  {user?.designation}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 md:w-[700px] w-[360px] overflow-auto bg-purple-100 rounded-xl">
        <Chart email={user?.email} />
      </div>
    </div>
  );
};

export default Details;
