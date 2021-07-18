import React from 'react';
import * as Yup from 'yup';
import { Auth } from 'aws-amplify';
import {
  Box,
  Button,
  Grid, TextField, Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants';

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null]).required(),
});

export const RegistrationScreen: React.FC = () => {
  const history = useHistory();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: RegistrationSchema,
    onSubmit: async (values) => {
      try {
        await Auth.signUp({
          username: values.email,
          password: values.password,
          attributes: {
            email: values.email,
          },
        });
        history.push(Routes.AccountConfirmation);
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <Grid
      item
      xs={6}
    >
      <Typography variant="h2" component="h1">Registration</Typography>
      <form onSubmit={form.handleSubmit}>
        <Box display="flex" flexDirection="column">
          <TextField
            name="email"
            label="E-mail"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            value={form.values.password}
            onChange={form.handleChange}
            error={form.touched.password && Boolean(form.errors.password)}
            helperText={form.touched.password && form.errors.password}
          />
          <TextField
            name="passwordConfirm"
            type="password"
            label="Password confirm"
            value={form.values.passwordConfirm}
            onChange={form.handleChange}
            error={form.touched.passwordConfirm && Boolean(form.errors.passwordConfirm)}
            helperText={form.touched.passwordConfirm && form.errors.passwordConfirm}
          />
          <Button color="primary" type="submit">Register</Button>
        </Box>
      </form>
    </Grid>
  );
};

export default RegistrationScreen;
