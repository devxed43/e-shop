import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const Authentication = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80vh",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>AUTHENTICATION COMPONENT:</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
