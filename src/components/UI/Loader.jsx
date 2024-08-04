import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	}
});

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={50} color={theme.colors.primary} />
		</View>
	);
};

export default Loader;
