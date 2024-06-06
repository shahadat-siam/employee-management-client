import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Progress = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: works = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/works`);
      return data;
    },
  });
//   console.log(works);
  return (
    <div>
      <div className="space-y-1 w-44 text-sm">
        <label htmlFor="month" className="block text-gray-600">
          Name
        </label>
        <select
          // onBlur={(e) => setMonth(e.target.value)}
          required
          className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
          name="month"
        >
          {/* {works.map((month) => (
            <option value={month.month} key={month.month}>
              {month.month}
            </option>
          ))} */}
        </select>
      </div>
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
                    Task
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Hours
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* User data table row */}
                {works.map((work) => (
                  <tr key={work._id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {work?.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {work?.task}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {work?.hours}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className=" text-gray-900  whitespace-no-wrap">
                        {work?.date}
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

export default Progress;
