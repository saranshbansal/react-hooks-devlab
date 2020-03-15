import React, { useEffect } from "react";
import { useForm } from "../../_common/useForm";

export default function Login() {
  const [values, setValues] = useForm({
    email: "",
    password: ""
  });

  useEffect(() => console.log("changed"), [values]);

  return (
    <div>
      <h2 className="title">Login (usEffect hook)</h2>

      <>
        <input name="email" placeholder="email" value={values.email} onChange={setValues} />
        <input type="password" placeholder="password" name="password" value={values.password} onChange={setValues} />
      </>
    </div>
  );
}
