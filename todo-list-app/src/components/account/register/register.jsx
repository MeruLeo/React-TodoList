import React, { useContext } from "react";
import * as Yup from "yup";
import Form from "../../form/form.jsx";
import InputField from "../../form/input.jsx";
import NormalBtn from "../../buttons/normalBtn.jsx";
import CheckboxInput from "../../form/checkbox.jsx";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App.jsx";
// import jwt from "jsonwebtoken"; // import JWT library

const Register = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
    todingRules: false,
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(5, "حداقل پنج نویسه")
      .required("نام کاربری مورد نیاز است"),
    email: Yup.string()
      .email("آدرس ایمیل نامعتبر است")
      .required("ایمیل مورد نیاز است"),
    password: Yup.string()
      .min(8, "حداقل هشت نویسه")
      .required("رمز عبور مورد نیاز است"),
    verifyPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "با رمز اصلی مطابقت ندارد",
    ),
    todingRules: Yup.boolean().oneOf([true], "باید قوانین را بپذیرید"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Generate token
      // const token = jwt.sign(
      //   { email: values.email, username: values.username },
      //   "fnadjf;a@3420a",
      //   { expiresIn: "1h" }, // Token expiration time
      // );

      const userConfig = {
        folders: {
          noGroups: {
            title: "بدون پوشه ها",
            description:
              "تسک ها و ژورنال هایی که بدون پوشه هستند در اینجا قرار میگیرند",
            works: [{}],
          },
        },
        id: 1,
      };

      // Send user data along with token to server
      await axios
        .post("https://toding-8e7ea-default-rtdb.firebaseio.com/users.json", {
          ...values,
          ...userConfig,
          // token: token, // Add token to user data
        })
        .then((res) => {
          console.log(res);
          navigate("/profile");
          setUser(values.username);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      title={"خوش اومدی"}
      btn={<NormalBtn content={`ثبت نام`} />}
      downLinks={
        <Link
          to={`/login`}
          className={`mt-4 p-2 w-full text-center rounded-xl border-1 border-purple-org bg-background-dark text-purple-org`}
        >
          حساب دارید ؟ ورود
        </Link>
      }
    >
      <li className="form-input">
        <InputField label="نام کاربری" type="text" name="username" />
      </li>
      <li className="form-input">
        <InputField label="ایمیل" type="email" name="email" />
      </li>
      <li className="form-input">
        <InputField label="رمز عبور" type="password" name="password" />
      </li>
      <li className="form-input">
        <InputField
          label="تایید رمز عبور"
          type="password"
          name="verifyPassword"
        />
      </li>
      <li className="form-input">
        <CheckboxInput label="موافقت با قوانین تودینگ" name="todingRules" />
      </li>
    </Form>
  );
};

export default Register;
