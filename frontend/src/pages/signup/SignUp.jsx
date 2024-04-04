import GenderCheckbox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[25rem] bg-red-200 bg-opacity-50 border border-gray-100 p-5 rounded-3xl">
        <h1 className="font-semibold text-center text-gray-300 text-5xl">
          SignUp 
          <span className="text-black ">Chattu</span>
        </h1>
        <form>
        <div>
            <label className="label p-2">
              <span className=" font-bold text-black text-2xl">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="bg-red-100 w-full input  h-10 text-red-700"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className=" font-bold text-black text-2xl">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="bg-red-100 w-full input  h-10 text-red-700"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="font-bold text-black text-2xl">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="bg-red-100 w-full input h-10 text-red-700"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="font-bold text-black text-2xl">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password again"
              className="bg-red-100 w-full input h-10 text-red-700"
            />
          </div>
          <GenderCheckbox/>
          <a
            href="#"
            className="text-black font-bold hover:underline mt-2 inline-block"
          >
            {"Don't"} Already have an account?
          </a>

          <div className="flex justify-center">
            <button className="btn w-1/3 btn-sm bg-red-100 mx-auto text-black font-bold hover:text-red-600 hover:bg-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
