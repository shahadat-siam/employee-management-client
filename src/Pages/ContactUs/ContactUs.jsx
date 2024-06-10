import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import './Address.css';

const ContactUs = () => {
  const hundleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;
    const visitorOpinion = { email, message };
    // console.log(visitorOpinio)
    try {
      // await mutateAsync(visitorOpinio);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/message`,
        visitorOpinion
      );
      toast.success("send successfuylly");
      form.reset();
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="p-5 flex flex-col gap-7">
      <div className="max-w-2xl p-6 mx-auto bg-[#f3fafa] rounded-xl w-full">
        <h2 className="text-center font-semibold text-3xl mt-5 text-[#008080]">
          Send Your Opinion
        </h2>
        <form onSubmit={hundleFormSubmit} className="p-10 space-y-6 w-full">
          <div>
            <label htmlFor="email" className="font-semibold">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 bg-[#f3fafa] p-2 border border-[#b8f1f1] rounded-lg  outline-[#b8f1f1] "
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-semibold">
              Type your opinion:{" "}
            </label>
            <textarea
              name="message"
              id="message"
              className="textarea textarea-bordered w-full mt-2 border bg-[#f3fafa] p-2 border-[#b8f1f1] rounded-lg  outline-green-200 "
              required
              placeholder="enter message"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              className="w-full bg-[#008080] rounded-md font-semibold btn text-white hover:bg-[#008080]"
              value="SEND"
            />
          </div>
        </form>
      </div> 

      <div className="address-section ">
        <h2 className="title">Contact Us</h2>
        <div className="address-details">
          <p className="address-item">
            <span className="icon">🏢</span>
            123 Main Street, Mirpur 10
          </p>
          <p className="address-item">
            <span className="icon">📍</span>
            Cityville, ST 12345
          </p>
          <p className="address-item">
            <span className="icon">☎️</span>
            +880 (123) 456-7890
          </p>
          <p className="address-item">
            <span className="icon">✉️</span>
            talantq@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
