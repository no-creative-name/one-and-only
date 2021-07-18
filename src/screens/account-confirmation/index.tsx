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

const AccountConfirmationSchema = Yup.object().shape({
  email: Yup.string().required(),
  code: Yup.string().length(6).required(),
});

export const AccountConfirmationScreen: React.FC = () => {
  const history = useHistory();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: '',
      code: '',
    },
    validationSchema: AccountConfirmationSchema,
    onSubmit: async ({
      email,
      code,
    }) => {
      try {
        await Auth.confirmSignUp(email, code);
        history.push(Routes.Login);
      } catch (e) {
        console.error(e);
      }
    },
  });

  return (
    <Grid
      item
      xs={9}
      md={6}
    >
      <Typography variant="h2" component="h1">Confirm your account</Typography>
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
            name="code"
            label="Confirmation code"
            value={form.values.code}
            onChange={form.handleChange}
            error={form.touched.code && Boolean(form.errors.code)}
            helperText={form.touched.code && form.errors.code}
          />
          <Button color="primary" type="submit">Confirm account</Button>
        </Box>
      </form>
    </Grid>
  );
};

export default AccountConfirmationScreen;
