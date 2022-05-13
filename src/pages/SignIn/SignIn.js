import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Select,
  Option,
  ErrorMessage,
  Field,
} from "../../lib/style/generalStyle";
import * as Yup from "yup";

import { Formik } from "formik";
import Button from "../../components/Button/Button";

const SignIn = () => {
  return (
    <>
      <Header isSecondary />
      <Section title={"Sign in"} isMainSection={true} isCentered={true}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("E-mail is not valid")
              .required("Email is required"),
            password: Yup.string().min(8).required("Password is required"),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                email: "",
                password: "",
              });
            }, 1000);
          }}
        >
          {(formik) => (
            <Form isCentered>
              <FormRow>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail ..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  disabled={formik.isSubmitting}
                />
                <ErrorMessage component={"div"} name="password" />
              </FormRow>

              <FormRow>
                <Button
                  isOutline={true}
                  isFormButton={true}
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Processing..." : "Sign in"}
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export default SignIn;
