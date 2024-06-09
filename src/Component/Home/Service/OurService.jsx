import { FaArrowRightLong } from "react-icons/fa6";

const OurService = () => {
  return (
    <div className="bg-[#f7f6f4] pt-8 pb-5">
      <h2 className="text-4xl font-semibold text-center   text-[#008080]">
        Our Services
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 my-5 gap-7 mx-10">
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/DRw5S2W/image1.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold"> Employee Onboarding</h1>
        </div>
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/3hKtDc7/image2.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold">HR Administration</h1>
        </div> 
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/0VTxwdL/image3.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl pb-4 text-center font-Itim font-semibold">Time and Attendance </h1>
        </div> 
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/SQ6BkTQ/image4.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold"> Performance Management</h1>
        </div>   
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/r33sB3g/image5.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold">Wellness Programs</h1>
        </div>   
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/1mSnNCK/image6.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold">Recognition and Rewards</h1>
        </div>   
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/1mzCDGh/image7.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold">Analytics and Reporting</h1>
        </div>   
        <div className="bg-[#FFF] cursor-pointer flex justify-center items-center flex-col gap-3 transfor hover:-translate-y-[2px] rounded-2xl  duration-200 shadow-xl p-4">
          <img src="https://i.ibb.co/zbYLctF/image8.png" className="w-36 rounded-full" alt="" />
          <h1 className="text-xl  pb-4 text-center font-Itim font-semibold">Compliance Management</h1>
        </div>   
      </div>
      <div className="mt-7 bg-transparent border-[1px] border-black hover:text-white hover:bg-black text-center btn justify-center flex items-center w-52 mx-auto">View All Service</div>
    </div>
  );
};

export default OurService;
