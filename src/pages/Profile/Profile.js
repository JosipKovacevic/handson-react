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
  Grid,
  PasswordDiv,
  PasswordH3,
  PasswordText,
  PasswordDivInner,
  PasswordDivInnerBig,
  Label,
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
            {open === true ? "Edit" : "Cancel"}
          </Button>
        </ButtonWrapper>
        <Grid>
          <Formik
            disabled
            initialValues={{
              firstName: "Josip",
              lastName: "Kovacevic",
              email: "email@email.com",
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

              gihubUsername: Yup.string().required(
                "GitHub username is required"
              ),
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
              <Form isRight={true}>
                <FormRow>
                  <Label>First name</Label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name..."
                    disabled={open}
                  />
                  <ErrorMessage component={"div"} name="firstName" />
                </FormRow>
                <FormRow>
                  <Label>Last name</Label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name..."
                    disabled={open}
                  />
                  <ErrorMessage component={"div"} name="lastName" />
                </FormRow>
                <FormRow>
                  <Label>Email name</Label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="E-mail ..."
                    disabled={open}
                  />
                  <ErrorMessage component={"div"} name="email" />
                </FormRow>

                <FormRow>
                  <Label>GitHub username</Label>
                  <Field
                    type="text"
                    name="gihubUsername"
                    placeholder="GitHub username..."
                    disabled={open}
                  />
                  <ErrorMessage component={"div"} name="gihubUsername" />
                </FormRow>
                <FormRow>
                  <Label>Zeplin username</Label>
                  <Field
                    type="text"
                    name="zeplinUsername"
                    placeholder="Zepelin username..."
                    disabled={open}
                  />
                  <ErrorMessage component={"div"} name="zeplinUsername" />
                </FormRow>
                <FormRow>
                  <Label>Active faculty year</Label>
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
                {open === false && (
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
          {open === false ? (
            <PasswordDiv>
              <PasswordDivInnerBig>
                <PasswordH3>Password reset</PasswordH3>
                <Formik
                  disabled
                  initialValues={{
                    oldPassword: "",

                    password: "",
                    passwordConfirmed: "",
                  }}
                  validationSchema={Yup.object({
                    oldPassword: Yup.string()
                      .min(8)
                      .required("Old password is required"),

                    password: Yup.string()
                      .min(8)
                      .required("Password is required"),
                    passwordConfirmed: Yup.string()
                      .test(
                        "passwords-match",
                        "Passwords must match",
                        function (value) {
                          return this.parent.password === value;
                        }
                      )
                      .required("Password confirmed is required"),
                  })}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert("Password updated successfully");
                      actions.setSubmitting(false);
                    }, 1000);
                  }}
                >
                  {(formik) => (
                    <Form isRight={true}>
                      <FormRow>
                        <Label>Old password</Label>
                        <Field
                          type="password"
                          name="oldPassword"
                          placeholder=" Old password..."
                          disabled={open}
                        />
                        <ErrorMessage component={"div"} name="oldPassword" />
                      </FormRow>
                      <FormRow>
                        <Label>New password</Label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="New password..."
                          disabled={open}
                        />
                        <ErrorMessage component={"div"} name="password" />
                      </FormRow>
                      <FormRow>
                        <Label>New password confirmed</Label>
                        <Field
                          type="password"
                          name="passwordConfirmed"
                          placeholder="Password confirmed..."
                          disabled={open}
                        />
                        <ErrorMessage
                          component={"div"}
                          name="passwordConfirmed"
                        />
                      </FormRow>

                      <FormRow>
                        <Button
                          isOutline={true}
                          isFormButton={true}
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting ? "Processing..." : "Update"}
                        </Button>
                      </FormRow>
                    </Form>
                  )}
                </Formik>
              </PasswordDivInnerBig>
            </PasswordDiv>
          ) : (
            <PasswordDiv>
              <PasswordDivInner>
                <PasswordH3>Password reset</PasswordH3>
                <PasswordText>
                  In order to reset password, click on Edit button.
                </PasswordText>
              </PasswordDivInner>
            </PasswordDiv>
          )}
        </Grid>
      </Section>
    </>
  );
};
export default Profile;
