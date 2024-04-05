import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[25rem] bg-red-200 bg-opacity-50 border border-gray-100 p-5 rounded-3xl">
        <h1 className="font-semibold text-center text-gray-300 text-5xl">
          Login
          <span className="text-black ">Chattu</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" font-bold text-black text-2xl">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="bg-red-100 w-full input  h-10 text-red-700"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="font-bold text-black text-2xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="bg-red-100 w-full input h-10 text-red-700"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <Link
            to="/signup"
            className="text-black font-bold hover:underline mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div className="flex justify-center">
            <button
              className="btn w-1/3 btn-sm bg-red-100 mx-auto text-black font-bold hover:text-red-600 hover:bg-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
