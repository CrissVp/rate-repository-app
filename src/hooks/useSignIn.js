import { useApolloClient, useMutation } from '@apollo/client';
import { LOG_IN_MUTATION } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSingIn = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();
	const [mutate, result] = useMutation(LOG_IN_MUTATION);

	const singIn = async ({ username, password }) => {
		const { data } = await mutate({ variables: { credentials: { username, password } } });
		await authStorage.setAccessToken(data.authenticate.accessToken);
		apolloClient.resetStore();
		return data;
	};

	return [singIn, result];
};

export default useSingIn;
