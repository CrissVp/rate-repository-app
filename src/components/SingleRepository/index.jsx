import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';

import useRepository from '../../hooks/useRepository';

import ItemSeparator from '../UI/ItemSeparator';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from '../UI/ReviewItem';
import Loader from '../UI/Loader';
import Text from '../UI/Text';

const SingleRepository = () => {
	const { id } = useParams();
	const { repository, loading, error, fetchMore } = useRepository({
		repositoryId: id,
		first: 8
	});

	const onEndReached = () => fetchMore();

	if (loading) return <Loader />;
	if (error) return <Text>There was an error fetching the data.</Text>;

	return (
		<FlatList
			data={repository.reviews}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.5}
			keyExtractor={({ id }) => id}
			ItemSeparatorComponent={ItemSeparator}
			ListHeaderComponentStyle={{ marginBottom: 10 }}
			renderItem={({ item }) => <ReviewItem review={item} />}
			ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
		/>
	);
};

export default SingleRepository;
