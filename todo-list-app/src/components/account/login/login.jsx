import React, { useContext } from "react";
import * as Yup from "yup";
import Form from "../../form/form.jsx";
import InputField from "../../form/input.jsx";
import NormalBtn from "../../buttons/normalBtn.jsx";
import CheckboxInput from "../../form/checkbox.jsx";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../App.jsx";
import Notifcation from "../../notifcations/notifcation.jsx";

const Login = () => {
  const { setUserInfo, setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("آدرس ایمیل معتبر نیست")
      .required("ایمیل مورد نیاز است"),
    password: Yup.string()
      .required("رمز عبور مورد نیاز است")
      .min(8, "حداقل هشت نویسه"),
    rememberMe: Yup.boolean(),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.get(
        "https://toding-8e7ea-default-rtdb.firebaseio.com/users.json",
      );

      const usersFromServer = response.data;

      if (!usersFromServer) {
        console.log("No users found");
        return;
      }

      const users = Object.entries(usersFromServer);

      const user = users.find(
        ([key, user]) =>
          user.email === values.email && user.password === values.password,
      );

      if (user) {
        setUserInfo(user);
        setIsLogin(true);
        localStorage.setItem("userInfo", JSON.stringify(user));
        navigate("/profile");
        return (
          <Notifcation
            icon={`src/assets/ToDingOrg.png`}
            msg={`خوش آمدید`}
            status={`check`}
            statusColor={`green`}
          />
        );
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        title="خوش برگشتی"
        btn={<NormalBtn content="ورود" />}
        downLinks={
          <Link
            to="/register"
            className={`mt-4 p-2 w-full text-center rounded-xl border-1 border-purple-org bg-background-dark text-purple-org`}
          >
            حساب نداید ؟ ایجاد کنید
          </Link>
        }
      >
        <li className="form-input">
          <InputField name="email" type="email" label="ایمیل" />
        </li>
        <li className="form-input">
          <InputField name="password" type="password" label="رمز عبور" />
        </li>
        <li className="form-input">
          <CheckboxInput name="rememberMe" label="مرا به خاطر بسپار" />
        </li>
      </Form>
    </>
  );
};

export default Login;
