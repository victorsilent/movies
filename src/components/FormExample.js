import React, { Component } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { TextField } from "redux-form-material-ui";
import Grid from "material-ui/Grid/Grid";
import Button from "material-ui/Button/Button";

class FormExample extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Field
              fullWidth={true}
              label="First Name"
              name="firstName"
              component={TextField}
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              fullWidth={true}
              label="Second Name"
              name="secondName"
              component={TextField}
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              fullWidth={true}
              label="Email"
              name="email"
              component={TextField}
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              fullWidth={true}
              xs={12}
              md={6}
              label="Birthday"
              name="birthday"
              component={TextField}
              type="text"
            />
          </Grid>
          <Button type="submit" raised={true} color="primary" name="Submit">
            Submit
          </Button>
        </Grid>
      </Form>
    );
  }
}

FormExample = reduxForm({
  form: "contact"
})(FormExample);

export default FormExample;
