import { GET_AUTHENTICATED_USER } from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useAuthenticatedUser = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const { data, error, loading } = useQuery(GET_AUTHENTICATED_USER, {
		fetchPolicy: 'cache-and-network'
	});

	const singOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return {
		error,
		loading,
		singOut,
		user: data?.me
	};
};

export default useAuthenticatedUser;
