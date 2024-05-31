import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../Component/api";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {

  const { createUser, loading, setLoading, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  // create user email password
  const hundleFormSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const designation = form.designation.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const bank_no = form.bank_no.value;
    const salary = form.salary.value;
    const name = 'siam'
    const image = form.image.files[0];

    if(password.length < 6) {
        const error = 'password should be 6 char'
        return toast.error(error) 
    }
    else if(! /^(?=.*[a-z])(?=.*?[#?!@$%^&*-])(?=.*[A-Z]).+$/.test(password)){
        const error = 'at least one capital latter & special character'
        return toast.error(error)
    } 
 
    try {
        setLoading(true)
      // upload image  and get image
      const image_url = await imageUpload(image);

      // user register
      const result = await createUser(email, password);

      // update profile
      await updateUserProfile(name, image_url) 
      navigate("/");
      toast.success("sign up successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // hundle google login 
  const hundleGoogleLogin = async () => {
    try{ 
      await signInWithGoogle()
      navigate('/')
      toast.success('sign up successfully')
    } catch(err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="flex flex-col py-2  justify-center items-center ">
        <div className="max-w-md flex flex-col rounded-md border border-[#008080]">
          <div className="flex justify-center bg-[#008080] p-3 text-white">
            <h2 className="uppercase font-semibold">Sign Up</h2>
          </div>

          <form
            onSubmit={hundleFormSignup}
            noValidate=""
            action=""
            className="space-y-4 p-8  "
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="designation" className="block mb-2 text-sm">
                  Designation:
                </label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  placeholder="Enter Your Designation"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00808028] bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>

              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Photo:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="role" className="block text-gray-600">
                  User Role:
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-[#008080e0] focus:outline-[#00808028] rounded-md"
                  name="role"
                >
                  <option value="Employee">Employee</option>
                  <option value="HR">HR</option>
                </select>
              </div>

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

              <div>
                <div className="flex justify-between">
                  <label htmlFor="bank_no" className="text-sm mb-2">
                    Bank_account_no:
                  </label>
                </div>
                <input
                  type="text"
                  name="bank_no"
                  id="bank_no"
                  required
                  placeholder="your bank_account_no"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00808028] bg-gray-200 text-gray-900"
                />
              </div>

              <div>
                <div className="flex justify-between">
                  <label htmlFor="salary" className="text-sm mb-2">
                    Salary:
                  </label>
                </div>
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  required
                  placeholder="Enter salary"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#00808028] bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div> 
              <button disabled={loading}
                type="submit"
                className="bg-[#008080] w-full rounded-md py-3 text-white"
              > 
                {loading ? <TbFidgetSpinner className='animate-spin m-auto'/> : 'Continue'}
              </button>
            </div>
          </form>

          <p className="px-6 mb-4 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-[#008080]  text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">OR</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button onClick={hundleGoogleLogin} disabled={loading} className="disabled:cursor-not-allowed w-[330px] flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </button>
      </div>
    </>
  );
};

export default SignUp;
