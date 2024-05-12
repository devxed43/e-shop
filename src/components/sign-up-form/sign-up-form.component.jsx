import React from "react";

const SignUpForm = () => {
  return (
    <form>
      <h2>Sign Up</h2>
      <label>Display Name:</label>
      <input type="text" placeholder="display name" />
      <br />

      <label>Email:</label>
      <input type="email" placeholder="enter email" />
      <br />
      <label>Password:</label>
      <input type="password" placeholder="enter password" />
      <br />
      <label>Confirm Password</label>
      <input type="password" placeholder="confirm password" />
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
