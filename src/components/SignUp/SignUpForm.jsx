import { useFormik } from 'formik';
import * as yup from 'yup';

import Form, { FormInput, FormButton } from '../UI/Form';

const validationSchema = yup.object().shape({
	username: yup.string().min(5).max(30).required('Username is a required field.'),
	password: yup.string().min(5).max(50).required('Password is a required field.'),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password not matching')
		.required('Password confirm is required')
});

const SignUpForm = ({ onSubmit }) => {
	const signUpForm = useFormik({
		initialValues: {
			username: '',
			password: '',
			passwordConfirm: ''
		},
		validationSchema,
		onSubmit
	});

	const isUsernameError = signUpForm.touched.username && signUpForm.errors.username;
	const isPasswordError = signUpForm.touched.password && signUpForm.errors.password;
	const isConfirmError = signUpForm.touched.passwordConfirm && signUpForm.errors.passwordConfirm;

	return (
		<Form>
			<FormInput
				value={signUpForm.values.username}
				placeholder={'Username'}
				handleChange={signUpForm.handleChange('username')}
				error={isUsernameError && signUpForm.errors.username}
			/>
			<FormInput
				secureTextEntry
				placeholder={'Password'}
				value={signUpForm.values.password}
				handleChange={signUpForm.handleChange('password')}
				error={isPasswordError && signUpForm.errors.password}
			/>
			<FormInput
				secureTextEntry
				placeholder={'Password Confirm'}
				value={signUpForm.values.passwordConfirm}
				handleChange={signUpForm.handleChange('passwordConfirm')}
				error={isConfirmError && signUpForm.errors.passwordConfirm}
			/>
			<FormButton text={'Sign Up'} handleSubmit={signUpForm.handleSubmit} />
		</Form>
	);
};

export default SignUpForm;
