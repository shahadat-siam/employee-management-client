import {
  FaDollarSign,
  FaProjectDiagram,
  FaRegCalendarAlt,
  FaUser,
} from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { CiCircleChevRight, CiPlay1 } from "react-icons/ci";
import useRole from "../Hooks/useRole";
import { LiaGemSolid } from "react-icons/lia";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const { user } = useAuth();
  const [filter, setFilter] = useState("");
  const [role] = useRole();
  return (
    <div>
      <Helmet>
        <title>Dashboard |</title>
      </Helmet>
      {role !== "Admin" && (
        <div className="md:flex space-y-4 md:space-y-0 gap-6">
          <Helmet>
            <title>Dashboard | HR Employee</title>
          </Helmet>
          <div className="flex flex-col md:w-[50%] gap-4">
            <div className="p-5 text-[#FF0000] bg-gradient-to-r from-cyan-500 to-[#008080] rounded-md w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-xl py-2">
                    Welcome Back, {user?.displayName}
                  </h2>
                  <p>
                    You have <span className="underline">2 meeting</span> today
                  </p>
                </div>
                <div>
                  <img
                    src={user?.photoURL}
                    className="w-14 h-12 rounded-[100%]"
                    alt=""
                  />
                </div>
              </div>
              <button className="btn mt-5 border-none hover:bg-cyan-200">
                View Profile
              </button>
            </div>

            <div className="shadow-md p-5 border-[1px] border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-2xl">Statistics</h2>
                <div>
                  <select
                    value=""
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                    value={filter}
                    name="category"
                    id="category"
                    className="border outline-none p-2 rounded-lg"
                  >
                    <option value="2024">Today</option>
                    <option value="2025">Month</option>
                    <option value="2026">Year</option>
                  </select>
                </div>
              </div>
              <div className="  font-semibold mt-3 ">
                <div className="bg-[#FFF5EC] flex justify-between rounded-md px-3 py-5">
                  <p>
                    Work Time <br /> 6 Hrs : 54 Min
                  </p>
                  <button className="btn bg-[#ff902ff1] text-white hover:bg-[#FF902F]">
                    <CiPlay1 /> Check in
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 border-b-[1px] border-b-gray-300 pb-2 font-semibold mt-3 gap-5">
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#a06c6c]">Remaining</span> <br />2 Hrs
                  36 Min
                </div>
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#40c49c]">Overtime</span> <br />0 Hrs
                  00 Min
                </div>
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#a814fdd3]">Break</span> <br />1 Hrs 20
                  Min
                </div>
              </div>
              <p className="flex items-center gap-1 text-[17px] mt-3 cursor-pointer font-semibold hover:text-[#705944]">
                View Attendence <CiCircleChevRight />
              </p>
            </div>

            <div className="p-4 rounded-md bg-gradient-to-r from-[#fd7e14] to-[#dc3545]">
              <h2 className="text-white text-xl font-semibold">
                Upcoming Holidays
              </h2>
              <div className="flex justify-between mt-3 items-center">
                <h2 className="flex items-center text-[17px]   text-white gap-4">
                  <FaRegCalendarAlt className="text-3xl" />
                  <span>
                    Eid al-Adha <br /> Fri 14 - Sun 22{" "}
                  </span>
                </h2>
                <button className="btn  border-none hover:bg-[#f7687ede]">
                  View All
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <div className="shadow-md p-5 border-[1px] border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-2xl">Attendance & Leaves</h2>
                <div>
                  <select
                    value=""
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                    value={filter}
                    name="category"
                    id="category"
                    className="border outline-none p-2 rounded-lg"
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 font-semibold mt-3 gap-5">
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#fd7e14]">9</span> <br /> Total Leaves{" "}
                </div>
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#4d7e31]">5.5</span> <br /> Leaves
                  Taken
                </div>
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#fd2f14d3]">4</span> <br />
                  Leaves Absent
                </div>
              </div>
              <div className="grid grid-cols-3 border-b-[1px] border-b-gray-300 pb-2 font-semibold mt-3 gap-5">
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#a06c6c]">0</span> <br /> Pending
                  Approval{" "}
                </div>
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#40c49c]">240</span> <br />
                  Working Days
                </div>
                <div className="text-center text-[17px]">
                  {" "}
                  <span className="text-[#a814fdd3]">2</span> <br />
                  Loss of Pay
                </div>
              </div>
              <h2 className="flex items-center gap-1 text-[17px] mt-3 cursor-pointer font-semibold hover:text-[#705944]">
                Apply Leave <CiCircleChevRight />
              </h2>
            </div>
          </div>
        </div>
      )}
      {role === "Admin" && (
        <div>
          <Helmet>
            <title>Dashboard | Admin</title>
          </Helmet>
          <h2 className="text-2xl font-semibold">Welcome Admin!</h2>
          <p className="text-gray-700 font-semibold">Dashboard</p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-6">
            <div className="border-[1px] flex justify-between items-center p-4 bg-[#fff] shadow rounded border-[#EFF0F1]">
              <div className="text-[#FF902F] font-semibold text-2xl w-12 flex justify-center items-center p-3 rounded-[100%] bg-[#ff902f2a]">
                <FaProjectDiagram />
              </div>
              <div className="text-xl font-bold">
                <p>112</p>
                <p>Project</p>
              </div>
            </div>
            <div className="border-[1px] flex justify-between items-center p-4 bg-[#fff] shadow rounded border-[#EFF0F1]">
              <div className="text-[#FF902F] font-semibold text-2xl w-12 flex justify-center items-center p-3 rounded-[100%] bg-[#ff902f2a]">
                <FaDollarSign />{" "}
              </div>
              <div className="text-xl font-bold">
                <p>53</p>
                <p>Clients</p>
              </div>
            </div>
            <div className="border-[1px] flex justify-between items-center p-4 bg-[#fff] shadow rounded border-[#EFF0F1]">
              <div className="text-[#FF902F] font-semibold text-2xl w-12 flex justify-center items-center p-3 rounded-[100%] bg-[#ff902f2a]">
                <LiaGemSolid />
              </div>
              <div className="text-xl font-bold">
                <p>22</p>
                <p>Tasks</p>
              </div>
            </div>
            <div className="border-[1px] flex justify-between items-center p-4 bg-[#fff] shadow rounded border-[#EFF0F1]">
              <div className="text-[#FF902F] font-semibold text-2xl w-12 flex justify-center items-center p-3 rounded-[100%] bg-[#ff902f2a]">
                <FaUser />
              </div>
              <div className="text-xl font-bold">
                <p>234</p>
                <p>Employees</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
