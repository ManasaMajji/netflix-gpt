import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return <div>
    <Header/>
    <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/IN-en-20250303-TRIFECTA-perspective_8d2f60cf-007f-4f25-99b0-7c0b77f38bc1_large.jpg"
    alt="netflix background" />
    <form className="w-3/12 text-white absolute right-0 left-0 m-auto my-36 p-12 bg-black opacity-80 rounded-lg">
      <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 w-full my-4  bg-gray-700"/>}
      <input type="email" placeholder="Email Address" className="p-4 w-full my-4  bg-gray-700"></input>
      <input type="password" placeholder="Password" className="p-4 w-full my-4 bg-gray-700"></input>
      <button type="submit" className="bg-red-700 p-4 my-6 w-full rounded-lg" > {isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up": "Already Registered? Sign In now"}</p>
    </form>
  </div>;
};

export default Login;
