import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import useSingIn from '../hooks/useSignIn';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 15,
		padding: 15,
		backgroundColor: '#fff'
	},
	textInput: {
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#acacac'
	},
	errorText: {
		color: theme.colors.error,
		fontSize: 12
	},
	button: {
		backgroundColor: theme.colors.primary,
		textAlign: 'center',
		borderRadius: 5,
		color: '#fff',
		padding: 10
	}
});

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

const SignIn = () => {
	const [singIn] = useSingIn();
	const navigate = useNavigate();

	const signInForm = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema,
		onSubmit: async (values) => {
			const { username, password } = values;

			try {
				await singIn({ username, password });
				navigate('/');
			} catch (error) {
				console.log({ error });
			}
		}
	});

	const isUsernameError = signInForm.touched.username && signInForm.errors.username;
	const isPasswordError = signInForm.touched.password && signInForm.errors.password;

	return (
		<View style={styles.container}>
			<View>
				<TextInput
					placeholder='Username'
					value={signInForm.values.username}
					onChangeText={signInForm.handleChange('username')}
					style={[styles.textInput, isUsernameError && { borderColor: theme.colors.error }]}
				/>
				{isUsernameError && <Text style={styles.errorText}>{signInForm.errors.username}</Text>}
			</View>
			<View>
				<TextInput
					secureTextEntry
					placeholder='Password'
					value={signInForm.values.password}
					onChangeText={signInForm.handleChange('password')}
					style={[styles.textInput, isPasswordError && { borderColor: theme.colors.error }]}
				/>
				{isPasswordError && <Text style={styles.errorText}>{signInForm.errors.password}</Text>}
			</View>
			<Pressable onPress={signInForm.handleSubmit}>
				<Text fontSize={'subheading'} fontWeight={'bold'} style={styles.button}>
					Sing In
				</Text>
			</Pressable>
		</View>
	);
};

export default SignIn;
