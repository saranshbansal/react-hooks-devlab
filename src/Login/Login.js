import React from "react";
import { useFormState } from "../useFormState";

export default function Login() {
  const [values, handleChange] = useFormState({
    email: "",
    password: "",
    firstName: ""
  });

  return (
    <div>
      <h2 className="title">Login (useEffect)</h2>

      <>
        <input name="email" placeholder="email" value={values.email} onChange={handleChange} />
        <input name="firstName" placeholder="first name" value={values.firstName} onChange={handleChange} />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </>
    </div>
  );
}
