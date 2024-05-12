import React from "react";

const SignInForm = () => {
  return (
    <div>
      <h2>Sign In:</h2>
      <form>
        <label>Enter Email:</label>
        <input type="email" placeholder="enter email" />
        <br />

        <label>Enter Password:</label>
        <input type="password" placeholder="enter password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
