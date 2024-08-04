import { StyleSheet } from 'react-native';
import theme from '../../theme';

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
	},
	button: {
		backgroundColor: theme.colors.primary,
		textAlign: 'center',
		borderRadius: 5,
		color: '#fff',
		padding: 10
	}
});

export default styles;
