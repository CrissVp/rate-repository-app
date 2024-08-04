import useRepositories from '../../hooks/useRepositories';
import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import RepositoryListContainer, { SORTED_BY } from './RepositoryListContainer';
import SearchBar from './SearchBar';
import Loader from '../UI/Loader';
import Text from '../UI/Text';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 10,
		flexDirection: 'column'
	}
});

const RepositoryList = () => {
	const [sort, setSort] = useState(SORTED_BY.LATEST);
	const [searchInput, setSearchInput] = useState('');
	const [search] = useDebounce(searchInput, 500);

	const { repositories, error, loading, refetch, fetchMore } = useRepositories({
		first: 8
	});

	useEffect(() => {
		refetch({ searchKeyword: search });
	}, [search]);

	const handleSort = async (value) => {
		const { order, direction } = value;
		refetch({ orderBy: order, orderDirection: direction });
		setSort(value);
	};

	const onEndReached = () => fetchMore();

	const MemoizedRepositories = useMemo(
		() => (
			<RepositoryListContainer
				sort={sort}
				handleSort={handleSort}
				onEndReached={onEndReached}
				repositories={repositories}
			/>
		),
		[repositories]
	);

	if (loading) return <Loader />;
	if (error) return <Text>There was an error fetching the data.</Text>;

	return (
		<View style={styles.container}>
			<SearchBar value={searchInput} setValue={setSearchInput} />
			{MemoizedRepositories}
		</View>
	);
};

export default RepositoryList;
