import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus({ success: "User registered successfully!" });
        resetForm();
      } else {
        setStatus({ error: "Registration failed." });
      }
    } catch {
      setStatus({ error: "Network error. Try again later." });
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form style={{ maxWidth: 400, margin: "auto" }}>
          <h2>Formik Registration</h2>

          <Field name="username" placeholder="Username" /><br />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />

          <Field name="email" type="email" placeholder="Email" /><br />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />

          <Field name="password" type="password" placeholder="Password" /><br />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>

          {status?.success && <p style={{ color: "green" }}>{status.success}</p>}
          {status?.error && <p style={{ color: "red" }}>{status.error}</p>}
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
