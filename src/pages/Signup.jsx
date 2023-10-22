import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/image/login.svg";
import { createUser } from "../redux/features/user/userSlice";

const Signup = () => {
  const { handleSubmit, register, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = ({ name, email, password }) => {
    // Email Password signup
    dispatch(createUser({ name, email, password }));
  };

  const handleGoogleLogin = () => {
    // Google Login
  };

  return (
    <div className="mx-auto flex h-screen max-w-7xl items-center">
      <div className="w-1/2">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="grid  w-1/2 place-items-center">
        <div className="grid w-full max-w-sm place-items-center rounded-lg bg-primary/5 p-10">
          <h1 className="mb-10 text-2xl font-medium">Sign up</h1>
          <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md"
                {...register("name")}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md"
                {...register("password")}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full rounded-md"
                {...register("confirmPassword")}
              />
            </div>
            <div className="!mt-8 ">
              <button
                type="submit"
                className="btn btn-primary w-full disabled:cursor-not-allowed disabled:bg-gray-300"
                disabled={disabled}
              >
                Sign up
              </button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <span
                  className="cursor-pointer text-primary hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
