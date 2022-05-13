import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Select,
  Option,
  ErrorMessage,
  Field,
  ButtonWrapper,
} from "../../lib/style/generalStyle";
import * as Yup from "yup";

import { Formik } from "formik";
import Button from "../../components/Button/Button";

const Profile = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <>
      <Header isSecondary isProfile={true} />

      <Section title={"Profile"} isMainSection={false}>
        <ButtonWrapper>
          <Button isOutline={true} isEdit={true} onClick={() => toggle(!open)}>
            {open == true ? "Edit" : "Cancel"}
          </Button>
        </ButtonWrapper>
        <Formik
          disabled
          initialValues={{
            firstName: "Josip",
            lastName: "Kovacevic",
            email: "email@email.com",
            password: "12345678",
            passwordConfirmed: "12345678",
            gihubUsername: "JosipKovacevic",
            zeplinUsername: "JosipKovacevic",
            activeFacultyYear: "5th faculty year",
            isAdmin: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("E-mail is not valid")
              .required("Email is required"),
            password: Yup.string().min(8).required("Password is required"),
            passwordConfirmed: Yup.string()
              .test(
                "passwords-match",
                "Passwords must match",
                function (value) {
                  return this.parent.password === value;
                }
              )
              .required("Password confirmed is required"),
            gihubUsername: Yup.string().required("GitHub username is required"),
            zeplinUsername: Yup.string().required(
              "Zepelin username is required"
            ),
            activeFacultyYear: Yup.string().required(
              "Active faculty year is required"
            ),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(formik) => (
            <Form isCentered={false}>
              <FormRow>
                <Field type="text" name="firstName" disabled={open} />
                <ErrorMessage component={"div"} name="firstName" />
              </FormRow>
              <FormRow>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last name..."
                  disabled={open}
                />
                <ErrorMessage component={"div"} name="lastName" />
              </FormRow>
              <FormRow>
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail ..."
                  disabled={open}
                />
                <ErrorMessage component={"div"} name="email" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  disabled={open}
                />
                <ErrorMessage component={"div"} name="password" />
              </FormRow>
              <FormRow>
                <Field
                  type="password"
                  name="passwordConfirmed"
                  placeholder="Password confirmed..."
                  disabled={open}
                />
                <ErrorMessage component={"div"} name="passwordConfirmed" />
              </FormRow>
              <FormRow>
                <Field
                  type="text"
                  name="gihubUsername"
                  placeholder="GitHub username..."
                  disabled={open}
                />
                <ErrorMessage component={"div"} name="gihubUsername" />
              </FormRow>
              <FormRow>
                <Field
                  type="text"
                  name="zeplinUsername"
                  placeholder="Zepelin username..."
                  disabled={open}
                />
                <ErrorMessage component={"div"} name="zeplinUsername" />
              </FormRow>
              <FormRow>
                <Select
                  id="activeFacultyYear"
                  disabled={open}
                  {...formik.getFieldProps("activeFacultyYear")}
                >
                  <Option value="" hidden>
                    Choose an Active faculty year
                  </Option>
                  <Option value="0">Not a student</Option>
                  <Option value="1">1st faculty year</Option>
                  <Option value="2">2nd faculty year</Option>
                  <Option value="3">3rd faculty year</Option>
                  <Option value="4">4th faculty year</Option>
                  <Option value="5">5th faculty year</Option>
                </Select>
                <ErrorMessage component={"div"} name="activeFacultyYear" />
              </FormRow>
              {open == false && (
                <FormRow>
                  <Button
                    isOutline={true}
                    isFormButton={true}
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Processing..." : "Update"}
                  </Button>
                </FormRow>
              )}
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};
export default Profile;
