import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		padding: 15,
		flexDirection: 'column',
		backgroundColor: '#fff'
	},
	review: {
		gap: 15,
		flexDirection: 'row'
	},
	reviewRating: {
		flex: 0,
		width: 50,
		height: 50,
		borderWidth: 2,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderColor: theme.colors.primary
	},
	reviewInfo: {
		flex: 1,
		justifyContent: 'center',
		description: {
			marginTop: 6
		}
	},
	buttonsContainer: {
		gap: 10,
		marginTop: 15,
		flexDirection: 'row'
	},
	text: {
		color: '#fff'
	},
	button: {
		flexGrow: 1,
		padding: 6,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	viewButton: {
		backgroundColor: theme.colors.primary
	},
	deleteButton: {
		backgroundColor: theme.colors.error
	}
});

const ReviewItem = ({ review, handleDelete }) => {
	return (
		<View style={styles.container}>
			<View style={styles.review}>
				<View style={styles.reviewRating}>
					<Text fontWeight={'bold'} fontSize={'subheading'} color={'primary'}>
						{review.rating}
					</Text>
				</View>
				<View style={styles.reviewInfo}>
					{review.user ? (
						<Text fontWeight={'bold'}>{review.user.username}</Text>
					) : (
						<Text fontWeight={'bold'}>{review.repository.name}</Text>
					)}
					<Text color={'textSecondary'} fontSize={'small'}>
						{new Date(review.createdAt).toLocaleString([], { dateStyle: 'medium' })}
					</Text>
					{review.text && <Text style={styles.reviewInfo.description}>{review.text}</Text>}
				</View>
			</View>
			{!review.user && (
				<View style={styles.buttonsContainer}>
					<Link
						to={`/repository/${review.repositoryId}`}
						style={[styles.viewButton, styles.button]}
					>
						<Text style={styles.text} fontWeight={'bold'}>
							View Repository
						</Text>
					</Link>
					<TouchableOpacity
						onPress={() => handleDelete(review.id)}
						style={[styles.deleteButton, styles.button]}
					>
						<Text style={styles.text} fontWeight={'bold'}>
							Delete Review
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default ReviewItem;
