import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm/CheckOutForm";
import { Months } from "../../../public/month";
import { Years } from "../../../public/years";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentModal = ({ isOpen, closeModal, employee }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  // console.log(month, year);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-[470px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Pay to {employee.name}
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Salary: {employee.salary}
                  </p>
                </div>
                <div className="mt-2  ">
                  <form className="flex gap-3 space-x-10 space-y-2 md:space-y-0 items-center ">
                    <div className="space-y-1 text-sm">
                      <label htmlFor="month" className="block text-gray-600">
                        Month
                      </label>
                      <select
                        onBlur={(e) => setMonth(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                        name="month"
                      >
                        {Months.map((month) => (
                          <option value={month.month} key={month.month}>
                            {month.month}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1 text-sm">
                      <label htmlFor="year" className="block text-gray-600">
                        Year
                      </label>
                      <select
                        onBlur={(e) => setYear(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                        name="year"
                      >
                        {Years.map((year) => (
                          <option value={year.year} key={year.year}>
                            {year.year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                </div>
                <hr className="mt-8 " />
                <Elements stripe={stripePromise}>
                  {/* checkout form */}
                  <CheckoutForm employee={employee} closeModal={closeModal} month={month} year={year} />
                </Elements>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;
