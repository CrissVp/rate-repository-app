import useAuthenticatedUser from '../../hooks/useAuthenticatedUser';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { DELETE_REVIEW } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';

import ItemSeparator from '../UI/ItemSeparator';
import ReviewItem from '../UI/ReviewItem';
import Loader from '../UI/Loader';
import Text from '../UI/Text';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	component: {
		backgroundColor: '#fff'
	},
	buttons: {
		gap: 10,
		paddingHorizontal: 15,
		flexDirection: 'row'
	}
});

const Reviews = () => {
	const { reviews, loading, error, refetch } = useAuthenticatedUser(true);
	const [mutate] = useMutation(DELETE_REVIEW);

	const deleteReview = (id) => {
		Alert.alert('Delete Review', 'Are you sure you want to delete this review?', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{
				text: 'Delete',
				onPress: async () => {
					await mutate({ variables: { deleteReviewId: id } });
					refetch();
				}
			}
		]);
	};

	if (loading) return <Loader />;
	if (error) return <Text>There was an error fetching the data.</Text>;

	return (
		<View style={styles.container}>
			<FlatList
				data={reviews}
				keyExtractor={({ id }) => id}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item }) => <ReviewItem review={item} handleDelete={deleteReview} />}
			/>
		</View>
	);
};

export default Reviews;
