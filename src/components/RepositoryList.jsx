import { FlatList, StyleSheet, View } from 'react-native';
import useRepositories from '../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';
import Loader from './Loader';
import Text from './Text';

const styles = StyleSheet.create({
	separator: {
		height: 10
	}
});

const ItemSeparator = () => {
	return <View style={styles.separator}></View>;
};

const RepositoryList = () => {
	const { repositories, error, loading } = useRepositories();

	if (loading) return <Loader />;
	if (error) return <Text>There was an error fetching the data.</Text>;

	return (
		<FlatList
			data={repositories}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <RepositoryItem item={item} />}
		/>
	);
};

export default RepositoryList;
