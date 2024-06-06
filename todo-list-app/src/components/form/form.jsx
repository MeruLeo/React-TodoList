import { Formik, Form as FormikForm, Field } from "formik";
import Profile from "../account/profile/profile.jsx";

const Form = ({
  children,
  btn,
  initialValues,
  validationSchema,
  onSubmit,
  title,
  downLinks,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <FormikForm className="flex items-center justify-center top-20 flex-col relative">
          <header className="flex flex-col items-center justify-center">
            <img
              src="src/assets/ToDingOrg.png"
              className="w-20 h-20"
              alt="toding logo"
            />
            <h1 className="text-white mt-4 font-fedra">{title}</h1>
          </header>
          <main className="flex items-center flex-col justify-center ">
            <ul className="form-inputs">{children}</ul>
            {btn}
            <span className="w-full h-0.5 bg-gray-600"></span>
            {downLinks}
          </main>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
