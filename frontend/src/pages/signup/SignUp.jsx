import { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCheckBoxChange = (gender) => {
    setGender(gender);
  };
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({
      fullName: fullName.trim(),
      username: username.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
      gender: gender.trim(),
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[25rem] bg-red-200 bg-opacity-50 border border-gray-100 p-5 rounded-3xl">
        <h1 className="font-semibold text-center text-gray-300 text-5xl">
          SignUp
          <span className="text-black ">Chattu</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" font-bold text-black text-2xl">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="bg-red-100 w-full input  h-10 text-red-700"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className=" font-bold text-black text-2xl">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="bg-red-100 w-full input  h-10 text-red-700"
              value={username}
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
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
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={gender}
          />
          <Link
            to="/login"
            className="text-black font-bold hover:underline mt-2 inline-block"
          >
            {"Don't"} Already have an account?
          </Link>

          <div className="flex justify-center">
            <button
              className="btn w-1/3 btn-sm bg-red-100 mx-auto text-black font-bold hover:text-red-600 hover:bg-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "SignUp"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
