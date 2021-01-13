import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { removeError, setError } from "../actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "Juan",
    email: "juan@gmail.com",
    password: "12345",
    password2: "12345",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(name, email, password, password2);

    if (isFormValid()) {
      console.log("The form is correct");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      console.log("name is required >:|");
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      console.log("Email is not valid");
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Password should be at least 6 characters"));
      console.log("Password should be at least 6 characters");
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Create new account</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hello!</div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          {" "}
          Register{" "}
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/login" className="link">
          Already registered? Login here
        </Link>
      </form>
    </>
  );
};
