import { useFormik } from 'formik';
import * as yup from 'yup';

import Form, { FormButton, FormInput } from '../UI/Form';

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.min(3, 'Username length must be 3 characters or more.')
		.required('Username is required'),
	password: yup
		.string()
		.min(5, 'Password length must be 5 characters or more.')
		.required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
	const signInForm = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema,
		onSubmit
	});

	const isUsernameError = signInForm.touched.username && signInForm.errors.username;
	const isPasswordError = signInForm.touched.password && signInForm.errors.password;

	return (
		<Form>
			<FormInput
				placeholder='Username'
				value={signInForm.values.username}
				handleChange={signInForm.handleChange('username')}
				error={isUsernameError && signInForm.errors.username}
			/>
			<FormInput
				secureTextEntry
				placeholder='Password'
				value={signInForm.values.password}
				handleChange={signInForm.handleChange('password')}
				error={isPasswordError && signInForm.errors.password}
			/>
			<FormButton text={'Sign In'} handleSubmit={signInForm.handleSubmit} />
		</Form>
	);
};

export default SignInForm;
