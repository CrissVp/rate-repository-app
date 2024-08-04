import { Picker } from '@react-native-picker/picker';
import { Link } from 'react-router-native';
import { FlatList } from 'react-native';
import { memo } from 'react';

import RepositoryInfo from '../SingleRepository/RepositoryInfo';
import ItemSeparator from '../UI/ItemSeparator';

export const SORTED_BY = {
	LATEST: {
		order: 'CREATED_AT'
	},
	HIGHEST_RATING: {
		order: 'RATING_AVERAGE',
		direction: 'DESC'
	},
	LOWER_RATING: {
		order: 'RATING_AVERAGE',
		direction: 'ASC'
	}
};

const SortingComponent = ({ sort, handleSort }) => {
	return (
		<Picker selectedValue={sort} onValueChange={handleSort}>
			<Picker.Item label='Latest repositories' value={SORTED_BY.LATEST} />
			<Picker.Item label='Highest rated repositories' value={SORTED_BY.HIGHEST_RATING} />
			<Picker.Item label='Lowest rated repositories' value={SORTED_BY.LOWER_RATING} />
		</Picker>
	);
};

const RepositoryList = ({ repositories, onEndReached, sort, handleSort }) => {
	const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

	return (
		<FlatList
			data={repositoryNodes}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => (
				<Link to={`/repository/${item.id}`}>
					<RepositoryInfo repository={item} />
				</Link>
			)}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.5}
			ListHeaderComponentStyle={{ backgroundColor: '#fff', marginBottom: 5 }}
			ListHeaderComponent={() => <SortingComponent sort={sort} handleSort={handleSort} />}
		/>
	);
};

const RepositoryListContainer = memo(RepositoryList);
export default RepositoryListContainer;
