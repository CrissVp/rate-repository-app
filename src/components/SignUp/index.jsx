import { CREATE_USER } from '../../graphql/mutations';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';

import useSingIn from '../../hooks/useSignIn';
import SignUpForm from './SignUpForm';

const SignUp = () => {
	const [signIn] = useSingIn();
	const navigate = useNavigate();
	const [mutate] = useMutation(CREATE_USER);

	const onSubmit = async (values) => {
		try {
			const { username, password } = values;
			const { data } = await mutate({
				variables: {
					user: {
						username,
						password
					}
				}
			});

			await signIn({ username: data.createUser.username, password });
			navigate('/');
		} catch (error) {
			console.log({ error });
		}
	};

	return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
