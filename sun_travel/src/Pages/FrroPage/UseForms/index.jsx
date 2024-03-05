import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
function useFormPage() {
  const initialValues = {
    firstName: "",
    country: "",
    email: "",
    phoneNumber: "",
    departureCity: "",
    arrivalCity: "",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    country: Yup.string(),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    departureCity: Yup.string(),
    arrivalCity: Yup.string(),
    comment: Yup.string(),
  });

  const areRequiredFieldsFilled = (values) => {
    return (
      values.firstName.trim() !== "" &&
      values.email.trim() !== "" &&
      values.phoneNumber.trim() !== ""
    );
  };

  const onSubmit = ( values) => {
    console.log(values, "valuesvalues");
    alert("Thank you. I will get back to you as soon as possible.");
    // e.preventDefault();
    const message = `New inquiry from ${values.firstName}. User email: ${values.email}. User PhoneNumber:${values.phoneNumber}, User Country:${values.country}. User departureCity:${values.departureCity}. User arrivalCity:${values.arrivalCity}. User comment:${values.comment} `;

    emailjs
      .send(
        "service_vi7q9io",
        "template_6bhsgru",
        {
          from_name: values.firstName,
          to_email: values.email,
          message: message,
        },
        "cYu6EiV1UyKWKu4q-"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          // Clear the email state after successful submission
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      ); // Submit the form if no errors
  };

  return (
    <Wrapper>
      <Grid className="gridWrapper">
        <Grid item md={6}>
          <Card>
            <CardHeader title="Query Form"></CardHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isValid, values }) => (
                <Form>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name*"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Country"
                          variant="outlined"
                          fullWidth
                          name="country"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email*"
                          variant="outlined"
                          fullWidth
                          name="email"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Phone Number*"
                          variant="outlined"
                          fullWidth
                          name="phoneNumber"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Departure City"
                          variant="outlined"
                          fullWidth
                          name="departureCity"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Arrival City"
                          variant="outlined"
                          fullWidth
                          name="arrivalCity"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="Comment"
                          variant="outlined"
                          fullWidth
                          name="comment"
                          component={TextField}
                          multiline
                          rows={3}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className="btnWrapper">
                    <Button
                      disabled={!areRequiredFieldsFilled(values) || !isValid}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Make Query
                    </Button>
                  </CardActions>
                </Form>
              )}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default useFormPage;

const Wrapper = styled.div`
  height: auto;
  background-color: #f2f2f2;
  text-align: center;
  padding: 40px 20px;
  .gridWrapper {
    text-align: -webkit-center;
  }
  .btnWrapper {
    display: block;
  }
`;
