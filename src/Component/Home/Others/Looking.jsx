import { BiSupport } from "react-icons/bi";
import { IoDocumentOutline } from "react-icons/io5";

 
const Looking = () => {
    return (
        <div className="mt-6 relative">
            <img src='https://i.ibb.co/1J15My0/Screenshot-2024-06-09-005356.png' className="w-full h-[300px]" alt="" />
            <div className="absolute  p-4 top-[15%] md:left-[15%] left-[5%]">
                <h2 className="md:text-5xl text-4xl font-semibold text-center ">Looking for something about TalentIQ?</h2>
                <div className="flex justify-center items-center md:mt-12 mt-5 gap-8">
                    <button className="btn px-7 bg-black text-white  border-black hover:bg-transparent hover:text-black"><BiSupport /> Support</button>
                    <button className="btn px-7 bg-black text-white border-black  hover:bg-transparent hover:text-black"><IoDocumentOutline /> Online Documentation</button>
                </div>
                
            </div>
        </div>
    );
};

export default Looking;