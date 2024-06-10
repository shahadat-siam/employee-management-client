import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const PaymentHis = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: history = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["history", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/paid/${user?.email}`);
      return data;
    },
  });
  console.log(history);
  return (
    <div >
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>
      <div className="py-8">
        <div className="flex justify-center px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-[600px] shadow rounded-lg overflow-hidden">
            <table className=" w-full leading-normal">
              <thead className="bg-[#254336]">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Month
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Transaction Id
                  </th> 
                </tr>
              </thead>
              <tbody>
                {/* User data table row */}
                {history.map((work) => (
                  <tr key={work._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {work?.month}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {work?.salary}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className=" text-gray-900  whitespace-no-wrap">
                        {work?.transactionId}
                      </p>
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

export default PaymentHis;
