import { FormInput, SubmitBtn } from "../Components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account Created Successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check you credentials";
    toast.error(errorMessage);
    return null;
  }
  return;
};

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
          <FormInput
            type="text"
            name="username"
            label="Username"
            // defaultValue="james2 smith"
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            // defaultValue="james2@gmail.com"
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            defaultValue="secret"
          />
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
