import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = (variables) => {
	const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
		fetchPolicy: 'cache-and-network',
		skip: !variables.repositoryId,
		variables
	});

	const repository = {
		...data?.repository,
		reviews: data?.repository.reviews.edges.map((review) => review.node)
	};

	const handleFetchMore = () => {
		const canFetchMore = !loading && data.repository.reviews.pageInfo.hasNextPage;
		if (!canFetchMore) return;

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				...variables
			}
		});
	};

	return {
		fetchMore: handleFetchMore,
		repository,
		loading,
		error
	};
};

export default useRepository;
