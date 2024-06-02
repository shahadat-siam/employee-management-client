import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shered/LoadingSpinner";

const WorkSheet = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());

  // post work sheet data
  const { mutateAsync } = useMutation({
    mutationFn: async (workSheet) => {
      const { data } = await axiosSecure.post("/work", workSheet);
      return data;
    },
    onSuccess: () => {
      toast.success("successfully added");
      refetch()
    },
  });

  // work sheet data add form
  const hundleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.tasks.value;
    const hours = form.hours.value;
    const date = startDate;

    const workSheet = { task, hours, date, email: user?.email };

    try {
      await mutateAsync(workSheet); 
      form.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const {
    data: works = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mywork", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/mywork/${user?.email}`);  
      return data;
    },
    
  });
  // console.log(works);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div>
        <form
          onSubmit={hundleFormSubmit}
          className="md:flex justify-between p-5 rounded-lg bg-green-100 items-center gap-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="tasks" className="block text-gray-600">
              Tasks:
            </label>
            <select
              required
              className="w-full px-4 py-3 border-[#008080e0] focus:outline-[#00808028] rounded-md"
              name="tasks"
            >
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper Work</option>
            </select>
          </div>

          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Worked Hours:
            </label>
            <input
              type="number"
              name="hours"
              id="hours"
              placeholder="Enter worked hours"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00808028] bg-white text-gray-900"
              data-temp-mail-org="0"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm"> Date: </label>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="w-32 mt-4">
            <button
              type="submit"
              className="bg-[#008080] w-full rounded-md py-2 text-white"
            >
              Submit
            </button>
          </div>
        </form>
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
                 {works.map(work => <tr key={work._id}>
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
                    {work?.date }
                    </p>
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
