import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";
import "./checkOutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";

const CheckoutForm = ({ closeModal, employee, month, year }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [seeError, setSeeError] = useState("");
  const [proccesing, setProccesing] = useState(false);
  // console.log(clientSecret);
 
  
  useEffect(() => {
    // fetch client secret
    if (employee?.salary > 1) {
      getClientSecret({ salary: employee?.salary });
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employee?.salary]);

  const getClientSecret = async (salary) => {
    const { data } = await axiosSecure.post("/create-payment-intent", salary);
    // console.log("client sicreet from server", data);
    setClientSecret(data.clientSecret);
  };
  // console.log(employee)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault(); 
    
    const {data} = await axiosSecure.get(`/paid/${employee?.email}`);  
    if( (data.filter(data => data.month === month && data.year === year )).length > 0){
      closeModal() 
      return toast.error('Already paid for this Month')  
    }  
    setProccesing(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setProccesing(false);
      setSeeError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setSeeError("");
    } 
    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setSeeError(confirmError.message);
      setProccesing(false);
      return;
    } 
    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      // create payment infor object
      const paymentInfo = {
        ...employee,
        transactionId: paymentIntent.id,
        month: month, year: year,
        date: new Date(),
      }; 
      delete paymentInfo._id
      // console.log(paymentInfo); 
      try{
        // save payment info new collection in db
        const {data} = await axiosSecure.post('/paid', paymentInfo)
        console.log(data) 
        // change room status booked in db
        //  await axiosSecure.patch(`/room/status/${bookingInfo?._id}`, {status : true})
        // console.log(data)
        // refetch() 
        closeModal()
        toast.success('salary paid')
      } catch(error) {
        console.log(error)
      } 
      setProccesing(false); 
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            disabled={!stripe || !clientSecret || proccesing}
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-[#00808070] px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          > 
            {proccesing ? (
              <ImSpinner9 size={24} className="animate-spin mx-auto" />
            ) : (
              `Pay`
            )}
          </button>
        </div>
      </form>
      {seeError && <p className="text-red-500 ml-6">{seeError}</p>}
    </>
  );
};
CheckoutForm.propTypes = {
  closeModal: PropTypes.func,
  employee: PropTypes.object,
};
export default CheckoutForm;
