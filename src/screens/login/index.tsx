import React from 'react';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Grid, TextField, Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants';
import { useLogin } from '../../hooks/use-login';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const LoginScreen: React.FC = () => {
  const login = useLogin();
  const history = useHistory();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async ({
      email,
      password,
    }) => {
      try {
        await login(email, password);
        history.push(Routes.Welcome);
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
      <Typography variant="h2" component="h1">Login</Typography>
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
          <Button color="primary" type="submit">Login</Button>
        </Box>
      </form>
    </Grid>
  );
};

export default LoginScreen;
