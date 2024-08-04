import { Image, TouchableOpacity, View } from 'react-native';
import { formatCount } from '../../utils/helperFunctions';
import * as Linking from 'expo-linking';

import Text from '../UI/Text';
import styles from './styles';

const RepositoryInfo = ({ repository }) => {
	const handlePress = () => {
		Linking.openURL(repository.url);
	};

	return (
		<View testID='repositoryItem' style={styles.container}>
			<View style={styles.itemInfo}>
				<Image
					source={{ uri: repository.ownerAvatarUrl }}
					style={styles.image}
					height={60}
					width={60}
				/>
				<View style={styles.infoDetails}>
					<Text fontWeight={'bold'} fontSize={'subheading'}>
						{repository.fullName}
					</Text>
					<Text color={'textSecondary'}>{repository.description}</Text>
					<Text style={styles.languageText}>{repository.language}</Text>
				</View>
			</View>
			<View style={styles.itemStatistics}>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(repository.stargazersCount)}</Text>
					<Text color={'textSecondary'}>Stars</Text>
				</View>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(repository.forksCount)}</Text>
					<Text color={'textSecondary'}>Forks</Text>
				</View>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(repository.reviewCount)}</Text>
					<Text color={'textSecondary'}>Reviews</Text>
				</View>
				<View style={styles.statistic}>
					<Text fontWeight={'bold'}>{formatCount(repository.ratingAverage)}</Text>
					<Text color={'textSecondary'}>Rating</Text>
				</View>
			</View>
			{repository.url && (
				<TouchableOpacity onPress={handlePress}>
					<Text style={styles.button} fontWeight={'bold'}>
						Open in GitHub
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default RepositoryInfo;
