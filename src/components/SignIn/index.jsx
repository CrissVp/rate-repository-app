import { useNavigate } from 'react-router-native';
import useSingIn from '../../hooks/useSignIn';

import SignInForm from './SignInForm';

const SignIn = () => {
	const [singIn] = useSingIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await singIn({ username, password });
			navigate('/');
		} catch (error) {
			console.log({ error });
		}
	};

	return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
