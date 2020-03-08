import React, { useEffect } from "react";
import { useFormState } from "../useFormState";

export default function Login() {
  const [values, setValues] = useFormState({
    email: "",
    password: ""
  });

  useEffect(() => console.log("changed"), [values]);

  return (
    <div>
      <h2 className="title">Login (useEffect)</h2>

      <>
        <input name="email" placeholder="email" value={values.email} onChange={setValues} />
        <input type="password" name="password" value={values.password} onChange={setValues} />
      </>
    </div>
  );
}
