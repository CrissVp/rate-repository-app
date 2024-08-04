import { GET_AUTHENTICATED_USER } from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

const useAuthenticatedUser = (includeReviews = false) => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const { data, error, loading, refetch } = useQuery(GET_AUTHENTICATED_USER, {
		fetchPolicy: 'cache-and-network',
		variables: { includeReviews }
	});

	const userReviews =
		includeReviews && !loading
			? data.me.reviews.edges.map((r) => ({ ...r.node, user: null }))
			: undefined;

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	return {
		error,
		loading,
		signOut,
		refetch,
		user: data?.me,
		reviews: userReviews
	};
};

export default useAuthenticatedUser;
