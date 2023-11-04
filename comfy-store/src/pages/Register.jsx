import { FormInput, SubmitBtn } from "../Components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="h-screen grid place-items-center">
        <Form
          method="post"
          action=""
          className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        >
          <h4 className="text-center text-3xl font-bold">Register</h4>
          <FormInput type="text" name="username" label="Username" />
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />
          <div className="mt-4">
            <SubmitBtn text="register" />
          </div>
          <p className="text-center">
            Already a member?
            <Link
              to="/login"
              className="ml-2 link link-hover link-primary capitalize"
            >
              Login
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
};
export default Register;
