import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		gap: 20,
		padding: 15,
		backgroundColor: '#fff'
	},
	itemInfo: {
		gap: 20,
		flexDirection: 'row'
	},
	image: {
		borderRadius: 5,
		flexGrow: 0
	},
	infoDetails: {
		flex: 1,
		gap: 5
	},
	languageText: {
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 5,
		color: '#fff'
	},
	itemStatistics: {
		flexDirection: 'row'
	},
	statistic: {
		flex: 1,
		alignItems: 'center'
	}
});

const formatCount = (count) => {
	return Math.abs(count) >= 1000
		? Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + 'k'
		: Math.sign(count) * Math.abs(count);
};

const RepositoryItem = ({ item }) => {
	return (
		<View style={styles.container}>
			<View style={styles.itemInfo}>
				<Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} height={60} width={60} />
				<View style={styles.infoDetails}>
					<Text fontWeight={'bold'} fontSize={'subheading'}>
						{item.fullName}
					</Text>
					<Text color={'textSecondary'}>{item.description}</Text>
					<Text style={styles.languageText}>{item.language}</Text>
				</View>
			</View>
			<View style={styles.itemStatistics}>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(item.stargazersCount)}</Text>
					<Text color={'textSecondary'}>Stars</Text>
				</View>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(item.forksCount)}</Text>
					<Text color={'textSecondary'}>Forks</Text>
				</View>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(item.reviewCount)}</Text>
					<Text color={'textSecondary'}>Reviews</Text>
				</View>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(item.ratingAverage)}</Text>
					<Text color={'textSecondary'}>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
