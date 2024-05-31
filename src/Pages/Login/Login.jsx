import { Helmet } from "react-helmet-async";

 
const Login = () => {
    return (
        <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex py-10  justify-center items-center ">
        <div className="max-w-md flex flex-col rounded-md border border-[#008080]">
          <div className="flex justify-center bg-[#008080] p-3 text-white">
            <h2 className="uppercase font-semibold">Log in</h2>
          </div>
          <form
            noValidate=""
            action=""
            className="space-y-4 p-8 w-[330px]"
          >
            <div className="space-y-4"> 
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00808028] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00808028] bg-gray-200 text-gray-900"
                />
              </div>
              
            </div>

            <div>
              {/* disabled={loading} */}
              <button
                type="submit"
                className="bg-[#008080] w-full rounded-md py-3 text-white"
              >
                Continue
                {/* {loading ? <TbFidgetSpinner className='animate-spin m-auto'/> : 'Continue'} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    );
};

export default Login;