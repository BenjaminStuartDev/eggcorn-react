import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().min(3, "Too Short").required("Password is required"),
});

export default function LoginModal({ open, onClose }) {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 3 }}>
          Please enter your login details below.
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log(values);
          }}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-7">
                <Field type="email" name="email">
                  {({ field, form, meta }) => (
                    <TextField
                      {...field}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      error={Boolean(meta.touched && meta.error)}
                      helperText={meta.touched && meta.error && meta.error}
                    />
                  )}
                </Field>
              <Field type="password" name="password">
                {({ field, form, meta }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    error={Boolean(meta.touched && meta.error)}
                    helperText={meta.touched && meta.error && meta.error}
                  />
                )}
              </Field>
              <button className="w-1/3 px-4 py-2 self-center bg-slate-50 hover:bg-slate-100 border border-gray-300 shadow-sm font-medium text-sm rounded-md text-gray-700" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
