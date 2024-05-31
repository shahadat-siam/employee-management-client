import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const { loading, signInWithGoogle, signIn, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  const from = location?.state || '/'

   // login email password
   const hundleFormLogin = async (e) => {
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 
    try{
      setLoading(true) 
      await signIn(email, password)
      navigate(from)
      toast.success('Login successfully')
    } catch(err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  // hundle google login
  const hundleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
      toast.success("successfully login");
    } catch (err) {
      toast.error(err.message);
    }
  };

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
          <form onSubmit={hundleFormLogin} noValidate="" action="" className="space-y-4 p-6 w-[350px]">
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
              <button
                disabled={loading}
                type="submit"
                className="bg-[#008080] w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <p className="px-6 mb-4 text-sm text-center text-gray-400">
            New to site?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-[#008080]  text-gray-600"
            >
              Register
            </Link>
            .
          </p>
          <div className="flex px-7 items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">OR</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <button
            onClick={hundleGoogleLogin}
            disabled={loading}
            className="disabled:cursor-not-allowed w-[300px] mx-auto flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
